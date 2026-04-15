import { AlertDialogProvider } from '@/components/ui/extended/alert-dialog-provider';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlProvider } from '@/providers/next-intl-provider';
import { ReactQueryProvider } from '@/providers/react-query-provider';
import { Metadata } from 'next';
import { getLocale, getMessages, getNow, getTimeZone } from 'next-intl/server';
import { instrumentSans, instrumentSerif, inter, manrope, sourceSerif4 } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRATREE | Travel Company',
  description: 'Holiday package | Resort & bus booking | Students & Family Package • Contact For International & Couples Package wa.me/919526936172',
  keywords: 'TRATREE, Travel Company, Holiday package, Resort booking, bus booking, Students Package, Family Package, International Package, Couples Package',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'TRATREE | Travel Company',
    description: 'Holiday package | Resort & bus booking | Students & Family Package • Contact For International & Couples Package wa.me/919526936172',
    type: 'website',
    siteName: 'TRATREE',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const now = await getNow();
  const timeZone = await getTimeZone();
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif4.variable} ${instrumentSerif.variable} ${manrope.variable} ${instrumentSans.variable} min-h-screen font-sans antialiased`}>
        <ReactQueryProvider>
          <NextIntlProvider locale={locale} messages={messages} now={now} timeZone={timeZone}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AlertDialogProvider>
                {children}
              </AlertDialogProvider>
            </ThemeProvider>
          </NextIntlProvider>
          <Toaster />
          <SonnerToaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
