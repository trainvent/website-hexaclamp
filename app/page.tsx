import Image from "next/image";
import { withPagesBasePath } from "../lib/pages-base-path";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="page-shell">
        <section className="hero-grid">
          <div className="space-y-8">
            <div className="eyebrow">Modular honeycomb building system</div>
            <div className="space-y-5">
              <h1 className="hero-title">
                Build hexagon shelves, displays, and custom objects with one
                clamp system.
              </h1>
              <p className="hero-copy">
                HexaClamp is an easy way to prototype furniture and spatial
                ideas based on the honeycomb shape. Instead of redesigning every
                connector, you can reuse the same clamp logic to test shelves,
                sculptural storage, or entirely new hexagonal products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a className="cta-primary" href="#prototype">
                See the prototype
              </a>
              <a className="cta-secondary" href="#how-it-works">
                How it works
              </a>
            </div>

            <dl className="stats-grid">
              <div className="stat-card">
                <dt>Idea</dt>
                <dd>One clamp, many hex forms</dd>
              </div>
              <div className="stat-card">
                <dt>Use cases</dt>
                <dd>Shelves, room dividers, display objects</dd>
              </div>
              <div className="stat-card">
                <dt>Status</dt>
                <dd>CAD prototypes and physical testing</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card hero-image-main">
              <Image
                src={withPagesBasePath("/proto_center.png")}
                alt="Front view CAD prototype of the HexaClamp connector"
                width={467}
                height={431}
                priority
                unoptimized
              />
            </div>
            <div className="hero-image-card hero-image-detail">
              <Image
                src={withPagesBasePath("/proto_side.png")}
                alt="Side view CAD prototype of the HexaClamp connector"
                width={443}
                height={409}
                unoptimized
              />
            </div>
            <div className="floating-note">
              Designed to make honeycomb structures feel practical, reusable,
              and quick to assemble.
            </div>
          </div>
        </section>

        <section className="section-grid" id="how-it-works">
          <div className="section-heading">
            <p className="section-kicker">Why HexaClamp</p>
            <h2>A simple tool for a shape that usually gets complicated fast.</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Design faster</h3>
              <p>
                Explore the hexagon as a construction logic instead of treating
                every object as a one-off design problem.
              </p>
            </article>
            <article className="feature-card">
              <h3>Prototype physically</h3>
              <p>
                Move from CAD to hands-on tests with connectors that are built
                to validate fit, structure, and composition.
              </p>
            </article>
            <article className="feature-card">
              <h3>Scale the system</h3>
              <p>
                Start with a small shelf module and expand toward larger
                furniture pieces, displays, or custom interior concepts.
              </p>
            </article>
          </div>
        </section>

        <section className="prototype-panel" id="prototype">
          <div className="prototype-copy">
            <p className="section-kicker">Prototype snapshot</p>
            <h2>Digital studies and a physical prototype, side by side.</h2>
            <p>
              These early studies show the clamp from the center, the side, and
              as a physical prototype. The goal is not just a single part, but
              a toolkit for making honeycomb geometry usable in real objects.
            </p>
            <p>
              HexaClamp is aimed at makers, furniture tinkerers, and anyone who
              wants to create hex-based structures without rebuilding the whole
              connection strategy from scratch.
            </p>
          </div>
          <div className="prototype-gallery">
            <figure className="gallery-card">
              <Image
                src={withPagesBasePath("/proto_center.png")}
                alt="HexaClamp prototype front view"
                width={467}
                height={431}
                unoptimized
              />
              <figcaption>Center view</figcaption>
            </figure>
            <figure className="gallery-card">
              <Image
                src={withPagesBasePath("/proto_side.png")}
                alt="HexaClamp prototype side view"
                width={443}
                height={409}
                unoptimized
              />
              <figcaption>Side view</figcaption>
            </figure>
            <figure className="gallery-card gallery-card-photo">
              <Image
                src={withPagesBasePath("/Protoypes_naked.jpg")}
                alt="Physical HexaClamp prototype photographed upright"
                width={3072}
                height={4096}
                unoptimized
              />
              <figcaption>Physical prototype</figcaption>
            </figure>
          </div>
        </section>

        <section className="closing-banner">
          <p className="section-kicker">What comes next</p>
          <h2>
            A growing system for creating bold, lightweight honeycomb furniture.
          </h2>
          <p>
            HexaClamp begins with clamp geometry, but the bigger idea is a clean
            and accessible way to generate shelves and other hexagonal objects
            with less friction and more creative freedom.
          </p>
          <div className="closing-actions">
            <a className="cta-primary" href="mailto:hello@trainvent.com">
              Contact via email
            </a>
            <a
              className="cta-secondary"
              href="https://next.trainvent.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Trainvent
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
