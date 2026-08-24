export default function CV() {
  return (
    <section id="cv" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>Resume / CV</p>
        <div style={{background:'linear-gradient(135deg,#0d1117,#0d1a2e)',border:'1px solid rgba(37,99,235,0.25)',borderRadius:'20px',padding:'40px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap'}}>
          <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
            <div style={{width:'64px',height:'64px',borderRadius:'16px',background:'rgba(37,99,235,0.12)',border:'1px solid rgba(37,99,235,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'28px',flexShrink:0}}>📄</div>
            <div>
              <h3 style={{fontSize:'20px',fontWeight:600,color:'#f1f5f9',marginBottom:'6px'}}>Chamodi Sanjana — Resume 2026</h3>
              <p style={{fontSize:'14px',color:'#64748b',marginBottom:'4px'}}>MSc IT Candidate · Aspiring QA Engineer · Full-Stack Developer</p>
              <p style={{fontSize:'12px',color:'#475569'}}>Last updated June 2026 · 2 pages · PDF</p>
            </div>
          </div>
          <a href="/cv.pdf" download style={{background:'#2563eb',color:'#fff',fontSize:'14px',padding:'14px 32px',borderRadius:'10px',textDecoration:'none',fontWeight:500,flexShrink:0,display:'flex',alignItems:'center',gap:'8px'}}>
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  )
}