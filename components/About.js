export default function About() {

  const traits = ['Open Source','Research-Driven','Clean Code','Problem Solver','Fast Learner','Team Player']

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
                <div className="text-xl font-medium text-white">3+</div>
                <div className="text-xs text-[#475569] mt-0.5">Years</div>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl px-5 py-3 text-center">
                <div className="text-xl font-medium text-white">20+</div>
                <div className="text-xs text-[#475569] mt-0.5">Projects</div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Hi, I am <span className="text-[#7c6ef7]">Chamodi</span>
            </h2>
            <p className="text-sm text-[#7c6ef7] mb-6">Full-Stack Developer based in Sri Lanka</p>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              I am a full-stack developer and MSc graduate with 3+ years of experience building production-grade web applications. I love working across the entire stack from crafting smooth UIs to architecting reliable backends and scalable databases.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed mb-8">
              My academic background in computer science gives me a strong foundation in algorithms, systems design, and research methodology. When I am not coding, I write technical blogs and contribute to open source projects.
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
                <p className="text-sm text-[#cbd5e1]">Sri Lanka</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Degree</p>
                <p className="text-sm text-[#cbd5e1]">MSc Computer Science</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1.5">Email</p>
                <p className="text-sm text-[#cbd5e1]">your@email.com</p>
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