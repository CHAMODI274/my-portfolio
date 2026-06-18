export default function Certifications() {

  const certifications = [
    {
      name: 'IT Project Management Skills Program',
      issuer: 'University of Moratuwa — Open Learning Platform',
      date: '2026 (Ongoing)',
      icon: '📋',
      iconBg: '#0d1a35',
      iconColor: '#378add',
      credentialUrl: '#',
      status: 'In Progress',
      statusColor: 'text-[#ef9f27] bg-[#ef9f27]/10 border-[#ef9f27]/20',
    },
    {
      name: 'Trainee — Full Stack Developer Program',
      issuer: 'University of Moratuwa — Open Learning Platform',
      date: '2026 (Ongoing)',
      icon: '💻',
      iconBg: '#1e1b3a',
      iconColor: '#7c6ef7',
      credentialUrl: '#',
      status: 'In Progress',
      statusColor: 'text-[#ef9f27] bg-[#ef9f27]/10 border-[#ef9f27]/20',
    },
    {
      name: 'Diploma in ICT',
      issuer: 'SITC Campus',
      date: '2023 - 2024',
      icon: '🎓',
      iconBg: '#0d2520',
      iconColor: '#1d9e75',
      credentialUrl: '#',
      status: 'Completed',
      statusColor: 'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
    },
    {
      name: 'Diploma in English',
      issuer: 'SITC Campus',
      date: '2022 - 2023',
      icon: '🌐',
      iconBg: '#0d1a2e',
      iconColor: '#378add',
      credentialUrl: '#',
      status: 'Completed',
      statusColor: 'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
    },
    {
      name: 'Diploma in ICT',
      issuer: 'IMBS Campus',
      date: '2021 - 2022',
      icon: '🎓',
      iconBg: '#2a1f0a',
      iconColor: '#ef9f27',
      credentialUrl: '#',
      status: 'Completed',
      statusColor: 'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
    },
  ]

  return (
    <section id="certifications" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Licences & Certifications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#13151d] border border-[#1e2028] rounded-xl p-5 hover:border-[#7c6ef7]/40 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{background: cert.iconBg, color: cert.iconColor}}
                >
                  {cert.icon}
                </div>
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
                  className="text-xs text-[#475569] hover:text-[#7c6ef7] transition-colors">
                  View ↗
                </a>
              </div>

              <h3 className="text-sm font-medium text-[#cbd5e1] mb-1 leading-snug group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-[#64748b] mb-3">{cert.issuer}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#475569]">{cert.date}</span>
                <span className={`text-xs border px-2 py-0.5 rounded-md ${cert.statusColor}`}>
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}