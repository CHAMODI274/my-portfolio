export default function Projects() {
  const projects = [
    {
      title:'School Information Management System',
      type:'MSc Final Year Research Project · 2025–2026',
      description:'Full-stack web application for Sri Lankan government schools to manage student records, attendance, examinations, and reporting.',
      achievements:['Designed & implemented 25+ RESTful API endpoints with role-based auth','Conducted functional, regression & API testing using Postman and Swagger','Performed database validation with MySQL for data accuracy','Conducted usability research and requirements analysis'],
      tags:['ASP.NET Core','React.js','MySQL','Entity Framework','JWT','Postman','Swagger','Figma'],
      icon:'🏫', iconBg:'#0a1628', iconColor:'#3b82f6',
      accent:'rgba(37,99,235,0.1)', accentBorder:'rgba(37,99,235,0.25)',
      github:'https://github.com/CHAMODI274/School-Information-Management-System-SriLanka',
    },
    {
      title:'Library Management System',
      type:'MSc Individual Project · 2025',
      description:'Full-stack application managing books, users, loans, authors, and publishers with role-based access and real-time features.',
      achievements:['Built React.js frontend with JWT auth and complete CRUD operations','Developed .NET Core backend with Entity Framework & Swagger docs','Designed & tested RESTful APIs using Swagger and Postman','Created test cases for auth, CRUD operations & role-based access'],
      tags:['React.js','.NET Core','SQLite','JWT','Swagger','Postman','Bootstrap'],
      icon:'📚', iconBg:'#0d2010', iconColor:'#22c55e',
      accent:'rgba(34,197,94,0.08)', accentBorder:'rgba(34,197,94,0.2)',
      github:'https://github.com/CHAMODI274/LibrarySystemFrontend',
    },
    {
      title:'Budget Manager iOS App',
      type:'MSc Group Project (Team of 2) · 2025',
      description:'iOS application for financial tracking using MVVM architecture, Core Data persistence, and Swift Charts visualizations.',
      achievements:['Designed and executed test scenarios for budgeting and reporting','Conducted unit testing using XCTest to verify business logic','Performed manual testing for data persistence and usability','Managed tasks via GitHub and Trello, delivering under deadlines'],
      tags:['Swift','SwiftUI','Core Data','XCTest','Swift Charts','Figma'],
      icon:'💰', iconBg:'#0d1a2e', iconColor:'#38bdf8',
      accent:'rgba(56,189,248,0.08)', accentBorder:'rgba(56,189,248,0.2)',
      github:'https://github.com/CHAMODI274/Personal-Budget-Manager-App',
    },
    {
      title:'Financial Calculator iOS App',
      type:'MSc Individual Project · 2025',
      description:'iOS application featuring savings, loan, and mortgage calculators with comprehensive unit and functional testing.',
      achievements:['Created unit tests using XCTest to validate financial calculations','Designed test cases covering valid, invalid & boundary-value inputs','Performed functional testing to ensure accuracy and reliability','Validated expected application behavior across all calculator types'],
      tags:['Swift','SwiftUI','UserDefaults','XCTest','Figma'],
      icon:'🧮', iconBg:'#1a1200', iconColor:'#fbbf24',
      accent:'rgba(251,191,36,0.08)', accentBorder:'rgba(251,191,36,0.2)',
      github:'https://github.com/CHAMODI274/Financial-Calculator-Fincalc',
    },
  ]

  return (
    <section id="projects" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'48px',flexWrap:'wrap',gap:'16px'}}>
          <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em'}}>Projects</p>
          <a href="https://github.com/CHAMODI274" target="_blank" rel="noreferrer" style={{fontSize:'13px',color:'#3b82f6',textDecoration:'none'}}>View all on GitHub ↗</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(520px,1fr))',gap:'20px'}}>
          {projects.map(p => (
            <div key={p.title} style={{background:'#0d1117',border:'1px solid #0f1520',borderRadius:'16px',padding:'32px',display:'flex',flexDirection:'column',gap:'0'}}>
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'20px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
                  <div style={{width:'44px',height:'44px',borderRadius:'12px',background:p.iconBg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>{p.icon}</div>
                  <div>
                    <p style={{fontSize:'11px',color:p.iconColor,marginBottom:'4px'}}>{p.type}</p>
                    <h3 style={{fontSize:'18px',fontWeight:600,color:'#f1f5f9',lineHeight:1.3}}>{p.title}</h3>
                  </div>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:'12px',color:'#475569',textDecoration:'none',flexShrink:0,marginLeft:'16px'}}>GitHub ↗</a>
              </div>
              <p style={{fontSize:'14px',color:'#64748b',lineHeight:1.7,marginBottom:'20px'}}>{p.description}</p>
              <div style={{background:p.accent,border:'1px solid '+p.accentBorder,borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
                <p style={{fontSize:'11px',color:'#64748b',textTransform:'uppercase',letterSpacing:'0.07em',marginBottom:'10px'}}>Key Contributions</p>
                <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'7px'}}>
                  {p.achievements.map((a,i) => (
                    <li key={i} style={{display:'flex',gap:'8px',alignItems:'flex-start'}}>
                      <span style={{color:p.iconColor,marginTop:'1px',flexShrink:0,fontSize:'12px'}}>✓</span>
                      <span style={{fontSize:'13px',color:'#94a3b8',lineHeight:1.5}}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {p.tags.map(tag => (
                  <span key={tag} style={{fontSize:'12px',background:'#0a0e14',color:'#475569',border:'1px solid #1e2a3a',padding:'4px 10px',borderRadius:'6px'}}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}