"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = {
    university: "University of Dhaka",
    status: "Graduation Completed",
    waitingFor: "Awaiting Final Results",
    cgpa: "3.65",
    year: "3rd Year CGPA",
    aspiration: "Aspirant for Higher Studies",
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>

            {/* Education Cards */}
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 md:pl-20 hover:shadow-2xl transition-shadow"
              >
                <div className="absolute left-4 md:left-0 top-6 md:top-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="space-y-3 md:space-y-4 pl-16 md:pl-0">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {educationData.university}
                    </h3>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mb-3 md:mb-4">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-sm md:text-base">
                        {educationData.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {educationData.waitingFor}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 md:pl-20 hover:shadow-2xl transition-shadow"
              >
                <div className="absolute left-4 md:left-0 top-6 md:top-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="space-y-3 md:space-y-4 pl-16 md:pl-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Academic Performance
                  </h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg w-full sm:w-auto">
                      <p className="text-xs md:text-sm font-semibold">{educationData.year}</p>
                      <p className="text-2xl md:text-3xl font-bold">{educationData.cgpa}</p>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 flex-1">
                      Excellent academic standing demonstrating consistent
                      dedication and excellence throughout my studies.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 md:pl-20 hover:shadow-2xl transition-shadow"
              >
                <div className="absolute left-4 md:left-0 top-6 md:top-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="space-y-3 md:space-y-4 pl-16 md:pl-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Future Aspirations
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-semibold">
                    {educationData.aspiration}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    I am actively preparing for advanced studies and research
                    opportunities to further expand my knowledge and contribute
                    to my field of study.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

