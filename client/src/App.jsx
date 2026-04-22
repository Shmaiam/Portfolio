import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import profilePic from './assets/Profilepic.jpeg'
import project1image from './assets/project1image.png'
import project2image from './assets/project2image.png'
import project3image from './assets/project3image.png'
import project4image from './assets/project4image.png'
import './index.css'

const SKILLS = [
  { name: 'React',      src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js',    src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'MongoDB',    src: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Express.js', src: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'SQL',        src: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Python',     src: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Next.js',    src: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'CPP',        src: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'CSS',        src: 'https://cdn.simpleicons.org/css/663399' },
  { name: 'tailwindcss',src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Vercel',     src: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Html',       src: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'Unity',      src: 'https://cdn.simpleicons.org/unity/FFFFFF' },
]

const EXPERIENCES = [
  {
    date: '2024 — Present',
    role: 'Freelance MERN Developer',
    company: 'Upwork & Direct Clients',
    desc: 'Delivering full-stack web solutions for real clients across the globe. Built e-commerce stores, dashboards, and SaaS tools using the MERN stack. Handled everything from database design to deployment — solo.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Upwork'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    color: '#00ff87',
  },
  {
    date: '2023 — 2024',
    role: 'Frontend Developer',
    company: 'DevConst — Internship',
    desc: 'Worked on real client projects at DevConst. Built responsive React UIs, integrated REST APIs, and shipped production-ready interfaces under tight deadlines in an agile team.',
    tags: ['React', 'Tailwind', 'REST APIs', 'Git', 'Figma'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    color: '#00c3ff',
  },
  {
    date: '2020 — 2023',
    role: 'Self-Taught Developer',
    company: 'Personal Projects & Learning',
    desc: 'Spent 3 years going deep on C++, then JavaScript, then the full MERN stack. Built 10+ projects from scratch — no bootcamp, no shortcuts. Just code, break things, fix them, repeat.',
    tags: ['C++', 'JavaScript', 'Node.js', 'MongoDB', 'PHP'],
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80',
    color: '#a78bfa',
  },
]

const PROJECTS = [
  {
    num: '01',
    title: 'AI E-Learning Platform',
    featured: true,
    desc: 'My final year project — a full MERN platform with AI-driven personalized learning paths, real-time progress tracking, course management, and an admin panel. Live and working.',
    stack: ['React', 'Node.js', 'Firebase', 'Express', 'MongoDB'],
    image: project3image,
    demo: 'https://final-year-project-one-kappa.vercel.app/dashboard',
    github: 'https://github.com/Shmaiam',
  },
  {
    num: '02',
    title: 'E-Commerce Platform',
    featured: false,
    desc: 'Full-stack store with product management, cart, Stripe payments, JWT auth, and a complete admin dashboard. Built for a real client — handles live orders.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: project1image,
    demo: '#',
    github: 'https://github.com/Shmaiam',
  },
  {
    num: '03',
    title: 'AI Analytics Dashboard',
    featured: false,
    desc: 'Interactive data dashboard with real-time analytics, AI-powered insights, and live chart visualizations. Built with React and connected to a Python data backend.',
    stack: ['React', 'Python', 'Node.js', 'MongoDB'],
    image: project2image,
    demo: '#',
    github: 'https://github.com/Shmaiam',
  },
  {
    num: '04',
    title: 'Shopify E-Commerce Store',
    featured: false,
    desc: 'Custom Shopify store with a bespoke theme, payment integrations, inventory system, and mobile-optimized checkout. Delivered to a real client.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    image: project4image,
    demo: '#',
    github: 'https://github.com/Shmaiam',
  },
]

const TICKER_ITEMS = ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'SQL', 'Python', 'JavaScript', 'C++', 'PHP', '5 Years Coding', 'Open to Work']

