function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-[#E8003D]" />
      <span className="text-[#E8003D] text-xs tracking-[0.2em] uppercase font-black">{children}</span>
    </div>
  );
}

const timeline = [
  {
    time: "Day 0",
    event: "Cancellation requested",
    detail: "Priya cancels her Goa hotel on the MMT app. Gets a generic 'Cancellation Requested' message.",
    emotion: "😟",
    mood: "Anxious",
    moodColor: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-100",
  },
  {
    time: "Day 3",
    event: "Opens app to check status",
    detail: "Still shows the same static label. No progress updates or emails are received.",
    emotion: "😤",
    mood: "Confused",
    moodColor: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-100",
  },
  {
    time: "Day 5",
    event: "Calls customer care",
    detail: "Waits 24 minutes on hold. Told 'the refund is processing' with no specifics. Given a ticket number.",
    emotion: "😠",
    mood: "Frustrated",
    moodColor: "text-[#E8003D]",
    bgColor: "bg-red-50 border-red-100",
  },
  {
    time: "Day 8",
    event: "Tries the chatbot",
    detail: "Chatbot gives generic FAQs. No booking-specific info. Chatbot says 'please call support' — circular dead end.",
    emotion: "🤬",
    mood: "Angry",
    moodColor: "text-[#E8003D]",
    bgColor: "bg-red-50 border-red-100",
  },
  {
    time: "Day 11",
    event: "Refund arrives silently",
    detail: "Money appears in bank account. Zero notification from MMT. Priya finds out via bank SMS.",
    emotion: "😑",
    mood: "Indifferent",
    moodColor: "text-gray-400",
    bgColor: "bg-gray-50 border-gray-100",
  },
  {
    time: "Post-trip",
    event: "Switches to competitor",
    detail: "Books next trip on Yatra. Shares a 1-star MMT review: 'Never using this app for flights again.'",
    emotion: "👋",
    mood: "Lost Customer",
    moodColor: "text-gray-400",
    bgColor: "bg-gray-50 border-gray-100",
  },
];

export function UserScenario() {
  return (
    <section id="scenario" className="bg-[#F5F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>04 — User Journey: Priya's Refund Experience</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 max-w-2xl leading-tight">
          Meet Priya, 27
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mb-14 leading-relaxed">
          Priya is a frequent traveler from Bengaluru who books 4–6 trips a year on MakeMyTrip. She has been a loyal user for over 5 years — until a hotel cancellation turns into an 11-day nightmare.
        </p>

        {/* Persona card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-14 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#E8003D] to-[#FF6F00] flex items-center justify-center text-4xl shadow-lg">
                👩‍💻
              </div>
            </div>
            {/* Details */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Name", value: "Priya Sharma" },
                { label: "Age", value: "27 years" },
                { label: "City", value: "Bengaluru" },
                { label: "Occupation", value: "Product Manager" },
                { label: "MMT usage", value: "Power user, 5+ yrs" },
                { label: "Tech comfort", value: "High" },
              ].map((d) => (
                <div key={d.label}>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 font-bold">{d.label}</div>
                  <div className="text-[#0D1B3E] font-black text-sm">{d.value}</div>
                </div>
              ))}
            </div>
            {/* Quote */}
            <div className="flex-shrink-0 max-w-xs bg-[#FFF5F7] rounded-2xl p-5 border border-[#E8003D]/15">
              <div className="text-3xl text-[#E8003D]/20 font-serif leading-none mb-2">"</div>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                I had to call them 3 times and still didn't know when the money would come. It felt like I was chasing my own money.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-300 via-red-400 to-gray-300 hidden md:block" />

          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-5">
                {/* Icon circle */}
                <div className="w-[4.5rem] flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl shadow-sm z-10">
                    {step.emotion}
                  </div>
                  <div className="text-[9px] text-gray-400 mt-1 font-black">{step.time}</div>
                </div>

                {/* Card */}
                <div className={`flex-1 border rounded-2xl p-4 md:p-5 ${step.bgColor}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="font-black text-[#0D1B3E] text-sm mb-1">{step.event}</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                    <span className={`text-xs font-black ${step.moodColor} flex-shrink-0 bg-white/60 px-2.5 py-1 rounded-full`}>
                      {step.mood}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
