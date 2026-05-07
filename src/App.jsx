import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Strengths from './components/sections/Strengths';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Research from './components/sections/Research';
import Training from './components/sections/Training';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Publications from './components/sections/Publications';
import Blog from './components/sections/Blog';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Strengths />
      <Education />
      <Experience />
      <Research />
      <Training />
      <Gallery />
      <Contact />
    </main>
  );
}

function ScrollToHashElement() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);
  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans antialiased">
          <ScrollToHashElement />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}
