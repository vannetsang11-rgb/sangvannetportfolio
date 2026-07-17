export default function Resume() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Resume</h2>
        <p>Education and experience — replace with your own history, or link a PDF for recruiters.</p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <a className="btn" href="/resume.pdf" download>
          <i className="bi bi-download" aria-hidden="true" /> Download PDF
        </a>
      </div>

      <div className="resume-grid">
        <div>
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item">
            <h4>Sang Vannet</h4>
            <p>
              A computer science student with a growing focus on frontend
              development and product design. Comfortable moving between
              design and code.
            </p>
            <ul>
              <li>Stueng Mean Chey</li>
              <li>088 983 2395</li>
              <li>vannetsang11@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Computer Science</h4>
            <h5>2025 — Present</h5>
            <p>Western University</p>
            <p>Relevant coursework: data structures, web development, databases.</p>
          </div>
          <div className="resume-item">
            <h4>High School Diploma</h4>
            <h5>2024 — 2025</h5>
            <p>Onlong Veng High School</p>
          </div>
        </div>

        <div>
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Software Engineering Intern</h4>
            <h5>Summer 2025</h5>
            <p>BNG Company</p>
            <ul>
              <li>Built and shipped a feature used by real customers</li>
              <li>Worked directly with a small team of engineers and designers</li>
              <li>Fixed bugs and wrote tests for existing code</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Freelance Web Developer</h4>
            <h5>2024 — Present</h5>
            <p>Self-employed</p>
            <ul>
              <li>Designed and built sites for a handful of small clients</li>
              <li>Managed scope, timelines, and communication end to end</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
