import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-accent text-lg mb-4 font-mono"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-text mb-4"
          variants={nameVariants}
        >
          Pranav Verma
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-textLight mb-6"
          variants={itemVariants}
        >
          <span className="block mb-4">I build things for the web</span>
          <span className="block">and beyond.</span>
        </motion.h2>

        <motion.p
          className="text-textLight text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          I'm a software developer who builds end-to-end digital experiences and
          crafts clean interfaces, scalable backends and mobile applications
          with a focus on performance and reliability.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.a
            href="#contact"
            className="inline-block border-2 border-accent text-accent px-8 py-3 rounded font-mono text-sm relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-accent/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
