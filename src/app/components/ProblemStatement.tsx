function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}

const stats = [
  { value: "62%", desc: "of users escalate refund queries to customer support", icon: "📞", color: "text-[#E8003D]" },
  { value: "Refund", desc: "timelines unclear in many complaints", icon: "⏳", color: "text-[#FF6F00]" },
  { value: "2.8★", desc: "low ratings in refund related reviews", icon: "💔", color: "text-[#1565C0]" },
  { value: "Rising refund complaints", desc: "spike in refund requests post-pandemic surge", icon: "📈", color: "text-[#E8003D]" },
];

export function ProblemStatement() {
  return (
    <section id="problem" className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Decorative blobs — light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8003D]/05 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1565C0]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>03 — Problem Statement</SectionLabel>

        {/* Main quote */}
        <div className="mb-16">
          <div className="text-[#E8003D]/15 text-8xl font-black leading-none mb-2 select-none">"</div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0D1B3E] leading-tight max-w-4xl -mt-4">
            Users don't mind waiting.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#E8003D,#FF6F00)" }}
            >
              They mind not knowing.
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            After a cancellation on MakeMyTrip, users often struggle to understand the refund status. Many reviews mention unclear timelines, lack of progress tracking, and minimal communication during the refund process.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-[#F5F7FF] border border-[#E0E8FF] rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* HMW statement */}
        <div
          className="rounded-3xl p-8 border border-[#E8003D]/20"
          style={{ background: "linear-gradient(135deg, #FFF5F7 0%, #FFF8F0 100%)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E8003D]" />
            <div className="text-[#E8003D] text-xs uppercase tracking-widest font-black">How Might We</div>
          </div>
          <p className="text-[#0D1B3E] text-2xl md:text-3xl font-black leading-tight">
            Provide a {" "}
            <span className="text-[#E8003D]">transparent</span>,{" "}
            <span className="text-[#FF6F00]">proactive</span>, and{" "}
            <span className="text-[#1565C0]">trustworthy</span> — refund experience with clear status updates and timelines so users always know where their money is?
          </p>
        </div>
      </div>
    </section>
  );
}
