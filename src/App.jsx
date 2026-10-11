import { navigation, profile } from './data/profile.js';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>H<span>.</span></a>
        <nav aria-label="Main navigation">
          {navigation.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`}>{section}</a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <p className="eyebrow"><span className="status-dot" /> {profile.departmentShort.toUpperCase()} · {profile.institution}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-copy">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#contact">Let’s connect</a>
          </div>
          <div className="hero-note"><span>01 / 06</span><span>Portfolio · {new Date().getFullYear()}</span></div>
          <div className="hero-mark" aria-hidden="true">H<span>.</span></div>
        </section>

        <section className="intro section-shell" id="about">
          <p className="section-index">01 — A LITTLE ABOUT ME</p>
          <div>
            <h2>Curious by nature.<br /><span>Thoughtful by design.</span></h2>
            <p>{profile.about}</p>
          </div>
          <aside className="academic-card"><span>ACADEMIC HIGHLIGHT</span><strong>{profile.cgpa}</strong><small>CGPA · {profile.departmentShort}</small></aside>
        </section>

        <section className="phase-note" aria-label="Project setup status">
          <span className="phase-number">PHASE 01</span>
          <p>The project foundation is in place. Education, skills, projects, learning, and contact content will be added in the next implementation phases.</p>
          <a href="/api/health" target="_blank" rel="noreferrer">Check API health <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="site-footer"><a className="brand" href="#home">H<span>.</span></a><span>{profile.name} · {new Date().getFullYear()}</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
