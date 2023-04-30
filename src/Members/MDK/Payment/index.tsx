import {
  Col,
  Row,
  Typography,
  Button,
  Form,
  Input,
  Space,
  DatePicker,
  Image,
  Modal,
} from "antd";
import type { DatePickerProps } from "antd";
import king_pay from "@src/assets/king_pay.jpeg";
import tick from "@src/Members/MDK/icon/tick.svg";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const { Title } = Typography;

const layout = {
  labelCol: { span: 24, color: "#7C7E8A", fontFamily: "Nunito" },
  wrapperCol: { span: 24 },
};

// Datapicker
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const Payment = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-10 pb-4 pl-28">
      <Row>
        <Col span={12} style={{ marginTop: "2rem" }}>
          <Title level={3} className="!font-bold">
            Payment detail
          </Title>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
              marginTop: "2rem",
            }}
          >
            <Form.Item name="email" label="Email">
              <Input
                size="large"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid #DEDEE0",
                  borderRadius: "8px",
                }}
              />
            </Form.Item>
            <Form.Item name="card-number" label="Card Number">
              <Input
                placeholder="xxxx xxxx xxxx xxxx"
                size="large"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid #DEDEE0",
                  borderRadius: "8px",
                }}
              />
            </Form.Item>
            <Space>
              <Form.Item name="expiry-date" label="Expiry Date">
                <DatePicker
                  size="large"
                  placeholder="yy / mm"
                  onChange={onChange}
                  picker="month"
                  style={{
                    background: "#FFFFFF",
                    border: "2px solid #DEDEE0",
                    borderRadius: "8px",
                  }}
                />
              </Form.Item>
              <Form.Item name="cvv" label="CVV">
                <Input
                  placeholder="xxx"
                  size="large"
                  style={{
                    background: "#FFFFFF",
                    border: "2px solid #DEDEE0",
                    borderRadius: "8px",
                  }}
                />
              </Form.Item>
            </Space>
            <Form.Item>
              <Space className="flex items-center justify-between mt-6 ">
                <Title className="!text-[#626872]" level={5}>
                  Subtotal
                </Title>
                <Title level={5}>100$</Title>
              </Space>
              <Space className="flex items-center justify-between">
                <Title className="!text-[#626872]" level={5}>
                  Discount
                </Title>
                <Title level={5}>0$</Title>
              </Space>
              <div className="border border-[#1a1a1a] border-solid"></div>
              <Space className="flex items-center justify-between mt-2">
                <Title className="!text-[#626872]" level={5}>
                  Total Amount
                </Title>
                <Title level={5}>100$</Title>
              </Space>
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  background: "#ED712E",
                  borderRadius: "8px",
                  width: "100%",
                  height: "64px",
                  color: "#fff",
                  fontSize: "1rem",
                }}
                onClick={showModal}
              >
                Thanh toán
              </Button>
              <Modal
                title="Thanh toán qua Paypal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
              >
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AeotlvV0aLem5P2XeShxwMl1_j07WDy1hDr-v0bra1wKVzAOlZXDp0oYNL5FSBLpeX33E2koFEfIWG6V",
                  }}
                >
                  <PayPalButtons
                    createOrder={(_data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "100.00",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async (_data, actions) => {
                      if (actions.order) {
                        const details = await actions.order.capture();
                        const name = details.payer?.name?.given_name;
                        alert("Transaction completed by " + name);
                      }
                    }}
                  />
                </PayPalScriptProvider>
              </Modal>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Image width="100%" height={350} src={king_pay} />
          <div className="content w-[700px] pt-7 pl-8 pr-2 ">
            <Title level={3}>King room</Title>
            <Title level={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique dolorum rem reiciendis sit dicta eum, dignissimos,
              beatae illo commodi placeat adipisci
            </Title>
            <div className="border border-[#1a1a1a] border-solid my-4"></div>
            <Space className="flex items-center justify-between">
              <Title level={4}>Dịch vụ</Title>
              <Title level={5}>Wifi, Gym, food</Title>
            </Space>
            <Space className="flex items-center justify-between">
              <Title level={4}>Thời gian</Title>
              <Title level={5}>12/06/2023- 12/08/2023</Title>
            </Space>
            <div className="border border-[#1a1a1a] border-solid my-4"></div>
            <Space>
              <Image preview={false} src={tick}></Image>
              <Title level={5}>Secure Payment</Title>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
