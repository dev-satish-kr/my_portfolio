import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="text-4xl font-black tracking-tighter text-violet-500">
            SK
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-[0.25em]">
              SATISH KUMAR
            </p>
            <p className="text-[10px] tracking-[0.3em] text-slate-500">
              WEB DEVELOPER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-xs font-medium uppercase text-slate-600 transition hover:text-violet-500"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md border border-violet-300 px-5 py-2.5 text-xs font-semibold uppercase text-violet-600 transition hover:bg-violet-500 hover:text-white sm:flex"
        >
          Let's Talk
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase"
              >
                {name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}