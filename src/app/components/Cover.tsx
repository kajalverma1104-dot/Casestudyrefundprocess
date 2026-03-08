export function Cover() {
  return (
    <section className="relative min-h-screen bg-[#0D1B3E] flex flex-col overflow-hidden pt-14">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8003D]/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Radial glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6F00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-center gap-16 py-20">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-[#E8003D]" />
            <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-bold">UX Case Study · 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            Refund<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #E8003D, #FF6F00)" }}
            >
              Reimagined.
            </span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
            A complete UX redesign of MakeMyTrip's post-booking cancellation and refund experience — eliminating confusion, anxiety, and 62% of support calls.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["UX Research", "UI Design", "Prototyping", "Travel App", "Mobile"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/50 border border-white/15 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex gap-6">
            {[
              { value: "78%", label: "Users frustrated" },
              { value: "10+", label: "Screens redesigned" },
              { value: "3 wks", label: "Research sprint" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="relative flex-shrink-0">
          {/* Glow behind phone */}
          <div className="absolute inset-0 bg-[#E8003D]/30 blur-[60px] rounded-full scale-75" />

          {/* Phone frame */}
          <div className="relative w-[260px] h-[520px] bg-[#1A2D5A] border border-white/20 rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0D1B3E] rounded-b-2xl z-20" />

            {/* App header */}
            <div className="bg-[#E8003D] pt-8 pb-4 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                  <span className="text-white text-xs font-black">MakeMyTrip</span>
                </div>
                <div className="text-white text-xs">✈ Trips</div>
              </div>
            </div>

            {/* Screen body */}
            <div className="bg-white flex-1 h-full px-4 pt-4 space-y-3">
              {/* Booking card */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-blue-400 font-bold uppercase">Flight · One Way</span>
                  <span className="text-[10px] text-gray-400">#NF28476</span>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-black text-gray-900">DEL</div>
                    <div className="text-[9px] text-gray-400">New Delhi</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[10px] text-gray-300">— ✈ —</div>
                    <div className="text-[9px] text-gray-400">2h 10m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-gray-900">BOM</div>
                    <div className="text-[9px] text-gray-400">Mumbai</div>
                  </div>
                </div>
              </div>

              {/* Status card — the broken part */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] font-black text-amber-700">Cancellation Requested</span>
                </div>
                <p className="text-[9px] text-gray-400">Your refund is being processed.</p>
                <div className="mt-2 bg-amber-100 rounded-lg p-2 text-center">
                  <span className="text-[9px] text-amber-600">⚠ No ETA · No tracker · No updates</span>
                </div>
              </div>

              {/* No tracker placeholder */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
                <div className="text-gray-200 text-2xl mb-1">📭</div>
                <div className="text-[9px] text-gray-300">No progress tracker</div>
                <div className="text-[9px] text-gray-200">No notifications sent</div>
              </div>

              <button className="w-full bg-[#E8003D] text-white text-[10px] font-black py-2.5 rounded-xl">
                Go to Home
              </button>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-16 top-20 bg-white rounded-2xl px-3 py-2 shadow-xl border border-gray-100">
            <div className="text-[10px] font-black text-gray-800">😤 Where is my money?</div>
          </div>
          <div className="absolute -right-16 bottom-32 bg-white rounded-2xl px-3 py-2 shadow-xl border border-gray-100">
            <div className="text-[10px] font-black text-red-500">⏳ 7–10 days??</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-white/30 text-xs">Scroll to explore the full case study ↓</span>
          <div className="flex gap-6">
            {[
              ["Platform", "iOS & Android"],
              ["Domain", "Travel Fintech"],
              ["Focus", "Post-Booking UX"],
            ].map(([k, v]) => (
              <div key={k} className="text-center">
                <div className="text-white/25 text-[10px] uppercase tracking-wide">{k}</div>
                <div className="text-white/60 text-xs font-bold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
