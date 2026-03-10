import { useRef, useState, useEffect } from 'react';

export function Cover() {
  const devicesRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (!devicesRef.current) return;

      const rect = devicesRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotateY = (deltaX / (rect.width / 2)) * 6;
      const rotateX = -(deltaY / (rect.height / 2)) * 6;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    const devicesElement = devicesRef.current;
    devicesElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      devicesElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-in {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-scale {
          animation: fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .text-shimmer {
          background: linear-gradient(
            90deg,
            #FFFFFF 0%,
            #FFFFFF 40%,
            rgba(255, 255, 255, 0.6) 50%,
            #FFFFFF 60%,
            #FFFFFF 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.3; }
        }

        @keyframes chevronFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <section className="relative min-h-screen bg-[#0A1628] flex flex-col overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient orbs - more sophisticated */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(232, 30, 37, 0.15) 0%, transparent 70%)',
            animation: 'pulse-glow 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            animation: 'pulse-glow 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        <div className="relative flex-1 max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-16 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center w-full py-12 lg:py-24">
            
            {/* Left: Content */}
            <div className="space-y-8 lg:space-y-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Label */}
              <div 
                className={`inline-flex items-center gap-3 ${isLoaded ? 'animate-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-[#E31E25] to-transparent hidden lg:block" />
                <span 
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#E31E25]/90"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Product Redesign Case Study
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 
                  className={`${isLoaded ? 'animate-in' : 'opacity-0'}`}
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    animationDelay: '0.2s',
                  }}
                >
                  <div className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-tight text-white/95 mb-3">
          
                  </div>
                  <div 
                    className="text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1] tracking-tight text-shimmer"
                  >
                    Redesigning the refund experience for MakeMyTrip.
                  </div>
                </h1>

                <p 
                  className={`text-[17px] leading-relaxed text-white/50 max-w-xl ${isLoaded ? 'animate-in' : 'opacity-0'}`}
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    animationDelay: '0.3s',
                  }}
                >
                  A comprehensive UX redesign addressing unclear refund timelines, absence of progress tracking, and high user frustration during post-booking cancellations.
                </p>
              </div>

              {/* Metrics */}
              <div 
                className={`grid grid-cols-3 gap-8 pt-4 ${isLoaded ? 'animate-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                {[
                  { value: "50+", label: "Reviews Analyzed", color: "from-blue-400 to-cyan-400" },
                  { value: "10+", label: "Screens Redesigned", color: "from-purple-400 to-pink-400" },
                  { value: "2wk", label: "Design Sprint", color: "from-orange-400 to-red-400" },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div 
                      className={`text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-xs text-white/40 uppercase tracking-wider"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div 
                className={`flex flex-wrap gap-3 justify-center lg:justify-start ${isLoaded ? 'animate-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.5s' }}
              >
                {["UX Research", "UI Design", "Prototyping", "Mobile-First"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:text-white/80 transition-all duration-300"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-only: compact refund tracker preview */}
              <div 
                className={`block lg:hidden mt-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ${isLoaded ? 'animate-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.6s' }}
              >
                <div className="h-7 bg-gray-50 border-b border-gray-200 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-2 py-0.5 text-[9px] text-gray-400 font-medium">
                    makemytrip.com/refunds/tracking
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-base font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Refund Tracker</div>
                      <div className="text-[10px] text-gray-500">Real-time refund status monitoring</div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-[9px] font-semibold border border-emerald-200">● Live</div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[9px] font-semibold text-gray-700">Booking Reference</div>
                        <div className="text-[10px] text-gray-500">#NF28476 • DEL → BOM</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] text-gray-500">Initiated</div>
                        <div className="text-[10px] font-semibold text-gray-700">Mar 8, 2026</div>
                      </div>
                    </div>
                    <div className="relative mb-3">
                      <div className="absolute top-3 left-3 right-3 h-[2px] bg-gray-200"></div>
                      <div className="absolute top-3 left-3 w-[45%] h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                      <div className="relative flex justify-between">
                        {[{ label: 'Requested', s: 'complete', i: '✓' }, { label: 'Processing', s: 'active', i: '2' }, { label: 'Approved', s: 'pending', i: '3' }, { label: 'Credited', s: 'pending', i: '4' }].map((step, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1 z-10">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${step.s === 'complete' ? 'bg-emerald-500 text-white' : step.s === 'active' ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}>{step.i}</div>
                            <div className="text-[8px] font-medium text-gray-500 whitespace-nowrap">{step.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Devices */}
            <div 
              className={`relative w-full ${isLoaded ? 'animate-scale' : 'opacity-0'} hidden lg:flex justify-center items-center pr-16`}
              style={{
                perspective: "3000px",
                animationDelay: '0.4s',
              }}
            >
              <div
                ref={devicesRef}
                className="relative overflow-visible flex justify-center items-center w-full"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${Math.abs(rotation.x) + Math.abs(rotation.y) * 2}px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: 'transform',
                }}
              >
                {/* Ambient glow */}
                <div 
                  className="absolute inset-0 rounded-full blur-[140px] opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(232, 30, 37, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
                  }}
                />

                {/* Laptop */}
                <div 
                  className="relative z-10 w-full"
                  style={{
                    transform: 'translateZ(50px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Screen */}
                  <div 
                    className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-t-xl overflow-hidden border-t-[10px] border-x-[10px] border-gray-800"
                    style={{
                      aspectRatio: '16/10',
                      boxShadow: `
                        0 40px 80px rgba(0, 0, 0, 0.5),
                        0 0 0 1px rgba(255, 255, 255, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05)
                      `,
                    }}
                  >
                    {/* Screen bezel */}
                    <div className="absolute top-[8px] left-[12px] right-[12px] bottom-[8px] border-[3px] border-black/80 rounded-lg overflow-hidden">
                      {/* Content area */}
                      <div className="w-full h-full bg-white">
                        {/* Browser chrome */}
                        <div className="h-9 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-3">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-[10px] text-gray-500 font-medium">
                            makemytrip.com/refunds/tracking
                          </div>
                        </div>

                        {/* Dashboard UI */}
                        <div className="p-4 bg-gradient-to-br from-gray-50 to-white h-full overflow-hidden flex flex-col">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h2 
                                className="text-lg font-bold text-gray-900 mb-0.5"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                              >
                                Refund Tracker
                              </h2>
                              <p className="text-[11px] text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Real-time refund status monitoring
                              </p>
                            </div>
                            <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-semibold border border-emerald-200">
                              ● Live Tracking
                            </div>
                          </div>

                          {/* Progress Card */}
                          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-3">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <div className="text-[11px] font-semibold text-gray-700 mb-0.5">Booking Reference</div>
                                <div className="text-xs text-gray-500">#NF28476 • DEL → BOM</div>
                              </div>
                              <div className="text-right">
                                <div className="text-[11px] text-gray-500 mb-0.5">Initiated</div>
                                <div className="text-xs font-semibold text-gray-700">Mar 8, 2026</div>
                              </div>
                            </div>

                            {/* Progress Timeline */}
                            <div className="relative mb-3">
                              <div className="absolute top-3.5 left-3 right-3 h-[2px] bg-gray-200"></div>
                              <div className="absolute top-3.5 left-3 w-[45%] h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                              
                              <div className="relative flex justify-between">
                                {[
                                  { label: 'Requested', status: 'complete', icon: '✓' },
                                  { label: 'Processing', status: 'active', icon: '2' },
                                  { label: 'Approved', status: 'pending', icon: '3' },
                                  { label: 'Credited', status: 'pending', icon: '4' }
                                ].map((step, i) => (
                                  <div key={i} className="flex flex-col items-center gap-1.5 z-10">
                                    <div 
                                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                                        step.status === 'complete' 
                                          ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30' :
                                        step.status === 'active' 
                                          ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/30 animate-pulse' :
                                        'bg-gray-100 text-gray-400 border-2 border-gray-200'
                                      }`}
                                    >
                                      {step.icon}
                                    </div>
                                    <div className="text-[10px] font-medium text-gray-600 whitespace-nowrap">
                                      {step.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* ETA Box */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm shrink-0">
                                  ⏱
                                </div>
                                <div className="flex-1">
                                  <div className="text-[11px] font-semibold text-blue-900">Expected Completion</div>
                                  <div className="text-[11px] text-blue-700">3-5 business days</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-xl border border-gray-200 p-3">
                              <div className="text-[11px] text-gray-500 mb-1">Refund Amount</div>
                              <div className="text-base font-bold text-gray-900">₹4,850</div>
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200 p-3">
                              <div className="text-[11px] text-gray-500 mb-1">Method</div>
                              <div className="text-sm font-semibold text-gray-700">Original Payment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screen shine */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
                      }}
                    />
                  </div>

                  {/* Laptop base */}
                  <div 
                    className="relative w-[110%] -ml-[5%] h-5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-b-xl"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Laptop shadow */}
                  <div 
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-12 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
                    }}
                  />
                </div>

                {/* iPhone - overlapping bottom-right of laptop */}
                <div 
                  className="absolute right-24 bottom-4 z-50 translate-x-[30%]"
                  style={{
                    transform: 'translateX(28%) translateZ(200px) rotateY(-10deg) rotateZ(3deg)',
                    transformStyle: 'preserve-3d',
                    animation: 'float 4s ease-in-out infinite',
                  }}
                >
                  {/* Phone glow */}
                  <div 
                    className="absolute inset-0 rounded-[2.5rem] blur-[50px] scale-110"
                    style={{
                      background: 'radial-gradient(circle, rgba(232, 30, 37, 0.4) 0%, transparent 70%)',
                    }}
                  />

                  {/* Phone frame */}
                  <div 
                    className="relative w-[180px] h-[360px] rounded-[2.5rem] overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: `
                        0 30px 60px rgba(0, 0, 0, 0.5),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        0 0 0 1px rgba(0, 0, 0, 0.3)
                      `,
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-3xl z-20">
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-900 rounded-full" />
                      <div className="absolute top-1.5 right-5 w-1.5 h-1.5 bg-gray-800 rounded-full" />
                    </div>

                    {/* Screen */}
                    <div className="absolute inset-2.5 rounded-[2rem] overflow-hidden bg-white">
                      {/* Status bar would go here */}
                      
                      {/* App header */}
                      <div 
                        className="pt-6 pb-4 px-4"
                        style={{
                          background: 'linear-gradient(135deg, #E31E25 0%, #C11119 100%)',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur" />
                            <span className="text-white text-[10px] font-bold tracking-tight">MakeMyTrip</span>
                          </div>
                          <div className="text-white/90 text-[9px] font-medium">✈ My Trips</div>
                        </div>
                      </div>

                      {/* App body */}
                      <div className="p-3 space-y-3 bg-gray-50 h-full">
                        {/* Flight card */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-3 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[7px] font-bold text-blue-600 uppercase tracking-wide">Flight · One Way</span>
                            <span className="text-[7px] text-gray-400 font-medium">#NF28476</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <div className="text-[11px] font-black text-gray-900">DEL</div>
                              <div className="text-[7px] text-gray-500">New Delhi</div>
                            </div>
                            <div className="flex-1 text-center">
                              <div className="text-[8px] text-gray-300 mb-0.5">✈</div>
                              <div className="text-[6px] text-gray-400">2h 10m</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[11px] font-black text-gray-900">BOM</div>
                              <div className="text-[7px] text-gray-500">Mumbai</div>
                            </div>
                          </div>
                        </div>

                        {/* Status card */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[8px] font-black text-emerald-900">Processing Refund</span>
                          </div>
                          <p className="text-[7px] text-gray-600 mb-3">Your refund is on track</p>
                          
                          {/* Mini progress */}
                          <div className="bg-white/80 backdrop-blur rounded-lg p-2.5 border border-emerald-100">
                            <div className="flex justify-between mb-2">
                              {[1, 2, 3, 4].map((i) => (
                                <div 
                                  key={i} 
                                  className={`w-2 h-2 rounded-full ${
                                    i <= 2 
                                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500' 
                                      : 'bg-gray-200'
                                  }`} 
                                />
                              ))}
                            </div>
                            <div className="text-[7px] text-emerald-700 font-semibold">Step 2 of 4 Complete</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <button 
                          className="w-full text-white text-[8px] font-bold py-3 rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, #E31E25 0%, #C11119 100%)',
                            boxShadow: '0 4px 12px rgba(232, 30, 37, 0.3)',
                          }}
                        >
                          View Full Details
                        </button>
                      </div>
                    </div>

                    {/* Screen shine */}
                    <div 
                      className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
                      }}
                    />
                  </div>
                </div>
                             
              </div>
            </div>
          </div>
        </div>
        {/* Footer bar */}
        <div className="relative border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Animated scroll indicator */}
              <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
                {/* Mouse icon */}
                <div 
                  className="relative w-5 h-8 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300 flex justify-center pt-1.5"
                >
                  {/* Scroll wheel dot */}
                  <div 
                    className="w-0.5 h-1.5 bg-white/50 group-hover:bg-white/80 rounded-full transition-colors duration-300"
                    style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }}
                  />
                </div>
                {/* Chevrons */}
                <div className="flex flex-col gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <svg
                      key={i}
                      width="10" height="6" viewBox="0 0 10 6"
                      className="text-white/30 group-hover:text-white/60 transition-colors duration-300"
                      style={{ animation: `chevronFade 1.5s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
                <span 
                  className="text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Scroll to explore
                </span>
              </div>

              <div className="flex gap-10">
                {[
                  ["Platform", "iOS · Android · Web"],
                  ["Domain", "Travel Tech"],
                  ["Timeline", "2 Weeks"],
                ].map(([k, v]) => (
                  <div key={k} className="text-center">
                    <div 
                      className="text-white/30 text-[9px] uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {k}
                    </div>
                    <div 
                      className="text-white/70 text-xs font-semibold"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
