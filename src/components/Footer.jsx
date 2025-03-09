import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <footer className="text-center mb-7">
      <Button
        data={"Let s get started"}
        customcss={"rounded-lg xs:text-xl text-lg via-blue-500 xs:py-2 py-1 xs:px-15 px-10"}
      />
      <h2 className="xs:text-3xl text-2xl mt-17 font-bold">
        Ready to Start Your Digital Art Journey?
      </h2>
      <h3 className="xs:text-lg text-base mt-4 mb-7 font-medium">
        Click below to secure your spot & start creating!
      </h3>
      <Button
        data={"Enroll Now"}
        customcss={"rounded-lg xs:text-xl text-lg xs:px-24 px-20 xs:py-3 py-1 via-blue-500"}
      />
    </footer>
  );
}

export default Footer;
