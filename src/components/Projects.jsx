import React from 'react'
import { motion } from 'framer-motion'
import ecommerceImg from '../images/ecommerce.png'
import blogImg from '../images/blog.png'
import dogGameImg from '../images/dog-game.png'
import movieImg from '../images/movie.png'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform offering user authentication and seamless product management with complete operations for items and orders.',
      tech: [],
      image: ecommerceImg,
      featured: true
    },
    {
      title: 'Full-Stack Blog Application',
      description: 'The project features complete user authentication (signup, login, logout), CRUD operations for blog posts, and role-based access control to secure user data.',
      tech: [],
      image: blogImg,
      featured: true
    },
    {
        title: 'Dog Scrolling 2D Game',
        description: 'A fun and interactive 2D side-scrolling game where a dog character runs through dynamic environments, avoids obstacles, collects rewards, and progresses through increasing difficulty levels with smooth animations and responsive controls.',
        tech: [],
        image: dogGameImg,
        featured: false
    },
    {
      title: 'Movie Browser App',
      description: 'A modern movie browsing application that allows users to search through thousands of movies with an intuitive interface and seamless user experience.',
      tech: [],
      image: movieImg,
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xl font-mono mr-4">03.</span>
          Some Things I've Built
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-secondary/50 rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all group cursor-pointer"
            >
              <motion.div 
                className="relative min-h-32 bg-gradient-to-br from-accent/20 to-secondary overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto max-h-64 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80" style={{ display: 'none' }}>
                  <div className="text-center p-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-textLight text-sm">{project.title}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                <motion.h3 
                  className="text-lg font-bold text-text mb-2"
                  whileHover={{ color: '#64ffda' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-textLight text-sm">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

