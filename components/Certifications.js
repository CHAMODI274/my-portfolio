export default function Certifications() {

  const certifications = [
    {
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: 'Jun 2023',
      icon: '☁️',
      iconBg: '#1f1500',
      iconColor: '#ff9900',
      credentialUrl: '#',
    },
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta / Coursera',
      date: 'Jan 2024',
      icon: '⬡',
      iconBg: '#0d1a35',
      iconColor: '#1877f2',
      credentialUrl: '#',
    },
    {
      name: 'Google Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'Mar 2024',
      icon: '◈',
      iconBg: '#0d1a10',
      iconColor: '#34a853',
      credentialUrl: '#',
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Aug 2023',
      icon: '🍃',
      iconBg: '#0d200d',
      iconColor: '#4db33d',
      credentialUrl: '#',
    },
    {
      name: 'Microsoft Azure Fundamentals AZ-900',
      issuer: 'Microsoft',
      date: 'Oct 2023',
      icon: '◫',
      iconBg: '#0d1525',
      iconColor: '#0078d4',
      credentialUrl: '#',
    },
    {
      name: 'Complete Full-Stack Web Bootcamp',
      issuer: 'Udemy',
      date: 'Apr 2022',
      icon: '🎓',
      iconBg: '#1f0d2a',
      iconColor: '#a435f0',
      credentialUrl: '#',
    },
  ]

  return (
    <section id="certifications" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        {/* Section label */}
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Licences & Certifications
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-[#13151d] border border-[#1e2028] rounded-xl p-5 hover:border-[#7c6ef7]/40 transition-colors group"
            >
              {/* Top row — icon + verify link */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{background: cert.iconBg, color: cert.iconColor}}
                >
                  {cert.icon}
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#475569] hover:text-[#7c6ef7] transition-colors"
                >
                  Verify ↗
                </a>
              </div>

              {/* Cert name */}
              <h3 className="text-sm font-medium text-[#cbd5e1] mb-1 leading-snug group-hover:text-white transition-colors">
                {cert.name}
              </h3>

              {/* Issuer + date */}
              <p className="text-xs text-[#64748b] mb-3">{cert.issuer}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#475569]">Issued {cert.date}</span>
                <span className="text-xs bg-[#7c6ef7]/10 text-[#a89ff7] border border-[#7c6ef7]/20 px-2 py-0.5 rounded-md">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}