'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Github, Linkedin, MapPin, Globe, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ResumePage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Button */}
        <div>
           <Link href="/">
             <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Back to Portfolio
             </Button>
           </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8">
          <div>
            <h1 className="text-4xl font-bold font-poppins">Khyber Kamawal</h1>
            <p className="text-xl text-muted-foreground mt-2">Full Stack Developer & AI Specialist</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>Khyberk460@gmail.com</span> 
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>E-11/2 markaz, Islamabad</span>
              </div>
               <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <Link href="/" className="hover:underline">Portfolio Website</Link>
              </div>
            </div>
          </div>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <a href="/Khyber-CV.pdf" download="Khyber-CV.pdf">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>

        {/* Professional Summary */}
        <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Versatile developer specializing in web/mobile applications, automation, and AI chatbots.
              Proficient in React.js, Node.js, MongoDB, Express.js, and Python.
              Passionate about turning ideas into reality with cutting-edge technology and full-stack expertise from concept to launch.
            </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-3">Work Experience</h2>
          <div className="space-y-8">
            <div className="relative border-l border-muted ml-3 pl-8 pb-2">
               <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Founder & Lead Developer</h3>
                  <p className="text-primary font-medium">Hopepath Technology</p>
                </div>
                <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">2025 - Present</Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                Founded and lead a tech-driven company delivering cutting-edge web and mobile application solutions for clients worldwide.
              </p>
            </div>
            
            <div className="relative border-l border-muted ml-3 pl-8 pb-2">
               <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted-foreground" />
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Full Stack Developer & IT Support Officer</h3>
                  <p className="text-primary font-medium">Akramzada International</p>
                </div>
                <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">Feb 2024 - 2025</Badge>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground text-sm space-y-1">
                <li>Full-stack development and maintenance of internal systems and databases.</li>
                <li>Provision of IT support for virtual meetings, digital communications, and remote coordination.</li>
                <li>Delivery of technical assistance for international coordination sessions and stakeholder communications.</li>
                <li>Data management, assessment reporting, and documentation support.</li>
                <li>Provision of IT and reporting assistance across multiple operational departments.</li>
              </ul>
            </div>

            <div className="relative border-l border-muted ml-3 pl-8 pb-2">
               <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted-foreground" />
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Full Stack Developer</h3>
                  <p className="text-primary font-medium">Freelance / Independent</p>
                </div>
                <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">2024 - 2025</Badge>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground text-sm space-y-1">
                <li>Developed comprehensive HR management and payroll systems for business efficiency.</li>
                <li>Created SmartCalc Tools, a comprehensive finance and math calculator app.</li>
                <li>Built AI-powered chatbot solutions using LSTM/BiLSTM neural networks.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
           <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-3 text-white">Technical Skills</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white">Frontend Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {['React.js',  'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'].map(skill => (
                                <Badge key={skill} variant="outline" className="bg-secondary/50 border-border text-muted-foreground hover:text-white hover:border-primary/50 transition-colors">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white">Backend & Database</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'Supabase'].map(skill => (
                                <Badge key={skill} variant="outline" className="bg-secondary/50 border-border text-muted-foreground hover:text-white hover:border-primary/50 transition-colors">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-card border-border shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white">AI & Data Science</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {['Machine Learning', 'NLP', 'LSTM/BiLSTM', 'NumPy'].map(skill => (
                                <Badge key={skill} variant="outline" className="bg-secondary/50 border-border text-muted-foreground hover:text-white hover:border-primary/50 transition-colors">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-card border-border shadow-md">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white">Tools & DevOps</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Vercel/Netlify'].map(skill => (
                                <Badge key={skill} variant="outline" className="bg-secondary/50 border-border text-muted-foreground hover:text-white hover:border-primary/50 transition-colors">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
             </div>
        </section>

        {/* Projects */}
         <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-3">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
             <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-white">Smart Calculator Tools</CardTitle>
                        <Badge>2025</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">A modern calculator application with multiple functionalities including scientific, BMI, and loan calculators.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono text-primary">React.js</span>
                        <span className="text-xs font-mono text-primary">TypeScript</span>
                        <span className="text-xs font-mono text-primary">Tailwind</span>
                    </div>
                </CardContent>
             </Card>
             
             <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-white">AI Chatbot Platform</CardTitle>
                        <Badge>2025</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Intelligent chatbot solution powered by machine learning for natural conversations and customer support.</p>
                     <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono text-primary">Python</span>
                        <span className="text-xs font-mono text-primary">TensorFlow</span>
                        <span className="text-xs font-mono text-primary">React</span>
                    </div>
                </CardContent>
             </Card>

             <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-white">Smart Travel Checklist</CardTitle>
                         <Badge>2025</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">A smart and customizable checklist app designed for travelers to plan, organize, and manage essential items.</p>
                     <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono text-primary">React</span>
                        <span className="text-xs font-mono text-primary">Node.js</span>
                        <span className="text-xs font-mono text-primary">MongoDB</span>
                    </div>
                </CardContent>
             </Card>
             
             <Card className="bg-card border-0 shadow-lg">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-white">PDF Converter Tool</CardTitle>
                         <Badge>2025</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Fast and easy-to-use online tool for converting files to and from PDF formats.</p>
                     <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-mono text-primary">React</span>
                        <span className="text-xs font-mono text-primary">Node.js</span>
                        <span className="text-xs font-mono text-primary">Express</span>
                    </div>
                </CardContent>
             </Card>
          </div>
        </section>

         {/* Education - Placeholder */}
         <section>
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">Education</h2>
          <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="font-bold text-lg">BS Computer Science</h3>
                        <p className="text-muted-foreground">NUML Islamabad</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">2021 - 2025</span>
                </div>
                 <p className="text-sm text-muted-foreground mt-2 italic">
                    I have successfully completed my BS in Computer Science from the National University of Modern Languages (NUML), Islamabad (2021–2025).
                </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Footer for Resume */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>&copy; {new Date().getFullYear()} Khyber Kamawal. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}
