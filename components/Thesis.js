export default function Thesis() {
  const contributions = ['Architected and developed a full-stack web application for Sri Lankan government schools','Designed and implemented 25+ RESTful API endpoints with role-based authentication','Created and executed comprehensive test cases for all system modules','Conducted functional, regression, and API testing using Postman and Swagger','Performed database validation using MySQL to ensure data accuracy and integrity','Conducted usability research and requirements analysis to improve UX']
  const tags = ['ASP.NET Core Web API','React.js','MySQL','Entity Framework Core','JWT','Postman','Swagger','Figma']

  return (
    <section id="thesis" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>MSc Research Project</p>
        <div style={{background:'#0d1117',border:'1px solid rgba(37,99,235,0.2)',borderRadius:'20px',overflow:'hidden'}}>
          <div style={{background:'linear-gradient(135deg,rgba(37,99,235,0.1),rgba(37,99,235,0.03))',borderBottom:'1px solid rgba(37,99,235,0.15)',padding:'36px 40px',display:'flex',alignItems:'flex-start',gap:'20px'}}>
            <div style={{width:'52px',height:'52px',borderRadius:'14px',background:'rgba(37,99,235,0.15)',border:'1px solid rgba(37,99,235,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',flexShrink:0}}>🔬</div>
            <div>
              <p style={{fontSize:'12px',color:'#3b82f6',marginBottom:'8px'}}>MSc Final Year Research Project · University of Westminster via IIT · 2025–2026</p>
              <h3 style={{fontSize:'22px',fontWeight:600,color:'#f1f5f9',lineHeight:1.35,marginBottom:'8px'}}>School Information Management System for Sri Lankan Government Schools</h3>
              <p style={{fontSize:'13px',color:'#64748b'}}>Supervisor: Ms. Dileeka Alwis · Senior Lecturer, Informatics Institute of Technology (IIT)</p>
            </div>
          </div>
          <div style={{padding:'36px 40px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px'}}>
            <div>
              <p style={{fontSize:'11px',color:'#475569',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'14px'}}>Project Overview</p>
              <p style={{fontSize:'14px',color:'#64748b',lineHeight:1.75}}>A full-stack web application designed for Sri Lankan government schools to digitise and streamline the management of student records, attendance, examinations, and reporting. Built with ASP.NET Core Web API backend and React.js frontend, featuring comprehensive role-based access control and JWT authentication.</p>
            </div>
            <div>
              <p style={{fontSize:'11px',color:'#475569',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'14px'}}>Key Contributions</p>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'8px'}}>
                {contributions.map((c,i) => (
                  <li key={i} style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
                    <span style={{color:'#2563eb',flexShrink:0,fontSize:'13px',marginTop:'1px'}}>✓</span>
                    <span style={{fontSize:'13px',color:'#94a3b8',lineHeight:1.6}}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{padding:'24px 40px',borderTop:'1px solid #0f1520',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'16px'}}>
            <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
              {tags.map(tag => (
                <span key={tag} style={{fontSize:'12px',background:'rgba(37,99,235,0.08)',color:'#93c5fd',border:'1px solid rgba(37,99,235,0.2)',padding:'4px 12px',borderRadius:'6px'}}>{tag}</span>
              ))}
            </div>
            <div style={{display:'flex',gap:'12px',flexShrink:0}}>
              <a href="https://github.com/CHAMODI274/School-Information-Management-System-SriLanka" target="_blank" rel="noreferrer" style={{background:'#2563eb',color:'#fff',fontSize:'13px',padding:'10px 22px',borderRadius:'8px',textDecoration:'none',fontWeight:500}}>GitHub ↗</a>
              <a href="#cv" style={{border:'1px solid #1e2a3a',color:'#94a3b8',fontSize:'13px',padding:'10px 22px',borderRadius:'8px',textDecoration:'none'}}>Full Report</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}