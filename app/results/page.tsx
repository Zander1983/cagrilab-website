const results = [
  {
    date: "March 2025",
    title: "Requirements and use cases defined",
    description:
      "The project began by defining the needs of Living Labs and farmers, including how regenerative agriculture practices and experiments could be represented, compared and discovered. Early work identified the importance of contextual information such as soil, weather, management practices and location when interpreting agricultural evidence.",
    milestone: "User requirements and technical foundations established.",
  },
  {
    date: "Summer 2025",
    title: "Living Lab data collection begins",
    description:
      "Project partners began collecting real-world data to support development and testing of CAgriLab. HAMK collected soil samples, moisture measurements, field imagery, weather data and agricultural sensor data, while CGFP prepared field and farm-management data for integration with the platform.",
    milestone: "Real Living Lab datasets available for platform development.",
  },
  {
    date: "September 2025",
    title: "CAgriLab platform infrastructure established",
    description:
      "The first CAgriLab platform infrastructure was established using Pontus-X. Initial functionality enabled data to be uploaded and downloaded, while work began on compute-to-data capabilities.",
    milestone: "First operational CAgriLab data infrastructure.",
  },
  {
    date: "October 2025",
    title: "Data harmonisation tools developed",
    description:
      "CAgriLab partners developed tools for harmonising agricultural data from different sources, using GLOSIS as a foundation for soil data. HAMK also completed a field data-collection season covering forage, soil and biodiversity measurements.",
    milestone: "First harmonisation capability developed.",
  },
  {
    date: "December 2025",
    title: "CAgriLab portal goes online",
    description:
      "The CAgriLab Pontus-X portal became operational and was successfully tested. Initial functionality allowed data and algorithms to be published and accessed through the platform.",
    milestone: "CAgriLab portal operational.",
  },
  {
    date: "March 2026",
    title: "Simpler data publishing introduced",
    description:
      "CAgriLab introduced functionality allowing users to publish data without requiring a blockchain wallet, reducing a significant usability barrier. The project's first system architecture had also been drafted.",
    milestone: "Data publishing made more accessible.",
  },
  {
    date: "Spring 2026",
    title: "AI-supported agricultural measurement advances",
    description:
      "HAMK progressed several AI and computer-vision applications designed to support Living Lab data collection, including image-based soil structure assessment, biodiversity measurement and estimation of grass and clover composition.",
    milestone: "AI tools applied to real Living Lab measurement challenges.",
  },
  {
    date: "June 2026",
    title: "New agricultural AI prototypes developed",
    description:
      "Prototype algorithms were developed for estimating grass/clover ratios, above-ground forage biomass in multi-species systems and detecting cow activity.",
    milestone: "Multiple agricultural AI prototypes demonstrated.",
  },
  {
    date: "July 2026",
    title: "Natural-language search prototype developed",
    description:
      "A prototype natural-language search capability was developed, alongside functionality for uploading and visualising Digital Twins. Wallet-free publishing and data harmonisation tools had progressed to production status.",
    milestone: "Living Lab information becomes easier to discover.",
  },
  {
    date: "August 2026",
    title: "Towards an integrated CAgriLab platform",
    description:
      "Development moved towards deeper integration of the project's components, including the Digital Twin viewer and builder and a container-based computing environment for running algorithms alongside the data infrastructure.",
    milestone: "CAgriLab components moving towards an integrated system.",
  },
];

export default function ResultsPage() {
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
      <section className="results-hero">
        <div className="container results-hero-grid">
          <div>
            <div className="eyebrow">PROJECT RESULTS</div>

            <h1>
              From concept to
              <span> working platform.</span>
            </h1>
          </div>

          <div className="results-hero-copy">
            <p>
              CAgriLab is developing a shared digital environment to make data,
              experiments and knowledge from Agricultural Living Labs easier to
              discover, compare and reuse.
            </p>

            <p>
              Follow the project's progress from initial requirements and data
              collection to harmonisation, Digital Twins, AI tools and
              natural-language search.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="results-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">PROJECT PROGRESS</div>
            <h2>CAgriLab milestones</h2>
            <p>
              Key technical and research achievements from across the project.
            </p>
          </div>

          <div className="results-timeline">
            {results.map((result, index) => (
              <article key={result.title} className="result-item">
                <div className="result-marker-column">
                  <div className="result-marker">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {index !== results.length - 1 && (
                    <div className="result-line"></div>
                  )}
                </div>

                <div className="result-content">
                  <div className="result-date">{result.date}</div>

                  <h2>{result.title}</h2>

                  <p>{result.description}</p>

                  <div className="result-milestone">
                    <span>Milestone</span>
                    <strong>{result.milestone}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="whats-next-section">
        <div className="container whats-next-grid">
          <div>
            <div className="eyebrow">WHAT'S NEXT</div>

            <h2>From technology development to real-world demonstrations.</h2>
          </div>

          <div>
            <p>
              CAgriLab is now moving from developing individual components
              towards demonstrating how they solve practical problems for
              Agricultural Living Labs.
            </p>

            <p>
              The next phase will focus on integrating Living Lab data,
              demonstrating priority use cases and showing how the platform can
              help users find, compare and understand regenerative agriculture
              evidence.
            </p>

            <a href="/use-cases" className="text-link">
              Explore the use cases →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta">
          <div>
            <div className="eyebrow">EXPLORE CAGRILAB</div>
            <h2>See the platform in action.</h2>
            <p>
              Explore the tools, Living Lab data and digital infrastructure
              being developed through CAgriLab.
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