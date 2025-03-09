import React from "react";

function Button({ customcss, data }) {
  return (
    <button
      className={`${customcss} px-12 py-1.5 bg-linear-65 from-[#444bbf] to-pink-500 font-semibold text-white hover:from-pink-500 hover:to-[#444bbf]`}
    >
      {data}
    </button>
  );
}

export default Button;
