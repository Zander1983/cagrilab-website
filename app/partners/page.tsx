const partners = [
  {
    name: "Technological University of the Shannon",
    short: "TUS",
    logo: "/tus_logo.jpg",
    country: "Ireland",
    type: "Project Coordinator",
    contact: "Dr Yuansong Qiao",
    role:
      "Coordinates the CAgriLab project and contributes to stakeholder engagement, communication and development of project use cases.",
  },
  {
    name:
      "Poznań Supercomputing and Networking Centre, Institute of Bioorganic Chemistry PAN",
    short: "PSNC",
    logo: "/psnc_logo.png",
    country: "Poland",
    type: "Project Partner",
    contact: "Dr Raul Palma",
    role:
      "Contributes expertise in digital infrastructure, interoperable data systems and development of the CAgriLab platform.",
  },
  {
    name: "Häme University of Applied Sciences",
    short: "HAMK",
    logo: "/hamk_logo.png",
    country: "Finland",
    type: "Project Partner",
    contact: "Dr Nathaniel Narra",
    role:
      "Contributes Living Lab research, regenerative agriculture expertise and AI-supported agricultural measurement tools.",
  },
  {
    name: "CGFP Sp. z o.o.",
    short: "CGFP",
    logo: "/cgfp_logo.jpg",
    country: "Poland",
    type: "Project Partner",
    contact: "Mr Andrzej Słomczewski",
    role:
      "Contributes Living Lab data, agricultural research and practical pilot activities.",
  },
];

export default function PartnersPage() {
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

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">PROJECT CONSORTIUM</div>
          <h1>Partners across Europe</h1>
          <p>
            CAgriLab brings together expertise in agricultural Living Labs,
            regenerative agriculture, digital infrastructure, data
            harmonisation and stakeholder engagement.
          </p>
        </div>
      </section>



      <section className="partners-section">
        <div className="container">

          <div className="partners-grid">
            {partners.map((partner) => (
              <article key={partner.short} className="partner-card">
                <div className="partner-logo">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                  />
                </div>

                <div className="partner-type">{partner.type}</div>
                <div className="partner-country">{partner.country}</div>

                <h2>{partner.name}</h2>

                <p>{partner.role}</p>

                <div className="partner-contact">
                  <strong>Project contact</strong>
                  <span>{partner.contact}</span>
                </div>
              </article>
            ))}
          </div>


          {/* Funding institutions */}
          <div className="funders-block">
            <div className="eyebrow">FUNDING INSTITUTIONS</div>

            <h2>Supported across Ireland, Poland and Finland</h2>

            <div className="funders-grid">
              <div className="funder-item">
                <strong>
                  Department of Agriculture, Food and the Marine
                </strong>
                <span>Ireland</span>
              </div>

              <div className="funder-item">
                <strong>
                  National Centre for Research and Development
                </strong>
                <span>Poland</span>
              </div>

              <div className="funder-item">
                <strong>
                  Ministry of Agriculture and Forestry
                </strong>
                <span>Finland</span>
              </div>
            </div>
          </div>

        </div>
      </section>



      <section className="partners-cta">
        <div className="container partners-cta-inner">
          <div>
            <div className="eyebrow">COLLABORATION</div>
            <h2>Working across research, technology and practice</h2>
            <p>
              The CAgriLab consortium combines technical expertise with
              practical Living Lab experience to make agricultural evidence
              easier to share, compare and use.
            </p>
          </div>

          <a
            href="https://cagrilab.pcss.pl/"
            target="_blank"
            rel="noreferrer"
            className="button button-light"
          >
            Explore the platform →
          </a>
        </div>
      </section>

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