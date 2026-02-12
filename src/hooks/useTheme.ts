import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getThemeByTime(date: Date = new Date()): Theme {
  const hour = date.getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getThemeByTime());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateTheme = () => {
      setTheme((currentTheme) => {
        const nextTheme = getThemeByTime();
        return currentTheme === nextTheme ? currentTheme : nextTheme;
      });
    };

    const intervalId = window.setInterval(updateTheme, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return { theme, setTheme }
}

export { useTheme }
