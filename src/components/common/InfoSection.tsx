"use client";

import { motion } from "framer-motion";
import ActionButton from "./ActionButton";
import Image from "next/image";

interface InfoSectionProps {
  title: string;
  paragraphs: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc: string;
  imageAlt?: string;
  reversed?: boolean;
}

export default function InfoSection({
  title,
  paragraphs,
  buttonText = "Get A Free Quote",
  onButtonClick,
  imageSrc,
  imageAlt = "Section image",
  reversed = false,
}: InfoSectionProps) {
  return (
    <section className="pt-20 pb-10 bg-white overflow-hidden">
      <div
        className={`max-w-7xl mx-auto px-6 md:px-20 flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 lg:gap-20`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#0A051E] mb-8 leading-tight">
            <span className="inline-block border-l-4 border-[#1C75BC] pl-4">
              {title}
            </span>
          </h2>

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-gray-600 text-sm lg:text-[15px] leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <ActionButton onClick={onButtonClick} className="rounded-md!">
              {buttonText}
            </ActionButton>
          </div>
        </motion.div>

        {/* Image with angled shape */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
}
