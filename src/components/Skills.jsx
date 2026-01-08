import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'Kotlin']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'React Native', 'Tailwind CSS', 'Angular', 'Flutter', 'Redux']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'NoSQL', 'Redis','Data Modeling', 'Query Optimization']
    },
    {
      title: 'Tools & Cloud',
      skills: ['AWS', 'Kafka', 'Docker','Jenkins', 'Postman', 'Git', 'Jira', 'MS Excel']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xl font-mono mr-4">04.</span>
          Skills & Technologies
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={skillItemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
              }}
              transition={{ duration: 0.3 }}
              className="bg-secondary/50 rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all"
            >
              <motion.h3 
                className="text-lg font-bold text-accent mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={skillItemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: '#64ffda'
                    }}
                    className="text-sm text-textLight bg-primary px-3 py-1 rounded border border-accent/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
          }}
          className="mt-12 bg-secondary/50 rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all"
        >
          <motion.h3 
            className="text-lg font-bold text-accent mb-4"
            whileHover={{ color: '#64ffda' }}
            transition={{ duration: 0.2 }}
          >
            Achievements
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-4 text-textLight text-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center"
              variants={skillItemVariants}
              whileHover={{ x: 5, color: '#64ffda' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-accent mr-2">▹</span>
              <span>Cleared IIT Kharagpur Test of Fundamentals Design and Algorithms</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={skillItemVariants}
              whileHover={{ x: 5, color: '#64ffda' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-accent mr-2">▹</span>
              <span>Selected for Google Developer App Development Program</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

