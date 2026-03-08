import { useState } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#FF6F00]" />
      <span className="text-[#FF6F00] text-xs tracking-[0.2em] uppercase font-bold">{children}</span>
    </div>
  );
}

function Phone({ children, header, headerBg = "bg-[#E8003D]" }: { children: React.ReactNode; header: string; headerBg?: string }) {
  return (
    <div className="w-[260px] mx-auto bg-[#0D1B3E] rounded-[2.75rem] p-[5px] shadow-2xl">
      <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative min-h-[440px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0D1B3E] rounded-b-xl z-20" />
        <div className={`${headerBg} pt-7 pb-4 px-4`}>
          <div className="text-white text-xs font-black text-center">{header}</div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    id: 1,
    label: "Cancel",
    title: "Initiate Cancellation",
    subtitle: "User sees exact refund before confirming",
    headerBg: "bg-[#E8003D]",
    header: "Cancel & Refund",
    content: (
      <div className="space-y-3">
        <div className="bg-[#F5F7FF] rounded-xl p-3 text-center mb-2">
          <div className="text-[9px] text-gray-400 mb-0.5">DEL → BOM · 15 Mar 2024</div>
          <div className="text-[9px] text-gray-400">#NF28476 · IndiGo 6E-204</div>
        </div>
        <div className="bg-[#F5F7FF] rounded-xl p-3 space-y-1.5">
          {[["Ticket Price", "₹6,200"], ["Airline fee", "– ₹1,200"], ["MMT fee", "– ₹770"]].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[10px]">
              <span className="text-gray-400">{k}</span>
              <span className={`font-black ${v.startsWith("–") ? "text-red-400" : "text-gray-700"}`}>{v}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex justify-between items-center">
          <span className="text-green-700 text-[10px] font-black">You get back</span>
          <span className="text-green-700 text-xl font-black">₹4,230</span>
        </div>
        <button className="w-full bg-[#E8003D] text-white text-[10px] py-2.5 rounded-xl font-black">
          ✓ Confirm Cancellation
        </button>
        <div className="text-[9px] text-gray-400 text-center">Credited to original card in 7 working days</div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Track",
    title: "Real-Time Refund Tracker",
    subtitle: "Live milestones, ETA, and push alerts",
    headerBg: "bg-[#0D1B3E]",
    header: "Refund Status",
    content: (
      <div className="space-y-3">
        <div className="bg-[#F5F7FF] rounded-xl p-3 text-center">
          <div className="text-2xl font-black text-[#0D1B3E]">₹4,230</div>
          <div className="text-green-600 text-[9px] font-bold">Expected by 22 Mar 2024</div>
          <div className="mt-2 bg-gray-200 rounded-full h-1.5">
            <div className="bg-[#E8003D] h-full rounded-full w-2/3 transition-all" />
          </div>
          <div className="flex justify-between text-[8px] text-gray-400 mt-1">
            <span>Initiated 17 Mar</span>
            <span>Expected 22 Mar</span>
          </div>
        </div>
        <div className="space-y-0">
          {[
            { l: "Requested", d: "15 Mar", done: true },
            { l: "Airline OK", d: "16 Mar", done: true },
            { l: "Refund Sent", d: "17 Mar", active: true },
            { l: "Credited", d: "22 Mar", done: false },
          ].map((s, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-green-500" : s.active ? "bg-[#E8003D]" : "bg-gray-200"}`}>
                  {s.done && <span className="text-white text-[7px]">✓</span>}
                  {s.active && <div className="w-1 h-1 bg-white rounded-full" />}
                </div>
                {i < 3 && <div className={`w-0.5 h-4 ${s.done ? "bg-green-300" : "bg-gray-200"}`} />}
              </div>
              <div className="pb-1">
                <span className={`text-[9px] font-black ${s.done ? "text-green-700" : s.active ? "text-[#E8003D]" : "text-gray-300"}`}>{s.l}</span>
                <span className="text-gray-400 text-[8px] ml-1">{s.d}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#0D1B3E] text-white text-[9px] py-2 rounded-xl font-black">🔔 Get notified when credited</button>
      </div>
    ),
  },
  {
    id: 3,
    label: "Help",
    title: "Context-Aware Support",
    subtitle: "Chatbot knows your booking — no scripts",
    headerBg: "bg-[#6C3FE8]",
    header: "Support Chat",
    content: (
      <div className="space-y-3">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-2.5">
          <div className="text-[9px] text-purple-600 font-black">Active refund detected</div>
          <div className="text-[8px] text-gray-500">₹4,230 · DEL→BOM · Expected 22 Mar</div>
        </div>
        <div className="space-y-2">
          <div className="bg-[#6C3FE8] text-white text-[9px] rounded-2xl rounded-tl-none px-2.5 py-2 max-w-[85%]">
            Your refund is en route to your HDFC card. Arrived yet?
          </div>
          <div className="bg-gray-100 text-gray-700 text-[9px] rounded-2xl rounded-tr-none px-2.5 py-2 max-w-[80%] ml-auto">
            No! It's been 10 days already.
          </div>
          <div className="bg-[#6C3FE8] text-white text-[9px] rounded-2xl rounded-tl-none px-2.5 py-2 max-w-[85%]">
            I'm raising a priority ticket now — #T94712. HDFC typically adds 1 business day. You'll get SMS confirmation.
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Escalate issue", "Track ticket", "Call agent"].map(q => (
            <div key={q} className="border border-purple-200 text-purple-600 text-[8px] px-2 py-0.5 rounded-full font-bold">{q}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Resolved",
    title: "Ticket Resolved",
    subtitle: "Closure, feedback, and next action",
    headerBg: "bg-[#0D9E6E]",
    header: "Refund Credited ✓",
    content: (
      <div className="space-y-3 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mx-auto border-4 border-green-200">
          🎉
        </div>
        <div>
          <div className="text-2xl font-black text-[#0D1B3E]">₹4,230</div>
          <div className="text-green-600 text-[9px] font-bold">Credited to HDFC Credit Card</div>
          <div className="text-gray-400 text-[9px] mt-0.5">22 Mar 2024 · 11:30 AM</div>
        </div>
        <div className="bg-[#F5F7FF] rounded-xl p-3 text-left space-y-1">
          {[["Requested", "15 Mar"], ["Approved", "16 Mar"], ["Initiated", "17 Mar"], ["Credited", "22 Mar ✓"]].map(([e, d]) => (
            <div key={e} className="flex justify-between text-[9px]">
              <span className="text-gray-400">{e}</span>
              <span className="text-gray-700 font-bold">{d}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[9px] text-gray-400 mb-1.5">Rate your refund experience</div>
          <div className="flex justify-center gap-2">
            {["😤","😐","🙂","😊","🤩"].map(e => <span key={e} className="text-xl cursor-pointer">{e}</span>)}
          </div>
        </div>
        <button className="w-full bg-[#0D9E6E] text-white text-[9px] py-2 rounded-xl font-black">Book next trip →</button>
      </div>
    ),
  },
];

export function PrototypeFlow() {
  const [active, setActive] = useState(0);

  return (
    <section id="prototype" className="bg-[#0D1B3E] py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#6C3FE8]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>09 — Prototype Flow</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl leading-tight">
          Cancel → Track → Help → Resolved
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-14 leading-relaxed">
          Walk through the complete redesigned prototype flow — from initiating a cancellation to getting full resolution, step by step.
        </p>

        {/* Step indicators */}
        <div className="flex flex-col sm:flex-row gap-0 mb-12 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex-1 flex items-center gap-3 px-4 py-4 sm:py-5 text-left transition-all border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 ${
                active === i ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-all ${
                  active === i ? "bg-[#E8003D] text-white shadow-lg shadow-red-900" : active > i ? "bg-green-500 text-white" : "bg-white/10 text-white/40"
                }`}
              >
                {active > i ? "✓" : s.id}
              </div>
              <div>
                <div className={`text-sm font-black ${active === i ? "text-white" : active > i ? "text-white/60" : "text-white/30"}`}>{s.label}</div>
                <div className="text-white/30 text-[10px] hidden sm:block">{s.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Phone */}
          <div className="flex-shrink-0">
            <Phone header={steps[active].header} headerBg={steps[active].headerBg}>
              {steps[active].content}
            </Phone>
          </div>

          {/* Info */}
          <div className="flex-1 max-w-md">
            <div className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">Step {active + 1} of 4</div>
            <h3 className="text-3xl font-black text-white mb-2">{steps[active].title}</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{steps[active].subtitle}</p>

            {/* Narrative */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
              {active === 0 && <p className="text-white/60 text-sm leading-relaxed">Priya sees the exact amount she'll receive <span className="text-white font-bold">before</span> confirming. No surprises, no post-cancellation shock. She taps confirm with full confidence.</p>}
              {active === 1 && <p className="text-white/60 text-sm leading-relaxed">Instantly after confirming, a <span className="text-white font-bold">live refund tracker</span> appears. Milestones update in real time. She can see the ETA, set alerts, or jump to support — all from one screen.</p>}
              {active === 2 && <p className="text-white/60 text-sm leading-relaxed">Day 11: Priya's worried. She opens support, and the chatbot <span className="text-white font-bold">already knows</span> her booking and refund status. No scripted menus. A priority ticket is raised in seconds.</p>}
              {active === 3 && <p className="text-white/60 text-sm leading-relaxed">Money arrives. MMT sends a push notification. Priya lands on a <span className="text-white font-bold">closure screen</span> showing the complete timeline — a reassuring final handshake that restores trust.</p>}
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3">
              <button
                disabled={active === 0}
                onClick={() => setActive(active - 1)}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/60 text-sm font-black disabled:opacity-20 hover:bg-white/10 transition-all"
              >
                ← Back
              </button>
              <button
                disabled={active === steps.length - 1}
                onClick={() => setActive(active + 1)}
                className="px-6 py-2.5 rounded-full bg-[#E8003D] text-white text-sm font-black disabled:opacity-20 hover:bg-[#c50028] transition-all shadow-lg shadow-red-900"
              >
                {active === steps.length - 2 ? "See Resolution →" : "Next Step →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
