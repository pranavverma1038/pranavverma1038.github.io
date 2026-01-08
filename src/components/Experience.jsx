import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: 'CoreAI',
      position: 'Software Developer',
      period: 'Sep 2025 - Present',
      location: 'Remote',
      points: [
        'Collaborated with multiple clients to design and deliver white-labeled Android applications, including platforms such as Grata',
        'Led end-to-end UI customization to ensure alignment with client branding across layouts, themes, and user flows',
        'Built reusable white-label UI systems for rapid client customization, designed branded email templates, and optimized Play Store deployments',
        'Worked on advanced application architecture for platforms such as CallSmart, integrating voice call recordings with messaging workflows',
        'Designed an optimized backend middleware with a hierarchical model to improve scalability and performance',
        'Migrated email delivery to SendGrid to enhance reliability and functionality'
      ]
    },
    {
      company: 'SalesCode.ai',
      position: 'Software Developer',
      period: 'Jul 2024 - Aug 2025',
      location: 'Remote',
      points: [
        'Designed and implemented a scalable discount scheme backend capable of processing and integrating over 1 million records daily',
        'Developed and maintained an analytics dashboard UI with real-time updates to track daily order records and system performance.',
        'Built an automation application to efficiently handle edge cases, reducing manual intervention and improving system reliability.',
        'Created cloud-based data backup services and cleanup scripts to manage legacy records, optimize database storage, and improve overall data management.'
      ]
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xl font-mono mr-4">02.</span>
          Where I've Worked
        </motion.h2>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                transition: { duration: 0.3 }
              }}
              className="bg-secondary/50 rounded-lg p-6 border-l-4 border-accent hover:border-accent/80 transition-all group"
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-text"
                    whileHover={{ color: '#64ffda' }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.position}
                  </motion.h3>
                  <motion.p 
                    className="text-accent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.company}
                  </motion.p>
                </div>
                <motion.p 
                  className="text-textLight text-sm mt-2 md:mt-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {exp.period}
                </motion.p>
              </motion.div>
              <motion.ul 
                className="space-y-2 mt-4"
                variants={containerVariants}
              >
                {exp.points.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    className="text-textLight flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5, color: '#64ffda' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent mr-3 mt-1">▹</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

