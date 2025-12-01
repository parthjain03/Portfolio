'use client'

import { useState } from 'react'
import ProjectCard from './project-card'
import ProjectModal from './project-modal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 0,
      title: 'Project AgniAstra',
      description: 'India\'s first student-built supersonic sounding rocket. Led as Team Leader for Spaceport America Cup 2024 with predicted apogee of 30,085 feet.',
      year: '2024',
      technologies: ['Structural Design', 'Composites', 'Rocketry', 'Project Management'],
      detailedDescription: 'Project AgniAstra was thrustMIT\'s flagship entry to the Spaceport America Cup 2024, designed for the 30,000 ft COTS category with a design velocity of Mach 1.83. As Team Leader and Structural Design Engineer, I directed the complete development of the rocket, overseeing structural architecture, composite fabrication, subsystem integration, and recovery system design.\n\nAgniAstra featured the team\'s first-ever dual-bay recovery system and a pressure-based separation mechanism, marking a significant step forward in thrustMIT\'s systems capability. I also contributed to the development of a CO₂-based deployment concept explored during the design phase.\n\nThe rocket reached Mach 1.7 and an apogee of 17,010 ft, becoming India\'s first student-built supersonic rocket. Our team ranked 1st in Asia in the 30k COTS category and 7th worldwide in the Project Technical Report domain. The project combined analytical modelling with ANSYS-based verification, rigorous subsystem coordination, and full-scale mission execution.',
      reports: [
        { name: 'Project Technical Report', url: 'https://www.researchgate.net/publication/388969393_thrustMIT-_Project_AgniAstra_Team_56_Project_Technical_Report_to_the_2024_Spaceport_America_Cup' }
      ],
      videos: [
        { title: 'Project AgniAstra Overview', url: 'https://www.youtube.com/embed/PFUFqONfS50' }
      ],
      photos: [
        { alt: 'Team with assembled rocket motor', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rocket%20motor%20assembled-QPNv8fAJhDjr2Cl0vvr1lUdpStfZ6B.jpg' },
        { alt: 'Team at Spaceport America with Indian flag', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%201-y9OdtqLddo6lR9q83MAFsAfzJK1k1H.jpg' },
        { alt: 'Launch pad team', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Pad%20Team-PiTeay2Qb9vn6V0zmuMniWUACKtMCU.jpg' },
        { alt: 'AgniAstra on launch pad', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AgniAstra%20on%20launch%20pad-qVRTkA0gheKc5LVdxGk1GuWgcAkTwP.jpg' },
        { alt: 'Team with center of gravity indicator', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/With%20FoR-FxUHh073AVVvv6Q30yv8jpaZGQ5Yj2.jpg' },
        { alt: 'AgniAstra fully assembled', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AgniAstra%20Assembled%20on%2016th-TMsF4LHrObHcYTaw1ix39KnlGjfNkV.jpg' },
        { alt: 'Full team photo at Spaceport America Cup', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Photo-iEAsoreoBtXRjt33tPCjql8E91P9nZ.jpg' },
        { alt: 'Team at poster session', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poster%20session%20day-oUa36DOWdhfRUqjVNi5PDflmNajFc1.jpg' }
      ]
    },
    {
      id: 1,
      title: 'Project Altair',
      description: 'Sounding rocket for Spaceport America Cup 2023. Successfully achieved apogee of 10,331 feet with full recovery.',
      year: '2023',
      technologies: ['Structural Design', 'Fabrication', 'Simulations', 'Recovery Systems'],
      detailedDescription: 'thrustMIT\'s entry for the Spaceport America Cup 2023 targeting 10,000 feet AGL. My responsibilities included fabrication of the airframe, structural simulations on rocket components, and support to senior team members throughout the project. The rocket successfully achieved 10,331 feet apogee and was fully recovered, validating our structural and propulsion designs.',
      reports: [],
      videos: [],
      photos: []
    },
    {
      id: 2,
      title: 'NACDeC VII - Team FlightForge',
      description: 'National Aerospace Conceptual Design Competition. Secured 2nd place among 45 national teams with Martian atmospheric research UAV. Won ₹1,25,000 cash prize.',
      year: '2024',
      technologies: ['UAV Design', 'Structural Analysis', 'Solar Systems', 'Aerodynamics'],
      detailedDescription: 'Led structural analysis and design for Team FlightForge at the 7th National Aerospace Conceptual Design Competition. The team conceptualized a solar-powered UAV intended for studying the Martian planetary boundary layer (first 100 meters above surface). I designed an innovative solar panel deployment and restoration mechanism and performed detailed structural and aerodynamic analysis for extreme Martian atmospheric conditions. The competition win demonstrates excellence in aerospace conceptual design at the national level.',
      reports: [],
      videos: [],
      photos: []
    },
    {
      id: 3,
      title: 'Project Lil BT',
      description: 'Subscale rocket designed to test avionics and dual deployment systems with target apogee of 2,000 feet.',
      year: '2024',
      technologies: ['Avionics', 'Composite Structures', 'Deployment Systems', 'Testing'],
      detailedDescription: 'A subscale rocket project designed to validate avionics systems and dual deployment mechanisms. The project targets an apogee of 2,000 feet and focuses on executing a successful flight to validate the J590P motor\'s performance and assess CFRP fin behavior for flutter analysis.',
      reports: [],
      videos: [],
      photos: []
    },
    {
      id: 4,
      title: 'Vertical Static Rocket Motor Test Bed',
      description: 'Test facility at End Point, Manipal for static fire testing. Supports remote ignition and data acquisition with load cell instrumentation.',
      year: '2023–Present',
      technologies: ['Test Engineering', 'Manufacturing', 'Data Acquisition', 'Safety Systems'],
      detailedDescription: 'Designed and assembled a vertical test bed for rocket motor static fire testing. The facility is constructed using aluminum extrusions and fixtures with RCC foundation, equipped with a data acquisition system comprising load cells and electronics. The test bed supports remote ignition and safely contains damages in case of CATO or rapid unscheduled disassembly. Responsibilities include manufacturing and assembly of components and periodic safety upgrades.',
      reports: [],
      videos: [],
      photos: []
    },
    {
      id: 5,
      title: 'ISRO - Venusian Aerothermal Braking Simulations',
      description: 'Thermal systems research at U R Rao Satellite Centre working on aerothermal braking simulations for Venus atmospheric conditions.',
      year: '2024',
      technologies: ['CFD', 'Rarefied Gas Dynamics', 'MATLAB', 'SPARTA', 'ParaView'],
      detailedDescription: 'Working in the Thermal Systems Group at ISRO\'s U R Rao Satellite Centre on high-fidelity aerothermal braking simulations for Venusian atmospheric entry conditions. Utilizing SPARTA (Stochastic PARTicle Advection) for accurate rarefied gas dynamics modeling. Developed MATLAB scripts to automate data processing and visualization in ParaView, optimizing the simulation workflow for critical mission phases. This research contributes to future Venus exploration missions.',
      reports: [],
      videos: [],
      photos: []
    }
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Projects</h2>
          <div className="w-12 h-px bg-accent/50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
