function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-bold">{children}</span>
    </div>
  );
}

const impact = [
  { before: "62%", after: "18%", label: "Support calls for refund status", icon: "📞", color: "text-green-500" },
  { before: "3.2 min", after: "12 sec", label: "Time to find refund status", icon: "⏱", color: "text-blue-500" },
  { before: "2.8★", after: "4.2★", label: "Refund-related App Store rating", icon: "⭐", color: "text-yellow-500" },
  { before: "73%", after: "22%", label: "Chatbot escalations to human agent", icon: "🤖", color: "text-purple-500" },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Quick Wins",
    time: "0 – 4 weeks",
    color: "bg-green-500",
    bg: "bg-green-50 border-green-100",
    items: [
      "Surface active refunds on app home screen",
      "Send SMS + push at each refund milestone",
      "Rewrite policy in plain language with a summary",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Redesign",
    time: "4 – 12 weeks",
    color: "bg-[#E8003D]",
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
    time: "12 – 24 weeks",
    color: "bg-[#6C3FE8]",
    bg: "bg-purple-50 border-purple-100",
    items: [
      "A/B test MMT Wallet refund incentive messaging",
      "Personalised ETA based on bank + airline data",
      "Self-service dispute resolution tool",
    ],
  },
];

const learnings = [
  { emoji: "👁️", text: "Transparency over speed — users will forgive slow refunds but never silent ones." },
  { emoji: "🔔", text: "Proactive beats reactive — one notification prevents three support calls." },
  { emoji: "🗺️", text: "Most failures were findability problems, not design problems. Surface data where users are." },
  { emoji: "🤝", text: "Trust is fragile — one bad refund experience permanently changes booking behaviour." },
];

export function ConclusionNextSteps() {
  return (
    <section id="conclusion" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>10 — Conclusion & Next Steps</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          What changes, and what comes next
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-14 leading-relaxed">
          Projected impact from usability tests on the redesigned prototype — plus a phased roadmap to ship without waiting for a full redesign cycle.
        </p>

        {/* Impact metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {impact.map((m) => (
            <div key={m.label} className="bg-[#F5F7FF] border border-[#E0E8FF] rounded-2xl p-5">
              <div className="text-2xl mb-3">{m.icon}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-3 leading-relaxed">{m.label}</div>
              <div className="flex items-center gap-3 mb-1">
                <div>
                  <div className="text-[9px] text-gray-400">Before</div>
                  <div className="text-xl font-black text-gray-300 line-through">{m.before}</div>
                </div>
                <div className="text-gray-200 text-lg">→</div>
                <div>
                  <div className="text-[9px] text-gray-400">After</div>
                  <div className={`text-2xl font-black ${m.color}`}>{m.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <h3 className="text-xl font-black text-[#0D1B3E] mb-6">Implementation Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {phases.map((p) => (
            <div key={p.phase} className={`border ${p.bg} rounded-3xl p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`${p.color} text-white text-xs font-black px-3 py-1 rounded-full`}>{p.phase}</span>
                <span className="text-gray-400 text-xs">{p.time}</span>
              </div>
              <div className="font-black text-[#0D1B3E] text-lg mb-4">{p.title}</div>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full ${p.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
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
        <div className="bg-[#0D1B3E] rounded-3xl p-8 md:p-10 mb-16">
          <div className="text-white/40 text-xs uppercase tracking-widest mb-6 font-bold">Key Learnings</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learnings.map((l, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">{l.emoji}</div>
                <p className="text-white/70 text-sm leading-relaxed pt-2">{l.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">✈️</div>
          <blockquote className="text-3xl md:text-4xl font-black text-[#0D1B3E] max-w-3xl mx-auto leading-tight mb-4">
            "The refund moment is the last handshake between a product and its user.{" "}
            <span className="text-[#E8003D]">Make it count.</span>"
          </blockquote>
          <p className="text-gray-400 text-sm">
            A great refund flow doesn't just return money — it returns trust, and with it, a repeat customer.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 flex items-center gap-1 shadow-sm">
              <span className="text-[#E8003D] font-black text-sm">make</span>
              <span className="text-[#0D1B3E] font-black text-sm">my</span>
              <span className="text-[#E8003D] font-black text-sm">trip</span>
            </div>
            <span className="text-gray-400 text-sm">Refund UX Case Study · 2026</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["UX Research", "Interaction Design", "Usability Testing", "Information Architecture", "Mobile UX"].map((t) => (
              <span key={t} className="bg-[#F5F7FF] text-gray-500 text-xs px-3 py-1 rounded-full border border-gray-200">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
