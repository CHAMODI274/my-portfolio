export default function About() {
  const traits = ['Problem-Solving','Attention to Detail','Effective Communication','Teamwork','Adaptability','Time Management','Quick Learner','Agile Methodology']

  const info = [
    { label: 'Location',     value: 'Panadura, Sri Lanka' },
    { label: 'Degree',       value: 'MSc Information Technology (Reading)' },
    { label: 'University',   value: 'University of Westminster via IIT' },
    { label: 'Email',        value: 'chamodibit2022@gmail.com' },
    { label: 'Phone',        value: '+94 76 798 6468' },
    { label: 'Availability', value: 'Open to QA & Dev Roles', highlight: true },
  ]

  return (
    <section id="about" style={{padding:'100px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>

        <p style={{fontSize:'12px',fontWeight:600,color:'#94a3b8',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>
          About Me
        </p>

        <div style={{display:'flex',gap:'64px',alignItems:'flex-start',flexWrap:'wrap'}}>

          {/* Photo + stats */}
          <div style={{flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
            <div style={{width:'180px',height:'180px',borderRadius:'16px',border:'1px solid #2a2d35',background:'linear-gradient(135deg,#1e1b3a,#13151d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'72px'}}>
              👩‍💻
            </div>
            <div style={{display:'flex',gap:'12px'}}>
              {[['4+','Projects'],['MSc','Reading']].map(([n,l]) => (
                <div key={l} style={{background:'#13151d',border:'1px solid #1e2028',borderRadius:'12px',padding:'12px 20px',textAlign:'center'}}>
                  <div style={{fontSize:'22px',fontWeight:600,color:'#f1f5f9'}}>{n}</div>
                  <div style={{fontSize:'12px',color:'#475569',marginTop:'4px'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div style={{flex:1,minWidth:'280px'}}>
            <h2 style={{fontSize:'36px',fontWeight:600,color:'#f1f5f9',marginBottom:'8px',letterSpacing:'-0.01em'}}>
              Hi, I am <span style={{color:'#7c6ef7'}}>Chamodi Sanjana</span>
            </h2>
            <p style={{fontSize:'15px',color:'#7c6ef7',marginBottom:'28px'}}>
              MSc IT Candidate · Aspiring Quality Assurance Engineer · Sri Lanka
            </p>

            <p style={{fontSize:'16px',color:'#64748b',lineHeight:1.75,marginBottom:'20px'}}>
              I am a motivated and detail-oriented MSc Information Technology student with a strong
              foundation in software development and software testing. Skilled in API testing, test
              case design, bug reporting, and quality assurance practices through academic and personal projects.
            </p>
            <p style={{fontSize:'16px',color:'#64748b',lineHeight:1.75,marginBottom:'36px'}}>
              Passionate about ensuring software quality, learning emerging technologies, and contributing
              to high-performing development teams. I bring both a developer and a tester mindset to every project.
            </p>

            {/* Trait tags */}
            <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'40px'}}>
              {traits.map(t => (
                <span key={t} style={{fontSize:'13px',background:'rgba(124,110,247,0.08)',color:'#a89ff7',border:'1px solid rgba(124,110,247,0.2)',padding:'6px 14px',borderRadius:'99px'}}>
                  {t}
                </span>
              ))}
            </div>

            {/* Info grid */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'12px'}}>
              {info.map(({label, value, highlight}) => (
                <div key={label} style={{background:'#13151d',border:'1px solid #1e2028',borderRadius:'12px',padding:'16px 20px'}}>
                  <p style={{fontSize:'11px',color:'#475569',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'6px'}}>{label}</p>
                  <p style={{fontSize:'14px',color: highlight ? '#1d9e75' : '#cbd5e1',fontWeight:highlight?500:400}}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}