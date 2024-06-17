import { useLayoutEffect, useState } from "react";
import { getColorScheme, setColorScheme } from "~/utils/colorScheme.utils";

export default function ColorSchemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("dark" || "light");

  useLayoutEffect(() => {
    const theme = getColorScheme();

    setCurrentTheme(theme);
  }, [currentTheme]);

  const handleToggle = () => {
    if (currentTheme === "dark") {
      setColorScheme("light");
      setCurrentTheme("light");
    } else {
      setColorScheme("dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={handleToggle}
        checked={currentTheme === "dark" ? true : false}
      />

      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        Dark Mode
      </label>
    </div>
  );
}
