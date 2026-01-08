import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      url: 'mailto:pranav2000verma@gmail.com',
      icon: '✉️'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pranav-verma-5543b42ba/',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pranavverma1038',
      icon: '🔗'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 30% 70%, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            className="text-accent text-lg font-mono mb-4"
            variants={itemVariants}
          >
            06. What's Next?
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-textLight text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            For professional inquiries or potential collaborations, please feel free to get in touch!
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            variants={containerVariants}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent text-accent px-6 py-3 rounded font-mono text-sm flex items-center gap-2 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(100, 255, 218, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="relative z-10"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {link.icon}
                </motion.span>
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="text-center mt-16 text-textLight text-sm relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <motion.p
          whileHover={{ scale: 1.05, color: '#64ffda' }}
          transition={{ duration: 0.2 }}
        >
          Designed & Built by Pranav Verma
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact

