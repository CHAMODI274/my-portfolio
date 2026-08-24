export default function Education() {
  const items = [
    {
      period: 'Jan 2025 – Present',
      degree: 'MSc in Information Technology',
      school: 'University of Westminster, UK (via IIT, Sri Lanka)',
      badge: 'Currently Reading',
      badgeStyle: {color:'#a89ff7',background:'rgba(124,110,247,0.1)',border:'1px solid rgba(124,110,247,0.25)'},
      dotColor: '#7c6ef7',
      note: 'Modules: OOP, Data Structures, Software Dev Environments, Web & Mobile App Dev, Advanced Software Design, QA',
      highlight: true,
    },
    {
      period: '2021 – 2024',
      degree: 'Bachelor of Arts (ICT for Development)',
      school: 'University of Colombo, Faculty of Arts, Dept. of ICT',
      badge: 'Second Class Upper Division',
      badgeStyle: {color:'#1d9e75',background:'rgba(29,158,117,0.1)',border:'1px solid rgba(29,158,117,0.25)'},
      dotColor: '#2a2d35',
      note: 'GPA: 3.54 · Project Management, HCI, Data Communications, E-Commerce',
      highlight: false,
    },
    {
      period: '2019',
      degree: 'G.C.E. Advanced Level',
      school: 'Taxila Central College, Horana',
      badge: '3 A Passes',
      badgeStyle: {color:'#1d9e75',background:'rgba(29,158,117,0.1)',border:'1px solid rgba(29,158,117,0.25)'},
      dotColor: '#2a2d35',
      note: 'Index No: 5461316',
      highlight: false,
    },
  ]

  return (
    <section id="education" style={{padding:'100px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>

        <p style={{fontSize:'12px',fontWeight:600,color:'#94a3b8',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>
          Education
        </p>

        <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
          {items.map((item, i) => (
            <div key={i} style={{display:'flex',gap:'32px',paddingBottom: i < items.length-1 ? '40px' : 0}}>

              {/* Year */}
              <div style={{width:'150px',flexShrink:0,textAlign:'right',paddingTop:'6px'}}>
                <span style={{fontSize:'13px',color:'#475569'}}>{item.period}</span>
              </div>

              {/* Line + dot */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
                <div style={{width:'12px',height:'12px',borderRadius:'50%',background:item.dotColor,border:'2px solid #0d0f14',marginTop:'6px',flexShrink:0}} />
                {i < items.length-1 && <div style={{width:'1px',flex:1,background:'#1e2028',marginTop:'8px'}} />}
              </div>

              {/* Card */}
              <div style={{flex:1,background: item.highlight ? 'linear-gradient(135deg,#13151d,#16183a)' : '#13151d',border: item.highlight ? '1px solid rgba(124,110,247,0.3)' : '1px solid #1e2028',borderRadius:'16px',padding:'28px',marginTop:'-4px'}}>
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