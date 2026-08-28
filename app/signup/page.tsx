export default function SignUpPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="brand">
            <img
              src="/cagrilab_logo.png"
              alt="CAgriLab"
              className="brand-logo"
            />
          </a>


          <nav className="nav-links">
            <a href="/about">About</a>
            <a href="/use-cases">Use Cases</a>
            <a href="/results">Results</a>
            <a href="/news">News</a>
            <a href="/partners">Partners</a>
            <a href="/signup">Join CAgriLab</a>
          </nav>

          <a
            className="button button-small"
            href="https://cagrilab.pcss.pl/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Platform
          </a>

        </div>
      </header>

      <section className="signup-hero">
        <div className="container signup-heading">
          <div className="eyebrow">JOIN THE COMMUNITY</div>

          <h1>Connect with CAgriLab</h1>

          <p>
            Register your interest in CAgriLab and stay connected with project
            developments, demonstrations and opportunities to participate.
          </p>
        </div>
      </section>

      <section className="signup-section">
        <div className="container signup-form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSffdE6kVb1kD1tjK8OmJzTsQmCl6XCY3kKcEl2qbk8cHKkGyg/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}