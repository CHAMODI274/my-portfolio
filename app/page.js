import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
    </main>
  );
}