import { useState } from "react";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Scenario", href: "#scenario" },
  { label: "Pain Points", href: "#painpoints" },
  { label: "Goals", href: "#goals" },
  { label: "IA", href: "#ia" },
  { label: "Redesign", href: "#redesign" },
  { label: "Prototype", href: "#prototype" },
  { label: "Conclusion", href: "#conclusion" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B3E]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 bg-white rounded-lg px-2.5 py-1">
            <span className="text-[#E8003D] font-black text-sm">make</span>
            <span className="text-[#0D1B3E] font-black text-sm">my</span>
            <span className="text-[#E8003D] font-black text-sm">trip</span>
          </div>
          <span className="text-white/40 text-xs hidden sm:block">· Refund UX Case Study</span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 flex flex-col gap-1">
            <div className={`h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`}></div>
            <div className={`h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0D1B3E] border-t border-white/10 px-4 py-3 grid grid-cols-3 gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-xs text-center py-2 rounded-lg hover:bg-white/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
