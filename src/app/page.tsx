'use client';

import { ContactSection } from '@/components/ContactSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { VacationSection } from '@/components/VacationSection';
import { VideoBackground } from '@/components/VideoBackground';
import { WondersSection } from '@/components/WondersSection';
import { ReactLenis } from 'lenis/react';

export default function Home() {
  const heroVideoUrl = 'https://stream.mux.com/02gzwandixH4J534bd00JsCvlFfw6ha101WQ00C9b3sGibM.m3u8';
  const heroPosterUrl = 'https://image.mux.com/02gzwandixH4J534bd00JsCvlFfw6ha101WQ00C9b3sGibM/thumbnail.jpg?time=1';

  return (
    <ReactLenis root>
      <main className="bg-[#0b0f0b] w-full min-h-screen">
        {/* Hero Container */}
        <div className="relative h-screen w-full overflow-hidden transform-gpu bg-black">
          {/* Video Background */}
          <VideoBackground posterUrl={heroPosterUrl} url={heroVideoUrl} />

          {/* Bottom Fade Mask to blend smoothly into WondersSection */}
          <div className="absolute bottom-0 left-0 w-full h-32 md:h-56 bg-gradient-to-t from-[#0b0f0b] to-transparent z-20 pointer-events-none transform-gpu"></div>

          {/* Navigation */}
          <nav className="absolute top-[20px] left-1/2 -translate-x-1/2 w-full max-w-[1110px] px-6 z-50 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {/* <img
                src="/logo/tratree-dark.png"
                alt="Tratree Logo"
                className="h-[44px] w-auto object-contain"
              /> */}
            </div>

            {/* Center Links (hidden on mobile) */}
            {/* <div className="hidden md:flex items-center gap-4 lg:gap-[26px]">
              {['Product', 'How it works', 'Pricing', 'Customers', 'Docs'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[18px] font-medium leading-none hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: 'var(--font-manrope)',
                    background: 'linear-gradient(to right, rgba(37,44,50,0.7), rgba(55,65,74,0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {link}
                </a>
              ))}
            </div> */}

            {/* Login Button */}
            {/* <button
              className="w-[108px] h-[46px] rounded-[12px] flex items-center justify-center bg-white border border-[#dde2e4] hover:bg-[#f8f9fa] transition-colors text-[18px] text-[#212121] font-medium"
              style={{ fontFamily: 'var(--font-instrument-sans)' }}
            >
              Login
            </button> */}
          </nav>

          {/* Hero Content */}

          <div
            className="absolute left-1/2 top-[calc(50%-136.5px)] -translate-x-1/2 -translate-y-1/2 w-full max-w-[984px] px-[24px] flex flex-col items-center text-center z-10"
          >
            <div className="py-3 hidden md:block">
              <img
                src="/logo/tratree-dark.png"
                alt="Tratree Logo"
                className="h-[74px] w-auto object-contain"
              />
            </div>
            <div className="py-3 md:hidden">
              <img
                src="/logo/tratree-dark-2.png"
                alt="Tratree Logo"
                className="h-[84px] w-auto object-contain"
              />
            </div>
            {/* Headline */}
            <h1
              className="text-[48px] md:text-[70px] text-[#e0e0e0] leading-[1.1] md:leading-[64px] max-w-[722px] opacity-90"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Find your path and explore
              {' '}
              {' '}
              <span
                className="italic text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'radial-gradient(circle at 60% 40%, #368CFB 0%, #5CAEFE 30%, #85BDE0 47.5%, #AECDC2 65%, #D6DCA3 82.5%, #FFEB85 100%)',
                }}
              >
                beyond the usual.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-[14px] md:mt-[22px] text-[18px] md:text-[20px] max-w-[510px] opacity-70 tracking-[-0.4px] text-gray-300"
              style={{
                fontFamily: 'var(--font-manrope)',
              }}
            >
              Plan less. Experience more with Tratree.
            </p>

          </div>
        </div>

        {/* New Sections */}
        <WondersSection />
        <ExperienceSection />
        <VacationSection />
        <ContactSection />
      </main>
    </ReactLenis>
  );
}
