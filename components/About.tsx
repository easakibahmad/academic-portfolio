"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Target, Award } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Who I Am
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  I am Mst. Fariha Akter Sathi, a dedicated student at the
                  University of Dhaka. I have completed my graduation and am
                  currently awaiting my final results. My academic journey has
                  been marked by consistent excellence and a passion for
                  learning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  My Goals
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  As an aspirant for higher studies, I am committed to pursuing
                  advanced education and research opportunities. I aim to
                  contribute meaningfully to my field of study and make a
                  positive impact through academic excellence and innovation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-gray-200">
                Key Highlights
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                      University of Dhaka
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      Graduation Completed
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                      3rd Year CGPA: 3.65
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      Excellent Academic Performance
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                      Higher Studies Aspirant
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      Pursuing Advanced Education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

