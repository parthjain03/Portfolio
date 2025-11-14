import { useRouter } from 'next/router'
import Link from 'next/link'
import projects from '../../src/projects'
import Head from 'next/head'
import { useTheme } from '../../src/theme'

export default function ProjectPage(){
  const router = useRouter()
  const { id } = router.query
  const project = projects.find(p => p.id === id)
  const { theme } = useTheme()

  if(!project) return (
    <main className="container">
      <p>Loading or project not found.</p>
      <p><Link href="/">Back home</Link></p>
    </main>
  )

  return (
    <>
      <Head>
        <title>{project.title} — Parth Jain</title>
      </Head>

      <main className="container">
        <Link href="/" className="back">← Back</Link>

        <article className="projectDetail">
          <h1>{project.title}</h1>
          <p className="muted">{project.subtitle}</p>
          <p className="lead">{project.description}</p>

          <div style={{marginTop:18, display:'flex', gap:12}}>
            {project.report && <a className="cta" href={project.report} download>Download report</a>}
            <a className="linkBtn" href="/">All projects</a>
          </div>

          <div style={{marginTop:22}}>
            <h4>Photos & attachments</h4>
            <div className="photos">
              {project.photos && project.photos.length > 0 ? project.photos.map((src,i)=> (
                <img key={i} src={src} alt={`${project.title} ${i+1}`} />
              )) : <div className="muted">No photos yet — drop images in <code>/public/projects/{project.id}/</code></div>}
            </div>
          </div>
        </article>

      </main>
    </>
  )
}
