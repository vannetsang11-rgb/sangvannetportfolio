# Portfolio Website — Final Exam Project

A React + React Router portfolio site with four pages: Home, About, Resume,
and Contact. Built with Vite. The visual design is adapted from the
[iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/)
template by BootstrapMade (distributed by ThemeWagon) — rebuilt as React
components instead of static HTML/Bootstrap, per that template's free
license, which requires the credit link to stay intact (see the sidebar
footer in `Layout.jsx`).

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  main.jsx           # mounts <App /> inside <BrowserRouter>
  App.jsx             # defines all routes with React Router
  index.css           # global styles / design system
  components/
    Layout.jsx         # persistent sidebar (profile, nav, socials) + <Outlet />
  pages/
    Home.jsx            # hero + featured work grid
    About.jsx            # about, stats, skills, services, testimonials
    Resume.jsx            # summary, education, experience
    Contact.jsx            # contact info + form
    NotFound.jsx            # catch-all for unknown routes
public/
  assets/img/          # images carried over from the iPortfolio template
```

## How the routing works

`App.jsx` defines a parent route (`/`) that renders `Layout`, which contains
the sidebar and an `<Outlet />` — that's where React Router swaps in
whichever child page matches the current URL:

- `/` → Home
- `/about` → About
- `/resume` → Resume
- `/contact` → Contact
- anything else → NotFound

## Customizing for your team

Each teammate can work on a different page file without touching shared
code:

- Swap the name, bio, and project images in `Home.jsx` and `Layout.jsx`.
- Fill in real experience in `About.jsx` and `Resume.jsx`.
- Update the links/email in `Contact.jsx`, and wire the form to a real
  backend or a service like Formspree — it's currently frontend-only.
- Drop your own photos into `public/assets/img/` and update the `src`
  paths, or drop a real resume PDF at `public/resume.pdf`.

Shared styling and the color palette live in `src/index.css`.
