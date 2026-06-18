export default function Projects() {

  const projects = [
    {
      title: 'School Information Management System',
      description: 'Full-stack web app for Sri Lankan government schools to manage student records, attendance, examinations, and reporting. Designed 25+ RESTful API endpoints with role-based auth. Conducted functional, regression, and API testing using Postman and Swagger.',
      tags: ['ASP.NET Core', 'React.js', 'MySQL', 'Entity Framework', 'JWT', 'Postman', 'Swagger'],
      icon: '🏫',
      iconBg: '#1e1b3a',
      iconColor: '#7c6ef7',
      github: 'https://github.com/CHAMODI274/School-Information-Management-System-SriLanka',
      live: '#',
      type: 'MSc Final Year Project · 2025-2026',
    },
    {
      title: 'Library Management System',
      description: 'Full-stack application managing books, users, loans, authors, and publishers with role-based access and real-time features. Built React.js frontend with JWT auth and .NET Core backend. Tested RESTful APIs using Swagger and Postman.',
      tags: ['React.js', '.NET Core', 'SQLite', 'JWT', 'Swagger', 'Postman', 'Bootstrap'],
      icon: '📚',
      iconBg: '#0d2520',
      iconColor: '#1d9e75',
      github: 'https://github.com/CHAMODI274/LibrarySystemFrontend',
      live: '#',
      type: 'MSc Individual Project · 2025',
    },
    {
      title: 'Budget Manager iOS App',
      description: 'iOS app for financial tracking using MVVM architecture, Core Data persistence, and Swift Charts. Designed and executed test scenarios for budgeting and reporting. Conducted unit testing using XCTest and manual usability testing.',
      tags: ['Swift', 'SwiftUI', 'Core Data', 'XCTest', 'Swift Charts', 'Figma'],
      icon: '💰',
      iconBg: '#0d1a2e',
      iconColor: '#378add',
      github: 'https://github.com/CHAMODI274/Personal-Budget-Manager-App',
      live: '#',
      type: 'MSc Group Project (Team of 2) · 2025',
    },
    {
      title: 'Financial Calculator iOS App',
      description: 'iOS application featuring savings, loan, and mortgage calculators. Created unit tests using XCTest to validate financial calculations. Designed test cases covering valid, invalid, and boundary-value inputs.',
      tags: ['Swift', 'SwiftUI', 'UserDefaults', 'XCTest', 'Figma'],
      icon: '🧮',
      iconBg: '#2a1f0a',
      iconColor: '#ef9f27',
      github: 'https://github.com/CHAMODI274/Financial-Calculator-Fincalc',
      live: '#',
      type: 'MSc Individual Project · 2025',
    },
  ]

  return (
    <section id="projects" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <div className="flex items-center justify-between mb-12">
          <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">
            Projects
          </p>
          <a href="https://github.com/CHAMODI274" target="_blank" rel="noreferrer"
            className="text-xs text-[#7c6ef7] hover:text-white transition-colors">
            View all on GitHub ↗
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#13151d] border border-[#1e2028] rounded-xl p-6 hover:border-[#7c6ef7]/40 transition-colors group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{background: project.iconBg, color: project.iconColor}}
                >
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="text-xs text-[#475569] hover:text-white transition-colors">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#7c6ef7] mb-1">{project.type}</p>
              <h3 className="text-sm font-medium text-[#cbd5e1] mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#1a1c24] text-[#64748b] border border-[#2a2d35] px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}