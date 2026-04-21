import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import profilePic from './assets/Profilepic.jpeg'
import project1image from './assets/project1image.png'
import project2image from './assets/project2image.png'
import project3image from './assets/project3image.png'
import project4image from './assets/project4image.png'
import './index.css'

// ─── DATA ────────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: 'MongoDB',    src: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Express.js', src: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'React',      src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js',    src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Tailwind',   src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Next.js',    src: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Git',        src: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'REST API',   src: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'Firebase',   src: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Figma',      src: 'https://cdn.simpleicons.org/figma/F24E1E' },
]

const EXPERIENCES = [
  {
    date: '2022 — Present',
    role: 'Full-Stack MERN Developer',
    company: 'Freelance / Remote',
    desc: 'Architecting and shipping full-stack web applications end-to-end. REST APIs with Node & Express, MongoDB schemas, React UIs, JWT auth, Stripe payments, and cloud deployments on Vercel + Render.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Vercel'],
  },
  {
    date: '2023 — 2024',
    role: 'Frontend Developer',
    company: 'DevConst — Internship',
    desc: 'Built responsive React interfaces from Figma designs. Integrated third-party APIs, collaborated on REST API contracts with backend team, and shipped pixel-perfect UIs in agile sprints.',
    tags: ['React', 'Tailwind', 'REST APIs', 'Git', 'Figma'],
  },
  {
    
    date: '2022 — 2023',
    role: 'Junior Web Developer',
    company: 'Self-taught / Personal Projects',
    desc: 'Learned the full web stack from scratch. Built a task manager, a blog CMS API, and an e-commerce prototype. Mastered MongoDB, Express routing through real project work.',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'HTML/CSS'],
  },
]

const PROJECTS = [
  {
    num: '01',
    title: 'E-Commerce Platform',
    featured: true,
    desc: 'Full-stack React application with advanced shopping features, cart management, Stripe payments, and admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: project1image,
    demo: '#', github: '#',
  },
  {
    num: '02',
    title: 'AI Dashboard',
    featured: false,
    desc: 'Interactive dashboard with real-time analytics and AI insights. Data visualization with live charts and reporting.',
    stack: ['React', 'D3.js', 'Python', 'TensorFlow'],
    image: project2image,
    demo: '#', github: '#',
  },
  {
    num: '03',
    title: 'AI E-Learning Platform',
    featured: false,
    desc: 'MERN stack educational platform with AI-driven personalized learning paths and real-time progress tracking.',
    stack: ['React', 'Node.js', 'Firebase', 'Express', 'MongoDB'],
    image: project3image,
    demo: '#', github: '#',
  },
  {
    num: '04',
    title: 'Shopify E-Commerce Store',
    featured: false,
    desc: 'Complete e-commerce solution with custom theme, payment integration, and inventory management system.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Payment APIs'],
    image: project4image,
    demo: '#', github: '#',
  },
]

const TICKER_ITEMS = ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'REST APIs' , ' SQL ' , ' Python ' , 'Tailwind CSS', 'Full-Stack Dev']

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX - 5 + 'px'
        dot.current.style.top = e.clientY - 5 + 'px'
      }
      if (ring.current) {
        ring.current.style.left = e.clientX - 18 + 'px'
        ring.current.style.top = e.clientY - 18 + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}

