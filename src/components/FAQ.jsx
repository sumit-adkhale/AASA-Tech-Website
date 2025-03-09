import React, { useState } from "react";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!",
    },
    {
      question: "What tools do I need to take this course?",
      answer: `You ll need: A tablet (iPad, Wacom, or any drawing tablet Digital art software (Procreate, Photoshop, or Krita) A passion for creativity`,
    },
    {
      question: "How long is the course?",
      answer:
        "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
    },
    {
      question: "Is this a live or recorded course?",
      answer:
        "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes! After completing the course, you ll receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
    },
    {
      question: "Can I monetize my digital art after this course?",
      answer:
        "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        " No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
    },
    {
      question: "How do I apply the coupon code?",
      answer:
        "Once you sign up, you ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
    },
    {
      question: "What if I don t have a tablet?",
      answer:
        "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "The ₹79 booking fee is non-refundable, but we re confident you ll love the course!",
    },
    {
      question: "How do I enroll?",
      answer:
        "Click the Enroll Now button, make the payment, and get instant access to the course materials!",
    },
  ];

  return (
    <section className="py-12 w-full">
      <h2 className="xs:text-4xl text-3xl font-semibold text-center">FAQs</h2>
      <div className="mt-6 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white xs:p-4 p-2 rounded-lg shadow">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center font-semibold cursor-pointer"
            >
              <span className="xs:text-xl text-base text-left">Q: {faq.question}</span>
              <img
                className={`w-[30px] transition-transform duration-300 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
                src="down-arrow.png"
                alt="Toggle"
              />
            </button>
            {openFAQ === index && (
              <ul className="mt-2 list-disc pl-6">
                {index === 1 ? (
                  <li className="xs:text-md text-sm ">
                    <span>You ll need:</span>
                    <div className="flex gap-2">
                      <span>✔️</span>
                      <span> A tablet (iPad, Wacom, or any drawing tablet)</span>
                    </div>
                    <div className="flex gap-2">
                      <span>✔️</span>
                      <span>
                        Digital art software (Procreate, Photoshop, or Krita)
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span>✔️</span>
                      <span>A passion for creativity</span>
                    </div>
                  </li>
                ) : (
                  <li className="xs:text-md text-sm">{faq.answer}</li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
