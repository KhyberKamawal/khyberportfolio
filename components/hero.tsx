'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/use-typewriter';
import { AnimatedBackground } from '@/components/animated-background';
import Image from 'next/image';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const roles = [
    'Full-Stack Developer',
    'AI Specialist',
    'Business Systems Expert',
    'Tourism Platform Developer',
  ];

  const currentRole = useTypewriter(roles, 100, 50, 2000);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { text: '</>', color: 'text-purple-600', size: 'text-xl' },
    { text: '{ }', color: 'text-orange-500', size: 'text-xl' },
    { text: 'console', color: 'text-green-600', size: 'text-sm' },
    { text: '⚛️', color: 'text-blue-500', size: 'text-2xl' },
    { text: 'import', color: 'text-yellow-500', size: 'text-base' },
    { text: 'def', color: 'text-pink-500', size: 'text-base' },
    { text: 'class', color: 'text-indigo-500', size: 'text-base' },
    { text: 'return', color: 'text-red-500', size: 'text-base' },
    { text: '🐍', color: 'text-yellow-500', size: 'text-2xl' },
    { text: '☕', color: 'text-pink-500', size: 'text-xl' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-purple-50/80 dark:from-blue-950/40 dark:via-transparent dark:to-purple-950/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`text-center lg:text-left space-y-8 transition-all duration-1000 mt-8 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-muted-foreground animate-fade-in">
                <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                <span className="animate-fade-in font-medium">Hello, I'm</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Khyber Kamawal
                </span>
              </h1>

              {/* Typewriter Effect */}
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  <span className="inline-block min-w-0">
                    {currentRole}
                    <span className="animate-pulse text-blue-600">|</span>
                  </span>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  "Turning Ideas into Reality with Code & Creativity"
                </p>
              </div>

              <p
                className={`text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                Versatile developer specializing in web/mobile applications, automation, and AI
                chatbots. I bring ideas to life with cutting-edge technology and full-stack expertise
                from concept to launch.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="group bg-primary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full btn-primary-glow"
              >
                <span className="mr-2">View My Work</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full"
              >
                <a
                  href="/Khyber-CV.pdf"
                  download="Khyber-CV.pdf"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {[
                { icon: Github, href: '#', color: 'hover:bg-gray-900 hover:text-white' },
                { icon: Linkedin, href: '#', color: 'hover:bg-blue-600 hover:text-white' },
                { icon: Mail, href: '#contact', color: 'hover:bg-green-600 hover:text-white' },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`group w-12 h-12 rounded-full border-2 border-muted-foreground/20 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  onClick={() =>
                    social.href.startsWith('#')
                      ? scrollToSection(social.href)
                      : window.open(social.href, '_blank')
                  }
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
              ))}
            </div>
          </div>

            {/* Profile Image with Floating Emojis */}
          <div
            className={`flex justify-center lg:justify-center relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20 dark:shadow-purple-600/10">
              <Image
                src="/Khyber.jpeg"
                alt="Khyber Kamawal"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
              />
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/40 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('#about')}
            className="group rounded-full animate-bounce hover:animate-none"
          >
            <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">Scroll to explore</p>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
