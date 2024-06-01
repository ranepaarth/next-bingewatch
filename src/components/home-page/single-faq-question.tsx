"use client";

import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

type SingleFaqQuestionProps = {
  question: string;
  answers: string[];
};

const SingleFaqQuestion = ({ question, answers }: SingleFaqQuestionProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className=" flex flex-col gap-px w-full">
      <div
        className="flex w-full justify-between items-center bg-neutral-800 p-4 hover:bg-neutral-700/90 cursor-pointer transition-colors duration-200 ease-in-out"
        onClick={() => setIsAccordionOpen((prev) => !prev)}
      >
        <p className="text-start text-base font-semibold">{question}</p>
        <span>
          <PlusIcon
            className={`w-8 h-8 ${isAccordionOpen ? "rotate-45" : "rotate-0"}`}
          />
        </span>
      </div>
      <div
        className={`px-6 p-4 text-pretty text-start bg-neutral-800 flex flex-col gap-6 items-start overflow-hidden transition-all duration-300 ease-in-out ${
          isAccordionOpen ? "block" : "hidden translate-y-20"
        }`}
      >
        {answers.map((para, paraId) => (
          <p key={paraId}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default SingleFaqQuestion;
