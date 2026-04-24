'use client'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skill from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationSection from './components/EducationSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import '../i18n'; // مهم!


const App = () => {
   const {
      i18n: { dir },
    } = useTranslation();

  return (
    <div className='relative h-full overflow-y-auto antialiased' dir={dir()}>
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Hero/>
        <Navbar/>
        <Projects/>
        <Bio/>
        <Skill/>
        <WorkExperience/>
        <EducationSection/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default App


