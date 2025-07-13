// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Untuk animasi navbar

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'}; /* Efek blur kaca */
  padding: 1.5em 2em;
  z-index: 1000;
  display: flex;
  justify-content: flex-end; /* Pindahkan link ke kanan */
  align-items: center;
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;

  @media (max-width: 768px) {
    justify-content: center; /* Pusatkan link di mobile */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5em; /* Jarak antar link */

  @media (max-width: 480px) {
    gap: 1.5em; /* Jarak lebih kecil di mobile */
  }
`;

const NavItem = styled.li``;

const NavLink = styled(ScrollLink)`
  color: #F0F0F0;
  font-weight: 500;
  font-size: 1.1em;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50; /* Aksen hijau saat hover */
  }

  &::after { /* Garis bawah animasi */
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #4CAF50;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  /* Styling untuk link aktif */
  &.active {
    color: #4CAF50;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
    >
      <NavLinks>
        <NavItem>
          <NavLink to="welcome" smooth={true} duration={500} activeClass="active" spy={true}>
            Welcome
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" smooth={true} duration={500} activeClass="active" spy={true}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects" smooth={true} duration={500} activeClass="active" spy={true}>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contact" smooth={true} duration={500} activeClass="active" spy={true}>
            Contact
          </NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;