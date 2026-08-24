export default function Blog() {
  const posts = [
    { title:'Server Components vs Client Components — When to use what', excerpt:'A practical guide to choosing between React Server and Client Components in Next.js App Router. Covers rendering strategies, data fetching patterns, and real-world use cases.', category:'Next.js', date:'May 2026', readTime:'6 min read', url:'#', catStyle:{color:'#60a5fa',background:'rgba(96,165,250,0.1)',border:'1px solid rgba(96,165,250,0.2)'} },
    { title:'Building a scalable REST API with Node.js and PostgreSQL', excerpt:'Step-by-step walkthrough of designing a production-ready API with proper error handling, authentication middleware, and database indexing strategies.', category:'Backend', date:'Apr 2026', readTime:'9 min read', url:'#', catStyle:{color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.2)'} },
    { title:"Effective API Testing with Postman — A QA Engineer's Guide", excerpt:'How to write comprehensive API test suites in Postman, covering collections, environments, assertions, and automated test runs in CI pipelines.', category:'QA & Testing', date:'Mar 2026', readTime:'7 min read', url:'#', catStyle:{color:'#3b82f6',background:'rgba(37,99,235,0.1)',border:'1px solid rgba(37,99,235,0.2)'} },
    { title:'What I learned building my MSc Research Project from scratch', excerpt:'Lessons from designing, developing, and testing a full-stack School Information Management System covering architecture decisions, API design, and QA strategies.', category:'Research', date:'Feb 2026', readTime:'10 min read', url:'#', catStyle:{color:'#fbbf24',background:'rgba(251,191,36,0.1)',border:'1px solid rgba(251,191,36,0.2)'} },
  ]

  return (
    <section id="blog" style={{padding:'100px 0',borderTop:'1px solid #0f1520',background:'#080a0f'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'48px',flexWrap:'wrap',gap:'16px'}}>
          <p style={{fontSize:'12px',fontWeight:600,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.1em'}}>Blog</p>
          <a href="#" style={{fontSize:'13px',color:'#3b82f6',textDecoration:'none'}}>View all posts ↗</a>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          {posts.map(post => (
            <a key={post.title} href={post.url} style={{background:'#0d1117',border:'1px solid #0f1520',borderRadius:'14px',padding:'28px 32px',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px'}}>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'10px',flexWrap:'wrap'}}>
                  <span style={{fontSize:'11px',padding:'3px 10px',borderRadius:'6px',...post.catStyle}}>{post.category}</span>
                  <span style={{fontSize:'12px',color:'#475569'}}>{post.date}</span>
                  <span style={{fontSize:'12px',color:'#475569'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontSize:'16px',fontWeight:600,color:'#cbd5e1',marginBottom:'8px',lineHeight:1.4}}>{post.title}</h3>
                <p style={{fontSize:'14px',color:'#475569',lineHeight:1.65}}>{post.excerpt}</p>
              </div>
              <div style={{fontSize:'20px',color:'#1e2a3a',flexShrink:0}}>→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}