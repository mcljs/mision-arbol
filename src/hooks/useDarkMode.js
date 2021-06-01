import * as React from "react";

const getInitialTheme = _ => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return 'dark'
}

export default function useDarkMode() {
  const [theme, setTheme] = React.useState();
  const colorTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme)
    root.classList.add(theme);
localStorage.setItem('color-theme', theme)
  }, [theme,colorTheme]);

  return [colorTheme, setTheme];
}
