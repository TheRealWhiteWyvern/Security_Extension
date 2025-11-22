console.log("Dark mode script loaded");

function applyDarkMode() {
    document.documentElement.style.backgroundColor = "#121212";
    document.documentElement.style.color = "#e0e0e0";
}

applyDarkMode();

const target = document.querySelector('devsite-content') || document.body;
const observer = new MutationObserver(() => {
    applyDarkMode();
});

observer.observe(target, {
  childList: true,
  subtree: true
});