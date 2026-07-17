import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="section-title">
        <h2>Page not found</h2>
        <p>This route doesn't exist yet.</p>
      </div>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </section>
  )
}
