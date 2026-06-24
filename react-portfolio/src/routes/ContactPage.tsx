import Contact from '../components/Contact'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const ContactPage = () => {
  useRevealOnScroll()

  return (
    <div className="page-surface">
      <Contact />
    </div>
  )
}

export default ContactPage
