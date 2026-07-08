import React from 'react';
import './App.css';
import heroImg from './assets/hero.png';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialLinks />
      <main className="container">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => (
  <header className="navbar">
    <div className="container nav-container">
      <div className="logo mono">
        <span className="purple">{"</>"}</span> Dakshinya MohanRaj
      </div>
      <nav>
        <ul className="nav-links mono">
          <li><a href="#home"><span className="purple">#</span>home</a></li>
          <li><a href="#projects"><span className="purple">#</span>projects</a></li>
          <li><a href="#skills"><span className="purple">#</span>skills</a></li>
          <li><a href="#about"><span className="purple">#</span>about-me</a></li>
          <li><a href="#contact"><span className="purple">#</span>contacts</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const SocialLinks = () => (
  <div className="social-links-fixed">
    <div className="line"></div>
    <div className="socials">
      <a href="#"><i className="fab fa-github"></i></a>
      <a href="#"><i className="fab fa-dribbble"></i></a>
      <a href="#"><i className="fab fa-figma"></i></a>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h1 className="hero-title">
        Hi, I'm a <span className="purple">web designer</span> and <span className="purple">front-end developer</span>
      </h1>
      <p className="hero-desc gray">
        I'm currently into Frontend Dev
      </p>
      <button className="btn-outline mono">Scroll Down ↓</button>
    </div>
    <div className="hero-image">
      <div className="image-stack">
        {/* Geometric Shape */}
        <div className="geometric-shape">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--main-color)" fillOpacity="0.1" stroke="var(--main-color)" strokeWidth="1" d="M 40,40 L 40,160 L 160,160 L 160,100 L 100,100 L 100,40 Z" />
           </svg>
        </div>

        {/* Left Dots */}
        <div className="dots-container dots-left-hero">
          {[...Array(9)].map((_, i) => <div key={i} className="dot"></div>)}
        </div>
        
        {/* Main Image */}
        <div className="image-wrapper-hero">
          <img 
            src={heroImg} 
            alt="Profile" 
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Right Dots */}
        <div className="dots-container dots-right-hero">
          {[...Array(25)].map((_, i) => <div key={i} className="dot"></div>)}
        </div>
      </div>
      
      <div className="status-box mono">
        <div className="box"></div>
        <span>Currently working on <span className="white"></span></span>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <div className="quote-section">
    <div className="quote-container">
      <div className="quote-box">
        <span className="quote-mark top">"</span>
        <p className="quote-text">Control can sometimes be an illusion. But sometimes you need illusion to gain control.</p>
        <span className="quote-mark bottom">"</span>
      </div>
      <div className="quote-author">
        <p>- Miss. Who</p>
      </div>
    </div>
    {/* Floating Decorative Box */}
    <div className="floating-box"></div>
  </div>
);

const Projects = () => (
  <section id="projects" className="projects">
    <div className="section-header">
      <h2 className="mono"><span className="purple">#</span>projects</h2>
      <div className="line"></div>
      <a href="#" className="view-all mono">View all ~~{">"}</a>
    </div>
    <div className="projects-grid">
      <ProjectCard 
        img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
        tech="HTML CSS JS Bootstrap Nodejs Expressjs MySQL"
        title="IIITApfolio" 
        desc="Acade/Non-Acade Portfolio Of IIIT-A Students" 
        live="#"
      />
      <ProjectCard 
        img="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&auto=format&fit=crop"
        tech="AWS S3 React Nodejs Expressjs Mongo DB Multer"
        title="ProjectX" 
        desc="Online Cloud Based File Sharing Web App Using AWS S3 Bucket" 
        live="#"
      />
      <ProjectCard 
        img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
        tech="ReactJS Tailwind CSS Expressjs RapidApi binance Coinbase"
        title="CrypTrack" 
        desc="CrypTrack is React based web app where user can see current coins price" 
        live="#"
      />
    </div>
  </section>
);

const ProjectCard = ({ img, title, desc, tech, live }) => (
  <div className="project-card">
    <div className="card-img">
      <img src={img} alt={title} />
    </div>
    <div className="card-tech mono gray">
      {tech}
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc gray">{desc}</p>
      <div className="card-actions">
        <button className="btn-outline mono">Live {"<"}~{">"}</button>
      </div>
    </div>
  </div>
);

const Skills = () => (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="mono"><span className="purple">#</span>skills</h2>
        <div className="line"></div>
      </div>
      <div className="skills-grid-new">
        <SkillItem icon="html5" name="html" color="#E34F26" />
        <SkillItem icon="css3" name="css" color="#1572B6" />
        <SkillItem icon="js" name="js" color="#F7DF1E" />
        <SkillItem icon="react" name="react" color="#61DAFB" />
        <SkillItem icon="node-js" name="node" color="#339933" />
        <SkillItem icon="figma" name="figma" color="#F24E1E" />
        <SkillItem icon="git-alt" name="git" color="#F05032" />
        <SkillItem icon="database" name="mysql" color="#4479A1" />
        <SkillItem icon="code" name="firebase" color="#FFCA28" />
        <SkillItem icon="java" name="java" color="#007396" />
      </div>
    </section>
  );
  
  const SkillItem = ({ icon, name, color }) => (
    <div className="skill-item">
       <div className="skill-icon-container">
          <i className={`fab fa-${icon}`} style={{color}}></i>
          {!icon.includes('fa-') && <i className={`fas fa-${icon}`} style={{color}}></i>}
       </div>
       <div className="skill-name mono gray">{name}</div>
    </div>
  );

const About = () => (
  <section id="#about" className="about">
    <div className="section-header">
      <h2 className="mono"><span className="purple">#</span>about-me</h2>
      <div className="line"></div>
    </div>
    <div className="about-content">
      <div className="about-text">
        <p className="gray">Hello, i'm Dakshinya!</p>
        <p className="gray">
          I'm a self-taught front-end developer. I can develop responsive websites from scratch and raise them into modern user friendly web experiences.
        </p>
        <p className="gray">
          I am a Computer Science Engineering Student Pursing 3rd year in K S R College. I am very passionate about improving my coding skills & developing applications & websites.
        </p>
        <button className="btn-outline mono">Resume ↓</button>
      </div>
      <div className="about-illustration">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/developer-illustration-download-in-svg-png-gif-file-formats--laptop-man-coder-person-pack-people-illustrations-4734808.png" alt="Dev" className="dev-illus" />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="section-header">
      <h2 className="mono"><span className="purple">#</span>contacts</h2>
      <div className="line"></div>
    </div>
    <div className="contact-content">
      <div className="contact-text">
        <p className="gray">
          I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
        </p>
      </div>
      <div className="contact-box-new">
        <p className="mono white">Message me here</p>
        <div className="contact-links gray">
          <div className="link"><i className="fas fa-envelope purple"></i> dakshee02@gmail.com</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-left">
        <div className="logo mono">
          <span className="purple">{"</>"}</span> Dakshinya <span className="gray">dakshee02@gmail.com</span>
        </div>
        <p>Web designer and front-end developer</p>
      </div>
      <div className="footer-right">
        <h3 className="mono">Media</h3>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="gray">© Copyright 2026. Made by Dakshinya MohanRaj</p>
    </div>
  </footer>
);

export default App;
