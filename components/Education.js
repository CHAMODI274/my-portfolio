export default function Education() {

  const educationItems = [
    {
      period: 'Jan 2025 - Present',
      degree: 'MSc in Information Technology',
      school: 'University of Westminster, UK (via IIT, Sri Lanka)',
      badge: 'Currently Reading',
      badgeColor: 'text-[#a89ff7] bg-[#7c6ef7]/10 border-[#7c6ef7]/20',
      note: 'Software Dev, OOP, Data Structures, Web & Mobile App Dev, QA',
      current: true,
    },
    {
      period: '2021 - 2024',
      degree: 'Bachelor of Arts (ICT for Development)',
      school: 'University of Colombo, Faculty of Arts, Dept. of ICT',
      badge: 'Second Class Upper Division',
      badgeColor: 'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
      note: 'GPA: 3.54 — Project Management, HCI, Data Comms, E-Commerce',
      current: false,
    },
    {
      period: '2019',
      degree: 'G.C.E. Advanced Level',
      school: 'Taxila Central College, Horana',
      badge: '3 A Passes',
      badgeColor: 'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
      note: 'Index No: 5461316',
      current: false,
    },
  ]

  return (
    <section id="education" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-12">
          Education
        </p>

        <div className="flex flex-col">
          {educationItems.map((item, index) => (
            <div key={index} className="flex gap-8 pb-12 last:pb-0">

              <div className="w-36 flex-shrink-0 text-right pt-1">
                <span className="text-xs text-[#475569]">{item.period}</span>
              </div>

              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 border-[#0d0f14] flex-shrink-0 ${item.current ? 'bg-[#7c6ef7]' : 'bg-[#2a2d35]'}`} />
                {index < educationItems.length - 1 && (
                  <div className="w-px flex-1 bg-[#1e2028] mt-2" />
                )}
              </div>

              <div className="flex-1 min-w-0 bg-[#13151d] border border-[#1e2028] rounded-xl p-6 -mt-1">
                <h3 className="text-sm font-medium text-[#cbd5e1] mb-1.5">{item.degree}</h3>
                <p className="text-xs text-[#64748b] mb-4">{item.school}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`text-xs border px-2.5 py-1 rounded-md ${item.badgeColor}`}>{item.badge}</span>
                  {item.note && <span className="text-xs text-[#475569]">{item.note}</span>}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}