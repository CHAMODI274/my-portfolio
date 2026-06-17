export default function Skills() {

  const skillCategories = [
    {
      label: 'Frontend',
      skills: [
        { name: 'React',       icon: '⚛️',  color: 'text-[#61dafb]' },
        { name: 'Next.js',     icon: '▲',   color: 'text-white'     },
        { name: 'TypeScript',  icon: 'TS',  color: 'text-[#3178c6]' },
        { name: 'Tailwind CSS',icon: '🌊',  color: 'text-[#38bdf8]' },
        { name: 'JavaScript',  icon: 'JS',  color: 'text-[#f7df1e]' },
        { name: 'HTML & CSS',  icon: '🌐',  color: 'text-[#e34f26]' },
      ],
    },
    {
      label: 'Backend',
      skills: [
        { name: 'Node.js',   icon: '🟢', color: 'text-[#68a063]' },
        { name: 'Python',    icon: '🐍', color: 'text-[#ffd845]' },
        { name: 'REST APIs', icon: '🔗', color: 'text-[#94a3b8]' },
        { name: 'GraphQL',   icon: '◉',  color: 'text-[#e10098]' },
        { name: 'Express',   icon: '⚡', color: 'text-[#94a3b8]' },
      ],
    },
    {
      label: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: '🐘', color: 'text-[#336791]' },
        { name: 'MongoDB',    icon: '🍃', color: 'text-[#4db33d]' },
        { name: 'Redis',      icon: '🔴', color: 'text-[#d82c20]' },
        { name: 'MySQL',      icon: '🗄️', color: 'text-[#4479a1]' },
        { name: 'Prisma',     icon: '◈',  color: 'text-[#94a3b8]' },
      ],
    },
    {
      label: 'DevOps & Tools',
      skills: [
        { name: 'Docker',  icon: '🐳', color: 'text-[#2496ed]' },
        { name: 'AWS',     icon: '☁️', color: 'text-[#ff9900]' },
        { name: 'Git',     icon: '🌿', color: 'text-[#f05032]' },
        { name: 'Linux',   icon: '🐧', color: 'text-[#94a3b8]' },
        { name: 'Vercel',  icon: '▲',  color: 'text-white'     },
        { name: 'CI/CD',   icon: '⚙️', color: 'text-[#94a3b8]' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 border-t border-[#1e2028]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-10">
          Skills
        </p>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category) => (
            <div key={category.label}>

              {/* Category title */}
              <p className="text-xs text-[#475569] uppercase tracking-widest mb-4">
                {category.label}
              </p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[#13151d] border border-[#1e2028] rounded-lg px-4 py-2.5 hover:border-[#7c6ef7]/50 transition-colors group"
                  >
                    <span className={`text-base ${skill.color} w-5 text-center`}>
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