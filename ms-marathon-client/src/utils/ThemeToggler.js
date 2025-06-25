const html = document.getElementsByTagName("html")[0];
const setTheme = (theme) => {
  if (theme === "dark") {
    localStorage.setItem("theme", theme);
  } else {
    localStorage.setItem("theme", "light");
  }
  changeTheme(theme);
};
const changeTheme = (theme) => {
  if (theme === "dark") {
    html.classList.add("dark");
    return theme;
  } else {
    html.classList.remove("dark");
    return "light";
  }
};
export default setTheme;
