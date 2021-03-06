// Get the theme toggle input
const currentTheme = localStorage.getItem("theme");// If the current local storage item can be found

// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme() {
    if (document.documentElement.getAttribute("data-theme") === "gruvbox") {
        document.documentElement.setAttribute("data-theme", "light");
        // Set the user's theme preference to dark
        localStorage.setItem("theme", "light");
    }
    else {
      document.documentElement.setAttribute("data-theme", "gruvbox");
      // Set the user's theme preference to light
      localStorage.setItem("theme", "gruvbox");
    }
}

// Get the current theme from local storage
if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "gruvbox") {
        document.documentElement.setAttribute("data-theme", "gruvbox");
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: gruvbox)').matches) {
    console.log('user prefers dark scheme, going gruvbox');
    document.documentElement.setAttribute("data-theme", "gruvbox");
}
