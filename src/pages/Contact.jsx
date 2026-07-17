import { useState } from 'react'

const info = [
  { icon: 'bi-geo-alt', title: 'Address', body: 'Stueng Mean Chey' },
  { icon: 'bi-telephone', title: 'Call Us', body: '088 983 2395' },
  { icon: 'bi-envelope', title: 'Email Us', body: 'vannetsang11@gmail.com' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    // No backend is wired up yet — this just confirms the form works.
    // Swap this for a real endpoint, mailto link, or a service like Formspree.
    setStatus('sent')
  }

  return (
    <section className="section">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Open to internships, collaborations, or just a chat.</p>
      </div>

      <div className="contact-grid">
        <div>
          {info.map((item) => (
            <div className="contact-info-item" key={item.title}>
              <i className={`bi ${item.icon}`} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name-field">Your Name</label>
            <input id="name-field" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email-field">Your Email</label>
            <input id="email-field" name="email" type="email" required />
          </div>
          <div className="full">
            <label htmlFor="subject-field">Subject</label>
            <input id="subject-field" name="subject" type="text" required />
          </div>
          <div className="full">
            <label htmlFor="message-field">Message</label>
            <textarea id="message-field" name="message" rows={6} required />
          </div>
          <div className="full">
            <button type="submit" className="btn">
              <i className="bi bi-send" aria-hidden="true" /> Send Message
            </button>
            {status === 'sent' && (
              <p className="form-note" role="status">
                This form isn't wired to a backend yet — connect it to an
                endpoint or a service like Formspree to actually send messages.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
