import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="profile">
        <div className="kicker">
          <span className="dot" />
          <span className="label">Sheet A1 — Profile</span>
        </div>
        <h1 className="name">
          GIORGI
          <br />
          ZOIDZE
        </h1>
        <p className="role">
          Full-stack developer building <strong>React / TypeScript</strong>{" "}
          interfaces on top of <strong>Oracle PL/SQL</strong> and Node services
          — currently shipping loan &amp; collateral systems for a bank, and
          co-founding an access-control product on the side.
        </p>

        <div className="hero-actions">
          <a
            href="/resume.pdf"
            download="Giorgi-Zoidze-Resume.pdf"
            className="hero-cta"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="titleblock">
          <div className="cell">
            <div className="label">Discipline</div>
            <div className="v">Full-Stack Development</div>
          </div>
          <div className="cell">
            <div className="label">Based</div>
            <div className="v">Tbilisi, Georgia</div>
          </div>
          <div className="cell">
            <div className="label">Status</div>
            <div className="v accent">Open to opportunities</div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="sheet-head">
          <span className="tag">A2</span>
          <h2>Experience</h2>
          <span className="fill" />
        </div>
        <p className="prose" style={{ marginBottom: 24 }}>
          Read top to bottom, most recent first — each role builds on what the
          last one shipped.
        </p>

        <table className="rev">
          <thead>
            <tr>
              <th>Rev</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rev-id">D</td>
              <td className="rev-date">JAN 2025 — PRESENT</td>
              <td className="rev-desc">
                <div className="role-line">
                  Full Stack Developer{" "}
                  <span className="org">— Silk Bank, Tbilisi</span>
                </div>
                <p>
                  Own the Contract/Loan Scheme feature end-to-end, from the
                  Oracle PL/SQL package layer to the React/TypeScript UI. Lead
                  frontend across the Loans, Cards and Deposits modules, built
                  the &quot;Main Properties&quot; collateral module, and
                  contribute PL/SQL logic to the customer data package behind
                  KYC and account information.
                </p>
              </td>
            </tr>
            <tr>
              <td className="rev-id">C</td>
              <td className="rev-date">MAR — DEC 2024</td>
              <td className="rev-desc">
                <div className="role-line">
                  React Developer{" "}
                  <span className="org">— Nexus, placed at Silk Bank</span>
                </div>
                <p>
                  Built the initial Merchants management module and the UCC
                  payments/authorization module, delivered the SMS Bank
                  registration flow, and refactored transaction list pages onto
                  modern React patterns.
                </p>
              </td>
            </tr>
            <tr>
              <td className="rev-id">B</td>
              <td className="rev-date">OCT 2021 — SEP 2023</td>
              <td className="rev-desc">
                <div className="role-line">
                  Front-End Developer{" "}
                  <span className="org">— Quantori, Tbilisi</span>
                </div>
                <p>
                  Shipped production React/TypeScript features across Redux,
                  Zustand and Effector; improved performance through memoization
                  and lazy loading; translated Figma designs into accessible,
                  tested interfaces.
                </p>
              </td>
            </tr>
            <tr>
              <td className="rev-id">A</td>
              <td className="rev-date">JAN 2019 — JAN 2020</td>
              <td className="rev-desc">
                <div className="role-line">
                  Front-End Developer{" "}
                  <span className="org">— Freelance, Remote</span>
                </div>
                <p>
                  Built responsive, cross-browser landing pages and UI
                  features in HTML, CSS, JavaScript and React for freelance
                  clients, testing and optimizing each project for
                  production while coordinating with backend developers and
                  designers on API integration.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="projects">
        <div className="sheet-head">
          <span className="tag">A3</span>
          <h2>Selected projects</h2>
          <span className="fill" />
        </div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="credentials">
        <div className="sheet-head">
          <span className="tag">A4</span>
          <h2>Credentials</h2>
          <span className="fill" />
        </div>
        <div className="credgrid">
          <div className="credcol">
            <h4 className="label">Education</h4>
            <div className="credrow">
              <div className="credmain">
                Bachelor of Computer Technologies and Engineering
              </div>
              <div className="credsub">
                International Black Sea University, Georgia
              </div>
            </div>
            <div className="creddate mono">2015 — 2019</div>
          </div>
          <div className="credcol">
            <h4 className="label">Certifications</h4>
            <ul className="credlist">
              <li>
                <span>Next.js 15 &amp; React — The Complete Guide</span>
                <span className="creddate mono">2025</span>
              </li>
              <li>
                <span>Understanding TypeScript</span>
                <span className="creddate mono">2024</span>
              </li>
              <li>
                <span>
                  Node.js, Express, MongoDB &amp; More: The Complete Bootcamp
                </span>
                <span className="creddate mono">2023</span>
              </li>
              <li>
                <span>JavaScript Algorithms and Data Structures</span>
                <span className="creddate mono">2023</span>
              </li>
            </ul>
          </div>
          <div className="credcol">
            <h4 className="label">Languages</h4>
            <div className="credrow">
              <span>Georgian</span>
              <span className="creddate mono">Native</span>
            </div>
            <div className="credrow">
              <span>English</span>
              <span className="creddate mono">Fluent</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="sheet-head">
          <span className="tag">KEY</span>
          <h2>Skills</h2>
          <span className="fill" />
        </div>
        <div className="legend">
          <div className="group">
            <h4>Frontend</h4>
            <div className="item">
              <span className="swatch" />
              React / Next.js
            </div>
            <div className="item">
              <span className="swatch" />
              TypeScript
            </div>
            <div className="item">
              <span className="swatch" />
              Redux · Zustand
            </div>
            <div className="item">
              <span className="swatch" />
              Tailwind · Ant · MUI
            </div>
          </div>
          <div className="group">
            <h4>Backend</h4>
            <div className="item">
              <span className="swatch" />
              Oracle PL/SQL
            </div>
            <div className="item">
              <span className="swatch" />
              Node.js · Express
            </div>
            <div className="item">
              <span className="swatch" />
              MongoDB
            </div>
            <div className="item">
              <span className="swatch" />
              Liquibase
            </div>
          </div>
          <div className="group">
            <h4>Tooling</h4>
            <div className="item">
              <span className="swatch" />
              Git · Vite · Webpack
            </div>
            <div className="item">
              <span className="swatch" />
              Jest
            </div>
            <div className="item">
              <span className="swatch" />
              Figma
            </div>
            <div className="item">
              <span className="swatch" />
              Postman
            </div>
          </div>
          <div className="group">
            <h4>Practices</h4>
            <div className="item">
              <span className="swatch" />
              Agile / Scrum
            </div>
            <div className="item">
              <span className="swatch" />
              WCAG accessibility
            </div>
            <div className="item">
              <span className="swatch" />
              BEM
            </div>
            <div className="item">
              <span className="swatch" />
              Code review
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
