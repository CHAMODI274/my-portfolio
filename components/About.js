export default function About() {

  const traits = [
    'Open Source',
    'Research-Driven',
    'Clean Code',
    'Problem Solver',
    'Fast Learner',
    'Team Player',
  ]

  return (
    <section id="about" className="py-20 border-t border-[#1e2028]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-10">
          About Me
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* LEFT — Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-2xl border border-[#2a2d35] bg-gradient-to-br from-[#1e1b3a] to-[#13151d] flex items-center justify-center text-6xl">
              👩‍💻
            </div>
            {/* Small decorative stat cards */}
            <div className="flex gap-3">
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl px-4 py-2 text-center">
                <div className="text-lg font-medium text-white">3+</div>
                <div className="text-xs text-[#475569]">Years</div>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl px-4 py-2 text-center">
                <div className="text-lg font-medium text-white">20+</div>
                <div className="text-xs text-[#475569]">Projects</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Hi, I am <span className="text-[#7c6ef7]">Chamodi</span>
            </h2>
            <p className="text-sm text-[#7c6ef7] mb-6">
              Full-Stack Developer based in Sri Lanka
            </p>

            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              I am a full-stack developer and MSc graduate with 3+ years of experience
              building production-grade web applications. I love working across the entire
              stack from crafting smooth UIs to architecting reliable backends and
              scalable databases.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed mb-8">
              My academic background in computer science gives me a strong foundation
              in algorithms, systems design, and research methodology. When I am not
              coding, I write technical blogs and contribute to open source projects.
            </p>

            {/* Trait tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="text-xs bg-[#7c6ef7]/10 text-[#a89ff7] border border-[#7c6ef7]/20 px-3 py-1.5 rounded-full"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1">Location</p>
                <p className="text-sm text-[#cbd5e1]">Sri Lanka</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1">Degree</p>
                <p className="text-sm text-[#cbd5e1]">MSc Computer Science</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1">Email</p>
                <p className="text-sm text-[#cbd5e1]">your@email.com</p>
              </div>
              <div className="bg-[#13151d] border border-[#1e2028] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1">Availability</p>
                <p className="text-sm text-[#1d9e75]">Open to work</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}