export default function Projects() {

  const projects = [
    {
      title: 'SaaS Dashboard',
      description: 'Real-time analytics platform with multi-tenant auth, role-based access control, and live data visualizations.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
      icon: '📊',
      iconBg: '#1e1b3a',
      iconColor: '#7c6ef7',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'AI Chat App',
      description: 'LLM-powered chatbot with streaming responses, conversation history, and multi-model support.',
      tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
      icon: '🤖',
      iconBg: '#0d2520',
      iconColor: '#1d9e75',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'E-Commerce API',
      description: 'REST + GraphQL API with inventory management, order processing, and Stripe payment integration.',
      tags: ['Express', 'GraphQL', 'Redis', 'MongoDB'],
      icon: '🛒',
      iconBg: '#0d1a2e',
      iconColor: '#378add',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance app with budgeting tools, interactive charts, and bank CSV import.',
      tags: ['React', 'Recharts', 'Prisma', 'PostgreSQL'],
      icon: '📈',
      iconBg: '#2a1f0a',
      iconColor: '#ef9f27',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Real-time Chat',
      description: 'WebSocket-based group chat with rooms, typing indicators, and AWS S3 media upload.',
      tags: ['Socket.io', 'MongoDB', 'AWS S3', 'Node.js'],
      icon: '💬',
      iconBg: '#1e1b3a',
      iconColor: '#7c6ef7',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Task Manager PWA',
      description: 'Offline-capable progressive web app with drag-and-drop Kanban boards and local sync.',
      tags: ['React', 'PWA', 'IndexedDB', 'Tailwind'],
      icon: '✅',
      iconBg: '#0d2520',
      iconColor: '#1d9e75',
      github: '#',
      live: '#',
      featured: false,
    },
  ]

  return (
    <section id="projects" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">
            Projects
          </p>
          <a href="#" className="text-xs text-[#7c6ef7] hover:text-white transition-colors">
            View all on GitHub ↗
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#13151d] border border-[#1e2028] rounded-xl p-5 hover:border-[#7c6ef7]/40 transition-colors group flex flex-col"
            >
              {/* Top row */}
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
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="text-xs text-[#475569] hover:text-white transition-colors">
                    Live ↗
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-[#cbd5e1] mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#475569] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#1a1c24] text-[#64748b] border border-[#2a2d35] px-2.5 py-1 rounded-md"
                  >
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