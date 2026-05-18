document.querySelectorAll('.bg-icon').forEach(icon => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        icon.classList.add('settled');
        return;
    }
    let count = 0;
    icon.addEventListener('animationend', () => {
        if (++count >= 2) icon.classList.add('settled');
    });
});

const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme';
}

toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

const saved = localStorage.getItem('theme');
if (saved) applyTheme(saved);
