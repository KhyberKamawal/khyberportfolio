'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Server, 
  GitBranch,
  Palette,
  Cloud
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Skills = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 93 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'RESTful APIs', level: 93 },
        { name: 'PHP', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'SQL', level: 88 },
        { name: 'Mongoose', level: 88 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'LSTM/BiLSTM', level: 85 },
        { name: 'NLP', level: 82 },
        { name: 'TensorFlow', level: 78 },
        { name: 'Chatbot Development', level: 90 },
        { name: 'OpenAI API', level: 88 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Progressive Web Apps', level: 88 },
        { name: 'Mobile UI/UX', level: 82 },
        { name: 'App Store Deployment', level: 80 },
        { name: 'Cross-platform', level: 85 }
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      gradient: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'Git/GitHub', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'CI/CD', level: 78 }
    
      ]
    }
  ];

  // Radial Progress Component
  const RadialProgress = ({ percentage, size = 120, strokeWidth = 8, delay = 0 }: {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    delay?: number;
  }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    useEffect(() => {
      if (isIntersecting) {
        const timer = setTimeout(() => {
          setAnimatedPercentage(percentage);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isIntersecting, percentage, delay]);

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle */}
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
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <span className="text-3xl">🛠️</span>
              <span className="text-3xl">⚡</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg animate-fade-in`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Top Skills with Radial Progress */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.slice(0, 2).map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-center">
                        <RadialProgress 
                          percentage={skill.level} 
                          size={80} 
                          strokeWidth={6}
                          delay={categoryIndex * 150 + skillIndex * 100}
                        />
                        <p className="text-sm font-medium mt-2">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Remaining Skills as List */}
                  <div className="space-y-3">
                    {category.skills.slice(2).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                              style={{ 
                                width: isIntersecting ? `${skill.level}%` : '0%',
                                transitionDelay: `${categoryIndex * 150 + skillIndex * 100}ms`
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-primary min-w-[2rem]">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Agile/Scrum', 'Test-Driven Development', 'Code Review', 'Performance Optimization',
                'SEO', 'Accessibility', 'Security Best Practices', 'API Design', 'System Architecture',
                'Project Management', 'Technical Writing', 'Mentoring'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default hover:shadow-lg animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;