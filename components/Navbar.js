'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home',           href: '#home' },
    { label: 'About',          href: '#about' },
    { label: 'Skills',         href: '#skills' },
    { label: 'Education',      href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects',       href: '#projects' },
    { label: 'Blog',           href: '#blog' },
    { label: 'CV',             href: '#cv' },
    { label: 'Thesis',         href: '#thesis' },
    { label: 'Contact',        href: '#contact' },
  ]

  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:50,background:'rgba(13,15,20,0.92)',backdropFilter:'blur(12px)',borderBottom:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

        <Link href="#home" style={{fontSize:'15px',fontWeight:600,color:'#f1f5f9',textDecoration:'none'}}>
          &lt;Chamodi /&gt;
        </Link>

        <div className="hidden md:flex" style={{alignItems:'center',gap:'4px'}}>
          {navLinks.map(link => (
            <Link key={link.label} href={link.href}
              style={{fontSize:'12px',color:'#64748b',textDecoration:'none',padding:'6px 10px',borderRadius:'6px'}}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact"
            style={{fontSize:'12px',color:'#7c6ef7',border:'1px solid #7c6ef7',textDecoration:'none',padding:'6px 14px',borderRadius:'7px',marginLeft:'8px'}}>
            Hire me
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{background:'none',border:'none',color:'#64748b',fontSize:'18px',cursor:'pointer'}}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{background:'#13151d',borderTop:'1px solid #1e2028',padding:'20px 24px',display:'flex',flexDirection:'column',gap:'12px'}}>
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              style={{fontSize:'14px',color:'#64748b',textDecoration:'none'}}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMenuOpen(false)}
            style={{fontSize:'14px',color:'#7c6ef7',border:'1px solid #7c6ef7',textDecoration:'none',padding:'10px 16px',borderRadius:'8px',textAlign:'center'}}>
            Hire me
          </Link>
        </div>
      )}
    </nav>
  )
}