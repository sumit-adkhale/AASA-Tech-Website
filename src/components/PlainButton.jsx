import React from "react";

function PlainButton({ text }) {
  return (
    <h2 className="mt-4 md:text-center leading-5.5 font-medium xs:pl-20 pl-10 xs:text-lg text-base border-2 border-gray-200 rounded-full py-3">
      {text}
    </h2>
  );
}

export default PlainButton;
