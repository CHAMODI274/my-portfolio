export default function Thesis() {

  const tags = ['ASP.NET Core Web API', 'React.js', 'MySQL', 'Entity Framework Core', 'JWT', 'Postman', 'Swagger', 'Figma']

  return (
    <section id="thesis" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          MSc Thesis - Research based Project
        </p>

        <div className="bg-[#13151d] border border-[#7c6ef7]/20 rounded-xl p-8">

          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#7c6ef7]/10 flex items-center justify-center text-2xl flex-shrink-0">
              🔬
            </div>
            <div>
              <p className="text-xs text-[#7c6ef7] mb-2">MSc Final Year Research Project · 2025 – May 2026</p>
              <h3 className="text-base font-medium text-[#cbd5e1] leading-snug mb-2">
                School Information Management System for Sri Lankan Government Schools
              </h3>
              <p className="text-xs text-[#64748b]">
                University of Westminster (via IIT) · Supervisor: Ms. Dileeka Alwis, Senior Lecturer, IIT
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold text-[#475569] uppercase tracking-widest mb-3">
              Project Overview
            </p>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Architected and developed a full-stack web application for Sri Lankan government schools to
              manage student records, attendance, examinations, and reporting. Designed and implemented
              25+ RESTful API endpoints using ASP.NET Core Web API with role-based authentication and
              authorization. Created and executed comprehensive test cases for student management, attendance
              tracking, and examination modules. Conducted functional, regression, and API testing using
              Postman and Swagger to validate system behavior and API responses. Performed database
              validation using MySQL to ensure data accuracy and integrity.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-[#7c6ef7]/10 text-[#a89ff7] border border-[#7c6ef7]/20 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/CHAMODI274/School-Information-Management-System-SriLanka"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#7c6ef7] text-white text-sm px-5 py-2.5 rounded-lg hover:bg-[#6a5de8] transition-colors font-medium"
            >
              GitHub Repo ↗
            </a>
            <a
              href="#cv"
              className="flex items-center gap-2 border border-[#2a2d35] text-[#94a3b8] text-sm px-5 py-2.5 rounded-lg hover:border-[#7c6ef7] hover:text-white transition-all"
            >
              Download Report
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}