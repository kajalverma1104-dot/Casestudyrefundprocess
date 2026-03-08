function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#FF6F00]" />
      <span className="text-[#FF6F00] text-xs tracking-[0.2em] uppercase font-bold">{children}</span>
    </div>
  );
}

const stats = [
  { value: "62%", desc: "of users escalate refund queries to customer support", icon: "📞" },
  { value: "7–10", desc: "working days average wait with zero status updates", icon: "⏳" },
  { value: "2.8★", desc: "average rating for refund-related App Store reviews", icon: "💔" },
  { value: "340%", desc: "spike in refund requests post-pandemic surge", icon: "📈" },
];

export function ProblemStatement() {
  return (
    <section id="problem" className="bg-[#0D1B3E] py-24 px-6 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8003D]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6F00]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>03 — Problem Statement</SectionLabel>

        {/* Main problem statement */}
        <div className="mb-16">
          <div className="text-white/20 text-8xl font-black leading-none mb-4">"</div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl -mt-6">
            Users don't mind waiting.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#E8003D,#FF6F00)" }}
            >
              They mind not knowing.
            </span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
            After a cancellation, MakeMyTrip drops users into a black hole — no tracker, no ETA, no communication. The refund screen is a static label that never changes. Users are left to call support repeatedly just to confirm their money is coming back.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.value} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div
                className="text-4xl font-black text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: "linear-gradient(135deg, #E8003D, #FF6F00)" }}
              >
                {s.value}
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* HMW statement */}
        <div
          className="rounded-3xl p-8 border border-white/10"
          style={{ background: "linear-gradient(135deg, rgba(232,0,61,0.15), rgba(255,111,0,0.10))" }}
        >
          <div className="text-white/40 text-xs uppercase tracking-widest mb-3 font-bold">How Might We</div>
          <p className="text-white text-2xl md:text-3xl font-black leading-tight">
            Design a refund experience that is <span className="text-[#FF6F00]">transparent</span>,{" "}
            <span className="text-[#E8003D]">proactive</span>, and{" "}
            <span className="text-yellow-400">trustworthy</span> — so users never have to call support just to know the status of their money?
          </p>
        </div>
      </div>
    </section>
  );
}
