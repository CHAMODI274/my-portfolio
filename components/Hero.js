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

    const particles = Array.from({ length: 70 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r:  Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(124, 110, 247, 0.6)'
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(124, 110, 247, ' + (0.15 * (1 - dist / 100)) + ')'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden',width:'100%'}}>

      <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%'}} />

      <div style={{position:'relative',zIndex:10,width:'100%',maxWidth:'1400px',margin:'0 auto',padding:'96px 64px 64px 80px'}}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT */}
          <div className="flex-1 min-w-0">

            <div className="inline-flex items-center gap-2 bg-[#7c6ef7]/10 border border-[#7c6ef7]/25 text-[#a89ff7] text-xs px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7c6ef7] animate-pulse flex-shrink-0" />
              Available for work
            </div>

            <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight mb-5">
              Full-Stack <span className="text-[#7c6ef7]">Developer</span>
              <br />
              {'&'} Researcher
            </h1>

            <p className="text-[#64748b] text-base leading-relaxed max-w-xl mb-8">
              I build fast, scalable web applications from pixel-perfect UIs
              to robust backends. MSc graduate with a passion for research and clean code.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#projects" className="bg-[#7c6ef7] text-white text-sm px-6 py-2.5 rounded-lg hover:bg-[#6a5de8] transition-colors font-medium">
                View Projects
              </a>
              <a href="#cv" className="border border-[#2a2d35] text-[#94a3b8] text-sm px-5 py-2.5 rounded-lg hover:border-[#7c6ef7] hover:text-white transition-all">
                Download CV
              </a>
              <a href="#contact" className="border border-[#2a2d35] text-[#94a3b8] text-sm px-5 py-2.5 rounded-lg hover:border-[#7c6ef7] hover:text-white transition-all">
                Contact Me
              </a>
            </div>

            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-medium text-white">3+</div>
                <div className="text-xs text-[#475569] mt-1">Years exp.</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white">20+</div>
                <div className="text-xs text-[#475569] mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white">MSc</div>
                <div className="text-xs text-[#475569] mt-1">Degree</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="w-44 h-44 rounded-full border-2 border-[#7c6ef7] p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1e1b3a] to-[#13151d] flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
            <div className="text-center">
              <div className="text-base font-medium text-[#cbd5e1]">Chamodi</div>
              <div className="text-xs text-[#7c6ef7] mt-1">Full-Stack Developer</div>
            </div>
            <div className="flex gap-5">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs text-[#475569] hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-[#475569] hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:you@email.com" className="text-xs text-[#475569] hover:text-white transition-colors">Email</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}