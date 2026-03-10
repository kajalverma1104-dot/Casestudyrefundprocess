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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* MMT-style red top accent bar */}
      <div className="h-0.5 bg-[#E8003D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-13">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            <span className="text-[#E8003D] font-black text-base tracking-tight">make</span>
            <span className="text-[#1565C0] font-black text-base tracking-tight">my</span>
            <span className="text-[#E8003D] font-black text-base tracking-tight">trip</span>
          </div>
          <div className="h-4 w-px bg-gray-200 hidden sm:block" />
          <span className="text-gray-400 text-xs hidden sm:block">Refund UX Case Study</span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-500 hover:text-[#E8003D] text-xs px-3 py-1.5 rounded-full hover:bg-red-50 transition-all font-bold"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#overview"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#E8003D] text-white text-xs font-black px-4 py-1.5 rounded-full hover:bg-[#c50028] transition-all shadow-sm"
          >
            ✈ Read Case Study
          </a>
          <button
            className="lg:hidden text-gray-500 hover:text-[#E8003D] transition-colors"
            onClick={() => setOpen(!open)}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <div className={`h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <div className={`h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 grid grid-cols-3 gap-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#E8003D] text-xs text-center py-2 px-2 rounded-xl hover:bg-red-50 transition-all font-bold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
