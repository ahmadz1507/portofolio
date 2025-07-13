// src/components/ContactSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Pastikan sudah instal react-icons: npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 

const ContactWrapper = styled.section`
  min-height: 80vh;
  padding: 4em 2em;
  background-color: #000;
  color: #F0F0F0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 1em;
  color: #E0E0E0;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.2em;
  margin-bottom: 2.5em;
  max-width: 700px;
  color: #D0D0D0;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 2em;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2.5em;
  margin-bottom: 3em;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5em;
  }
`;

const SocialIconLink = styled(motion.a)`
  color: #F0F0F0;
  font-size: 3.5em; /* Ukuran ikon */
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #4CAF50; /* Aksen hijau saat hover */
    transform: translateY(-5px) scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 2.8em;
  }
`;

const EmailLink = styled(motion.a)`
  background-color: #4CAF50;
  color: #000;
  padding: 1em 2.5em;
  border-radius: 8px;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #388E3C;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 0.8em 1.5em;
    font-size: 1em;
  }
`;

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <ContactWrapper ref={ref}>
      <SectionTitle
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        Hubungi Saya
      </SectionTitle>
      <ContactText
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        Tertarik untuk berkolaborasi atau ingin bertanya lebih lanjut? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
      </ContactText>
      <SocialLinks
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SocialIconLink href="https://github.com/ahmadz1507" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink href="https://linkedin.com/in/ahmad-zaenal-muttaqin-8a9491214" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink href="https://wa.me/6283116677700" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <FaWhatsapp />
        </SocialIconLink>
        {/* Tambahkan ikon sosial media lain jika ada */}
      </SocialLinks>
      <EmailLink
        href="mailto:ahmadzaenalm1507@gmail.com" 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        Kirim Email
      </EmailLink>
    </ContactWrapper>
  );
};

export default ContactSection;