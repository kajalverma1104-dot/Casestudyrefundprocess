function SectionLabel({ color = "#E8003D", children }: { color?: string; children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5" style={{ backgroundColor: color }} />
      <span className="text-xs tracking-[0.2em] uppercase font-bold" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

const roles = [
  { icon: "🧑‍🎨", label: "My Role", value: "UX Researcher & Product Designer" },
  { icon: "📅", label: "Timeline", value: "3-Week Design Sprint · 2024" },
  { icon: "📱", label: "Platform", value: "iOS & Android (MakeMyTrip App)" },
  { icon: "🔧", label: "Tools", value: "Figma, FigJam, Maze, Notion" },
];

const methods = [
  { icon: "🎙️", n: "18", unit: "Interviews", desc: "In-depth user interviews with people who filed refund requests in the past 6 months" },
  { icon: "📊", n: "247", unit: "Survey responses", desc: "Quantitative survey across Tier 1, 2, 3 cities targeting MMT users" },
  { icon: "🖥️", n: "12", unit: "Usability tests", desc: "Task-based testing of the existing cancellation and refund screens" },
  { icon: "⭐", n: "500+", unit: "App reviews", desc: "Sentiment analysis of 1–2 star reviews mentioning refund or cancellation" },
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
          MakeMyTrip is India's #1 travel platform with 50M+ downloads. Yet its post-booking cancellation flow remains one of the most complained-about experiences on the app.
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roles.map((r) => (
            <div key={r.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">{r.icon}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{r.label}</div>
              <div className="text-[#0D1B3E] font-black text-sm">{r.value}</div>
            </div>
          ))}
        </div>

        {/* Research methods */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="text-sm font-black text-[#0D1B3E] mb-6 uppercase tracking-wide">Research Methods</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((m) => (
              <div key={m.unit}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-[#E8003D]">{m.n}</span>
                  <span className="text-xs text-gray-400 font-bold">{m.unit}</span>
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
