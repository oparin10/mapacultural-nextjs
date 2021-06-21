import React from "react";

export interface ITruncateButton {}

const TruncateButton = ({}: ITruncateButton) => {
  return (
    <button className="text-gray-800 focus:outline-none  px-5 text-center bg-white border-secondary-main border-2 hover:bg-secondary-main hover:text-white font-bold text-lg rounded-md">
      ...
    </button>
  );
};

export default TruncateButton;
