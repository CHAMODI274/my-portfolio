'use client'

import { useState } from 'react'

export default function Contact() {

  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name:'', email:'', subject:'', message:'' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle = {
    width:'100%',
    background:'#0d0f14',
    border:'1px solid #2a2d35',
    borderRadius:'10px',
    padding:'14px 16px',
    fontSize:'14px',
    color:'#94a3b8',
    outline:'none',
    fontFamily:'inherit',
    transition:'border-color 0.2s',
  }

  const socialLinks = [
    { icon:'🐙', label:'GitHub',   sub:'github.com/CHAMODI274',        href:'https://github.com/CHAMODI274' },
    { icon:'💼', label:'LinkedIn', sub:'linkedin.com/in/kmcsanjana',    href:'https://linkedin.com/in/kmcsanjana' },
    { icon:'✉️', label:'Email',    sub:'chamodibit2022@gmail.com',      href:'mailto:chamodibit2022@gmail.com' },
    { icon:'📞', label:'Phone',    sub:'+94 76 798 6468',               href:'tel:+94767986468' },
  ]

  return (
    <section id="contact" style={{padding:'100px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>

        <p style={{fontSize:'12px',fontWeight:600,color:'#94a3b8',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'48px'}}>
          Contact
        </p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>

          {/* LEFT */}
          <div style={{background:'#13151d',border:'1px solid #1e2028',borderRadius:'20px',padding:'40px'}}>
            <h3 style={{fontSize:'24px',fontWeight:600,color:'#f1f5f9',marginBottom:'12px'}}>
              Let's connect!
            </h3>
            <p style={{fontSize:'15px',color:'#64748b',lineHeight:1.7,marginBottom:'36px'}}>
              Open to QA Engineer roles, full-stack developer positions, and interesting
              collaborations. I usually respond within 24 hours.
            </p>

            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {socialLinks.map(({icon,label,sub,href}) => (
                <a key={label} href={href} target={label!=='Phone'&&label!=='Email'?'_blank':undefined} rel="noreferrer"
                  style={{display:'flex',alignItems:'center',gap:'16px',background:'#1a1c24',border:'1px solid #2a2d35',borderRadius:'12px',padding:'16px 20px',textDecoration:'none',transition:'border-color 0.2s'}}>
                  <span style={{fontSize:'22px',flexShrink:0}}>{icon}</span>
                  <div>
                    <p style={{fontSize:'11px',color:'#475569',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'3px'}}>{label}</p>
                    <p style={{fontSize:'14px',color:'#94a3b8'}}>{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{background:'#13151d',border:'1px solid #1e2028',borderRadius:'20px',padding:'40px'}}>
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'20px'}}>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
                <div>
                  <label style={{fontSize:'12px',color:'#475569',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={{fontSize:'12px',color:'#475569',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={{fontSize:'12px',color:'#475569',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What is this about?" style={inputStyle} />
              </div>

              <div>
                <label style={{fontSize:'12px',color:'#475569',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                  placeholder="Tell me about your opportunity or project..."
                  style={{...inputStyle,resize:'none'}} />
              </div>

              <button type="submit" disabled={status==='sending'}
                style={{background:'#7c6ef7',color:'#fff',fontSize:'15px',padding:'16px',borderRadius:'10px',border:'none',cursor:'pointer',fontWeight:500,fontFamily:'inherit',opacity:status==='sending'?0.6:1,transition:'background 0.2s'}}>
                {status==='sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status==='success' && (
                <p style={{fontSize:'13px',color:'#1d9e75',textAlign:'center'}}>
                  Message sent! I will get back to you soon.
                </p>
              )}
              {status==='error' && (
                <p style={{fontSize:'13px',color:'#f87171',textAlign:'center'}}>
                  Something went wrong. Please email me directly.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}