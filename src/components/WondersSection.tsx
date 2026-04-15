import React from 'react';

export function WondersSection() {
  const cards = [
    {
      tag: "MOUNTAINS",
      title: "Camel Hill",
      desc: "Majestic peaks rising above the clouds",
      img: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=700"
    },
    {
      tag: "FORESTS",
      title: "Havana Street",
      desc: "Ancient paths through timeless woodland",
      img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=700"
    },
    {
      tag: "WILDLIFE",
      title: "Khung Savanna",
      desc: "Breathtaking encounters with wild nature",
      img: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=700"
    },
    {
      tag: "CANYONS",
      title: "Red Mountain",
      desc: "Dramatic red rock formations at sunset",
      img: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=700"
    }
  ];

  return (
    <section className="bg-[#0b0f0b] py-20 md:py-32" data-theme-section="dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/5 pb-10 mb-12">
          <div>
            <h5 className="text-[#E5F242] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>
              Destinations
            </h5>
            <h2 className="text-[#E5F242] text-4xl md:text-6xl font-medium leading-[1.1] uppercase" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
              Explore the Wonders<br/>of the World
            </h2>
          </div>
          <div className="flex items-center gap-6 max-w-sm">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-manrope)' }}>
              We seek to bring you the most authentic travel experiences from around the globe.
            </p>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 hover:bg-white/5 transition-colors">
              <svg className="w-4 h-4 text-[#E5F242]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/30 cursor-pointer">
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-overlay md:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 flex flex-col items-start gap-3 w-full">
                <span className="bg-[#E5F242] text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {card.tag}
                </span>
                <h4 className="text-[#E5F242] text-lg md:text-xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
                  {card.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
