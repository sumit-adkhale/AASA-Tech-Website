import React from "react";

function ColoredText({ text, fontSize }) {
  return (
    <h1
      className={`${fontSize} text-center leading-12 font-bold bg-gradient-to-r from-[#444bbf] to-pink-500 text-transparent bg-clip-text`}
    >
      {text}
    </h1>
  );
}

export default ColoredText;
