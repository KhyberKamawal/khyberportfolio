'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ScrollProgress } from '@/components/scroll-progress';
import { FloatingHireButton } from '@/components/floating-hire-button';
import { Toaster } from 'sonner';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingHireButton />
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
    </div>
  );
}