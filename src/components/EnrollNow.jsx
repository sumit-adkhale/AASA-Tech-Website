import React from "react";
import PlainButton from "./PlainButton";
import Button from "./Button";

function EnrollNow() {
  return (
    <section className="mt-10 ">
      <h1 className="text-center font-semibold text-3xl bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text mb-8">
        Enroll Now for ₹7,999
      </h1>
      <PlainButton text={"Secure Your Spot for Just ₹79"} />
      <PlainButton
        text={"Bonus Offer: Apply a coupon code within 15 minutes to unlock:"}
      />
      <PlainButton text={"Exclusive Brush & Texture Pack"} />
      <PlainButton text={"Extra Live Q&A Session with Mentors"} />
      <h2 className="flex gap-1 pt-10 justify-center font-medium items-center text-lg">
        <span>WE Offer everything you need at ₹7,999 but wait…</span>{" "}
        <img className="w-[25px] mb-2" src="eyes.png" alt="" />
      </h2>
      <h2 className="mt-8 text-center font-medium bg-linear-65 from-orange-100 via-purple-200 to-sky-200 p-3 rounded-md">
        Use a Special Code & Unlock a Game-Changing Discount to avail same
        course in a discounted price!
      </h2>
      <div className="flex justify-center">
        <Button
          data={"Book Now for ₹79"}
          customcss={"text-2xl my-8 rounded-xl py-2 via-blue-500"}
        />
      </div>
    </section>
  );
}

export default EnrollNow;
