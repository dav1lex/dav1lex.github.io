"use client";

import { useEffect, useState } from "react";

const KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as "light" | "dark") || "dark";
    setTheme(stored);
    if (stored === "light") {
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(KEY, next);
    if (next === "light") {
      document.documentElement.dataset.theme = next;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="ml-auto text-muted hover:text-link-hover no-underline bg-transparent border-none cursor-pointer text-[16px] p-0"
      style={{ fontFamily: "'DOS VGA', monospace" }}
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
