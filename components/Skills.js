export default function Skills() {
  const categories = [
    {
      title:'Software Testing & QA', icon:'🧪',
      color:'#3b82f6', bg:'rgba(37,99,235,0.08)', border:'rgba(37,99,235,0.2)',
      skills:['Manual Testing','Functional Testing','Regression Testing','Smoke Testing','Test Case Design','Test Execution','Bug Reporting','SDLC / STLC','Agile Methodology'],
    },
    {
      title:'Test Automation & API Testing', icon:'⚡',
      color:'#22c55e', bg:'rgba(34,197,94,0.08)', border:'rgba(34,197,94,0.2)',
      skills:['Postman','Swagger','Playwright','XCTest','RESTful API Testing','API Documentation'],
    },
    {
      title:'Programming Languages', icon:'💻',
      color:'#60a5fa', bg:'rgba(96,165,250,0.08)', border:'rgba(96,165,250,0.2)',
      skills:['Java','JavaScript','C#','Swift','SQL'],
    },
    {
      title:'Web & Software Development', icon:'🌐',
      color:'#38bdf8', bg:'rgba(56,189,248,0.08)', border:'rgba(56,189,248,0.2)',
      skills:['React.js','ASP.NET Core Web API','Entity Framework Core','HTML & CSS','Bootstrap','SwiftUI','JavaFX'],
    },
    {
      title:'Tools & Platforms', icon:'🔧',
      color:'#94a3b8', bg:'rgba(148,163,184,0.06)', border:'rgba(148,163,184,0.15)',
      skills:['Git','GitHub','VS Code','IntelliJ IDEA','Xcode','Android Studio','Trello','Figma','Visual Studio'],
    },
  ]

  return (
    <section id="skills" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>Skills</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'16px'}}>
          {categories.map(cat => (
            <div key={cat.title} style={{background:'#0d1117',border:'1px solid #0f1520',borderRadius:'16px',padding:'28px',display:'flex',flexDirection:'column',gap:'20px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'10px',background:cat.bg,border:'1px solid '+cat.border,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',flexShrink:0}}>
                  {cat.icon}
                </div>
                <h3 style={{fontSize:'15px',fontWeight:600,color:'#cbd5e1'}}>{cat.title}</h3>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {cat.skills.map(skill => (
                  <span key={skill} style={{fontSize:'13px',color:cat.color,background:cat.bg,border:'1px solid '+cat.border,padding:'5px 12px',borderRadius:'6px'}}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}