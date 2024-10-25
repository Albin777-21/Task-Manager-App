import React from "react";
import { Button } from "../ui/button";

const CommonButton = ({ onClick, buttonText, type, disabled }) => {
  return (
    <Button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      type={type || "Submit"}
      onClick={onClick || null}
      disabled={disabled || false}
    >
      {buttonText}
    </Button>
  );
};

export default CommonButton;
