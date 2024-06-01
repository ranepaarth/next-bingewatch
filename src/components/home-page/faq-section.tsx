import React from "react";
import GetStartedInput from "../shared/get-started-input";
import SingleFaqQuestion from "./single-faq-question";

const faqs = [
  {
    id: 1,
    question: "What is Bingewatch?",
    answer: [
      "Bingewatch is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    ],
  },
  {
    id: 2,
    question: "What can I Bingewatch?",
    answer: [
      "Bingewatch has an extensive library of feature films, documentaries, TV shows, anime, award-winning Bingewatch originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
];

const FaqSection = () => {
  return (
    <section className="w-full flex flex-col text-center justify-center bg-black py-16 px-10 gap-6 ">
      <h3 className="text-3xl font-bold py-4">Frequently Asked Questions</h3>
      <div className="w-full flex flex-col gap-4 mx-auto max-w-screen-md">
        {faqs.map((faq, index) => {
          return (
            <SingleFaqQuestion
              question={faq.question}
              answers={faq.answer}
              key={index}
            />
          );
        })}
      </div>
      <GetStartedInput />
    </section>
  );
};

export default FaqSection;
