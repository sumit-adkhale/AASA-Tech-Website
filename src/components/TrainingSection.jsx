import React from "react";
import ShadowButton from "./ShadowButton";
import Button from "./Button";
import ColoredText from "./ColoredText";

function TrainingSection() {
  const training = [
    {
      symbol: "training-1.png",
      text: "Hands-on Lessons – Learn digital painting, shading & composition.",
    },
    {
      symbol: "training-2.png",
      text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator.",
    },
    {
      symbol: "training-3.png",
      text: "Exclusive Resource Pack – Brushes, templates & textures.",
    },
    {
      symbol: "training-4.png",
      text: "Live Mentorship – Weekly Q&A sessions with industry pros.",
    },
    {
      symbol: "training-5.png",
      text: "Project-Based Learning – Build a stunning portfolio.",
    },
    {
      symbol: "training-6.png",
      text: "Certificate of Completion – Boost your creative career.",
    },
    {
      symbol: "training-7.png",
      text: "Community Access – Network with fellow artists.",
    },
  ];
  return (
    <>
      <section className="relative text-center mt-20 overflow-hidden z-20 py-12">
        <div className="absolute top-[-20%] left-[-20%] z-0 bg-[url(/background.png)] bg-no-repeat bg-cover md:bg-center w-screen h-[90vh]"></div>
        <div className="text-2xl  relative text-center flex justify-center z-30 font-semibold bg-gradient-to-r from-black to-gray-600  text-transparent bg-clip-text">
          Without Proper Training, You Might:
        </div>
        <div id="makeRow" className="mt-6 flex font-medium md:flex-row justify-center gap-6 ">
          <div className="bg-white z-20 flex flex-col items-center justify-between p-3 rounded-lg shadow w-64">
            <img className="w-12" src="struggel.png" alt="" />
            <span>Struggle with complex software tools</span>
          </div>
          <div className="bg-white z-20 flex flex-col items-center justify-between p-6 rounded-lg shadow w-64">
            <img className="w-12" src="stuck.png" alt="" />
            <span>Feel stuck without structured learning</span>
          </div>
          <div className="bg-white z-20 flex flex-col items-center justify-between p-6 rounded-lg shadow w-64">
            <img className="w-12" src="missout.png" alt="" />
            <span>Miss out on monetizing your skills</span>
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <ColoredText
          text={"With This Course, You Get:"}
          fontSize={"text-3xl relative z-50"}
        />
        <ul className="mt-6 space-y-4 max-w-3xl mx-auto">
          {training.map((data, i) => {
            return <ShadowButton data={data} i={i} />;
          })}
        </ul>
      </section>
      <div className="flex justify-center">
        <Button
          customcss={"rounded-xl text-3xl py-3"}
          data={"Book Now at ₹49"}
        />
      </div>
    </>
  );
}

export default TrainingSection;
