import Footer from "@/app/components/Footer";

const useCases = [
  {
    number: "01",
    title: "Find evidence relevant to your context",
    question: "What has worked in conditions like mine?",
    description:
      "Regenerative agriculture is highly context-dependent. The same practice can produce different results depending on soil, climate, crop, management history and farm conditions.",
    solution:
      "CAgriLab helps users discover experiments from comparable contexts, using information such as soil, climate, crop, farm type, management practice and measured outcome.",
    example:
      "Find cover crop experiments conducted on similar soils and under comparable climatic conditions.",
    featured: true,
  },
  {
    number: "02",
    title: "Record experiments and their actual outcomes",
    question: "What was tested, where, and what happened?",
    description:
      "Valuable experiments are conducted across Agricultural Living Labs, but information about experimental design, local conditions and measured outcomes can remain fragmented or difficult to reuse.",
    solution:
      "CAgriLab provides a shared structure for recording what was tested, the experimental design, local context and the outcomes that were actually measured.",
    example:
      "Compare a regenerative practice with its measured yield, soil or biodiversity outcomes rather than relying only on descriptions of the practice.",
    featured: true,
  },
  {
    number: "03",
    title: "Ask questions of Living Lab evidence",
    question: "Can I simply ask the evidence?",
    description:
      "Finding useful agricultural evidence can require knowledge of datasets, terminology and specialised search tools.",
    solution:
      "CAgriLab is developing natural-language search so users can ask questions and discover relevant regenerative agriculture knowledge and Living Lab data.",
    example:
      'Ask: "How have cover crops performed in conditions similar to mine?"',
    featured: true,
  },
  {
    number: "04",
    title: "Track experiments over time",
    question: "What is this Living Lab testing now?",
    description:
      "Regenerative processes can take years to become measurable, while individual research projects are often relatively short.",
    solution:
      "Living Lab digital twins can provide a persistent record of research activities, experiments and outcomes, allowing evidence to accumulate over time.",
    example:
      "Follow changes in soil health across experiments that continue beyond the lifetime of an individual project.",
    featured: false,
  },
  {
    number: "05",
    title: "Harmonise data from different Living Labs",
    question: "How can evidence from different sites be compared?",
    description:
      "Living Labs generate data in different formats and structures, making cross-site comparison and reuse difficult.",
    solution:
      "CAgriLab develops harmonisation tools and a common digital twin model to make heterogeneous Living Lab data easier to combine, compare and reuse.",
    example:
      "Convert Living Lab soil data into common structures such as GLOSIS-compatible formats.",
    featured: false,
  },
  {
    number: "06",
    title: "Share data while retaining control",
    question: "Can researchers share data without losing control of it?",
    description:
      "Collaboration requires data sharing, but ownership, access and data sovereignty can make researchers and organisations reluctant to publish valuable datasets.",
    solution:
      "CAgriLab's data infrastructure is designed to allow data owners to control how their Living Lab data are published, accessed and used.",
    example:
      "Make a dataset discoverable while retaining control over access and permitted uses.",
    featured: false,
  },
  {
    number: "07",
    title: "AI-supported soil and biodiversity analysis",
    question: "Can field observations be measured more easily?",
    description:
      "Some agricultural and ecological measurements require considerable time and specialist analysis.",
    solution:
      "CAgriLab partners are developing image-based tools for agricultural and environmental measurements including vegetation, soil structure and biodiversity.",
    example:
      "Use imagery to support assessment of grass-clover ratios, forage biomass or soil structure.",
    featured: false,
  },
];

export default function UseCasesPage() {
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
      <section className="use-cases-hero">
        <div className="container use-cases-hero-grid">
          <div>
            <div className="eyebrow">CAGRILAB USE CASES</div>

            <h1>
              Making Living Lab evidence
              <span> useful.</span>
            </h1>
          </div>

          <div className="use-cases-hero-copy">
            <p>
              Regenerative agriculture does not produce the same results
              everywhere. Soil, climate, management and local conditions
              matter.
            </p>

            <p>
              CAgriLab is exploring how digital tools can make evidence from
              Agricultural Living Labs easier to capture, compare, discover
              and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Core proposition */}
      <section className="evidence-strip">
        <div className="container">
          <div className="evidence-flow">
            <div>
              <span>01</span>
              <strong>CAPTURE</strong>
              <small>Experiments + outcomes</small>
            </div>

            <b>→</b>

            <div>
              <span>02</span>
              <strong>HARMONISE</strong>
              <small>Comparable evidence</small>
            </div>

            <b>→</b>

            <div>
              <span>03</span>
              <strong>FIND</strong>
              <small>Relevant contexts</small>
            </div>

            <b>→</b>

            <div>
              <span>04</span>
              <strong>UNDERSTAND</strong>
              <small>Evidence in plain language</small>
            </div>
          </div>
        </div>
      </section>

      {/* Main use cases */}
      <section className="use-cases-list-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">CORE USE CASES</div>
            <h2>What could CAgriLab help you do?</h2>
            <p>
              The use cases are grounded in challenges encountered when
              producing, sharing and using evidence across Agricultural Living
              Labs.
            </p>
          </div>

          <div className="detailed-use-cases">
            {useCases.map((useCase) => (
              <article
                key={useCase.number}
                className={`detailed-use-case ${
                  useCase.featured ? "core" : ""
                }`}
              >
                <div className="use-case-number">
                  {useCase.number}
                </div>

                <div className="use-case-main">
                  {useCase.featured && (
                    <div className="core-label">CORE USE CASE</div>
                  )}

                  <h2>{useCase.title}</h2>

                  <div className="use-case-question">
                    {useCase.question}
                  </div>
                </div>

                <div className="use-case-detail">
                  <div>
                    <span className="detail-label">THE CHALLENGE</span>
                    <p>{useCase.description}</p>
                  </div>

                  <div>
                    <span className="detail-label">WHAT CAGRILAB ENABLES</span>
                    <p>{useCase.solution}</p>
                  </div>

                  <div className="use-case-example">
                    <span>EXAMPLE</span>
                    <p>{useCase.example}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Context section */}
      <section className="context-section">
        <div className="container context-grid">
          <div>
            <div className="eyebrow">WHY CONTEXT MATTERS</div>

            <h2>
              An agricultural result is only useful if you understand where it
              came from.
            </h2>
          </div>

          <div>
            <p>
              A regenerative practice cannot be separated from the conditions
              in which it was tested. Good evidence therefore needs more than
              a result.
            </p>

            <div className="context-list">
              <span>Soil</span>
              <span>Climate</span>
              <span>Crop</span>
              <span>Farm type</span>
              <span>Management history</span>
              <span>Experimental design</span>
              <span>Practice</span>
              <span>Measured outcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta">
          <div>
            <div className="eyebrow">EXPLORE CAGRILAB</div>
            <h2>Explore the platform.</h2>
            <p>
              Discover the tools, data and Living Lab infrastructure being
              developed by the CAgriLab project.
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