'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(124,110,247,0.55)'
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2)
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(124,110,247,' + (0.12*(1-d/110)) + ')'
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="home" style={{position:'relative',minHeight:'88vh',display:'flex',alignItems:'center',overflow:'hidden',width:'100%'}}>
      <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%'}} />

      <div style={{position:'relative',zIndex:10,width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'100px 24px 80px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'48px',flexWrap:'wrap'}}>

          {/* LEFT */}
          <div style={{flex:'1',minWidth:'320px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(124,110,247,0.1)',border:'1px solid rgba(124,110,247,0.25)',color:'#a89ff7',fontSize:'12px',padding:'6px 14px',borderRadius:'99px',marginBottom:'28px'}}>
              <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'#7c6ef7',animation:'pulse 2s infinite',flexShrink:0}} />
              Open to QA Engineer & Developer Roles
            </div>

            <h1 style={{fontSize:'clamp(48px,6vw,72px)',fontWeight:600,color:'#f1f5f9',lineHeight:1.1,marginBottom:'12px',letterSpacing:'-0.02em'}}>
              Chamodi<br /><span style={{color:'#7c6ef7'}}>Sanjana</span>
            </h1>

            <p style={{fontSize:'20px',color:'#94a3b8',fontWeight:400,marginBottom:'8px'}}>
              MSc IT Candidate · Aspiring QA Engineer
            </p>
            <p style={{fontSize:'14px',color:'#475569',marginBottom:'36px'}}>
              Panadura, Sri Lanka · University of Westminster (via IIT)
            </p>

            <p style={{fontSize:'16px',color:'#64748b',lineHeight:1.7,maxWidth:'520px',marginBottom:'40px'}}>
              Detail-oriented software tester with hands-on experience in API testing,
              test case design, bug reporting, and full-stack development.
              Passionate about software quality and emerging technologies.
            </p>

            <div style={{display:'flex',flexWrap:'wrap',gap:'12px',marginBottom:'48px'}}>
              <a href="#projects" style={{background:'#7c6ef7',color:'#fff',fontSize:'14px',padding:'12px 28px',borderRadius:'8px',textDecoration:'none',fontWeight:500,transition:'background 0.2s'}}>
                View Projects
              </a>
              <a href="/cv.pdf" download style={{border:'1px solid #2a2d35',color:'#94a3b8',fontSize:'14px',padding:'12px 24px',borderRadius:'8px',textDecoration:'none',transition:'all 0.2s'}}>
                Download CV
              </a>
              <a href="#contact" style={{border:'1px solid #2a2d35',color:'#94a3b8',fontSize:'14px',padding:'12px 24px',borderRadius:'8px',textDecoration:'none',transition:'all 0.2s'}}>
                Contact Me
              </a>
            </div>

            <div style={{display:'flex',gap:'40px'}}>
              {[['4+','Projects'],['MSc','IT Candidate'],['QA','Focused']].map(([n,l]) => (
                <div key={l}>
                  <div style={{fontSize:'28px',fontWeight:600,color:'#f1f5f9'}}>{n}</div>
                  <div style={{fontSize:'12px',color:'#475569',marginTop:'4px'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo card */}
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px',flexShrink:0}}>
            <div style={{width:'176px',height:'176px',borderRadius:'50%',border:'2px solid #7c6ef7',padding:'4px'}}>
              <div style={{width:'100%',height:'100%',borderRadius:'50%',background:'linear-gradient(135deg,#1e1b3a,#13151d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'64px'}}>
                👩‍💻
              </div>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:'15px',fontWeight:500,color:'#cbd5e1'}}>Chamodi Sanjana</div>
              <div style={{fontSize:'12px',color:'#7c6ef7',marginTop:'4px'}}>QA Engineer · Full-Stack Developer</div>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
              {[['GitHub','https://github.com/CHAMODI274'],['LinkedIn','https://linkedin.com/in/kmcsanjana'],['Email','mailto:chamodibit2022@gmail.com']].map(([label,href]) => (
                <a key={label} href={href} target={label!=='Email'?'_blank':undefined} rel="noreferrer"
                  style={{fontSize:'12px',color:'#475569',textDecoration:'none'}}>
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}`}</style>
    </section>
  )
}