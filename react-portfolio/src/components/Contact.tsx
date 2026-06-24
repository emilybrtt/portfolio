import type { ReactElement, FormEvent } from 'react'
import { useState } from 'react'
import { socialLinks } from '../data/portfolio'

type IconName = 'linkedin' | 'github' | 'email'

const ICONS: Record<IconName, ReactElement> = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.998L12 13.547l9.366-9.726h.998c.904 0 1.636.732 1.636 1.636z" />
    </svg>
  ),
}

type FormState = 'idle' | 'sending' | 'success' | 'error'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const SERVICE_ID = 'service_brttemily'
      const TEMPLATE_ID = 'template_t3vrhpa'
      const PUBLIC_KEY = 'Mj8Mz5xDPA1YFzIPA'

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: { from_name: name, from_email: email, message },
        }),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="section contact">
      <div className="contact-content" data-fade>
       <h1>Vamos conversar?</h1>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-fields-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Nome</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">E-mail</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                placeholder="Escreva sua mensagem..."
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="contact-form-footer">
              <button
                type="submit"
                className="button button-primary contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
              </button>

              {status === 'success' && (
                <p className="contact-feedback contact-feedback--success">
                  ✓ Mensagem enviada! Em breve entro em contato.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-feedback contact-feedback--error">
                  Algo deu errado. Tente novamente.
                </p>
              )}
            </div>
          </form>

          <div className="social-links">
            {socialLinks.map(({ href, label, icon }) => (
              <a key={label} href={href} className="social-link" target="_blank" rel="noopener" aria-label={label}>
                {ICONS[icon as IconName]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact