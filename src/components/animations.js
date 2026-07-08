// Shared Framer Motion variants and viewport config.
// Kept separate from motion.jsx so that file only exports components
// (required for React Fast Refresh / the react-refresh ESLint rule).

// A smooth, modern easing curve (ease-out cubic-ish) shared by all reveals.
const EASE = [0.22, 1, 0.36, 1];

// Directional reveal variants. Each animates from a hidden offset to its
// natural position once the element scrolls into view.
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

// Transform-only slide (no opacity) for the hero image: it is the page's LCP
// element, and a fade from opacity 0 delays the LCP paint by the whole
// animation. A pure translate keeps it paintable from the first frame.
export const slideRight = {
  hidden: { x: 60 },
  visible: { x: 0, transition: { duration: 0.7, ease: EASE } },
};

// Container that staggers the reveal of its children (cards, icons, etc.).
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// Item used inside a staggerContainer.
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Shared viewport config: play once, when ~20% of the element is visible.
export const viewportOnce = { once: true, amount: 0.2 };
