"use client";

import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function HamburgerButton({ open, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="min-640:hidden min-640:pointer-events-none relative z-50 text-primary-50"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          variants={{
            closed: { d: "M 3 6 L 21 6" },
            open: { d: "M 6 18 L 18 6" },
          }}
          animate={open ? "open" : "closed"}
        />
        <Path
          d="M 3 12 L 21 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={open ? "open" : "closed"}
        />
        <Path
          variants={{
            closed: { d: "M 3 18 L 21 18" },
            open: { d: "M 6 6 L 18 18" },
          }}
          animate={open ? "open" : "closed"}
        />
      </svg>
    </button>
  );
}
