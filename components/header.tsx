'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnhancedLogo } from '@/components/enhanced-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '/resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }
    
    if (pathname !== '/') {
      router.push('/' + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-primary/5'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <EnhancedLogo onClick={() => handleNavigation('#home')} />
            <h1 className="text-xl font-bold font-poppins text-white hover:text-primary transition-colors duration-300 cursor-pointer" onClick={() => handleNavigation('#home')}>
              Khyber Kamawal
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="relative px-4 py-2 text-muted-foreground hover:text-white transition-all duration-300 font-medium rounded-full hover:bg-white/5 group"
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              onClick={() => handleNavigation('#contact')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-primary-glow"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-white/10 text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Dark Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <div 
              className="md:hidden fixed inset-0 top-16 bg-black/90 backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-border/20 shadow-lg z-50">
              <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4">
                  <Button
                    onClick={() => handleNavigation('#contact')}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 btn-primary-glow"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
