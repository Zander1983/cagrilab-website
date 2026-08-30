import { notFound } from "next/navigation";
import { getNewsItem, newsItems } from "../news";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getNewsItem(slug);

  if (!article) {
    notFound();
  }

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

      {/* Article hero */}
      <section className="article-hero">
        <div className="container article-container">
          <a href="/news" className="article-back">
            ← Back to News
          </a>

          <div className="article-meta">
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>

          <h1>{article.title}</h1>

          <p className="article-intro">{article.intro}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="article-section">
        <div className="container article-container article-body">
          {article.sections.map((section, index) => (
            <section key={index} className="article-content-section">
              {section.heading && <h2>{section.heading}</h2>}

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="article-platform-cta">
            <div>
              <span>EXPLORE CAGRILAB</span>
              <h3>See the platform in action</h3>
            </div>

            <a
              href="https://cagrilab.pcss.pl/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Explore Platform →
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}