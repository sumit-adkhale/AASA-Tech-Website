import React from "react";
import Button from "./Button";
import ColoredText from "./ColoredText";

function HeroSection() {
  return (
    <section className="text-center">
      <ColoredText
        text={"Master the Art of Digital Illustration"}
        fontSize={"text-4xl"}
      />
      <p className="text-2xl mt-4 mb-14 font-semibold">
        A 4-Week Course Designed for Beginners & Enthusiasts!
      </p>
      <img className="mx-auto md:h-[80vh]" src="hero-img.png" alt="" />
      <p className="mt-10 text-lg text-black font-semibold">
        Learn to create stunning digital artwork with step-by-step guidance from
        industry experts. <br /> No prior experience required. Just your
        creativity! <br /> Enroll now for ₹7,999
      </p>
      <Button
        customcss={"rounded-3xl text-2xl mt-7 py-4"}
        data="Secure Your Spot for Just ₹79"
      />
      <p className="mt-2 text-lg text-black font-semibold">
        Use a coupon code within 15 minutes to unlock a special bonus pack!
      </p>
    </section>
  );
}

export default HeroSection;
