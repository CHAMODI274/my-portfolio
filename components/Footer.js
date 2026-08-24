export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid #1e2028',padding:'32px 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
        <span style={{fontSize:'13px',color:'#2a2d35'}}>
          © 2026 Chamodi Sanjana <span style={{color:'#7c6ef7'}}>·</span> Built with Next.js & Tailwind CSS
        </span>
        <div style={{display:'flex',gap:'24px'}}>
          {[['GitHub','https://github.com/CHAMODI274'],['LinkedIn','https://linkedin.com/in/kmcsanjana'],['Email','mailto:chamodibit2022@gmail.com']].map(([l,h]) => (
            <a key={l} href={h} target={l!=='Email'?'_blank':undefined} rel="noreferrer"
              style={{fontSize:'12px',color:'#475569',textDecoration:'none'}}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}