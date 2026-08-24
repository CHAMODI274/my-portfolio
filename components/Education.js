export default function Education() {
  const items = [
    {
      period:'Jan 2025 – Present', degree:'MSc in Information Technology',
      school:'University of Westminster, UK (via IIT, Sri Lanka)',
      badge:'Currently Reading',
      badgeStyle:{color:'#93c5fd',background:'rgba(37,99,235,0.1)',border:'1px solid rgba(37,99,235,0.25)'},
      dotColor:'#2563eb', highlight:true,
      note:'Modules: OOP, Data Structures, Software Dev Environments, Web & Mobile App Dev, Advanced Software Design, QA',
    },
    {
      period:'2021 – 2024', degree:'Bachelor of Arts (ICT for Development)',
      school:'University of Colombo, Faculty of Arts, Dept. of ICT',
      badge:'Second Class Upper Division',
      badgeStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.25)'},
      dotColor:'#1e2a3a', highlight:false,
      note:'GPA: 3.54 · Project Management, HCI, Data Communications, E-Commerce',
    },
    {
      period:'2019', degree:'G.C.E. Advanced Level',
      school:'Taxila Central College, Horana',
      badge:'3 A Passes',
      badgeStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.25)'},
      dotColor:'#1e2a3a', highlight:false,
      note:'Index No: 5461316',
    },
  ]

  return (
    <section id="education" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>Education</p>
        <div style={{display:'flex',flexDirection:'column'}}>
          {items.map((item,i) => (
            <div key={i} style={{display:'flex',gap:'32px',paddingBottom:i<items.length-1?'40px':0}}>
              <div style={{width:'150px',flexShrink:0,textAlign:'right',paddingTop:'6px'}}>
                <span style={{fontSize:'13px',color:'#475569'}}>{item.period}</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
                <div style={{width:'12px',height:'12px',borderRadius:'50%',background:item.dotColor,border:'2px solid #080a0f',marginTop:'6px',flexShrink:0}} />
                {i<items.length-1 && <div style={{width:'1px',flex:1,background:'#0f1520',marginTop:'8px'}} />}
              </div>
              <div style={{flex:1,background:item.highlight?'linear-gradient(135deg,#0d1117,#0d1a2e)':'#0d1117',border:item.highlight?'1px solid rgba(37,99,235,0.3)':'1px solid #0f1520',borderRadius:'16px',padding:'28px',marginTop:'-4px'}}>
                <h3 style={{fontSize:'18px',fontWeight:600,color:'#f1f5f9',marginBottom:'6px'}}>{item.degree}</h3>
                <p style={{fontSize:'14px',color:'#64748b',marginBottom:'16px'}}>{item.school}</p>
                <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'12px'}}>
                  <span style={{fontSize:'12px',padding:'4px 12px',borderRadius:'6px',...item.badgeStyle}}>{item.badge}</span>
                  {item.note && <span style={{fontSize:'13px',color:'#475569'}}>{item.note}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}