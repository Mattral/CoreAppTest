export const getColorScheme = (): string => {
  let theme = localStorage.getItem("bs-color-scheme");
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return theme;
};

export const setColorScheme = (theme: string) => {
  localStorage.setItem("bs-color-scheme", theme);
  document.documentElement.setAttribute("data-bs-theme", theme);
};