// Replace your Nav() function in App.jsx with this:

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'var(--border)' : 'transparent' }}>
        <div className="nav-logo">MS.dev</div>
        <ul className="nav-links">
          {['skills','experience','projects','about','contact'].map(s => (
            <li key={s}><a href={`#${s}`}>{s}</a></li>
          ))}
        </ul>
        <div className="nav-status">
          <span className="pulse" />
          Available for work
        </div>
        <button className={`nav-hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        {['skills','experience','projects','about','contact'].map(s => (
          <a key={s} href={`#${s}`} onClick={closeMenu}>{s}</a>
        ))}
        <div className="nav-drawer-status">
          <span className="pulse" />
          Available for work
        </div>
      </div>
    </>
  )
}

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span>✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ animation: 'fadeUp .8s ease both', flex: 1, minWidth: '280px' }}>
          <div className="hero-grid-label">MS</div>
          <div className="hero-tag">Full-Stack MERN Developer</div>
          <h1>
            Muhammad
            <span className="name-line2">Shmaiam.</span>
          </h1>
          <div className="hero-role">Building scalable web apps — front to back</div>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Work →</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>
        </div>
        <div style={{ animation: 'fadeUp 1s ease both', flexShrink: 0 }}>
          <div style={{
            width: '280px', height: '320px',
            border: '1px solid var(--border2)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src={profilePic}
              alt="Muhammad Shmaiam"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '12px 14px',
              background: 'linear-gradient(transparent, rgba(6,8,13,0.95))',
              fontSize: '10px', letterSpacing: '2px', color: 'var(--green)', textTransform: 'uppercase'
            }}>
              Muhammad Shmaiam — MERN Dev
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="sec-header">
        <span className="sec-num">02</span>
        <h2 className="sec-title">Tech Stack</h2>
        <div className="sec-line" />
      </div>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div className="skill-cell" key={s.name}>
            <img src={s.src} alt={s.name} className="skill-img" />
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="sec-header">
        <span className="sec-num">03</span>
        <h2 className="sec-title">Experience</h2>
        <div className="sec-line" />
      </div>
      <div className="exp-list">
        {EXPERIENCES.map((e) => (
          <div className="exp-row" key={e.role}>
            <div className="exp-date">{e.date}</div>
            <div className="exp-content">
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-desc">{e.desc}</div>
              <div className="exp-tags">
                {e.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="sec-header">
        <span className="sec-num">04</span>
        <h2 className="sec-title">Selected Work</h2>
        <div className="sec-line" />
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.num}>
            {/* Project Image */}
            <div style={{
              width: '100%', height: '500px', borderRadius: '4px',
              overflow: 'hidden', marginBottom: '20px',
              border: '1px solid var(--border)', position: 'relative',
              background: 'var(--card)',
            }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block', transition: 'transform .4s', position: 'absolute', top: 0, left: 0 }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {p.featured && (
                <div style={{
                  position: 'absolute', top: '10px', right: '10px',
                  background: 'var(--green)', color: '#000',
                  fontSize: '9px', fontWeight: '700', letterSpacing: '1.5px',
                  textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px',
                }}>
                  ✦ Featured
                </div>
              )}
            </div>
            <div className="proj-num">{p.num}</div>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-stack">
              {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
            </div>
            <div className="proj-links">
              <a href={p.demo} className="proj-link">Live Demo →</a>
              <a href={p.github} className="proj-link">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="sec-header">
        <span className="sec-num">05</span>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-line" />
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm <strong>Muhammad Shmaiam</strong>, a Full-Stack MERN developer based in <strong>Pakistan</strong>. I build fast, scalable, production-grade web applications — from REST APIs to reactive UIs.</p>
          <p>I specialize in <strong>MongoDB, Express, React, and Node.js</strong>. Whether it's a real-time chat app, an e-commerce platform, or a custom dashboard — I ship clean code that actually works.</p>
          <p>I care deeply about <strong>developer experience, clean architecture,</strong> and shipping things on time. No cap.</p>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="t-dot" style={{ background: '#ff5f57' }} />
            <div className="t-dot" style={{ background: '#ffbd2e' }} />
            <div className="t-dot" style={{ background: '#28c840' }} />
            <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 8 }}>shmaiam.json</span>
          </div>
          <div className="terminal-body">
            <div><span className="t-prompt">$ </span>cat shmaiam.json</div>
            <div>&nbsp;</div>
            <div>{'{'}</div>
            <div>&nbsp; <span className="t-key">"name"</span>: <span className="t-str">"Muhammad Shmaiam"</span>,</div>
            <div>&nbsp; <span className="t-key">"role"</span>: <span className="t-str">"MERN Stack Developer"</span>,</div>
            <div>&nbsp; <span className="t-key">"location"</span>: <span className="t-str">"Pakistan"</span>,</div>
            <div>&nbsp; <span className="t-key">"experience"</span>: <span className="t-str">"2+ years"</span>,</div>
            <div>&nbsp; <span className="t-key">"stack"</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp; <span className="t-str">"MongoDB"</span>, <span className="t-str">"Express"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp; <span className="t-str">"React"</span>, <span className="t-str">"Node.js"</span></div>
            <div>&nbsp; ],</div>
            <div>&nbsp; <span className="t-key">"status"</span>: <span className="t-val">"open to work"</span></div>
            <div>{'}'}<span className="t-cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await axios.post('/api/contact', form)
      setStatus(res.data.message)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus(err.response?.data?.error || 'Something went wrong.')
    }
    setLoading(false)
  }

  return (
    <section id="contact">
      <div className="sec-header">
        <span className="sec-num">06</span>
        <h2 className="sec-title">Get In Touch</h2>
        <div className="sec-line" />
      </div>
      <div className="contact-grid">
        <div className="contact-left">
          <h3>Let's build something real together.</h3>
          <p>Got a project in mind? Need a MERN dev who ships clean, scalable code on time? Hit me up — I'm open to freelance gigs and full-time roles.</p>
          <div className="contact-links">
            <a href="mailto:shmaiamking@gmail.com" className="contact-link">
              <span className="contact-link-icon">@</span>
              shmaiamking@gmail.com
            </a>
            <a href="https://github.com/Shmaiam" className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">⌥</span>
              github.com/shmaiam
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shmaiam-b057b0283/" className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">in</span>
              linkedin.com/in/shmaiam
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Your Name *</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Muhammad Ali" required />
          </div>
          <div className="form-field">
            <label>Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@example.com" required />
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary" style={{ cursor: 'none' }} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
            {status && <p style={{ marginTop: 14, fontSize: 12, color: status.includes('soon') ? 'var(--green)' : '#ff7eb3' }}>{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Muhammad Shmaiam // All Rights Reserved</p>
      <div className="footer-links">
        <a href="https://github.com/Shmaiam" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-shmaiam-b057b0283/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}