import React from 'react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Tried & Trusted",
      desc: "Thousands of happy travellers trust us for safe, smooth, and memorable journeys. Your satisfaction is our priority always.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: "Reliable Support",
      desc: "We are always here for you. Reach out anytime via phone, WhatsApp, or chat before, during, and after your trip.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 18v-6a9 9 0 0118 0v6" />
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      )
    },
    {
      title: "One-Stop Travel Partner",
      desc: "From planning to booking, stays to transport, everything handled in one place for a completely hassle-free experience.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0b0f0b] py-20 md:py-32" data-theme-section="dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h5 className="text-[#E5F242] text-xs md:text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            The Tratree Experience
          </h5>
          <h2 className="text-[#E5F242] text-3xl md:text-5xl font-medium tracking-wide uppercase" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
            Why Travel With Tratree
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/10 border-2 border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-16 gap-y-12 md:gap-y-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col items-start px-4 md:px-8 first:pl-0 md:first:pl-4 last:pr-0 md:last:pr-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center mb-8 shrink-0">
                <div className="w-5 h-5 md:w-6 md:h-6 text-[#E5F242]">
                  {exp.icon}
                </div>
              </div>
              <h3 className="text-[#E5F242] text-lg md:text-xl font-medium uppercase tracking-wide mb-4" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
                {exp.title}
              </h3>
              <p className="text-gray-400 text-sm leading-loose" style={{ fontFamily: 'var(--font-manrope)' }}>
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
