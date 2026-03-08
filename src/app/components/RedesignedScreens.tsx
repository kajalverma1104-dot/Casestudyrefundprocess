import { useState } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-bold">{children}</span>
    </div>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[260px] flex-shrink-0 bg-[#0D1B3E] rounded-[2.75rem] p-[5px] shadow-2xl mx-auto">
      <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0D1B3E] rounded-b-xl z-20" />
        {children}
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <Phone>
      <div className="bg-[#E8003D] pt-7 pb-4 px-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-xs">← My Trips</span>
          <span className="text-white text-xs font-black">Cancel & Refund</span>
          <span className="text-white text-xs"></span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Refund Breakdown</div>
        <div className="bg-[#F5F7FF] rounded-xl p-3 space-y-2">
          {[
            { l: "Ticket Price Paid", v: "₹6,200", c: "text-gray-800" },
            { l: "Airline Cancellation Fee", v: "– ₹1,200", c: "text-red-500" },
            { l: "MMT Convenience Fee", v: "– ₹770", c: "text-red-500" },
            { l: "GST (non-refundable)", v: "– ₹0", c: "text-gray-400" },
          ].map((r) => (
            <div key={r.l} className="flex justify-between">
              <span className="text-gray-500 text-[10px]">{r.l}</span>
              <span className={`text-[10px] font-black ${r.c}`}>{r.v}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex justify-between items-center">
          <span className="text-green-700 text-xs font-black">You'll receive</span>
          <span className="text-green-700 text-xl font-black">₹4,230</span>
        </div>
        <div className="text-[9px] text-gray-400 text-center">Credited within 7 working days from 17 Mar</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-[#E8003D] text-[#E8003D] text-[10px] text-center py-2 rounded-xl font-black">Original Card</div>
          <div className="border border-gray-200 text-gray-400 text-[10px] text-center py-2 rounded-xl">MMT Wallet +5%</div>
        </div>
        <button className="w-full bg-[#E8003D] text-white text-[10px] py-2.5 rounded-xl font-black">Confirm Cancellation</button>
      </div>
    </Phone>
  );
}

function Screen2() {
  return (
    <Phone>
      <div className="bg-[#E8003D] pt-7 pb-4 px-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-xs">← Back</span>
          <span className="text-white text-xs font-black">Refund Status</span>
          <span className="text-white text-xs">Help</span>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-[#F5F7FF] rounded-2xl p-3 mb-3">
          <div className="flex justify-between mb-1">
            <span className="text-[9px] text-gray-400">DEL → BOM · #NF28476</span>
            <span className="text-[9px] text-green-600 font-black">On track</span>
          </div>
          <div className="text-center my-2">
            <div className="text-[9px] text-gray-400 mb-0.5">Refund Amount</div>
            <div className="text-2xl font-black text-[#0D1B3E]">₹4,230</div>
            <div className="text-[9px] text-green-600 font-bold mt-0.5">Expected by 22 Mar 2024</div>
          </div>
        </div>

        <div className="space-y-0 mb-3">
          {[
            { l: "Cancellation Requested", d: "15 Mar · 2:30 PM", done: true },
            { l: "Airline Confirmed", d: "16 Mar · 10:15 AM", done: true },
            { l: "Refund Initiated", d: "17 Mar · 9:00 AM", active: true },
            { l: "Amount Credited", d: "Est. 22 Mar", done: false },
          ].map((s, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-green-500" : s.active ? "bg-[#E8003D] ring-4 ring-red-100" : "bg-gray-200"}`}>
                  {s.done && <span className="text-white text-[8px]">✓</span>}
                  {s.active && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                {i < 3 && <div className={`w-0.5 h-4 ${s.done ? "bg-green-300" : "bg-gray-200"}`} />}
              </div>
              <div className="pb-1">
                <div className={`text-[10px] font-black ${s.done ? "text-green-700" : s.active ? "text-[#E8003D]" : "text-gray-300"}`}>{s.l}</div>
                <div className="text-gray-400 text-[9px]">{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <button className="w-full border border-gray-200 text-gray-500 text-[10px] py-2 rounded-xl font-bold">🔔 Set Refund Notification</button>
          <button className="w-full bg-[#E8003D] text-white text-[10px] py-2 rounded-xl font-bold">💬 Chat with Support</button>
        </div>
      </div>
    </Phone>
  );
}

function Screen3() {
  return (
    <Phone>
      <div className="bg-[#0D1B3E] pt-7 pb-4 px-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-xs">9:41</span>
          <span className="text-white text-xs font-black">Notifications</span>
          <span className="text-white text-xs">●●●</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Refund Updates</div>
        {[
          { icon: "✅", title: "Cancellation Confirmed", body: "DEL→BOM cancelled. Refund of ₹4,230 processing.", time: "15 Mar · 2:35 PM", bg: "bg-green-50 border-green-100", new: true },
          { icon: "🏦", title: "Refund Initiated", body: "₹4,230 sent to HDFC Credit Card. Expected: 22 Mar.", time: "17 Mar · 9:05 AM", bg: "bg-blue-50 border-blue-100", new: true },
          { icon: "💸", title: "Refund Credited!", body: "₹4,230 successfully credited to HDFC Credit Card.", time: "22 Mar · 11:30 AM", bg: "bg-purple-50 border-purple-100", new: false },
        ].map((n, i) => (
          <div key={i} className={`${n.bg} border rounded-xl p-3 relative`}>
            {n.new && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#E8003D] rounded-full" />}
            <div className="flex gap-2.5">
              <div className="text-lg flex-shrink-0">{n.icon}</div>
              <div>
                <div className="text-gray-800 text-[10px] font-black">{n.title}</div>
                <div className="text-gray-500 text-[9px] leading-relaxed">{n.body}</div>
                <div className="text-gray-400 text-[9px] mt-0.5">{n.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

function Screen4() {
  return (
    <Phone>
      <div className="bg-[#6C3FE8] pt-7 pb-4 px-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-xs">← Back</span>
          <span className="text-white text-xs font-black">Support</span>
          <span className="text-white text-xs"></span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-[#F5F7FF] rounded-xl p-3">
          <div className="text-[10px] font-black text-gray-700 mb-1">Your active refund</div>
          <div className="flex justify-between text-[9px]">
            <span className="text-gray-400">DEL → BOM</span>
            <span className="text-[#E8003D] font-black">₹4,230 · Initiated</span>
          </div>
        </div>
        {/* Chat bubbles */}
        <div className="space-y-2">
          <div className="bg-[#6C3FE8] text-white text-[10px] rounded-2xl rounded-tl-none px-3 py-2 max-w-[80%]">
            Hi! I can see your refund of ₹4,230 is on its way to your HDFC Credit Card. Expected by 22 Mar. How can I help?
          </div>
          <div className="bg-gray-100 text-gray-700 text-[10px] rounded-2xl rounded-tr-none px-3 py-2 max-w-[80%] ml-auto">
            Why hasn't it arrived yet? It says 22 Mar but nothing.
          </div>
          <div className="bg-[#6C3FE8] text-white text-[10px] rounded-2xl rounded-tl-none px-3 py-2 max-w-[80%]">
            I've raised a priority ticket for you (#T94712). Your bank typically takes 1 extra day. You'll get an SMS once it hits.
          </div>
        </div>
        {/* Quick replies */}
        <div className="flex flex-wrap gap-1.5">
          {["Track my refund", "Raise a complaint", "Talk to agent"].map((q) => (
            <div key={q} className="border border-[#6C3FE8] text-[#6C3FE8] text-[9px] px-2 py-1 rounded-full font-bold">{q}</div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

function Screen5() {
  return (
    <Phone>
      <div className="bg-[#0D9E6E] pt-7 pb-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-xs"></span>
          <span className="text-white text-xs font-black">Refund Successful</span>
          <span className="text-white text-xs"></span>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">💚</div>
          <div className="text-white text-xl font-black">₹4,230</div>
          <div className="text-white/70 text-xs">Credited to HDFC Credit Card</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-green-50 border border-green-100 rounded-xl p-3">
          <div className="text-green-700 text-[10px] font-black mb-1">Refund Timeline</div>
          <div className="space-y-1">
            {[["Cancelled", "15 Mar"], ["Approved", "16 Mar"], ["Initiated", "17 Mar"], ["Credited", "22 Mar ✓"]].map(([e, d]) => (
              <div key={e} className="flex justify-between text-[9px]">
                <span className="text-gray-500">{e}</span>
                <span className="text-gray-700 font-bold">{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-gray-500 text-center">Total time: 7 days · All milestones notified ✓</div>
        <button className="w-full bg-[#0D9E6E] text-white text-[10px] py-2.5 rounded-xl font-black">Book Your Next Trip →</button>
        <div className="text-center">
          <span className="text-[9px] text-gray-400">How was your refund experience?</span>
          <div className="flex justify-center gap-2 mt-1">
            {["😤", "😐", "🙂", "😊", "🤩"].map((e) => (
              <span key={e} className="text-lg cursor-pointer hover:scale-125 transition-transform">{e}</span>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}

const screens = [
  { key: "1", label: "Refund Calculator", tag: "New Screen", desc: "Before confirming, users see a transparent breakdown — exactly what they'll receive, why, and when. No surprises.", component: <Screen1 /> },
  { key: "2", label: "Refund Status Tracker", tag: "Core Redesign", desc: "Live milestone tracker with real-time status, ETA countdown, and direct links to notifications and support.", component: <Screen2 /> },
  { key: "3", label: "Notification Center", tag: "New Screen", desc: "Proactive alerts at every milestone via push, SMS and email — eliminating the communication blackout.", component: <Screen3 /> },
  { key: "4", label: "Context-Aware Support", tag: "Improved", desc: "Chatbot knows your booking and refund status. Gives specific answers and escalates immediately with ticket number.", component: <Screen4 /> },
  { key: "5", label: "Refund Success State", tag: "Redesigned", desc: "Closure screen with a timeline summary, feedback prompt, and a clear next action — rebuilding trust at the end.", component: <Screen5 /> },
];

export function RedesignedScreens() {
  const [active, setActive] = useState(0);

  return (
    <section id="redesign" className="bg-[#F5F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>08 — Redesigned Screens</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          5 screens that fix the experience
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-12 leading-relaxed">
          Each screen addresses a specific pain point identified in research. Click a screen to explore.
        </p>

        {/* Tab row */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {screens.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-black transition-all border ${
                active === i
                  ? "bg-[#0D1B3E] text-white border-[#0D1B3E] shadow-lg"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {s.key}. {s.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Phone */}
          <div className="flex-shrink-0">
            {screens[active].component}
          </div>

          {/* Details */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-green-100 text-green-700 border border-green-200 text-xs font-black px-3 py-1 rounded-full">
                ✅ {screens[active].tag}
              </span>
              <span className="text-gray-500 text-sm">Screen {screens[active].key} of 5</span>
            </div>
            <h3 className="text-3xl font-black text-[#0D1B3E] mb-3">{screens[active].label}</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{screens[active].desc}</p>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                disabled={active === 0}
                onClick={() => setActive(active - 1)}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-500 text-sm font-black disabled:opacity-30 hover:bg-gray-50 transition-all"
              >
                ← Prev
              </button>
              <button
                disabled={active === screens.length - 1}
                onClick={() => setActive(active + 1)}
                className="px-5 py-2.5 rounded-full bg-[#E8003D] text-white text-sm font-black disabled:opacity-30 hover:bg-[#c50028] transition-all shadow-lg shadow-red-200"
              >
                Next →
              </button>
            </div>

            {/* Screen dots */}
            <div className="flex gap-2 mt-6">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${active === i ? "w-8 h-2 bg-[#E8003D]" : "w-2 h-2 bg-gray-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
