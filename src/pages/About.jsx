const stats = [
  { icon: 'bi-emoji-smile', value: '232', label: 'Happy Clients' },
  { icon: 'bi-journal-richtext', value: '521', label: 'Projects' },
  { icon: 'bi-headset', value: '1,453', label: 'Hours of Support' },
  { icon: 'bi-people', value: '32', label: 'Hard Workers' },
]

const skills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 80 },
  { name: 'Node.js', value: 70 },
  { name: 'Figma', value: 60 },
]

const services = [
  { icon: 'bi-briefcase', title: 'UI/UX Design', desc: 'Wireframes, prototypes, and polished interfaces built around how people actually use a product.' },
  { icon: 'bi-card-checklist', title: 'Frontend Development', desc: 'Responsive, accessible interfaces built with React and modern CSS.' },
  { icon: 'bi-bar-chart', title: 'Product Strategy', desc: 'Turning a rough idea into a scoped, buildable plan.' },
  { icon: 'bi-binoculars', title: 'Brand Identity', desc: 'Logos, color systems, and visual guidelines that hold up across a product.' },
  { icon: 'bi-brightness-high', title: 'Photography', desc: 'Product and portrait photography for marketing and portfolio use.' },
  { icon: 'bi-calendar4-week', title: 'Consulting', desc: 'Short-term engagements to unblock a team or review a design direction.' },
]

const testimonials = [
  { name: 'Saul Goodman', role: 'CEO & Founder', img: 'testimonials-1.jpg', quote: 'Working together was smooth from kickoff to launch — clear communication and strong craft throughout.' },
  { name: 'Sara Wilsson', role: 'Designer', img: 'testimonials-2.jpg', quote: 'A great eye for detail and someone who genuinely cares about the end result, not just the deadline.' },
  { name: 'Jena Karlis', role: 'Store Owner', img: 'testimonials-3.jpg', quote: 'Delivered exactly what we needed, and was patient with every round of feedback.' },
]

export default function About() {
  return (
    <>
      <section className="section">
        <div className="section-title">
          <h2>About</h2>
          <p>A quick introduction — swap this copy for your own story.</p>
        </div>

        <div className="about-grid">
          <img src="/assets/img/my-profile-img.jpg" alt="Portrait of Sang Vannet" />
          <div>
            <h3>UI/UX Designer &amp; Web Developer</h3>
            <p className="lede">
              A one-line personal tagline goes here — what you do and who
              you do it for.
            </p>
            <ul className="info-columns">
              <li><strong>Birthday:</strong> 25 Dec 2007 </li>
              <li><strong>Website:</strong> www.example.com</li>
              <li><strong>Phone:</strong> 088 983 2395</li>
              <li><strong>City:</strong> Stueng Mean Chey</li>
              <li><strong>Degree:</strong> Computer Science</li>
              <li><strong>Email:</strong> vannetsang11@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
              <li><strong>Age:</strong> 19</li>
            </ul>
            <p>
              A longer paragraph goes here — background, what drew you to
              this field, and what kind of problems you enjoy solving. Keep
              it in your own voice.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stats-item" key={s.label}>
              <i className={`bi ${s.icon}`} aria-hidden="true" />
              <span className="stat-number">{s.value}</span>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Skills</h2>
          <p>A rough sense of where you're strongest right now.</p>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-bar" key={s.name}>
              <div className="skill-bar__label">
                <span>{s.name}</span>
                <span>{s.value}%</span>
              </div>
              <div className="skill-bar__track">
                <div className="skill-bar__fill" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="section-title">
          <h2>Services</h2>
          <p>I can help people with — trim this list to what's real.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-item" key={s.title}>
              <div className="icon"><i className={`bi ${s.icon}`} aria-hidden="true" /></div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>People have said about working with me.</p>
        </div>
        <div className="testimonial-scroll">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p>"{t.quote}"</p>
              <div className="testimonial-card__person">
                <img src={`/assets/img/testimonials/${t.img}`} alt={t.name} />
                <div>
                  <h3>{t.name}</h3>
                  <h4>{t.role}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
