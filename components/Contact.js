'use client'

import { useState } from 'react'

export default function Contact() {

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT — Info */}
          <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-8">
            <h3 className="text-xl font-medium text-white mb-3">
              Let's build something together
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-8">
              Open to full-time roles, freelance projects, and research collaborations.
              I usually respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#1a1c24] border border-[#2a2d35] rounded-lg px-4 py-3 hover:border-[#7c6ef7]/40 transition-colors group"
              >
                <span className="text-lg">🐙</span>
                <div>
                  <p className="text-xs text-[#475569]">GitHub</p>
                  <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">github.com/yourhandle</p>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#1a1c24] border border-[#2a2d35] rounded-lg px-4 py-3 hover:border-[#7c6ef7]/40 transition-colors group"
              >
                <span className="text-lg">💼</span>
                <div>
                  <p className="text-xs text-[#475569]">LinkedIn</p>
                  <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">linkedin.com/in/yourprofile</p>
                </div>
              </a>
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 bg-[#1a1c24] border border-[#2a2d35] rounded-lg px-4 py-3 hover:border-[#7c6ef7]/40 transition-colors group"
              >
                <span className="text-lg">✉️</span>
                <div>
                  <p className="text-xs text-[#475569]">Email</p>
                  <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">your@email.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#475569] mb-1.5 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0d0f14] border border-[#2a2d35] rounded-lg px-3 py-2.5 text-sm text-[#94a3b8] placeholder:text-[#2a2d35] focus:outline-none focus:border-[#7c6ef7] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#475569] mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#0d0f14] border border-[#2a2d35] rounded-lg px-3 py-2.5 text-sm text-[#94a3b8] placeholder:text-[#2a2d35] focus:outline-none focus:border-[#7c6ef7] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#475569] mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full bg-[#0d0f14] border border-[#2a2d35] rounded-lg px-3 py-2.5 text-sm text-[#94a3b8] placeholder:text-[#2a2d35] focus:outline-none focus:border-[#7c6ef7] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-[#475569] mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#0d0f14] border border-[#2a2d35] rounded-lg px-3 py-2.5 text-sm text-[#94a3b8] placeholder:text-[#2a2d35] focus:outline-none focus:border-[#7c6ef7] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#7c6ef7] text-white text-sm px-6 py-3 rounded-lg hover:bg-[#6a5de8] transition-colors font-medium disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-xs text-[#1d9e75] text-center">
                  Message sent! I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}