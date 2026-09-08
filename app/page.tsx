import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
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

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">AGRICULTURAL LIVING LABS ACROSS EUROPE</div>

            <h1>
              Turning Living Lab research into
              <span> usable evidence.</span>
            </h1>

            <p className="hero-intro">
              CAgriLab connects regenerative agriculture experiments, data and
              outcomes so researchers and farmers can discover what has been
              tested, where it worked and under what conditions.
            </p>

            <div className="hero-actions">
              <a className="button" href="/use-cases">
                Explore use cases
              </a>

              <a
                className="button button-secondary"
                href="https://cagrilab.pcss.pl/"
                target="_blank"
                rel="noreferrer"
              >
                Visit CAgriLab portal →
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card visual-card-main">
              <div className="visual-label">Living Lab evidence</div>

              <div className="experiment-card">
                <div>
                  <span className="status-dot"></span>
                  Experiment
                </div>
                <strong>Cover crops</strong>
                <p>Loam soil · Temperate climate · Mixed farming</p>
              </div>

              <div className="result-row">
                <div>
                  <span>Measured outcome</span>
                  <strong>Soil organic carbon</strong>
                </div>
                <div className="result-positive">+12%</div>
              </div>

              <div className="context-tags">
                <span>Soil</span>
                <span>Climate</span>
                <span>Practice</span>
                <span>Outcome</span>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <span>🌍</span>
              <div>
                <strong>European evidence</strong>
                <small>Connected Living Labs</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span>✓</span>
              <div>
                <strong>Ground truth</strong>
                <small>Measured outcomes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem-section">
        <div className="container problem-grid">
          <div>
            <div className="eyebrow">THE CHALLENGE</div>
            <h2>
              Regenerative agriculture is local.
              <br />
              The evidence should be too.
            </h2>
          </div>

          <div className="problem-copy">
            <p>
              The same agricultural practice can produce very different results
              depending on soil, climate, crop, management history and farm
              conditions.
            </p>

            <p>
              Yet valuable evidence from Living Labs is often fragmented across
              projects, datasets and organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="use-cases-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHAT CAGRILAB ENABLES</div>
            <h2>From scattered experiments to shared knowledge</h2>
            <p>
              CAgriLab makes Living Lab research easier to capture, compare,
              discover and understand.
            </p>
          </div>

          <div className="use-case-grid">
            <article className="use-case-card featured">
              <span className="number">01</span>
              <div className="icon">⌕</div>
              <h3>Find evidence relevant to your context</h3>
              <p>
                Find experiments based on soil, climate, crop, farm type,
                practice and measured outcome — not just keywords.
              </p>
              <a href="/use-cases">Learn more →</a>
            </article>

            <article className="use-case-card">
              <span className="number">02</span>
              <div className="icon">◎</div>
              <h3>See what was tested and what happened</h3>
              <p>
                Capture experimental design, local conditions, practices and
                real measured outcomes in a shared evidence base.
              </p>
              <a href="/use-cases">Learn more →</a>
            </article>

            <article className="use-case-card">
              <span className="number">03</span>
              <div className="icon">✦</div>
              <h3>Ask the evidence using natural language</h3>
              <p>
                Ask questions such as “How have cover crops performed in
                conditions similar to mine?” and explore the underlying
                evidence.
              </p>
              <a href="/use-cases">Learn more →</a>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-heading section-heading-light">
            <div className="eyebrow">THE CAGRILAB APPROACH</div>
            <h2>Capture. Harmonise. Find. Understand.</h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>
              <h3>Capture</h3>
              <p>
                Record experiments, context, practices and measured outcomes.
              </p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-item">
              <span>02</span>
              <h3>Harmonise</h3>
              <p>
                Bring heterogeneous Living Lab data into comparable structures.
              </p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-item">
              <span>03</span>
              <h3>Find</h3>
              <p>
                Discover evidence from experiments carried out in relevant
                contexts.
              </p>
            </div>

            <div className="process-arrow">→</div>

            <div className="process-item">
              <span>04</span>
              <h3>Understand</h3>
              <p>
                Use natural-language tools to interrogate and interpret the
                evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta">
          <div>
            <div className="eyebrow">EXPLORE THE PROJECT</div>
            <h2>See CAgriLab in action.</h2>
            <p>
              Explore the platform, Living Lab data and tools being developed
              across the project.
            </p>
          </div>

          <a
            className="button button-light"
            href="https://cagrilab.pcss.pl/"
            target="_blank"
            rel="noreferrer"
          >
            Open CAgriLab platform →
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}