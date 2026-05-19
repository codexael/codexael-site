/* ── Cursor ──────────────────────────────────────────── */
const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
});

// Smooth ring lag
(function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + "px";
    cursorRing.style.top = ry + "px";
    requestAnimationFrame(animateRing);
})();

// Hover expand
document.querySelectorAll("a, button, .cta-btn").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursorRing.style.width = "56px";
        cursorRing.style.height = "56px";
        cursorRing.style.opacity = "0.9";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursorRing.style.width = "38px";
        cursorRing.style.height = "38px";
        cursorRing.style.opacity = "0.5";
    });
});

/* ── Marquee ─────────────────────────────────────────── */
const items = [
    "Web Design",
    "UI / UX",
    "Branding",
    "Development",
    "Motion",
    "Strategy",
    "Creative Direction",
    "Digital Products",
];
const track = document.getElementById("marqueeTrack");
// Duplicate for seamless loop
[...items, ...items].forEach((text) => {
    const span = document.createElement("span");
    span.className = "marquee-item";
    span.innerHTML = `${text}<span class="dot" aria-hidden="true">✦</span>`;
    track.appendChild(span);
});