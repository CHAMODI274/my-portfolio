export default function About() {

  const traits = [
    'Problem-Solving',
    'Attention to Detail',
    'Effective Communication',
    'Teamwork',
    'Adaptability',
    'Time Management',
    'Quick Learner',
    'Agile Methodology',
  ]

  return (
    <section id="about" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          About Me
        </p>

        <div className="flex flex-col md:flex-row gap-14 items-start">

          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="w-44 h-44 rounded-2xl border border-[#2a2d35] bg-gradient-to-br from-[#1e1b3a] to-[#13151d] flex items-center justify-center text-6xl">
              👩‍💻
            </div>
            <div className="flex gap-3">
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl px-5 py-3 text-center">
                <div className="text-xl font-medium text-white">4+</div>
                <div className="text-xs text-[#475569] mt-0.5">Projects</div>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl px-5 py-3 text-center">
                <div className="text-xl font-medium text-white">MSc</div>
                <div className="text-xs text-[#475569] mt-0.5">Reading</div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Hi, I am <span className="text-[#7c6ef7]">Chamodi Sanjana</span>
            </h2>
            <p className="text-sm text-[#7c6ef7] mb-6">
              MSc IT Candidate · Aspiring Quality Assurance Engineer · Panadura, Sri Lanka
            </p>

            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              I am a motivated and detail-oriented MSc Information Technology student with a strong
              foundation in software development and software testing. Skilled in API testing, test
              case design, bug reporting, and quality assurance practices through academic and personal projects.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed mb-8">
              Passionate about ensuring software quality, learning emerging technologies, and contributing
              to high-performing development teams. I bring both a developer and a tester mindset to
              every project I work on.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {traits.map((trait) => (
                <span key={trait} className="text-xs bg-[#7c6ef7]/10 text-[#a89ff7] border border-[#7c6ef7]/20 px-3 py-1.5 rounded-full">
                  {trait}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Location</p>
                <p className="text-sm text-[#cbd5e1]">Panadura, Sri Lanka</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Degree</p>
                <p className="text-sm text-[#cbd5e1]">MSc Information Technology (Reading)</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Email</p>
                <p className="text-sm text-[#cbd5e1]">chamodibit2022@gmail.com</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Availability</p>
                <p className="text-sm text-[#1d9e75]">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}