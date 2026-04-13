"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#hero", label: "Home", icon: "bi bi-house" },
  { href: "#about", label: "About", icon: "bi bi-person" },
  { href: "#skills", label: "Skills", icon: "bi bi-code-slash" },
  { href: "#portfolio", label: "Portfolio", icon: "bi bi-images" },
  { href: "#services", label: "Services", icon: "bi bi-hdd-stack" },
  { href: "#contact", label: "Contact", icon: "bi bi-envelope" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme state
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme) setTheme(currentTheme);

    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      let currentSection = "#hero";
      // Offset defines where we consider the active section (e.g., middle of screen)
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.offsetTop <= scrollPosition) {
          currentSection = `#${section.id}`;
          break;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => () => {
    setActiveLink(href);
  };

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-md-none bi bi-list"></i>
      <div className="profile-img">
        <img
          src="/assets/img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>

      <Link
        href="/"
        className="logo d-flex align-items-center justify-content-center"
      >
        <img
          src="/assets/img/Dagim_logo.png"
          alt="Dagim logo"
          className="img-fluid logo-img"
          style={{
            maxHeight: "125px",
            height: "auto",
            width: "auto",
            margin: 0,
            padding: 0,
          }}
        />
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeLink === item.href ? "active" : ""}
                onClick={handleNavClick(item.href)}
              >
                <i className={`${item.icon} navicon`}></i>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                const newTheme = theme === "light" ? "dark" : "light";
                setTheme(newTheme);
                document.documentElement.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
              }}
              className="theme-toggle-btn"
              style={{
                background: "none",
                border: "none",
                color: "var(--nav-color)",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "15px",
              }}
              title="Toggle Light/Dark Mode"
            >
              <i
                className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"} navicon`}
              ></i>
              <span className="d-md-none mx-2">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
