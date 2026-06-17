'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

  // Controls whether mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home',             href: '#home' },
    { label: 'About',            href: '#about' },
    { label: 'Skills',           href: '#skills' },
    { label: 'Education',        href: '#education' },
    { label: 'Certifications',   href: '#certifications' },
    { label: 'Projects',         href: '#projects' },
    { label: 'Blog',             href: '#blog' },
    { label: 'Thesis',           href: '#thesis' },
    { label: 'CV',               href: '#cv' },
    { label: 'Contact',          href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0f14]/90 backdrop-blur-md border-b border-[#1e2028]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="text-white font-semibold text-base hover:text-[#7c6ef7] transition-colors">
          &lt;Chamodi /&gt;
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#64748b] hover:text-white text-xs px-3 py-1.5 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 text-[#7c6ef7] border border-[#7c6ef7] text-xs px-3 py-1.5 rounded-md hover:bg-[#7c6ef7] hover:text-white transition-all"
          >
            Hire me
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-[#64748b] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#13151d] border-t border-[#1e2028] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#64748b] hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[#7c6ef7] border border-[#7c6ef7] text-sm px-3 py-2 rounded-md text-center hover:bg-[#7c6ef7] hover:text-white transition-all"
          >
            Hire me
          </Link>
        </div>
      )}
    </nav>
  )
}