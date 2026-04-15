
export function VacationSection() {
   const whatsappMessage = encodeURIComponent("Hi Tratree, I'm interested in booking a trip!");
  const whatsappUrl = `https://wa.me/919526936172?text=${whatsappMessage}`;
  return (
    <section className="bg-[#0b0f0b] py-20 md:py-32" data-theme-section="dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Mosaic Images */}
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[600px] w-full">
            <div className="relative rounded-2xl overflow-hidden row-span-2 h-full w-full bg-white/5">
              <img 
                src="https://images.pexels.com/photos/12167045/pexels-photo-12167045.jpeg?auto=compress&cs=tinysrgb&w=700" 
                alt="Mountain valley"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-full w-full bg-white/5">
              <img 
                src="https://images.pexels.com/photos/32584961/pexels-photo-32584961.jpeg?auto=compress&cs=tinysrgb&w=700" 
                alt="River mountain"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-full w-full bg-white/5">
              <img 
                src="https://images.pexels.com/photos/34021102/pexels-photo-34021102.jpeg?auto=compress&cs=tinysrgb&w=700" 
                alt="Lake landscape"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start">
            <h5 className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
              Curated Experiences
            </h5>
            <h2 className="text-[#E5F242] text-4xl md:text-[64px] font-medium leading-[1.1] uppercase mb-10" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
              What makes a<br/>
              vacation <span className="font-normal italic lowercase" style={{ fontFamily: 'var(--font-instrument-serif)' }}>perfect</span><br/>
              for you
            </h2>
            <div className="w-16 h-[1px] bg-white/10 mb-8"></div>
            <p className="text-gray-400 text-sm md:text-sm leading-loose mb-10 max-w-lg" style={{ fontFamily: 'var(--font-manrope)' }}>
              Whether you are planning a family getaway, a relaxing weekend escape, or an
              adventurous excursion, Tratree finds the perfect fit. From charming mountain
              cabins to lakeside lodges, every stay is handpicked for you.
            </p>
            <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E5F242] text-black text-xs md:text-sm font-bold uppercase tracking-widest px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white transition-colors"
          style={{ fontFamily: 'var(--font-instrument-sans)' }}
        >
          Book Now
        </a>
          </div>

        </div>
      </div>
    </section>
  );
}
