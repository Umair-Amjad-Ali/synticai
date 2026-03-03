"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What type of services does SynticAI offer?",
    answer: "SynticAI specializes in comprehensive AI development, machine learning, deep learning, NLP, computer vision, predictive analytics, and custom software development tailored to your specific business needs."
  },
  {
    question: "Does SynticAI offer post-development support?",
    answer: "Yes, we provide extensive post-development support and maintenance to ensure your AI solutions run smoothly, securely, and scale effortlessly as your business grows."
  },
  {
    question: "Can AI technology help us make better decisions?",
    answer: "Absolutely. AI can analyze vast amounts of data in real-time, uncover hidden patterns, and provide actionable insights that drastically improve strategic decision-making and operational efficiency."
  },
  {
    question: "How do I choose the right AI Chatbot development company for my business?",
    answer: "Look for a company with a proven track record, domain expertise, transparent communication, and a strong portfolio of customized conversational AI solutions—qualities that define SynticAI's approach."
  },
  {
    question: "Why choose SynticAI as your AI development company?",
    answer: "We combine deep technical expertise with a customer-centric approach. Our passionate team of engineers doesn't just write code; we partner with you to solve complex business challenges through innovative AI."
  },
  {
    question: "How are SynticAI developers different?",
    answer: "Our developers are vetted industry experts who stay at the bleeding edge of AI research. They possess not only elite coding skills but also strong business acumen to align technology with your goals."
  },
  {
    question: "What type of custom AI solutions does SynticAI offer?",
    answer: "We offer a wide range of custom solutions including intelligent chatbots, recommendation engines, predictive modeling pipelines, automated image recognition systems, and generative AI tools."
  },
  {
    question: "Which software is best for mobile app development?",
    answer: "The 'best' software depends on your objectives. We frequently leverage React Native and Flutter for cross-platform efficiency, alongside deep native integrations using Swift and Kotlin when maximum performance is required."
  },
  {
    question: "Why are UI/UX services important?",
    answer: "A powerful AI backend is useless if users cannot effectively interact with it. Excellent UI/UX design ensures high adoption rates, reduces user friction, and creates deeply engaging digital experiences."
  },
  {
    question: "Would my business benefit from digital marketing services?",
    answer: "Yes. In today's competitive landscape, data-driven digital marketing helps amplify your reach, target precise customer segments, and maximize the ROI of your custom software investments."
  },
  {
    question: "Will SynticAI do custom web development work?",
    answer: "Yes, we provide full-stack custom web development. Our team builds highly scalable, secure, and modern web applications that seamlessly integrate with our advanced AI backends."
  },
  {
    question: "What are the benefits of DevOps implementation?",
    answer: "DevOps bridges the gap between development and operations, resulting in faster deployment cycles, continuous automated testing, dramatically reduced downtime, and highly scalable cloud infrastructure."
  },
  {
    question: "How much does it cost to build custom software?",
    answer: "Costs vary wildly based on scope, technical complexity, and required AI integrations. We provide transparent, detailed proposals after deeply understanding your specific requirements and goals during our initial consultation."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }: { faq: FaqItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-2.5 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_10px_30px_rgba(28,117,188,0.08)] border-[#1C75BC]/20' : 'hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]'}`}>
      <button
        className="w-full text-left px-5 py-3.5 md:py-4 flex justify-between items-center bg-white focus:outline-none group gap-4"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className={`font-bold text-[14.5px] md:text-[15px] leading-snug transition-colors duration-300 ${isOpen ? 'text-[#1C75BC]' : 'text-[#0A051E] group-hover:text-[#1C75BC]'}`}>
          {faq.question}
        </h3>
        
        {/* Modern animated plus/minus icon */}
        <div className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#1C75BC] text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-[#1C75BC]/10 group-hover:text-[#1C75BC]'}`}>
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
            <div className="px-5 pb-5 pt-1 text-[13.5px] md:text-[14px] text-gray-500 leading-relaxed border-t border-gray-100/50">
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
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        
        {/* Header - Styled to match other sections as requested */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A051E] mb-4">
            <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-2xl leading-relaxed mt-4">
            Find answers to common questions about our services, processes, and customized AI solutions.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="mt-10">
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
