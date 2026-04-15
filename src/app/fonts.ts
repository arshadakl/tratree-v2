import { Instrument_Sans, Instrument_Serif, Inter, Manrope, Source_Serif_4 } from 'next/font/google';

export const sourceSerif4 = Source_Serif_4({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-source',
});

export const inter = Inter({
  weight: ['100', '200', '400', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

export const manrope = Manrope({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});
