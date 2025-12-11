import { useEffect } from 'react'
import DocumentGallery from '../components/DocumentGallery'
import MarketingHero from '../components/MarketingHero'
import PostGallery from '../components/PostGallery'

const Marketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
      <MarketingHero />
      <PostGallery />
      <DocumentGallery />
    </>
  )
}

export default Marketing
