import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  scaleInOut,
} from "../utils/animation";

const CoreValues = () => {
  const values = [
    {
      title: "Goal-Oriented Leadership",
      description:
        "Persistent in turning visions into reality through structured planning and strategic execution.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Human-Centred Approach",
      description:
        "Committed to uplifting others and creating opportunities for shared growth.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Philanthropy & Social Impact",
      description:
        "Dedicated to giving back to the community through initiatives that address real social needs.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    },
    {
      title: "Cultural Inclusion",
      description:
        "Fostering environments where diversity is embraced and celebrated.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Global Perspective",
      description:
        "Leveraging international experiences to design inclusive and impactful community programs.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
          />
        </svg>
      ),
    },
    {
      title: "Innovation & Adaptability",
      description:
        "Continuously exploring new ways to connect communities through creativity, technology, and partnerships.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="values" className="py-20 lg:py-32 bg-[#0A0A0A] text-gray-100">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Core Values & Driving Passion
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ikenna's leadership is grounded in values that reflect both his
            personal and professional journey
          </p>
          <div className="w-20 h-[1px] bg-gray-700 mx-auto mt-8"></div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group bg-[#111111] rounded-lg p-8 border border-gray-800/50 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/40 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 mb-6 group-hover:text-white group-hover:bg-gray-700 transition-all duration-300">
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>

              {/* Hover line */}
              <div className="h-[1px] bg-gray-800 w-full mt-6 group-hover:bg-gray-700 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <div className="bg-[#111111] rounded-lg p-8 border border-gray-800/50 max-w-2xl mx-auto backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-400 mb-6">
              These values drive every decision and action, creating positive
              change in communities worldwide.
            </p>
            <a
              href="https://afrosocialite.com/about-us"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Learn More About Our Impact</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValues;
