import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const techList = ['Java', 'Spring Boot', 'React.js', 'React Native', 'Node.js', 'SQL/NoSQL', 'Express.js', 'JavaScript', 'kotlin', 'flutter']
  
  const cardRef = useRef(null)
  const timeoutRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -15
    const rotateYValue = (mouseX / (rect.width / 2)) * 15
    
    setRotation({ x: rotateXValue, y: rotateYValue })
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setRotation({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Set timeout to reset rotation after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setRotation({ x: 0, y: 0 })
      timeoutRef.current = null
    }, 2000)
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              className="text-3xl font-bold text-text mb-6 flex items-center"
              variants={itemVariants}
            >
              <span className="text-accent text-xl font-mono mr-4">01.</span>
              About Me
            </motion.h2>
            <motion.div 
              className="text-textLight space-y-4"
              variants={itemVariants}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Continuously learning and highly adaptable to new technologies and evolving environments, I am a versatile and detail-driven Software Developer with hands-on experience in application development, building robust backend systems, and automating workflows. Proficient in Java, Spring Boot, React Native, and REST APIs, with a strong foundation in integrating large-scale datasets across distributed systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Demonstrated expertise in developing scalable microservices, optimizing data pipelines, 
                and ensuring end-to-end data validation and transformation. Known for solving complex 
                integration challenges, enhancing system efficiency, and delivering high-performance 
                backend and application solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Here are a few technologies I've been working with recently:
              </motion.p>
              <motion.ul 
                className="grid grid-cols-2 gap-2 mt-4"
                variants={containerVariants}
              >
                {techList.map((tech, index) => (
                  <motion.li 
                    key={tech} 
                    className="flex items-center text-sm"
                    variants={itemVariants}
                    whileHover={{ x: 5, color: '#64ffda' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-accent mr-2">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              ref={cardRef}
              className="w-full max-w-md mx-auto aspect-square border-2 border-accent rounded-lg p-2 cursor-pointer"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(100, 255, 218, 0.1)',
                  '0 0 40px rgba(100, 255, 218, 0.2)',
                  '0 0 20px rgba(100, 255, 218, 0.1)',
                ],
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                rotateX: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                },
                rotateY: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                <motion.div 
                  className="text-center p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 30px rgba(100, 255, 218, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl text-accent font-bold">PV</span>
                  </motion.div>
                  <p className="text-textLight">Software Developer</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

