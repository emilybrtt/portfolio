import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'

const scrollToHash = (hash: string) => {
  const target = document.querySelector(hash)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-fade]'))
    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
