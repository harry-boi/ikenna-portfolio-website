import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleInOut,
} from "../utils/animation";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative py-20 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                Visionary Leader & Community Advocate
              </h2>
              <div className="w-20 h-[1px] bg-gray-700"></div>
            </div>

            <motion.div
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
              variants={fadeInUp}
            >
              <p>
                Ikenna Nwachukwu is the visionary Founder and CEO of Afro
                Socialite Incorporated, a multicultural platform dedicated to
                promoting community wellness, cultural inclusion, and social
                empowerment.
              </p>
              <p>
                Based in South Australia, Ikenna brings together a wealth of
                professional experience, international exposure, and an
                unwavering passion for creating positive social change. Guided
                by his deep commitment to humanity, philanthropy, and community
                development.
              </p>
              <p>
                His mission is to bridge cultures, reduce social isolation, and
                create platforms where people from all walks of life can
                connect, thrive, and be celebrated.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="text-center p-4 bg-[#111111] rounded-lg border border-gray-800/50">
                <div className="text-2xl font-semibold text-white mb-2">3</div>
                <div className="text-sm text-gray-400">Continents Lived</div>
              </div>
              <div className="text-center p-4 bg-[#111111] rounded-lg border border-gray-800/50">
                <div className="text-2xl font-semibold text-white mb-2">3</div>
                <div className="text-sm text-gray-400">Degrees Earned</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div className="relative" variants={scaleInOut}>
            {/* Main Card */}
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800/50">
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Mission
                    </h3>
                    <p className="text-gray-400">
                      Bridge cultures and reduce social isolation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Vision</h3>
                    <p className="text-gray-400">
                      Connected communities are stronger communities
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Impact</h3>
                    <p className="text-gray-400">
                      Promoting wellness and cultural inclusion
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-900/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
