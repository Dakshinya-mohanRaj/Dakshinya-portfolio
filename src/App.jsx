import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import heroImg from './assets/hero.png';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

function RevealDiv({ className = '', children, delay = 0, ...props }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      <SocialLinks />
      <main className="container">
        <div className="home-screen">
          <Hero />
          <Quote />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Navbar = ({ menuOpen, setMenuOpen, scrolled }) => (
  <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-container">
      <a href="#home" className="logo mono">
        <span className="purple">{"</>"}</span> Dakshinya
      </a>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links mono">
          {['home', 'about', 'skills', 'projects', 'contacts'].map((item) => (
            <li key={item}>
              <a href={`#${item === 'contacts' ? 'contact' : item}`} onClick={() => setMenuOpen(false)}>
                <span className="purple">#</span>{item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const SocialLinks = () => (
  <div className="social-links-fixed">
    <div className="line"></div>
    <a href="mailto:dakshee02@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
    <a href="https://www.linkedin.com/in/dakshinya-mohan-raj-6a311732b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
    <a href="https://github.com/Dakshinya-mohanRaj" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
    <div className="line"></div>
  </div>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-glow"></div>
    <div className="hero-content">
      <p className="hero-greeting mono purple">Hello,</p>
      <h1 className="hero-title">
        <span className="purple">Dakshinya</span> MohanRaj<br />
        Full Stack Developer
      </h1>
      <p className="hero-desc gray">
        Building end-to-end web solutions with modern technologies.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary mono">View Projects</a>
        <button className="btn-ghost mono" onClick={() => {
          const el = document.getElementById('about');
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}>About Me</button>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hero-image-ring">
        <div className="ring r1"></div>
        <div className="ring r2"></div>
        <div className="image-wrapper-hero">
          <img
            src={heroImg}
            alt="Dakshinya"
            draggable="false"
            onError={(e) => {
              e.target.src = "/hero.png";
            }}
          />
        </div>
      </div>
      <div className="hero-badge mono">
        <span className="purple">{'<'}</span>open to work<span className="purple">{'/>'}</span>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <div className="quote-section">
    <div className="quote-accent"></div>
    <blockquote className="quote-text">
      Control can sometimes be an illusion. But sometimes you need illusion to gain control.
    </blockquote>
    <cite className="quote-author mono">— Miss. Who</cite>
  </div>
);

const Projects = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      title: "Nail Glam",
      desc: "Luxury nail products & beauty e-commerce platform with interactive shopping portal",
      live: "https://nail-glam-e-commerce-website.vercel.app/",
    },
    {
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop",
      tech: ["React", "AWS S3", "Express", "MongoDB"],
      title: "ProjectX",
      desc: "Cloud-based file sharing web app powered by AWS S3 buckets",
      live: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      tech: ["React", "Tailwind", "Express", "Binance API"],
      title: "CrypTrack",
      desc: "Real-time cryptocurrency tracker with live market data",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <RevealDiv>
        <div className="section-header">
          <h2 className="mono"><span className="purple">#</span>projects</h2>
          <div className="line"></div>
          <a href="#" className="view-all mono">View all <span className="purple">~{'>'}</span></a>
        </div>
      </RevealDiv>
      <div className="projects-list">
        {projects.map((p, i) => (
          <RevealDiv key={i} delay={i * 150}>
            <div className="project-row">
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="project-img-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-tech-row">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-tag mono">{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc gray">{p.desc}</p>
                <a
                  href={p.live}
                  className="project-link mono"
                  target={p.live.startsWith('http') ? "_blank" : "_self"}
                  rel={p.live.startsWith('http') ? "noreferrer" : undefined}
                >
                  Live Demo <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const row1 = [
    { icon: "html5", name: "HTML", color: "#E34F26" },
    { icon: "css3", name: "CSS", color: "#1572B6" },
    { icon: "js", name: "JavaScript", color: "#F7DF1E" },
    { icon: "react", name: "React", color: "#61DAFB" },
    { icon: "figma", name: "Figma", color: "#F24E1E" },
  ];

  const row2 = [
    { icon: "git-alt", name: "Git", color: "#F05032" },
    { icon: "code", name: "Firebase", color: "#FFCA28" },
    { icon: "database", name: "Supabase", color: "#3ECF8E" },
    { icon: "java", name: "Java", color: "#007396" },
    { icon: "html5", name: "HTML", color: "#E34F26" },
    { icon: "css3", name: "CSS", color: "#1572B6" },
  ];

  const SkillTile = ({ icon, name, color }) => (
    <div className="skill-tile" style={{ '--skill-color': color }}>
      <i className={`fab fa-${icon}`}></i>
      <span className="mono">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <RevealDiv>
        <div className="section-header">
          <h2 className="mono"><span className="purple">#</span>skills</h2>
          <div className="line"></div>
        </div>
      </RevealDiv>
      <div className="marquee-wrap">
        <div className="marquee-row marquee-lr">
          <div className="marquee-track">
            {[...row1, ...row1, ...row1].map((s, i) => (
              <SkillTile key={i} {...s} />
            ))}
          </div>
        </div>
        <div className="marquee-row marquee-rl">
          <div className="marquee-track">
            {[...row2, ...row2, ...row2].map((s, i) => (
              <SkillTile key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="about">
    <RevealDiv>
      <div className="section-header">
        <h2 className="mono"><span className="purple">#</span>about-me</h2>
        <div className="line"></div>
      </div>
    </RevealDiv>
    <div className="about-layout">
      <RevealDiv className="about-text" delay={100}>
        <p className="about-intro">Behind the code</p>
        <p className="gray">
          I'm a 3rd year Computer Science Engineering student at K S R College with a passion for full stack development. I work across the entire stack — from crafting responsive UIs to designing APIs and managing databases — to build complete, production-ready applications.
        </p>
        <p className="gray">
          I enjoy turning complex problems into simple, intuitive solutions. Every project is an opportunity to refine my craft, learn something new, and push what's possible on the web.
        </p>
      </RevealDiv>
      <RevealDiv className="about-visual" delay={300}>
        <TypeTerminal />
      </RevealDiv>
    </div>
  </section>
);

const TypeTerminal = () => {
  const lines = [
    { prefix: 'user', text: 'whoami', delay: 400 },
    { prefix: '', text: 'Dakshinya MohanRaj', delay: 600 },
    { prefix: 'user', text: 'cat /role', delay: 500 },
    { prefix: '', text: 'Full Stack Developer', delay: 600 },
    { prefix: 'user', text: 'cat /education', delay: 500 },
    { prefix: '', text: 'CS @ KSR College · 3rd Year', delay: 600 },
    { prefix: 'user', text: 'cat /stack', delay: 500 },
    { prefix: '', text: 'React · Node · Firebase · Supabase', delay: 600 },
    { prefix: 'user', text: './status', delay: 500 },
    { prefix: '', text: 'Building cool stuff ✨', delay: 600 },
  ];

  const [visibleLines, setVisibleLines] = useState([]);
  const [typing, setTyping] = useState({});

  useEffect(() => {
    let timeouts = [];
    let charIndex = 0;
    let lineIndex = 0;
    let currentText = '';

    const typeNext = () => {
      if (lineIndex >= lines.length) return;
      const line = lines[lineIndex];

      if (line.prefix) {
        setVisibleLines(prev => [...prev, { prefix: line.prefix, text: '', isPrompt: true }]);
        setTyping(prev => ({ ...prev, [lineIndex]: true }));
        currentText = '';
        charIndex = 0;

        const typeChars = () => {
          if (charIndex < line.text.length) {
            currentText += line.text[charIndex];
            setVisibleLines(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { prefix: line.prefix, text: currentText, isPrompt: true };
              return updated;
            });
            charIndex++;
            timeouts.push(setTimeout(typeChars, 40 + Math.random() * 60));
          } else {
            setTyping(prev => ({ ...prev, [lineIndex]: false }));
            lineIndex++;
            timeouts.push(setTimeout(typeNext, line.delay));
          }
        };
        typeChars();
      } else {
        setVisibleLines(prev => [...prev, { prefix: '', text: line.text, isPrompt: false }]);
        lineIndex++;
        timeouts.push(setTimeout(typeNext, line.delay));
      }
    };

    timeouts.push(setTimeout(typeNext, 600));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
        </div>
        <span className="terminal-title mono">about.sh</span>
      </div>
      <div className="terminal-body">
        {visibleLines.map((ln, i) => (
          <div key={i} className={`term-line ${ln.isPrompt ? 'prompt' : 'output'}`}>
            {ln.isPrompt ? (
              <><span className="term-prompt">┌──(</span><span className="term-user">dakshinya</span><span className="term-prompt">㉿</span><span className="term-host">portfolio</span><span className="term-prompt">)-[~]</span><br /><span className="term-prompt">└─$</span> <span className="term-cmd">{ln.text}</span></>
            ) : (
              <span className="term-output">{ln.text}</span>
            )}
          </div>
        ))}
        {visibleLines.length < lines.length && (
          <div className="term-line prompt">
            <span className="term-prompt">┌──(</span><span className="term-user">dakshinya</span><span className="term-prompt">㉿</span><span className="term-host">portfolio</span><span className="term-prompt">)-[~]</span><br /><span className="term-prompt">└─$</span> <span className="term-cursor">▊</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
    window.open(`mailto:dakshee02@gmail.com?subject=Hello from ${form.name}&body=${form.message}`, '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('dakshee02@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg-orb" />
      <div className="contact-inner">
        <RevealDiv>
          <div className="section-header" style={{ justifyContent: 'center' }}>
            <h2 className="mono"><span className="purple">#</span>contacts</h2>
          </div>
        </RevealDiv>
        <div className="contact-card">
          <RevealDiv className="contact-form-side" delay={80}>
            <h3 className="mono form-heading">
              <span className="purple">$</span> send_message
            </h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <input id="cf-name" name="name" value={form.name} onChange={handleChange} placeholder=" " required />
                <label htmlFor="cf-name">Name</label>
              </div>
              <div className="form-field">
                <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder=" " required />
                <label htmlFor="cf-email">Email</label>
              </div>
              <div className="form-field">
                <textarea id="cf-msg" name="message" value={form.message} onChange={handleChange} placeholder=" " rows="4" required />
                <label htmlFor="cf-msg">Message</label>
              </div>
              <button type="submit" className={`btn-primary mono send-btn ${sent ? 'sent' : ''}`}>
                {sent ? <><i className="fas fa-check"></i> Sent!</> : <>Send <i className="fas fa-arrow-right"></i></>}
              </button>
            </form>
          </RevealDiv>
          <div className="contact-divider" />
          <RevealDiv className="contact-info-side" delay={180}>
            <h3 className="mono form-heading">
              <span className="purple">$</span> contact_info
            </h3>
            <div className="contact-cards">
              <a href="mailto:dakshee02@gmail.com" className="c-card" onClick={(e) => { e.preventDefault(); copyEmail(); }}>
                <div className="c-card-icon"><i className="fas fa-envelope"></i></div>
                <div className="c-card-text">
                  <span className="c-card-label mono">Email</span>
                  <span className="c-card-value">dakshee02@gmail.com</span>
                </div>
                <span className="c-card-action mono">{copied ? 'copied!' : 'copy'}</span>
              </a>
              <a href="https://www.linkedin.com/in/dakshinya-mohan-raj-6a311732b/" target="_blank" rel="noreferrer" className="c-card">
                <div className="c-card-icon"><i className="fab fa-linkedin-in"></i></div>
                <div className="c-card-text">
                  <span className="c-card-label mono">LinkedIn</span>
                  <span className="c-card-value">Dakshinya MohanRaj</span>
                </div>
                <span className="c-card-action mono"><i className="fas fa-external-link-alt"></i></span>
              </a>
              <a href="https://github.com/Dakshinya-mohanRaj" target="_blank" rel="noreferrer" className="c-card">
                <div className="c-card-icon"><i className="fab fa-github"></i></div>
                <div className="c-card-text">
                  <span className="c-card-label mono">GitHub</span>
                  <span className="c-card-value">@Dakshinya-mohanRaj</span>
                </div>
                <span className="c-card-action mono"><i className="fas fa-external-link-alt"></i></span>
              </a>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand mono">
        <span className="purple">{"</>"}</span> Dakshinya
      </div>
      <p className="footer-copy gray">Designed & Built by Dakshinya MohanRaj &copy; 2026</p>
    </div>
  </footer>
);

export default App;
