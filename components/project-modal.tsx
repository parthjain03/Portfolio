'use client'

import Image from 'next/image'

interface ProjectFile {
  name: string
  url: string
}

interface ProjectVideo {
  title: string
  url: string
}

interface ProjectPhoto {
  alt: string
  url: string
}

interface Project {
  id: number
  title: string
  description: string
  year: string
  technologies: string[]
  detailedDescription: string
  reports: ProjectFile[]
  videos: ProjectVideo[]
  photos: ProjectPhoto[]
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Split description by || separator to create paragraphs
  const paragraphs = project.detailedDescription.split('||')

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-background border border-accent/30 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-accent/30 p-8 flex items-start justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-accent/60">{project.year}</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-foreground/50 hover:text-foreground transition-colors"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-12">
          {/* Description */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Overview</h3>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent/10 text-accent/80 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Photos Gallery */}
          {project.photos.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Photos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.photos.map((photo, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden">
                    <img
                      src={photo.url || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {project.videos.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.videos.map((video, index) => (
                  <div key={index} className="rounded-lg overflow-hidden bg-card">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="p-4 text-sm font-medium">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports Download */}
          {project.reports.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Reports & Documents</h3>
              <div className="space-y-3">
                {project.reports.map((report, index) => (
                  <a
                    key={index}
                    href={report.url}
                    download
                    className="flex items-center gap-3 p-4 border border-accent/30 rounded hover:bg-card transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-foreground">{report.name}</p>
                      <p className="text-xs text-foreground/50">Click to download</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
