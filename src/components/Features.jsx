import React from "react";
import ShadowButton from "./ShadowButton";
import Button from "./Button";

function Features() {
  const features = [
    {
      symbol: "feature-1.png",
      text: "Sketching Basics – Shape, form, and proportion fundamentals",
    },
    {
      symbol: "feature-2.png",
      text: "Digital Painting – Master shading, blending & coloring techniques",
    },
    {
      symbol: "feature-3.png",
      text: "Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator",
    },
    {
      symbol: "feature-4.png",
      text: "Character & Concept Art – Create professionalgrade designs",
    },
    {
      symbol: "feature-5.png",
      text: "Portfolio Building – Craft stunning pieces to showcase your skills",
    },
    {
      symbol: "feature-6.png",
      text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs",
    },
    {
      symbol: "feature-7.png",
      text: "Certificate of Completion – Boost your creative career",
    },
    {
      symbol: "feature-8.png",
      text: "Project-Based Learning – Build a stunning portfolio",
    },
    {
      symbol: "feature-9.png",
      text: "Live Mentorship – Weekly Q&A sessions with industry pros",
    },
  ];
  return (
    <section className="mt-15">
      <h1 className=" text-center font-semibold text-3xl">
        Not Satisfied Yet?
      </h1>
      <h2 className=" text-center mt-1 mb-8 font-medium text-lg">
        Wge got you! Here are few extra features
      </h2>
      <ul className="mt-6 space-y-4 max-w-3xl md:mx-auto">
        {features.map((data, i) => {
          return <ShadowButton data={data} i={i} />;
        })}
      </ul>
      <div className="flex justify-center">
        <Button
          data={"Book Now for ₹79"}
          customcss={"text-2xl my-8 rounded-xl py-2 via-blue-500"}
        />
      </div>
    </section>
  );
}

export default Features;
