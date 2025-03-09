import React from "react";

function Feedbacks() {
  return (
    <section className="flex gap-5 ">
      <div className="border-1 w-1/2 text-center py-5 border-purple-600 rounded-xl shadow-[1px_1px_5px_rgba(0,0,139,0.3)]">
        <h1 className="font-medium text-xl mt-2">Aditi Verma</h1>
        <p className="my-2 text-sm">22</p>
        <p className="text-xs px-1 xs:mb-8 md:px-20">
          I always wanted to learn digital art, but tutorials were confusing.
          This course made everything so simple! Now, I m taking commissions
          online!
        </p>
      </div>
      <div className="border-1 w-1/2 text-center py-5 border-purple-600 rounded-xl shadow-[1px_1px_5px_rgba(0,0,139,0.3)]">
        <h1 className="font-medium text-xl mt-2">Rajesh Khanna</h1>
        <p className="my-2 text-sm">30</p>
        <p className="text-xs px-1 xs:mb-8 md:px-20">
          Switching from traditional art to digital felt overwhelming, but this
          course changed everything! The structured lessons helped me master
          Procreate in weeks!
        </p>
      </div>
    </section>
  );
}

export default Feedbacks;
