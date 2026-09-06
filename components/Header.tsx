"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith("/projects/");

  return (
    <header className="site-header">
      <div className="navbar">
        <Link href="/" className="mark">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1" />
          </svg>
          GZ&nbsp;/&nbsp;01
        </Link>

        {isCaseStudy ? (
          <Link href="/#projects" className="back-link mono">
            ← Back to portfolio
          </Link>
        ) : (
          <nav className="links">
            <a href="#profile">Profile</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#credentials">Credentials</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        )}

        <div className="navctl">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
