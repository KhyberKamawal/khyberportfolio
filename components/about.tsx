'use client';

import { useEffect, useRef, useState } from 'react';
import { Code, Zap, Users, Award, Calendar, Trophy, Star, Brain, Database, Server, Smartphone, GitBranch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useCounterAnimation } from '@/hooks/use-counter-animation';

const About = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Counter animations
  const projectsCount = useCounterAnimation(12, isMobile ? 1000 : 2000, isIntersecting);
  const experienceYears = useCounterAnimation(3, isMobile ? 1000 : 2000, isIntersecting);
  const clientsServed = useCounterAnimation(8, isMobile ? 1000 : 2000, isIntersecting);

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'Proficient in React.js, Node.js, MongoDB, Express.js, and Python for end-to-end development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Specialized in LSTM/BiLSTM NLP applications, chatbots, and intelligent automation solutions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expertise in MongoDB, SQL, and database optimization techniques',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js and Express',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with React Native',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      description: 'Proficient in Git, Docker, and deployment strategies',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  const achievements = [
    { icon: Trophy, label: 'Projects Completed', value: projectsCount, suffix: '+' },
    { icon: Calendar, label: 'Years of Experience', value: experienceYears, suffix: '+' },
    { icon: Star, label: 'Clients Served', value: clientsServed, suffix: '+' }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Started Programming Journey',
      description: 'Began learning C++ , Java , web development with HTML, CSS, and JavaScript',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      description: 'Mastered React.js, Node.js, and MongoDB for complete web solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      title: 'AI & Machine Learning',
      description: 'Specialized in LSTM/BiLSTM neural networks and NLP applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Business Systems Expert',
      description: 'Developed comprehensive HR management and payroll systems',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2025',
      title: 'Developer of SmartCalc Tools',
      description: 'Creator of a comprehensive finance & math calculator app',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2025',
      title: 'Hopepath Technology',
      description: 'Founded and lead a tech-driven company delivering cutting-edge web and mobile application solutions for clients worldwide.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Radial Progress Component for achievements
  interface RadialProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    delay?: number;
  }

  const RadialProgress = ({ percentage, size = 100, strokeWidth = 8, delay = 0 }: RadialProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted/20"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ transitionDelay: `${delay}ms` }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
    );
  };

  return (
    <section id="about" ref={sectionRef} className="py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">👨‍💻</span>
              <span className="text-3xl">🚀</span>
              <span className="text-3xl">🌟</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a mission to create innovative solutions that make a difference
            </p>
          </div>

          {/* Achievement Counters */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 transition-all duration-700 delay-150 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-400 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-4 md:mb-6">
                    
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 md:mb-3">
                    {achievement.value}{achievement.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Content */}
            <div className={`space-y-6 md:space-y-8 transition-all duration-700 delay-300 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Introduction */}
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-xl text-white">💻</span>
                    </div>
                    <h3 className="text-xl font-semibold font-poppins bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      Crafting Digital Excellence
                    </h3>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    <p>
                      I'm a versatile full-stack developer with a passion for creating innovative web and mobile applications. 
                      My expertise spans across modern technologies including React.js, Node.js, MongoDB, Express.js, and Python, 
                      allowing me to build comprehensive solutions from concept to launch.
                    </p>
                    <p>
                      What sets me apart is my specialization in AI and automation technologies. I've developed sophisticated 
                      chatbots using LSTM and BiLSTM neural networks, created intelligent business systems, and built 
                      comprehensive platforms for various industries including tourism and human resources management.
                    </p>
                    <p>
                      My approach combines technical excellence with user-centered design, ensuring that every project 
                      not only meets functional requirements but also delivers an exceptional user experience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white text-sm md:text-base">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold">Core Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {[
                      { name: 'React.js', icon: '⚛️' },
                      { name: 'Node.js', icon: '🟢' },
                      { name: 'MongoDB', icon: '🍃' },
                      { name: 'Python', icon: '🐍' },
                      { name: 'Express.js', icon: '🚀' },
                      { name: 'AI/ML', icon: '🤖' },
                      { name: 'TypeScript', icon: '📘' },
                      { name: 'Next.js', icon: '▲' }
                    ].map((tech, index) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-primary rounded-full text-xs md:text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-xs md:text-sm">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Programming Languages */}
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-white text-sm md:text-base">👨‍💻</span>
                    </div>
                    <h3 className="text-lg font-semibold">Programming Languages</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                    {[
                      { name: 'Python', icon: '🐍', color: 'from-green-500 to-blue-500' },
                      { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-orange-500' },
                      { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600' },
                      { name: 'C++', icon: '🔧', color: 'from-blue-600 to-purple-600' }
                    ].map((lang, index) => (
                      <div
                        key={lang.name}
                        className={`flex flex-col items-center p-3 md:p-4 bg-gradient-to-r ${lang.color} rounded-lg text-white hover:scale-105 transition-all duration-300 cursor-default shadow-lg`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <span className="text-xl md:text-2xl mb-1 md:mb-2">{lang.icon}</span>
                        <span className="text-xs md:text-sm font-medium">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {highlights.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className={`transition-all duration-700 delay-500 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 justify-center mb-6 md:mb-8">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-sm md:text-base">📈</span>
                    </div>
                    <h3 className="text-xl font-semibold font-poppins">My Journey</h3>
                  </div>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
                    
                    <div className="space-y-6 md:space-y-8">
                      {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-start space-x-4 md:space-x-6">
                          {/* Timeline dot */}
                          <div className={`relative z-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <span className="text-xs">{item.year.slice(-2)}</span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 pb-6 md:pb-8 min-w-0">
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                              <div className="flex items-center space-x-2 mb-1 md:mb-2">
                                <span className="text-xs md:text-sm font-medium text-muted-foreground">{item.year}</span>
                                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                              </div>
                              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;