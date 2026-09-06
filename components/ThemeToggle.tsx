"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";
const ORDER: Mode[] = ["light", "dark"];

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gz-theme") as Mode | null;
      if (saved && ORDER.includes(saved)) {
        setMode(saved);
        return;
      }
    } catch {
      // localStorage unavailable — fall back to OS preference below
    }
    // No explicit choice saved yet — reflect the OS preference without
    // writing an explicit override, so the toggle still tracks system
    // dark mode until the user makes their own choice.
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  function apply(next: Mode) {
    setMode(next);
    try {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("gz-theme", next);
    } catch {
      // ignore storage errors, attribute still applies for this view
    }
  }

  function cycle() {
    const idx = ORDER.indexOf(mode);
    apply(ORDER[(idx + 1) % ORDER.length]);
  }

  return (
    <button
      type="button"
      className="theme-btn mono"
      onClick={cycle}
      aria-label="Toggle color theme"
    >
      {mode.toUpperCase()}
    </button>
  );
}
