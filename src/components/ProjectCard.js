// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: #1a1a1a; /* Background kartu lebih gelap */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2); /* Efek bayangan hijau */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 255, 0, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Agar konten mengisi ruang sisa */
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  color: #4CAF50; /* Judul proyek dengan aksen hijau */
  margin-bottom: 0.5em;
`;

const CardDescription = styled.p`
  font-size: 0.95em;
  color: #D0D0D0;
  margin-bottom: 1em;
  flex-grow: 1; /* Agar deskripsi mengisi ruang sisa */
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1em;
`;

const TechTag = styled.span`
  background-color: #2e2e2e;
  color: #90EE90; /* Warna hijau muda untuk tag */
  padding: 0.3em 0.7em;
  border-radius: 5px;
  font-size: 0.8em;
  white-space: nowrap; /* Mencegah tag putus di tengah */
`;

const CardActions = styled.div`
  display: flex;
  gap: 1em;
  margin-top: auto; /* Dorong ke bawah */
  flex-wrap: wrap; /* Pastikan tombol rapi di mobile */
`;

const ActionButton = styled.a`
  background-color: #4CAF50;
  color: #000;
  padding: 0.8em 1.2em;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #388E3C;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.6em 1em;
    font-size: 0.9em;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      // Animasi hover pada kartu
      whileHover={{ scale: 1.03 }}
      // Animasi kemunculan (akan diatur oleh parent ProjectsGrid)
      // initial dan animate akan diatur oleh staggerChildren di ProjectsSection
    >
      <CardImage src={project.image} alt={project.title} />
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <TechList>
          {project.tech.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechList>
        <CardActions>
          {project.liveLink && (
            <ActionButton href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </ActionButton>
          )}
          {project.githubLink && (
            <ActionButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </ActionButton>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;