"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MENUS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Writing", href: "#writing" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function QuickMenuDock() {
  const dockRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [active, setActive] = useState("#skills");

  const TOP = 16;
  const BOTTOM = 24;
  const OFFSET = 50;

  const apply = (y: number) => {
    const el = dockRef.current;
    if (!el) return;
    el.style.transform = `translate3d(-50%, ${Math.round(y)}px, 0)`;
  };

  const measure = () => {
    const el = dockRef.current;
    if (!el) return;
    const h = el.offsetHeight;

    const start = Math.max(0, window.innerHeight - (TOP + OFFSET) - h - BOTTOM);

    startRef.current = start;
    const y = Math.max(0, start - window.scrollY);
    apply(y);
  };

  useLayoutEffect(() => {
    measure();
  }, []);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const y = Math.max(0, startRef.current - window.scrollY);
      apply(y);
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    const onResize = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        measure();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const sections = MENUS.map((m) => document.querySelector(m.href)).filter(
      Boolean,
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

  return (
    <nav
      aria-label="Quick menu"
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
    >
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.96, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          ref={dockRef}
          className="relative left-1/2 will-change-transform flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur"
        >
          {MENUS.map((m) => {
            const isActive = active === m.href;

            return (
              <a
                key={m.href}
                href={m.href}
                onClick={handleClick(m.href)}
                className={`
                  rounded-full px-4 py-2 text-sm transition-colors
                  ${
                    isActive
                      ? "text-zinc-900 bg-zinc-100 font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }
                `}
              >
                {m.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
