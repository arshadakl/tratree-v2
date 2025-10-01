'use client';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold hover:text-primary transition-colors">ELT Next 15</h1>
          <ModeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t('title')}
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Modern Next.js Boilerplate with Amazing Features
          </p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="p-6 rounded-xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">
                  Feature
                  {item}
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us and start building amazing applications today
          </p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
            Start Building
          </button>
        </div>
      </section>
    </div>
  );
}
