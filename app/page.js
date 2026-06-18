import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import CV from '../components/CV'
import Thesis from '../components/Thesis'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Blog />
      <CV />
      <Thesis />
    </main>
  );
}