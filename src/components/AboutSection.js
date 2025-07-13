import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  background-color: #000;
  color: #F0F0F0;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4em;
    align-items: center;
    padding: 6em 8em;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  @media (min-width: 900px) {
    margin-bottom: 0;
    justify-content: flex-end;
  }
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4CAF50;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);

  @media (min-width: 900px) {
    width: 260px;
    height: 260px;
  }
`;

const TextContent = styled(motion.div)`
  max-width: 700px;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    padding-left: 2em;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2em;
  margin-bottom: 1em;
  color: #E0E0E0;
  text-align: center;
  width: 100%;

  @media (min-width: 900px) {
    text-align: left;
    font-size: 2.8em;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1em;
  margin-bottom: 1.2em;
  line-height: 1.8;
  color: #D0D0D0;

  @media (min-width: 900px) {
    font-size: 1.18em;
  }
`;

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
  };

  return (
    <AboutWrapper ref={ref}>
      <ImageContainer
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <ProfileImage src="./assets/Profilee.png" alt="Your Profile Photo" />
      </ImageContainer>
      <TextContent
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <SectionTitle
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          About Me
        </SectionTitle>
        <Paragraph>
          Hello, my name is Ahmad Zaenal Muttaqin, and I am currently studying Informatics at Universitas Teknologi Bandung.<br /> Previously, I worked in graphic design and as an internet network technician. With this background and experience, I hope to contribute to the development projects I am involved in.
        </Paragraph>
        <Paragraph>
          I am particularly interested in website development, especially in creating designs that are both user-friendly and visually appealing, as well as in mobile application development.
        </Paragraph>
        <Paragraph>
          I am a fast learner and eager to explore new programming languages. In my free time, I enjoy playing games and watching movies. I hope we can work together on a project.
        </Paragraph>
      </TextContent>
    </AboutWrapper>
  );
};

export default AboutSection;