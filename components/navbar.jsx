import { useEffect, useState } from "react";

import { navLinks } from "@/lib/content";
import { styles } from "@/lib/styles";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed inset-x-0 top-0 z-40 py-5 transition duration-300 ${
        scrolled ? "border-b border-white/10 bg-primary/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            setToggle(false);
          }}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center">
            <img
              src="/assets/logo-portfolio-cutout.png"
              alt="LTD Portfolio logo"
              className="h-11 w-11 object-contain drop-shadow-[0_10px_18px_rgba(8,15,30,0.38)]"
            />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-base font-semibold text-white sm:text-lg">
              LTD Portfolio
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Creative Developer
            </span>
          </div>
        </a>

        <ul className="hidden list-none items-center gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`text-sm font-medium uppercase tracking-[0.28em] transition ${
                  active === nav.title ? "text-cyan-200" : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden">
          <button
            type="button"
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"
            onClick={() => setToggle((prev) => !prev)}
          >
            <img
              src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>
      </div>

      <div
        className={`black-gradient absolute right-6 top-[84px] min-w-[200px] rounded-3xl border border-white/10 p-5 shadow-card transition sm:hidden ${
          toggle ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex list-none flex-col gap-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`block rounded-2xl px-3 py-2 text-sm font-medium uppercase tracking-[0.24em] transition ${
                  active === nav.title
                    ? "bg-white/10 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
