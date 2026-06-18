export default function CV() {
  return (
    <section id="cv" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Resume / CV
        </p>

        <div className="bg-[#13151d] border border-[#7c6ef7]/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#7c6ef7]/10 flex items-center justify-center text-2xl flex-shrink-0">
              📄
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#cbd5e1] mb-1">
                Chamodi_Sanjana_CV_2026.pdf
              </h3>
              <p className="text-xs text-[#475569]">
                Updated 2026 · MSc IT Candidate · QA Engineer · 2 pages
              </p>
            </div>
          </div>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-[#7c6ef7] text-white text-sm px-6 py-2.5 rounded-lg hover:bg-[#6a5de8] transition-colors font-medium flex-shrink-0"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}