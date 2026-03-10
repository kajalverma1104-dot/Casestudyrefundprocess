import { useState } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}

// Mocked current MMT screens
function CancellationStatusScreen() {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      {/* Header */}
      <div className="bg-[#1565C0] px-4 py-3 flex items-center justify-between">
        <span className="text-white text-xs">← My Trips</span>
        <span className="text-white text-sm font-black">Manage Booking</span>
        <span className="text-white text-xs">⋮</span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3 bg-[#F5F7FF]">
        <div className="relative bg-yellow-50 border border-yellow-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="text-sm font-black text-gray-800">Cancellation Requested</span>
          </div>
          <p className="text-gray-400 text-xs">Your refund is being processed.</p>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">1</div>
        </div>

        <div className="relative bg-white rounded-xl p-3 space-y-1.5 shadow-sm border border-gray-100">
          {[["Booking ID", "#NF28476"], ["Date", "15 Mar 2024"], ["Refund", "₹4,230"], ["ETA", "7–10 working days"]].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-gray-400 text-xs">{k}</span>
              <span className="text-gray-700 text-xs font-bold">{v}</span>
            </div>
          ))}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">2</div>
        </div>

        <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 text-center bg-white">
          <div className="text-gray-200 text-2xl mb-1">☐</div>
          <div className="text-gray-300 text-xs">No refund tracker</div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">3</div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
            <span className="text-gray-400 text-xs">Contact Support</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">4</div>
        </div>

        <div className="relative">
          <button className="w-full bg-[#1565C0] text-white text-xs py-3 rounded-xl font-bold">Go to Home</button>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">5</div>
        </div>
      </div>
    </div>
  );
}

function CancellationPolicyScreen() {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="bg-[#1565C0] px-4 py-3 flex items-center justify-between">
        <span className="text-white text-xs">← Back</span>
        <span className="text-white text-sm font-black">Cancellation Policy</span>
        <span className="text-white text-xs"></span>
      </div>
      <div className="p-4 space-y-3 bg-[#F5F7FF]">
        <div className="relative bg-white rounded-xl p-3 shadow-sm border border-gray-100">
          <div className="text-[9px] text-gray-400 leading-relaxed">
            Cancellation charges applicable as per airline policy. For IndiGo flights, cancellation fee of ₹3,500 applies if cancelled within 24 hours. Refund processed within 7–10 business days subject to airline approval. Convenience fee non-refundable as per clause 4.2(b) of terms of service. GST component refundable subject to itinerary type and...
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">1</div>
        </div>

        <div className="relative bg-blue-50 border border-blue-100 rounded-xl p-3">
          <div className="text-xs font-black text-gray-700 mb-1">Cancellation Charges</div>
          <div className="text-[9px] text-gray-400">Cancellation fee: ₹3,500 (as per airline)</div>
          <div className="text-[9px] text-gray-400">MMT Fee: ₹770</div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">2</div>
        </div>

        <div className="relative border border-dashed border-gray-200 rounded-xl p-3 text-center bg-white">
          <span className="text-gray-300 text-xs">No refund calculator</span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E8003D] text-white rounded-full text-[10px] font-black flex items-center justify-center shadow">3</div>
        </div>

        <button className="w-full bg-[#E8003D] text-white text-xs py-3 rounded-xl font-bold">Cancel Booking</button>
      </div>
    </div>
  );
}

const painData = [
  {
    id: "A",
    title: "Cancellation Status Screen",
    callouts: [
      { n: "1", title: "Static status label", desc: "The refund status remains unchanged after cancellation. Users cannot see whether the process has progressed.", heuristic: "Visibility of system status" },
      { n: "2", title: "Vague ETA", desc: "The timeline “7–10 working days” lacks a clear starting point or progress indicator, leaving users unsure when to expect the refund.", heuristic: "Match between system and real-world expectations" },
      { n: "3", title: "Zero progress tracker", desc: "The refund process has no visible progress tracker, making the entire pipeline invisible to users.", heuristic: "Visibility of system status" },
      { n: "4", title: "Buried support link", desc: "Customer support is visually deprioritized, making it difficult for anxious users to locate help quickly.", heuristic: "Help & documentation" },
      { n: "5", title: "Wrong CTA", desc: "The primary action “Go to Home” redirects users away instead of helping them track or understand their refund status.", heuristic: "User control & freedom" },
    ],
    Screen: CancellationStatusScreen,
  },
  {
    id: "B",
    title: "Cancellation Policy Screen",
    callouts: [
      { n: "1", title: "Dense legal language", desc: "Policy written in paragraph format. Takes >30 seconds to parse what they'll actually get back.", heuristic: "Match real-world mental models" },
      { n: "2", title: "No breakdown clarity", desc: "Fee deductions listed without showing the final refund amount they'll receive.", heuristic: "Visibility of system status" },
      { n: "3", title: "No refund calculator", desc: "Users must do mental math or call support just to know what refund to expect.", heuristic: "Error prevention" },
    ],
    Screen: CancellationPolicyScreen,
  },
];

export function PainPoints() {
  const [activeTab, setActiveTab] = useState(0);
  const active = painData[activeTab];
  const ActiveScreen = active.Screen;

  return (
    <section id="painpoints" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>05 — Pain Points</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          What's broken in the current refund experience?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
          Analysis of the current refund flow in MakeMyTrip highlighting usability issues based on established UX heuristics.
        </p>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {painData.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-black transition-all border ${
                activeTab === i
                  ? "bg-[#E8003D] text-white border-[#E8003D] shadow-md shadow-red-100"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#E8003D] hover:text-[#E8003D]"
              }`}
            >
              Screen {p.id}: {p.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: mockup */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-50 text-[#E8003D] text-xs font-black px-3 py-1 rounded-full border border-red-100">❌ Current MMT Screen</span>
            </div>
            <ActiveScreen />
            <p className="text-gray-400 text-xs mt-3 text-center">Numbered callouts match issues on the right →</p>
          </div>

          {/* Right: callouts */}
          <div>
            <div className="text-sm font-black text-[#0D1B3E] mb-4 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-[#E8003D] rounded-full" />
              Annotated Issues
            </div>
            <div className="space-y-3">
              {active.callouts.map((c) => (
                <div key={c.n} className="bg-[#F5F7FF] border border-[#E0E8FF] rounded-2xl p-4 flex gap-4 hover:shadow-sm transition-shadow">
                  <div className="w-8 h-8 bg-[#E8003D] text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                    {c.n}
                  </div>
                  <div>
                    <div className="font-black text-[#0D1B3E] text-sm mb-0.5">{c.title}</div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2">{c.desc}</p>
                    <span className="inline-block bg-purple-50 border border-purple-100 text-purple-600 text-[10px] px-2.5 py-1 rounded-full font-bold">
                      Violates: {c.heuristic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
