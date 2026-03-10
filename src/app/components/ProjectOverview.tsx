function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}

const roles = [
  { icon: "🧑‍🎨", label: "My Role", value: "UX Researcher & Product Designer" },
  { icon: "📅", label: "Timeline", value: "2-Week Independent Case Study · 2026" },
  { icon: "📱", label: "Platform", value: "iOS & Android (MakeMyTrip App)" },
  { icon: "🔧", label: "Tools", value: "Figma, FigJam, Maze, Notion" },
];

const methods = [
  { icon: "🎙️", n: "50+", unit: "App reviews analyzed", desc: "Sentiment analysis of 1–2 star reviews mentioning refund delays and cancellation confusion in the MakeMyTrip app." },
  { icon: "📊", n: "", unit: "Competitor Refund Flow Analysis", desc: "Benchmarked MMT against MakeMyTrip competitors — Yatra, Cleartrip, and EaseMyTrip — on refund UX." },
  { icon: "🖥️", n: "", unit: "Heuristic UX Evaluation", desc: "Evaluated the current refund experience using Nielsen's 10 usability heuristics." },
  { icon: "⭐", n: "", unit: "User Journey Mapping", desc: "Mapped the cancellation-to-refund journey to identify key friction and emotional low points." },
];

export function ProjectOverview() {
  return (
    <section id="overview" className="bg-[#F5F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>02 — Project Overview</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          The brief & my approach
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-14 leading-relaxed">
          MakeMyTrip is one of India's largest travel booking platforms with millions of users. However, its post-booking cancellation and refund experience is frequently criticized in user reviews for unclear timelines and lack of transparency.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roles.map((r) => (
            <div key={r.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">{r.icon}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-bold">{r.label}</div>
              <div className="text-[#0D1B3E] font-black text-sm leading-snug">{r.value}</div>
            </div>
          ))}
        </div>

        {/* Research methods */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#E8003D] rounded-full" />
            <div className="text-sm font-black text-[#0D1B3E] uppercase tracking-wide">Research Methods</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((m) => (
              <div key={m.unit}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="flex items-baseline gap-1 mb-1 flex-wrap">
                  {m.n && <span className="text-3xl font-black text-[#E8003D]">{m.n}</span>}
                  <span className="text-xs text-[#0D1B3E] font-black leading-snug">{m.unit}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
