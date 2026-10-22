const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements;
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
  },
  safelist: [
    /dark/,
    /^swiper-/,
    /collapsing/,
    /show/,
    /^lb-/,
    /^gl/,
    /^go/,
    /^gc/,
    /^gs/,
    /^gi/,
    /^desc/,
    /^zoom/,
    /dragging/,
    /fullscreen/,
    /loaded/,
    /visible/,
    /current/,
    /active/,
    // classes added at runtime by script.js, Bootstrap, AOS and modules
    /^header-/,
    /^preloader/,
    /^cookie-box/,
    /^aos-/,
    /^was-validated/,
    /^fade/,
    /^dropdown/,
    /^modal/,
  ],
  // attributes hugo_stats.json does not record or that are set at runtime
  // (theme toggle, Bootstrap dropdowns, AOS animations)
  dynamicAttributes: [
    "data-theme",
    "data-bs-popper",
    "aria-expanded",
    "aria-pressed",
    "data-aos",
    "data-aos-delay",
    "data-aos-duration",
    "data-aos-easing",
  ],
});

module.exports = {
  plugins: [
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
  ],
};
