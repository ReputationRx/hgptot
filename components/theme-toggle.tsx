"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const storageKey = "hgptot-theme";

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle("theme-dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const initialTheme: ThemeMode = storedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function chooseTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div
      className="theme-toggle inline-flex rounded-full border border-teal/15 bg-white/80 p-1 shadow-soft"
      aria-label="Website color theme"
    >
      {(["light", "dark"] as const).map((option) => {
        const active = theme === option;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => chooseTheme(option)}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
              active ? "bg-teal text-white" : "text-charcoal/70 hover:text-teal"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