function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (dot.current) { dot.current.style.left = e.clientX - 5 + 'px'; dot.current.style.top = e.clientY - 5 + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX - 18 + 'px'; ring.current.style.top = e.clientY - 18 + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (<><div className="cursor" ref={dot} /><div className="cursor-ring" ref={ring} /></>)
}

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
        <div className="nav-status"><span className="pulse" />Available for work</div>
        <button className={`nav-hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        {['skills','experience','projects','about','contact'].map(s => (
          <a key={s} href={`#${s}`} onClick={closeMenu}>{s}</a>
        ))}
        <div className="nav-drawer-status"><span className="pulse" />Available for work</div>
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
          <span className="ticker-item" key={i}><span>✦</span> {item}</span>
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
          <div className="hero-grid-label">// 5 years of code — still going</div>
          <div className="hero-tag">Full-Stack MERN Developer</div>
          <h1>
            Muhammad
            <span className="name-line2">Shmaiam.</span>
          </h1>
          <div className="hero-role">I build real products — not just demos</div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '480px', marginBottom: '32px' }}>
            Student. Self-taught. 5 years deep into code. I've shipped real projects for real clients on Upwork, at DevConst, and beyond. MERN stack is my weapon of choice.
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">See Real Work →</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>
        </div>
        <div style={{ animation: 'fadeUp 1s ease both', flexShrink: 0 }}>
          <div style={{ width: '280px', height: '320px', border: '1px solid var(--border2)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
            <img src={profilePic} alt="Muhammad Shmaiam" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', background: 'linear-gradient(transparent, rgba(6,8,13,0.95))', fontSize: '10px', letterSpacing: '2px', color: 'var(--green)', textTransform: 'uppercase' }}>
              Muhammad Shmaiam — MERN Dev
            </div>
          </div>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: '1px', marginTop: '1px', background: 'var(--border)' }}>
            {[['5+', 'Years'], ['10+', 'Projects'], ['3+', 'Clients']].map(([num, label]) => (
              <div key={label} style={{ flex: 1, background: 'var(--card)', padding: '12px 8px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--head)', fontSize: '18px', fontWeight: 900, color: 'var(--green)' }}>{num}</div>
                <div style={{ fontSize: '9px', letterSpacing: '1px', color: 'var(--muted)', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-scroll"><div className="scroll-line" />Scroll</div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="sec-header">
        <span className="sec-num">02</span>
        <h2 className="sec-title">What I Actually Use</h2>
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
      <p style={{ marginTop: '20px', fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px' }}>
        // These aren't just listed — every skill above has shipped code in a real project.
      </p>
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
        {EXPERIENCES.map((e, i) => (
          <div key={e.role} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 320px' : '320px 1fr', gap: '40px', padding: '40px 0', borderBottom: '1px solid var(--border)', alignItems: 'center', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}
            className="exp-row-img">

            {i % 2 !== 0 && (
              <div style={{ position: 'relative', height: '200px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                <img src={e.image} alt={e.role} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.7)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${e.color}18, transparent)` }} />
                <div style={{ position: 'absolute', top: 12, left: 12, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: e.color, background: 'rgba(6,8,13,0.85)', padding: '4px 10px', borderRadius: '2px', border: `1px solid ${e.color}44` }}>{e.date}</div>
              </div>
            )}

            <div className="exp-content">
              <div className="exp-date" style={{ color: e.color }}>{e.date}</div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-desc">{e.desc}</div>
              <div className="exp-tags">{e.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}</div>
            </div>

            {i % 2 === 0 && (
              <div style={{ position: 'relative', height: '200px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                <img src={e.image} alt={e.role} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.7)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${e.color}18, transparent)` }} />
                <div style={{ position: 'absolute', top: 12, left: 12, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: e.color, background: 'rgba(6,8,13,0.85)', padding: '4px 10px', borderRadius: '2px', border: `1px solid ${e.color}44` }}>{e.date}</div>
              </div>
            )}
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
        <h2 className="sec-title">Real Work</h2>
        <div className="sec-line" />
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.num}>
            <div style={{ width: '100%', height: '300px', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--border)', position: 'relative', background: 'var(--card)' }}>
              <img src={p.image} alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block', transition: 'transform .4s', position: 'absolute', top: 0, left: 0 }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {p.featured && (
                <div style={{ position: 'absolute', top: 10, right: 10, background: 'var(--green)', color: '#000', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>
                  ✦ Live Project
                </div>
              )}
            </div>
            <div className="proj-num">{p.num}</div>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-stack">{p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}</div>
            <div className="proj-links">
              <a href={p.demo} className="proj-link" target="_blank" rel="noreferrer"
                style={{ color: p.demo !== '#' ? 'var(--green)' : 'var(--muted)' }}>
                {p.demo !== '#' ? 'Live Demo →' : 'Coming Soon'}
              </a>
              <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">GitHub →</a>
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
          <p>I'm <strong>Muhammad Shmaiam</strong> — a developer from <strong>Pakistan</strong> who started coding at 15 and never stopped. 5 years in, I've gone from C++ fundamentals to shipping full-stack MERN applications for real clients.</p>
          <p>I'm both a <strong>university student and self-taught developer</strong>. I don't wait for assignments to build things — I've worked with clients on <strong>Upwork</strong>, interned at <strong>DevConst</strong>, and delivered projects for real businesses while still in school.</p>
          <p>My strongest tools: <strong>MERN stack, React, Node.js, SQL, and Python</strong>. I care about writing clean code that actually solves problems — not just code that looks good in a demo.</p>
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
            <div>&nbsp; <span className="t-key">"location"</span>: <span className="t-str">"Pakistan"</span>,</div>
            <div>&nbsp; <span className="t-key">"experience"</span>: <span className="t-str">"5 years"</span>,</div>
            <div>&nbsp; <span className="t-key">"type"</span>: <span className="t-str">"Student + Self-taught"</span>,</div>
            <div>&nbsp; <span className="t-key">"clients"</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp; <span className="t-str">"Upwork"</span>, <span className="t-str">"DevConst"</span>, <span className="t-str">"Direct"</span></div>
            <div>&nbsp; ],</div>
            <div>&nbsp; <span className="t-key">"core_stack"</span>: <span className="t-str">"MERN + SQL + Python"</span>,</div>
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
          <h3>Got a project? Let's ship it.</h3>
          <p>I'm available for freelance work, full-time roles, and collaboration. I've worked with real clients before — I know how to communicate, deliver on time, and write code that works in production.</p>
          <div className="contact-links">
            <a href="mailto:shmaiamking@gmail.com" className="contact-link">
              <span className="contact-link-icon">@</span>shmaiamking@gmail.com
            </a>
            <a href="https://github.com/Shmaiam" className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">⌥</span>github.com/Shmaiam
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shmaiam-b057b0283/" className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">in</span>linkedin.com/in/muhammad-shmaiam
            </a>
            <a href="https://www.upwork.com" className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">↗</span>Hire me on Upwork
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Your Name *</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label>Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary" disabled={loading}>
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
      <p>© 2025 Muhammad Shmaiam // Built with MERN</p>
      <div className="footer-links">
        <a href="https://github.com/Shmaiam" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-shmaiam-b057b0283/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.upwork.com" target="_blank" rel="noreferrer">Upwork</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}

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