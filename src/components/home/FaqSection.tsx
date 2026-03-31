"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, type FaqItem } from "@/data/FaqData";


// ${isOpen ? 'shadow-[0_10px_30px_rgba(28,117,188,0.08)] border-[#1C75BC]/20' : 'hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]'}
const AccordionItem = ({ faq, isOpen, onClick }: { faq: FaqItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-1 border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 `}>
      <button
        className="w-full text-left py-3.5 px-1 md:py-4 flex justify-between items-center bg-white focus:outline-none group gap-4"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className={`font-bold text-[14.5px] md:text-[15px] leading-snug transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-dark-bg group-hover:text-brand'}`}>
          {faq.question}
        </h3>
        
        {/* Modern animated plus/minus icon */}
        <div className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-brand/10 group-hover:text-brand'}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50/50"
          >
            <div className=" px-1 pb-1 pt-1 text-[13.5px] md:text-[14px] text-gray-500 leading-relaxed border-t border-gray-100/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header - Styled to match other sections as requested */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-2"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-bg mb-2">
            <span className="inline-block border-l-4 border-brand pl-4">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-2xl leading-relaxed mt-4">
            Find answers to common questions about our services, processes, and customized AI solutions.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="mt-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => handleToggle(index)} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
