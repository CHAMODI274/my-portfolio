export default function Blog() {

  const posts = [
    {
      title: 'Server Components vs Client Components — When to use what',
      excerpt: 'A practical guide to choosing between React Server and Client Components in Next.js App Router. Covers rendering strategies, data fetching, and real-world patterns.',
      category: 'Next.js',
      date: 'May 2026',
      readTime: '6 min read',
      url: '#',
    },
    {
      title: 'Building a scalable REST API with Node.js and PostgreSQL',
      excerpt: 'Step-by-step walkthrough of designing a production-ready API with proper error handling, authentication middleware, and database indexing strategies.',
      category: 'Backend',
      date: 'Apr 2026',
      readTime: '9 min read',
      url: '#',
    },
    {
      title: 'Dockerizing a full-stack app from zero to production',
      excerpt: 'How I containerized my Next.js + Node.js + PostgreSQL stack and deployed it on AWS ECS with a CI/CD pipeline using GitHub Actions.',
      category: 'DevOps',
      date: 'Mar 2026',
      readTime: '8 min read',
      url: '#',
    },
    {
      title: 'How I applied ML to optimize web performance — lessons from my MSc thesis',
      excerpt: 'A practical summary of my MSc research findings on using reinforcement learning for dynamic resource allocation in web applications.',
      category: 'Research',
      date: 'Feb 2026',
      readTime: '10 min read',
      url: '#',
    },
  ]

  const categoryColors = {
    'Next.js':  'text-[#a89ff7] bg-[#7c6ef7]/10 border-[#7c6ef7]/20',
    'Backend':  'text-[#1d9e75] bg-[#1d9e75]/10 border-[#1d9e75]/20',
    'DevOps':   'text-[#378add] bg-[#378add]/10 border-[#378add]/20',
    'Research': 'text-[#ef9f27] bg-[#ef9f27]/10 border-[#ef9f27]/20',
  }

  return (
    <section id="blog" style={{padding:'96px 0',borderTop:'1px solid #1e2028'}}>
      <div style={{maxWidth:'1400px',margin:'0 auto',padding:'0 64px 0 80px'}}>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">
            Blog
          </p>
          <a href="#" className="text-xs text-[#7c6ef7] hover:text-white transition-colors">
            View all posts ↗
          </a>
        </div>

        {/* Posts list */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="bg-[#13151d] border border-[#1e2028] rounded-xl p-6 hover:border-[#7c6ef7]/40 transition-colors group flex items-start justify-between gap-6"
            >
              <div className="flex-1 min-w-0">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs border px-2.5 py-0.5 rounded-md ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[#475569]">{post.date}</span>
                  <span className="text-xs text-[#475569]">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-[#cbd5e1] mb-2 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#475569] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <div className="text-[#475569] group-hover:text-[#7c6ef7] transition-colors flex-shrink-0 mt-1 text-lg">
                →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}