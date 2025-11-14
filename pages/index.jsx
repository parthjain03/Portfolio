import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from '../src/theme'
import projects from '../src/projects'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Parth Jain — Systems Engineer</title>
        <meta name="description" content="Parth Jain — Systems Engineer at Eon Space Labs. Aerospace projects, ISRO internship, thrustMIT, reports and tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="container">
        <header className="header">
          <div className="profile">
            <img src="/profile.jpg" alt="Parth Jain" className="avatar" />
            <div>
              <h1 className="title">Parth Jain</h1>
              <p className="subtitle">Systems Engineer · Eon Space Labs — Aerospace • Tools • Simulation</p>
            </div>
          </div>

          <div className="controls">
            <button className="themeBtn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
            <a className="cta" href="/resume.pdf" download>Download Résumé</a>
          </div>
        </header>

        <section className="section about">
          <h2 className="sectionTitle">About</h2>
          <p className="lead">Aeronautical engineer from Manipal Institute of Technology. I design and integrate flight hardware, build simulation pipelines and small utilities to speed up engineering workflows. I like minimal, considered design.</p>
        </section>

        <section className="section twoCol">
          <div>
            <h3 className="sectionTitle">Experience</h3>
            <div className="item">
              <strong>Eon Space Labs</strong>
              <div className="muted">Systems Engineer — Systems integration, thermal & structures coordination.</div>
            </div>
            <div className="item">
              <strong>U R Rao Satellite Centre (ISRO)</strong>
              <div className="muted">Intern — Thermal Systems Group.</div>
            </div>
            <div className="item">
              <strong>thrustMIT</strong>
              <div className="muted">Project Lead — AgniAstra high-power rocketry.</div>
            </div>
          </div>

          <div>
            <h3 className="sectionTitle">Education</h3>
            <div className="item">
              <strong>B.Tech — Aeronautical Engineering</strong>
              <div className="muted">Manipal Institute of Technology</div>
            </div>

            <h3 className="sectionTitle" style={{marginTop:24}}>Awards & Highlights</h3>
            <ul className="list">
              <li>AgniAstra — supersonic flight at Spaceport America Cup</li>
              <li>2nd place — NACDeC (FlightForge)</li>
              <li>Qualified for Airbus Sloshing Workshop</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="sectionTitle">Projects</h2>
          <div className="projectsGrid">
            {projects.map(p => (
              <article key={p.id} className="projectCard">
                <div className="projectMeta">
                  <h4>{p.title}</h4>
                  <p className="muted">{p.subtitle}</p>
                </div>
                <div className="projectActions">
                  <Link href={`/projects/${p.id}`} className="linkBtn">View project</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="sectionTitle">Tools</h2>
          <p className="muted">Small HTML/JS utilities to speed up engineering (drop files to <code>/public/tools</code>).</p>
          <ul className="list">
            <li><a href="/tools/area_calc.html">Area / Volume calculator</a></li>
            <li><a href="/tools/unit_convert.html">Unit converter</a></li>
            <li><a href="/tools/tolerance_check.html">Tolerance checker</a></li>
          </ul>
        </section>

        <section className="section contact">
          <h2 className="sectionTitle">Contact</h2>
          <p>Email: <a href="mailto:parth@example.com">parth@example.com</a></p>
          <div className="muted">Replace with your preferred contact and social links.</div>
        </section>

        <footer className="footer">© Parth Jain — Built with care • Replace placeholders in <code>/public</code></footer>
      </main>
    </>
  )
}