import React from "react";
import Button from "./Button";

function Header() {
  return (
    <header className="text-center pb-10 md:pb-10">
      <div className="flex justify-between md:flex md:justify-between items-center">
        <img className="w-[25vw]  md:w-[200px]" src="logo.png" alt="" />
        <Button customcss="rounded-full text-lg " data="Get Started" />
      </div>
    </header>
  );
}

export default Header;
