import { Instagram, MessageCircle, Phone } from 'lucide-react';

export function ContactSection() {
  const whatsappMessage = encodeURIComponent('Hi Tratree, I\'m interested in booking a trip!');
  const whatsappUrl = `https://wa.me/919526936172?text=${whatsappMessage}`;

  return (
    <section className="bg-[#0b0f0b] py-20 md:py-32" data-theme-section="dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h5 className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
          Get In Touch
        </h5>

        <h2 className="text-[#E5F242] text-4xl md:text-[64px] font-medium leading-[1.1] uppercase mb-10" style={{ fontFamily: 'var(--font-instrument-sans)' }}>
          Start your
          {' '}
          <span className="font-normal italic lowercase" style={{ fontFamily: 'var(--font-instrument-serif)' }}>journey</span>
          <br />
          with us
        </h2>

        <div className="w-16 h-[1px] bg-white/10 mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/tratreeofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E5F242] group-hover:text-[#E5F242] transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-sm md:text-base">Instagram</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E5F242] group-hover:text-[#E5F242] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-sm md:text-base">WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919526936172"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E5F242] group-hover:text-[#E5F242] transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm md:text-base">+91 9526936172</span>
          </a>
        </div>

      </div>
    </section>
  );
}
