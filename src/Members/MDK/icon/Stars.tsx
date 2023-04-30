import React from "react";
import StarIcon from "./StarIcon";

const Stars: React.FC = () => {
  return (
    <>
      <StarIcon />
      <StarIcon className="ml-[1rem]" />
      <StarIcon className="ml-[1rem]" />
      <StarIcon className="ml-[1rem]" />
      <StarIcon className="ml-[1rem]" />
    </>
  );
};

export default Stars;
