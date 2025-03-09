import React from "react";
import ColoredText from "./ColoredText";

function RightforYou() {
  return (
    <section className="mt-16 leading-5 sm:leading-3">
      <ColoredText
        text={"Is This Right for You?"}
        fontSize={"text-2xl md:text-4xl"}
      />
      <h2 className="font-medium text-center md:text-2xl md:mt-2">
        Everybody is fond of Digital Art! You need it too.
      </h2>
      <img
        className="my-5 md:mx-auto md:w-[80vh]"
        src="profession.png"
        alt=""
      />
    </section>
  );
}

export default RightforYou;
