"use client";
import React, { useEffect, useState } from "react";
import TitleDescription from "./TitleDescription";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TFaq, Tquestion } from "@/lib/types";
import { faqData } from "@/lib/contants";
import { AnimatePresence, easeIn, easeInOut, motion } from "motion/react";

const FAQ = () => {
  const [activeQuestions, setActiveQuestions] = useState<Tquestion[]>(faqData);

  const toggleQuestion = (id: number) => {
    setActiveQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, isQuestionOpen: !q.isQuestionOpen }
          : { ...q, isQuestionOpen: false }
      )
    );
  };

  return (
    <section className="container mt-32">
      <TitleDescription
        subtitle="FAQ "
        title="Frequently Asked Questions"
        des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation "
      ></TitleDescription>

      {/* main content */}

      <div className=" flex flex-col items-center justify-between gap-12 md:flex-row min-h-[600px]">
        <Image
          src="/assets/contact us.png"
          alt="Experience"
          width={500}
          height={300}
          className="w-full h-auto  flex-1/2"
        ></Image>

        {/* faq section */}

        <div className="flex-1/2 ">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              {...faq}
              toggleQuestion={toggleQuestion}
              isQuestionOpen={activeQuestions.some(
                (x) => x.id == faq.id && x.isQuestionOpen
              )}
            ></FaqItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const FaqItem = ({
  question,
  answer,
  isQuestionOpen,
  toggleQuestion,
  id,
}: TFaq) => {
  return (
    <article className="mb-8 ">
      <div
        onClick={() => toggleQuestion(id)}
        className="flex justify-between items-center py-5 px-4 bg-light-gray rounded-2xl"
      >
        <h2 className="text-md lg:text-lg font-semibold">{question}</h2>

        {isQuestionOpen ? (
          <ChevronUp className="text-primary"></ChevronUp>
        ) : (
          <ChevronDown className="text-primary"></ChevronDown>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {isQuestionOpen && (
          <motion.p
            initial={{ height: 0 }}
            animate={{ height: "170px" }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-light-gray py-5 px-4 rounded-2xl mt-4  text-md"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </article>
  );
};
