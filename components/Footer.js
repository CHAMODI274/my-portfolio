export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid #0f1520',padding:'32px 0',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
        <span style={{fontSize:'13px',color:'#1e2a3a'}}>
          © 2026 Chamodi Sanjana <span style={{color:'#2563eb'}}>·</span> Built with Next.js & Tailwind CSS
        </span>
        <div style={{display:'flex',gap:'24px'}}>
          {[['GitHub','https://github.com/CHAMODI274'],['LinkedIn','https://linkedin.com/in/kmcsanjana'],['Email','mailto:chamodibit2022@gmail.com']].map(([l,h]) => (
            <a key={l} href={h} target={l!=='Email'?'_blank':undefined} rel="noreferrer" style={{fontSize:'12px',color:'#475569',textDecoration:'none'}}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}