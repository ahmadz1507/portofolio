// src/components/WelcomeSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Orb from './Orb/Orb';

const WelcomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000; /* Pastikan hitam penuh */
  padding: 0 2em;
  position: relative; /* Untuk animasi elemen anak */
  overflow: hidden; /* Pastikan animasi tidak meluber */
`;

const OrbBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Pastikan Orb berada di belakang konten */
  /* Di sini Orb.js akan merender canvas-nya */
`;

const MainHeading = styled(motion.h1)`
  font-size: 4.5em; /* Ukuran besar untuk menarik perhatian */
  margin-bottom: 0.2em;
  color: #E0E0E0;
  text-shadow: 2px 2px 8px rgba(0, 255, 0, 0.4); /* Efek glow yang lebih menonjol */

  @media (max-width: 768px) {
    font-size: 3em;
  }
  @media (max-width: 480px) {
    font-size: 2.2em;
  }
`;

const SubText = styled(motion.p)`
  font-size: 1.8em;
  color: #A0A0A0;
  max-width: 800px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Pastikan konten di atas OrbBackground */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WelcomeSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <WelcomeWrapper>
      <OrbBackground>
        {/* Render komponen Orb di sini. Anda bisa mengatur props hue, hoverIntensity, dll. */}
        <Orb hue={200} hoverIntensity={0.5} rotateOnHover={true} /> {/* Contoh props */}
      </OrbBackground>
      <ContentContainer>
        <MainHeading
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Halo, My Name Is <br />Ahmad Zaenal Muttaqin
        </MainHeading>
        <SubText
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4, ...textVariants.visible.transition }}
        >
          I am a junior programmer with an interest in full-stack development for website building.
        </SubText>  
      </ContentContainer>
    </WelcomeWrapper>
  );
};

export default WelcomeSection;