import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <footer className="text-center">
      <Button
        data={"Let s get started"}
        customcss={"rounded-lg text-xl via-blue-500 py-2 px-15"}
      />
      <h2 className="text-3xl mt-17 font-bold">
        Ready to Start Your Digital Art Journey?
      </h2>
      <h3 className="text-lg mt-4 mb-7 font-medium">
        Click below to secure your spot & start creating!
      </h3>
      <Button
        data={"Enroll Now"}
        customcss={"rounded-lg text-xl px-24 py-3 via-blue-500"}
      />
    </footer>
  );
}

export default Footer;
