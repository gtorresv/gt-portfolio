import About from './pages/About'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='about-section'>
        <About />
      </div>
      <div className='portfolio-section'>
        <Portfolio />
      </div>
      <div className='resume-section'>
        <Resume />
      </div>
      <div className='contact-section'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
