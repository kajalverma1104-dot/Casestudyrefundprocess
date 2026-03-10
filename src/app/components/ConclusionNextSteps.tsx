function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}


const phases = [
  {
    phase: "Phase 1",
    title: "Quick Wins",
    accentColor: "bg-[#0D9E6E]",
    bg: "bg-emerald-50 border-emerald-100",
    items: [
      "Surface active refunds on app home screen",
      "Send SMS + push at each refund milestone",
      "Rewrite policy in plain language with a summary",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Redesign",
    accentColor: "bg-[#E8003D]",
    bg: "bg-red-50 border-red-100",
    items: [
      "Build real-time refund tracker screen",
      "Launch pre-cancellation refund calculator",
      "Deploy context-aware support chatbot",
    ],
  },
  {
    phase: "Phase 3",
    title: "Optimise & Scale",
    accentColor: "bg-[#6C3FE8]",
    bg: "bg-purple-50 border-purple-100",
    items: [
      "A/B test MMT Wallet refund incentive messaging",
      "Personalised ETA based on bank + airline data",
      "Self-service dispute resolution tool",
    ],
  },
];

const learnings = [
  { emoji: "👁️", title: "Transparency over speed", text: "Users will forgive slow refunds but never silent ones." },
  { emoji: "🔔", title: "Proactive beats reactive", text: "One notification prevents three support calls." },
  { emoji: "🗺️", title: "Findability problem", text: "Most failures were findability problems, not design problems. Surface data where users are." },
  { emoji: "🤝", title: "Trust is fragile", text: "One bad refund experience permanently changes booking behaviour." },
];

export function ConclusionNextSteps() {
  return (
    <section id="conclusion" className="bg-[#F5F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>10 — Conclusion & Next Steps</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          What changes, and what comes next
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-14 leading-relaxed">
          Projected impact from usability tests on the redesigned prototype — plus a phased roadmap to ship without waiting for a full redesign cycle.
        </p>


        {/* Roadmap */}
        <h3 className="text-xl font-black text-[#0D1B3E] mb-6">Implementation Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {phases.map((p) => (
            <div key={p.phase} className={`border ${p.bg} rounded-3xl p-6 bg-white shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`${p.accentColor} text-white text-xs font-black px-3 py-1 rounded-full`}>{p.phase}</span>
              </div>
              <div className="font-black text-[#0D1B3E] text-lg mb-4">{p.title}</div>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full ${p.accentColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <span className="text-white text-[9px]">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key learnings */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-16"
          style={{ background: "linear-gradient(135deg, #0D1B3E 0%, #1a3060 100%)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#E8003D] rounded-full" />
            <div className="text-white/50 text-xs uppercase tracking-widest font-black">Key Learnings</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learnings.map((l, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">{l.emoji}</div>
                <div className="pt-1">
                  <div className="text-white font-black text-sm mb-1">{l.title}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{l.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <div
          className="rounded-3xl p-10 mb-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #E8003D, #FF6F00)" }}
        >
          <div className="text-white/20 text-9xl font-black absolute -top-4 left-6 select-none">"</div>
          <div className="relative">
            <blockquote className="text-2xl md:text-3xl font-black text-white max-w-3xl mx-auto leading-tight mb-4">
              The refund moment is the last handshake between a product and its user. Make it count.
            </blockquote>
            <p className="text-white/70 text-sm">
              A great refund flow doesn't just return money — it returns trust, and with it, a repeat customer.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <span className="text-[#E8003D] font-black text-base">make</span>
              <span className="text-[#1565C0] font-black text-base">my</span>
              <span className="text-[#E8003D] font-black text-base">trip</span>
            </div>
            <span className="text-gray-400 text-sm">· Refund UX Case Study · 2026</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["UX Research", "Interaction Design", "Usability Testing", "Information Architecture", "Mobile UX"].map((t) => (
              <span key={t} className="bg-white text-gray-500 text-xs px-3 py-1 rounded-full border border-gray-200 font-bold">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
