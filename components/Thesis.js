export default function Thesis() {

  const tags = ['Machine Learning', 'Reinforcement Learning', 'Web Performance', 'Node.js', 'Python', 'TensorFlow']

  return (
    <section id="thesis" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          MSc Thesis
        </p>

        <div className="bg-[#13151d] border border-[#7c6ef7]/20 rounded-xl p-8">

          {/* Top — icon + title */}
          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#7c6ef7]/10 flex items-center justify-center text-2xl flex-shrink-0">
              🔬
            </div>
            <div>
              <h3 className="text-base font-medium text-[#cbd5e1] leading-snug mb-2">
                Machine Learning-Based Optimization of Web Application Performance
                in Resource-Constrained Environments
              </h3>
              <p className="text-xs text-[#64748b]">
                MSc Computer Science · Your University · 2025 · Supervisor: Dr. Your Supervisor
              </p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-[#475569] uppercase tracking-widest mb-3">
              Abstract
            </p>
            <p className="text-sm text-[#64748b] leading-relaxed">
              This thesis investigates the application of reinforcement learning techniques to
              dynamically optimize resource allocation in web applications deployed under constrained
              infrastructure. The proposed framework achieves a 34% reduction in average page load
              time and a 22% improvement in server throughput compared to static optimization
              baselines across real-world benchmark datasets. Experiments were conducted using a
              custom simulation environment built on Node.js and Python, with TensorFlow powering
              the learning agents.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#7c6ef7]/10 text-[#a89ff7] border border-[#7c6ef7]/20 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/thesis.pdf"
              download
              className="flex items-center gap-2 bg-[#7c6ef7] text-white text-sm px-5 py-2.5 rounded-lg hover:bg-[#6a5de8] transition-colors font-medium"
            >
              ↓ Download PDF
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#2a2d35] text-[#94a3b8] text-sm px-5 py-2.5 rounded-lg hover:border-[#7c6ef7] hover:text-white transition-all"
            >
              GitHub Repo ↗
            </a>
            <span className="text-xs text-[#475569] ml-auto">
              DOI: 10.xxxx/xxxxxx
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}