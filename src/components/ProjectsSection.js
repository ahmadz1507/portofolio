// src/components/ProjectsSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData'; // Impor data proyek

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  padding: 4em 2em;
  background-color: #000;
  color: #F0F0F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Pusatkan konten vertikal */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 2em;
  color: #E0E0E0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 1.5em;
  }
  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5em;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2em;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Satu kolom di layar sangat kecil */
    gap: 1.5em;
  }
`;

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger saat 10% elemen masuk viewport
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Animasi setiap kartu muncul berurutan
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <ProjectsWrapper ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Some Of My Projects
      </SectionTitle>
      <ProjectsGrid
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projectsData.map(project => (
          <motion.div key={project.id} variants={itemVariants}> {/* Setiap kartu akan menggunakan itemVariants */}
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;