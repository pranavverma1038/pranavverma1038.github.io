import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Chitkara University',
      period: '2021–2025',
      details: 'CGPA: 9.41'
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'St. Edward\'s School, Shimla',
      period: '2020',
      details: '90.8%'
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'St. Edward\'s School, Shimla',
      period: '2018',
      details: '86.8%'
    }
  ]

  const certifications = [
    'Code-Studio - Advance Data Structures course completion',
    'Code-Studio - Advance Web Development course completion',
    'Cybersecurity By Cisco Networking Academy',
    'AWS Academy - Cloud Foundations',
    'Meta - Front-End Development Certificate'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xl font-mono mr-4">05.</span>
          Education & Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
            }}
            className="bg-secondary/50 rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all"
          >
            <motion.h3 
              className="text-xl font-bold text-accent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Education
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-4 border-accent pl-4"
                  variants={itemVariants}
                  whileHover={{ x: 5, borderColor: '#64ffda' }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h4 
                    className="text-lg font-bold text-text"
                    whileHover={{ color: '#64ffda' }}
                    transition={{ duration: 0.2 }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    className="text-accent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <p className="text-textLight text-sm">{edu.period} • {edu.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
            }}
            className="bg-secondary/50 rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all"
          >
            <motion.h3 
              className="text-xl font-bold text-accent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Certifications
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="text-textLight flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5, color: '#64ffda' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-accent mr-3 mt-1">▹</span>
                  <span>{cert}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

