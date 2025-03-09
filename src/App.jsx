import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrainingSection from "./components/TrainingSection";
import Video from "./components/Video";
import Feedbacks from "./components/Feedbacks";
import RightforYou from "./components/RightforYou";
import Features from "./components/Features";
import EnrollNow from "./components/EnrollNow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const DigitalArtCourse = () => {
  return (
    <div className="p-3 xs:p-10 font-sans">
      <Header />
      <HeroSection />
      <TrainingSection />
      <Video />
      <Feedbacks />
      <RightforYou />
      <Features />
      <EnrollNow />
      <FAQ />
      <Footer />
    </div>
  );
};

export default DigitalArtCourse;
