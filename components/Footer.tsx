"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mst. Fariha Akter Sathi
          </h3>
          <p className="text-gray-400 mb-6">
            Student | University of Dhaka | Aspirant for Higher Studies
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Mst. Fariha Akter Sathi. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

