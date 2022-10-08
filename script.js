const section = document.querySelectorAll("section");
const bubble = document.querySelector(".class");
const gradient = [
    "linear-gradient(to right top, #f46b45, #eea849)",
    "linear-gradient(to right top,#005c97, #363795)",
    "linear-gradient(to right top, #e53935, #e35d5b)",
    "linear-gradient(to right , #23f42f, #22fd)"
]

let options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const active = document.querySelector(`[data-page=${className}]`);
        const gradientOf = entry.target.getAttribute("data-index");
        const coords = active.getBoundingClientRect();
        const direction = {
            width: coords.width,
            height: coords.height,
            left: coords.left,
            top: coords.top
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${direction.left}px`);
            bubble.style.setProperty("width", `${direction.width}px`);
            bubble.style.setProperty("top", `${direction.top}px`);
            bubble.style.setProperty("height", `${direction.height}px`);
            bubble.style.background = gradient[gradientOf]
        }
    })
}

section.forEach(section => {
    observer.observe(section)
})