export default function Certifications() {
  const certs = [
    { name:'IT Project Management Skills Program', issuer:'University of Moratuwa — Open Learning Platform', date:'2026 (Ongoing)', icon:'📋', iconBg:'#0d1a2e', iconColor:'#3b82f6', status:'In Progress', statusStyle:{color:'#f59e0b',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.2)'} },
    { name:'Trainee — Full Stack Developer Program', issuer:'University of Moratuwa — Open Learning Platform', date:'2026 (Ongoing)', icon:'💻', iconBg:'#0a1628', iconColor:'#60a5fa', status:'In Progress', statusStyle:{color:'#f59e0b',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.2)'} },
    { name:'Diploma in ICT', issuer:'SITC Campus', date:'2023 – 2024', icon:'🎓', iconBg:'#0d2010', iconColor:'#22c55e', status:'Completed', statusStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.2)'} },
    { name:'Diploma in English', issuer:'SITC Campus', date:'2022 – 2023', icon:'🌐', iconBg:'#0d1a2e', iconColor:'#38bdf8', status:'Completed', statusStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.2)'} },
    { name:'Diploma in ICT', issuer:'IMBS Campus', date:'2021 – 2022', icon:'🎓', iconBg:'#1a1200', iconColor:'#fbbf24', status:'Completed', statusStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.2)'} },
  ]

  return (
    <section id="certifications" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>Licences & Certifications</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'14px'}}>
          {certs.map((cert,i) => (
            <div key={i} style={{background:'#0d1117',border:'1px solid #0f1520',borderRadius:'14px',padding:'22px',display:'flex',flexDirection:'column',gap:'14px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'38px',height:'38px',borderRadius:'10px',background:cert.iconBg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',flexShrink:0}}>{cert.icon}</div>
                <h3 style={{fontSize:'14px',fontWeight:600,color:'#cbd5e1',lineHeight:1.4}}>{cert.name}</h3>
              </div>
              <div>
                <p style={{fontSize:'12px',color:'#64748b',marginBottom:'10px'}}>{cert.issuer}</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <span style={{fontSize:'12px',color:'#475569'}}>{cert.date}</span>
                  <span style={{fontSize:'11px',padding:'3px 10px',borderRadius:'6px',...cert.statusStyle}}>{cert.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}