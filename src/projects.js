const projects = [
  {
    id: 'agni',
    title: 'AgniAstra — High-power rocket',
    subtitle: 'Design, motor testing & flight — Spaceport America Cup',
    report: '/reports/agni_report.pdf',
    photos: ['/projects/agni/photo1.jpg','/projects/agni/photo2.jpg'],
    description: 'Led design and integration for a student high-power rocket which achieved supersonic flight during competition. Includes motor test logs and flight telemetry.'
  },
  {
    id: 'nacdec',
    title: 'NACDeC — Martian boundary layer UAV',
    subtitle: 'Team FlightForge — 2nd place (NACDeC)',
    report: '/reports/nacdec_report.pdf',
    photos: ['/projects/nacdec/photo1.jpg'],
    description: 'Conceptual design of a UAV to study the planetary boundary layer on Mars; trade studies and mission design.'
  },
  {
    id: 'venus',
    title: 'Venus Aerobraking Simulation',
    subtitle: 'SPARTA + ParaView pipeline & automation',
    report: '/reports/venus_aerobraking.pdf',
    photos: [],
    description: 'A simulation pipeline to run SPARTA at multiple trajectory points and convert outputs for ParaView post-processing.'
  },
  {
    id: 'sloshing',
    title: 'Airbus Sloshing Workshop',
    subtitle: 'Bottle rocket hardware + slosh simulations',
    report: '/reports/slosh_report.pdf',
    photos: [],
    description: 'Sloshing simulations and hardware to prepare for the Airbus workshop.'
  }
]

export default projects
