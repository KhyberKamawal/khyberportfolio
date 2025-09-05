'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Eye, Code2, Sparkles, Brain, Building, MapPin, Wrench, Globe, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { projectsData } from '@/data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', label: 'AI & Chatbots', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'business', label: 'Business Systems', icon: Building, color: 'from-green-500 to-emerald-500' },
    { id: 'tourism', label: 'Tourism Platforms', icon: MapPin, color: 'from-orange-500 to-red-500' },
    { id: 'utility', label: 'Utility Tools', icon: Wrench, color: 'from-indigo-500 to-purple-500' },
    { id: 'web', label: 'Web Applications', icon: Globe, color: 'from-teal-500 to-blue-500' }
  ];

  // Updated AI-generated image URLs for each category (more distinctive)
const categoryImages: Record<Project["category"] | "default", string> = {
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop",
  business: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop",
  tourism: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=500&auto=format&fit=crop",
  utility: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=500&auto=format&fit=crop",
  web: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
};


  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
    setVisibleProjects(6);
  }, [activeFilter]);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Project Modal Component
  type Project = {
    id: string;
    title: string;
    description: string;
    category: string;
    image?: string;
    technologies: string[];
    completionDate: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    icon?: React.ReactNode;
  };

  const ProjectModal = ({ project }: { project: Project }) => {
    const category = categories.find(c => c.id === project.category);
    
    return (
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category?.color || 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
              <span className="text-xl">{project.icon}</span>
            </div>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-6">
          {/* Project Preview */}
          <div className="aspect-video rounded-lg overflow-hidden relative">
            <img 
              src={project.image || categoryImages[project.category] || categoryImages.default}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="flex gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/90 text-black backdrop-blur-sm">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Project Details</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-medium capitalize">{project.category}</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Completion</p>
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-2">Project Links</h3>
                <div className="flex flex-col gap-3">
                  {project.demoUrl && (
                    <Button asChild className="w-full gap-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="w-full gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    );
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <span className="text-3xl">💼</span>
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative projects spanning AI solutions, business systems, and modern web applications
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="flex flex-wrap h-auto p-1 bg-muted/50 rounded-xl w-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`flex-1 whitespace-nowrap rounded-lg py-3 text-sm font-medium transition-all duration-300 data-[state=active]:shadow-lg ${activeFilter === category.id ? `bg-gradient-to-r ${category.color} text-white` : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => {
              const category = categories.find(c => c.id === project.category);
              const projectImage = project.image || categoryImages[project.category] || categoryImages.default;
              
              return (
                <Card 
                  key={project.id} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-md animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={projectImage} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              className="rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-white shadow-lg"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          {selectedProject && <ProjectModal project={selectedProject} />}
                        </Dialog>
                        
                        {project.demoUrl && (
                          <Button 
                            size="sm" 
                            asChild 
                            className="rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-white shadow-lg"
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        
                        {project.githubUrl && (
                          <Button 
                            size="sm" 
                            asChild 
                            className="rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-white shadow-lg"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className={`bg-gradient-to-r ${category?.color || 'from-blue-500 to-cyan-500'} text-white border-0 text-xs py-1 px-2 rounded-full`}>
                        {category?.label || project.category}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs py-1 px-2 rounded-full">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {project.completionDate}
                    </span>
                    <div className="flex gap-1">
                      {project.demoUrl && (
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-muted/50 rounded-2xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Filter className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">Try selecting a different category</p>
                <Button onClick={() => setActiveFilter('all')}>
                  View All Projects
                </Button>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className={`text-center transition-all duration-1000 delay-400 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                onClick={loadMoreProjects}
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full px-8"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Load More Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-800/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;