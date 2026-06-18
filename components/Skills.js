export default function Skills() {

  const skillCategories = [
    {
      label: 'Software Testing & QA',
      skills: [
        { name: 'Manual Testing',      icon: '🧪', color: 'text-[#7c6ef7]' },
        { name: 'API Testing',         icon: '🔗', color: 'text-[#7c6ef7]' },
        { name: 'Functional Testing',  icon: '✅', color: 'text-[#1d9e75]' },
        { name: 'Regression Testing',  icon: '🔄', color: 'text-[#1d9e75]' },
        { name: 'Test Case Design',    icon: '📝', color: 'text-[#94a3b8]' },
        { name: 'Bug Reporting',       icon: '🐛', color: 'text-[#ef9f27]' },
        { name: 'SDLC / STLC',        icon: '♻️', color: 'text-[#94a3b8]' },
        { name: 'Agile Methodology',   icon: '⚡', color: 'text-[#378add]' },
      ],
    },
    {
      label: 'Test Automation & API Tools',
      skills: [
        { name: 'Postman',    icon: '📮', color: 'text-[#ef9f27]' },
        { name: 'Swagger',    icon: '📖', color: 'text-[#1d9e75]' },
        { name: 'Playwright', icon: '🎭', color: 'text-[#7c6ef7]' },
        { name: 'XCTest',     icon: '🍎', color: 'text-[#94a3b8]' },
        { name: 'RESTful API Testing', icon: '🔌', color: 'text-[#378add]' },
      ],
    },
    {
      label: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: 'JS', color: 'text-[#f7df1e]' },
        { name: 'Java',       icon: '☕', color: 'text-[#ef9f27]' },
        { name: 'C#',         icon: '#',  color: 'text-[#7c6ef7]' },
        { name: 'Swift',      icon: '🐦', color: 'text-[#f05138]' },
        { name: 'SQL',        icon: '🗄️', color: 'text-[#378add]' },
      ],
    },
    {
      label: 'Web & Software Development',
      skills: [
        { name: 'React.js',           icon: '⚛️', color: 'text-[#61dafb]' },
        { name: 'ASP.NET Core',       icon: '💠', color: 'text-[#7c6ef7]' },
        { name: 'Entity Framework',   icon: '🗃️', color: 'text-[#7c6ef7]' },
        { name: 'HTML & CSS',         icon: '🌐', color: 'text-[#e34f26]' },
        { name: 'Bootstrap',          icon: '🅱️', color: 'text-[#7952b3]' },
        { name: 'SwiftUI',            icon: '🍎', color: 'text-[#f05138]' },
      ],
    },
    {
      label: 'Databases & Tools',
      skills: [
        { name: 'MySQL',       icon: '🐬', color: 'text-[#4479a1]' },
        { name: 'SQLite',      icon: '📦', color: 'text-[#94a3b8]' },
        { name: 'Git & GitHub',icon: '🌿', color: 'text-[#f05032]' },
        { name: 'Figma',       icon: '🎨', color: 'text-[#a259ff]' },
        { name: 'Trello',      icon: '📋', color: 'text-[#378add]' },
        { name: 'VS Code',     icon: '💻', color: 'text-[#007acc]' },
        { name: 'Xcode',       icon: '🔨', color: 'text-[#94a3b8]' },
        { name: 'IntelliJ',    icon: '🧠', color: 'text-[#fe315d]' },
      ],
    },
  ]

  return (
    <section id="skills" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Skills
        </p>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <p className="text-xs text-[#475569] uppercase tracking-widest mb-5">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 bg-[#13151d] border border-[#1e2028] rounded-lg px-4 py-3 hover:border-[#7c6ef7]/50 transition-colors group cursor-default"
                  >
                    <span className={`text-base ${skill.color} w-5 text-center leading-none`}>
                      {skill.icon}
                    </span>
                    <span className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}