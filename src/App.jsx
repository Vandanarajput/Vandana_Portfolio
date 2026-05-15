import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import CursorDot from './components/CursorDot'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorDot />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
