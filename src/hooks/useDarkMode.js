import * as React from "react";

export default function useDarkMode() {
  const [theme, setTheme] = React.useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme)
    root.classList.add(theme);
  }, [theme,colorTheme]);

  return [colorTheme, setTheme];
}
