export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid #1e2028',padding:'24px 0'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
        <span className="text-xs text-[#2a2d35]">
          © 2026 Chamodi Sanjana <span className="text-[#7c6ef7]">·</span> Built with Next.js & Tailwind CSS
        </span>
        <span className="text-xs text-[#2a2d35]">
          Designed & developed with <span className="text-[#7c6ef7]">♥</span>
        </span>
      </div>
    </footer>
  )
}