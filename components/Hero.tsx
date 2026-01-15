"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full flex justify-center lg:w-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 md:ring-4 ring-purple-200 dark:ring-purple-900">
              <Image
                src="/sathi.jpeg"
                alt="Mst. Fariha Akter Sathi"
                width={400}
                height={500}
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full lg:w-auto"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent px-2 sm:px-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mst. Fariha Akter Sathi
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 md:mb-4 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Student | University of Dhaka
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Graduation Completed | Aspirant for Higher Studies
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#about"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Me
              </motion.a>
              <motion.a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-white transition-all text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Arrow Button - Positioned at bottom center */}
        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="block"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

