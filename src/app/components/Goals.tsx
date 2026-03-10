function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}

const goals = [
  {
    num: "01",
    title: "Radical Transparency",
    desc: "Every step of the refund pipeline should be visible. Users should know exactly where their money is at any point.",
    kpi: "Status-check support calls ↓ 60%",
    icon: "👁️",
    accent: "#E8003D",
    bg: "bg-red-50 border-red-100",
    iconBg: "bg-[#E8003D]",
  },
  {
    num: "02",
    title: "Proactive Communication",
    desc: "Push notifications, SMS, and email at every milestone — initiated, processed, credited. No more radio silence.",
    kpi: "Notification open rate > 85%",
    icon: "🔔",
    accent: "#FF6F00",
    bg: "bg-orange-50 border-orange-100",
    iconBg: "bg-[#FF6F00]",
  },
  {
    num: "03",
    title: "Informed Cancellation",
    desc: "Before confirming, show users an exact refund breakdown. No surprises, no disputes.",
    kpi: "Dispute calls ↓ 40%",
    icon: "🧮",
    accent: "#6C3FE8",
    bg: "bg-purple-50 border-purple-100",
    iconBg: "bg-[#6C3FE8]",
  },
  {
    num: "04",
    title: "Zero-Friction Support",
    desc: "If something goes wrong, users should reach a resolution in ≤2 taps. Context-aware chatbot, not generic scripts.",
    kpi: "Chatbot resolution rate > 70%",
    icon: "💬",
    accent: "#0D9E6E",
    bg: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-[#0D9E6E]",
  },
  {
    num: "05",
    title: "Surface Refund Status",
    desc: "Active refunds should appear on the home screen. Users shouldn't need to dig 4 levels deep to find their refund status.",
    kpi: "Time to find status < 15 seconds",
    icon: "🗺️",
    accent: "#1565C0",
    bg: "bg-blue-50 border-blue-100",
    iconBg: "bg-[#1565C0]",
  },
  {
    num: "06",
    title: "Rebuild Trust",
    desc: "Every design decision should answer the user's core emotional need: 'My money is safe and it is coming back.'",
    kpi: "Refund NPS score > 60",
    icon: "🤝",
    accent: "#E8003D",
    bg: "bg-red-50 border-red-100",
    iconBg: "bg-gradient-to-br from-[#E8003D] to-[#FF6F00]",
  },
];

export function Goals() {
  return (
    <section id="goals" className="bg-[#F5F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>06 — Design Goals</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          What success looks like
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-14 leading-relaxed">
          Six measurable design goals that guided every redesign decision — each mapped to a real KPI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {goals.map((g) => (
            <div
              key={g.num}
              className={`group bg-white border rounded-3xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${g.iconBg} flex items-center justify-center text-2xl shadow-md`}
                >
                  {g.icon}
                </div>
                <span className="text-[#0D1B3E]/10 text-5xl font-black leading-none">{g.num}</span>
              </div>

              <h3 className="font-black text-[#0D1B3E] text-lg mb-2">{g.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{g.desc}</p>

              {/* KPI chip */}
              <div className="inline-flex items-center gap-2 bg-[#F5F7FF] border border-[#E0E8FF] rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 font-black">{g.kpi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
