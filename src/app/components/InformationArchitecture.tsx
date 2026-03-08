function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#FF6F00]" />
      <span className="text-[#FF6F00] text-xs tracking-[0.2em] uppercase font-bold">{children}</span>
    </div>
  );
}

function FlowNode({
  label,
  sub,
  color = "bg-white border-gray-200 text-[#0D1B3E]",
  badge,
}: {
  label: string;
  sub?: string;
  color?: string;
  badge?: string;
}) {
  return (
    <div className={`border rounded-2xl px-4 py-3 text-center shadow-sm min-w-[120px] relative ${color}`}>
      {badge && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}
      <div className="font-black text-sm leading-tight">{label}</div>
      {sub && <div className="text-[10px] mt-0.5 opacity-60">{sub}</div>}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center my-1">
      {label && <span className="text-[9px] text-gray-400 mb-0.5 font-bold">{label}</span>}
      <div className="w-0.5 h-5 bg-gray-300" />
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300" />
    </div>
  );
}

function HArrow() {
  return (
    <div className="flex items-center mx-1">
      <div className="h-0.5 w-5 bg-gray-300" />
      <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-300" />
    </div>
  );
}

export function InformationArchitecture() {
  return (
    <section id="ia" className="bg-[#0D1B3E] py-24 px-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 bg-[#1565C0]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>07 — Information Architecture</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl leading-tight">
          New post-booking flow
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-14 leading-relaxed">
          The redesigned IA reduces refund-status navigation from 4 levels to 1 tap, and introduces a dedicated refund pipeline surface.
        </p>

        {/* Flow diagram */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 overflow-x-auto">
          {/* Main vertical flow — centered */}
          <div className="flex flex-col items-center min-w-[600px]">
            {/* Row 1: Entry */}
            <div className="flex items-center gap-3 mb-1">
              <FlowNode label="Home Screen" sub="Active refund card pinned" color="bg-[#1565C0] border-blue-400 text-white" badge="NEW" />
              <HArrow />
              <FlowNode label="My Trips" color="bg-white border-gray-200 text-[#0D1B3E]" />
            </div>
            <Arrow />

            {/* Row 2: Booking detail */}
            <FlowNode label="Booking Detail" sub="Flight / Hotel / Train" color="bg-white border-gray-200 text-[#0D1B3E]" />
            <Arrow />

            {/* Row 3: Manage */}
            <FlowNode label="Manage Booking" color="bg-white border-gray-200 text-[#0D1B3E]" />
            <Arrow label="User taps Cancel" />

            {/* Row 4: Cancel flow — 3 branches */}
            <div className="flex items-start justify-center gap-4">
              <div className="flex flex-col items-center">
                <FlowNode label="Refund Calculator" sub="See exact breakdown" color="bg-[#FF6F00] border-orange-400 text-white" badge="NEW" />
              </div>
              <HArrow />
              <div className="flex flex-col items-center">
                <FlowNode label="Confirm Cancel" sub="One-tap confirm" color="bg-white border-gray-200 text-[#0D1B3E]" />
              </div>
              <HArrow />
              <div className="flex flex-col items-center">
                <FlowNode label="Policy Info" sub="Plain language" color="bg-[#F5F7FF] border-gray-300 text-gray-600" badge="Improved" />
              </div>
            </div>

            {/* Arrow down from Confirm */}
            <Arrow label="Cancellation confirmed" />

            {/* Row 5: Refund Tracker — core screen */}
            <FlowNode
              label="Refund Status Tracker"
              sub="Live milestones · ETA · Notifications"
              color="bg-gradient-to-r from-[#E8003D] to-[#FF6F00] border-red-400 text-white"
              badge="Core new screen"
            />
            <Arrow />

            {/* Row 6: 3 exit paths */}
            <div className="flex items-start justify-center gap-4">
              <div className="flex flex-col items-center">
                <FlowNode label="Push / SMS / Email" sub="Milestone alerts" color="bg-[#0D9E6E] border-green-400 text-white" badge="NEW" />
              </div>
              <HArrow />
              <div className="flex flex-col items-center">
                <FlowNode label="Support Chat" sub="Context-aware" color="bg-[#6C3FE8] border-purple-400 text-white" badge="Improved" />
              </div>
              <HArrow />
              <div className="flex flex-col items-center">
                <FlowNode label="Refund Credited" sub="Success state" color="bg-white border-gray-200 text-[#0D1B3E]" />
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          {[
            { color: "bg-[#1565C0]", label: "New surface on Home" },
            { color: "bg-[#FF6F00]", label: "New screen" },
            { color: "bg-[#E8003D]", label: "Core redesigned screen" },
            { color: "bg-[#0D9E6E]", label: "New notification system" },
            { color: "bg-[#6C3FE8]", label: "Improved feature" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${l.color}`} />
              <span className="text-white/50 text-xs">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Before vs After navigation depth */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-500/10 border border-red-400/20 rounded-2xl p-5">
            <div className="text-[#E8003D] text-xs font-black uppercase tracking-wide mb-3">Before — 4 taps to find refund status</div>
            <div className="flex items-center gap-2 flex-wrap text-white/60 text-xs">
              {["Home", "My Trips", "Booking Detail", "Manage Booking", "Cancellation Status"].map((s, i) => (
                <span key={s} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">→</span>}
                  <span className="bg-white/10 px-2 py-1 rounded-lg">{s}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-400/20 rounded-2xl p-5">
            <div className="text-green-400 text-xs font-black uppercase tracking-wide mb-3">After — 1 tap from Home</div>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              {["Home (Refund Card)", "Refund Tracker"].map((s, i) => (
                <span key={s} className="flex items-center gap-2">
                  {i > 0 && <span className="text-green-400">→</span>}
                  <span className="bg-white/10 px-2 py-1 rounded-lg">{s}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
