import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Qualification } from './components/Qualification';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="qualification"><Qualification /></section>
          <section id="skills"><Skills /></section>
          <section id="contact-form"><ContactForm /></section>
          <section id="contact"><Contact /></section>
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;