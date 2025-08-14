"use client";
import React, { useState } from "react";
import TitleDescription from "./TitleDescription";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TFaq, Tquestion } from "@/lib/types";
import { faqData } from "@/lib/contants";
import { AnimatePresence, motion } from "motion/react";
import { slideFromLeft } from "@/lib/variants";

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
    <section className="container ">
      <TitleDescription
        subtitle="FAQ "
        title="Frequently Asked Questions"
        des="We provide clear, straightforward answers to help you understand how our solutions work, ensuring transparency and confidence in every step of your project."
      ></TitleDescription>

      {/* main content */}

      <div className=" flex flex-col items-center justify-between gap-12 lg:flex-row min-h-[600px]">
        <motion.div
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          className=" flex-1/2"
          viewport={{ once: true, amount: 0.2 }} // triggers only when in view
        >
          <Image
            src="/assets/aboutY.svg"
            alt="Experience"
            width={500}
            height={300}
            className="w-full h-auto "
          ></Image>
        </motion.div>
        {/* faq section */}

        <div className="flex-1/2  max-w-[800px] ">
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
    <article className="mb-4">
      <motion.div
        onClick={() => toggleQuestion(id)}
        className="flex justify-between items-center py-4 px-6 bg-light-gray rounded-xl cursor-pointer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <h2 className="text-md lg:text-lg font-semibold text-dark-gray ">
          {question}
        </h2>
        <motion.div
          animate={{ rotate: isQuestionOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isQuestionOpen ? (
            <ChevronUp className="text-primary" />
          ) : (
            <ChevronDown className="text-primary" />
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isQuestionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="bg-light-gray/50 py-4 px-6 rounded-b-xl mt-1 text-md text-dark-gray">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
