document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Check for saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        if (themeStylesheet.href.includes('light-theme.css')) {
            themeStylesheet.href = 'dark-theme.css';
            localStorage.setItem('theme', 'dark-theme.css');
        } else {
            themeStylesheet.href = 'light-theme.css';
            localStorage.setItem('theme', 'light-theme.css');
        }
    });
});
