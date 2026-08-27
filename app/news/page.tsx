import { newsItems } from "./news";


export default function NewsPage() {
  return (
    <main>
      {/* Header */}
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

      {/* Hero */}
      <section className="news-hero">
        <div className="container news-hero-grid">
          <div>
            <div className="eyebrow">NEWS & UPDATES</div>

            <h1>
              Latest from
              <span> CAgriLab.</span>
            </h1>
          </div>

          <div className="news-hero-copy">
            <p>
              Follow the latest developments from the CAgriLab project,
              including new platform capabilities, research outputs,
              demonstrations and activities across our European Living Labs.
            </p>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article
                key={item.slug}
                className={`news-card ${index === 0 ? "news-featured" : ""}`}
              >
                <div className="news-card-top">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>

                <h2>{item.title}</h2>

                <p>{item.excerpt}</p>

                <a href={`/news/${item.slug}`} className="news-link">
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div>
            <div className="eyebrow">CAgriLab NEWSLETTER</div>

            <h2>Stay up to date with CAgriLab</h2>

            <p>
              Receive quarterly updates on new demonstrations, research
              outputs, Living Lab activities, events and webinars.
            </p>
          </div>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button className="button" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img
                src="/cagrilab_logo.png"
                alt="CAgriLab"
                className="footer-logo"
              />
            </div>

            <p>
              Connecting Agricultural Living Labs and regenerative agriculture
              research across Europe.
            </p>
          </div>

          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/use-cases">Use Cases</a>
            <a href="/results">Results</a>
            <a href="/news">News</a>
            <a href="/partners">Partners</a>
          </div>
        </div>

        <div className="container funding">
          <p>
            Funded by the European Union. Views and opinions expressed are
            however those of the author(s) only and do not necessarily reflect
            those of the European Union or the granting authority.
          </p>
        </div>
      </footer>
    </main>
  );
}