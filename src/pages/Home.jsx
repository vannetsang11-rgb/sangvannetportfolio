import { useEffect, useState } from 'react'

const roles = ['Designer', 'Developer', 'Freelancer', 'Photographer']

const portfolioItems = [
  { img: 'app-1.jpg', title: 'App One', tag: 'App' },
  { img: 'product-1.jpg', title: 'Product One', tag: 'Product' },
  { img: 'branding-1.jpg', title: 'Branding One', tag: 'Branding' },
  { img: 'books-1.jpg', title: 'Books One', tag: 'Books' },
  { img: 'app-2.jpg', title: 'App Two', tag: 'App' },
  { img: 'product-2.jpg', title: 'Product Two', tag: 'Product' },
]

function useTypedRole() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 40 : 90
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1200)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return text
}

export default function Home() {
  const typed = useTypedRole()

  return (
    <>
      <section className="hero">
        <div>
          <h2>Sang Vannet</h2>
          <p>
            I'm <span className="typed-accent">{typed}</span>
            <span aria-hidden="true">|</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Featured Work</h2>
          <p>
            A sample of recent projects across app design, product shots,
            branding, and print. Swap these for my own work.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-item" key={item.img}>
              <span className="portfolio-item__tag">{item.tag}</span>
              <img src={`/assets/img/portfolio/${item.img}`} alt={item.title} />
              <div className="portfolio-item__info">
                <h4>{item.title}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
