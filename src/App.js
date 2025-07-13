// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Element } from 'react-scroll'; // Untuk navigasi smooth scroll
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import styled from 'styled-components';

// Gaya untuk layout utama App
const AppContainer = styled.div`
  /* Pastikan semua section memenuhi lebar dan tinggi */
  width: 100%;
  min-height: 100vh;
  /* Tambahan padding jika navbar ada di samping */
`;

function App() {
  return (
    <AppContainer>
      {/* Navbar akan fixed di atas */}
      <Navbar />

      <Element name="welcome"> {/* 'name' untuk react-scroll */}
        <WelcomeSection />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="projects">
        <ProjectsSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </AppContainer>
  );
}

export default App;