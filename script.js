gsap.registerPlugin(ScrollTrigger);

/* ===== Dark mode ===== */
const root = document.documentElement;
const darkModeToggle = document.querySelector("#darkModeToggle");

function setDarkMode(enabled) {
  root.classList.toggle("dark", enabled);
  localStorage.setItem("theme", enabled ? "dark" : "light");
}

setDarkMode(localStorage.getItem("theme") === "dark");

darkModeToggle.addEventListener("click", () => {
  setDarkMode(!root.classList.contains("dark"));
});

/* ===== E2: Scroll progress bar ===== */
gsap.to("#progressBar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

/* ===== D1: Page-load hero timeline ===== */
const heroTimeline = gsap.timeline({
  defaults: {
    ease: "power3.out",
    duration: 0.8
  }
});

heroTimeline
  .from(".hero-item", {
    y: 40,
    opacity: 0,
    stagger: 0.15
  })
  .from("header", {
    y: -30,
    opacity: 0,
    duration: 0.6
  }, 0);

/* ===== Replay intro ===== */
document.querySelector("#replayBtn").addEventListener("click", () => {
  heroTimeline.restart();
});

/* ===== E1: ScrollTrigger reveal loop ===== */
gsap.utils.toArray(".reveal").forEach((section) => {
  gsap.from(section, {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});