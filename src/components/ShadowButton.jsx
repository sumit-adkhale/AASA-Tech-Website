import React from "react";

function ShadowButton({ data, i }) {
  return (
    <li
      key={i}
      className="bg-white justify-start items-center gap-5 flex p-2  font-medium xs:text-lg text-sm rounded-lg shadow-[2px_2px_7px_rgba(0,0,139,0.3)]"
    >
      <img className="w-7 h-7 ml-2" src={`${data.symbol}`} alt="" />
      <span>{data.text}</span>
    </li>
  );
}

export default ShadowButton;
