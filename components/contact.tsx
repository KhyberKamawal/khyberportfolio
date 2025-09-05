'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with animation
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        icon: <CheckCircle className="h-4 w-4" />,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error("Error sending message", {
        description: "Please try again later or contact me directly via email.",
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Khyberk460@gmail.com',
      href: 'mailto:Khyberk460@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+93 77 6583537',
      href: 'tel:+93 77 6583537',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      href: null,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/khyberkamawal',
      color: 'hover:bg-gray-900 hover:text-white',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/khyberkamawal',
      color: 'hover:bg-blue-600 hover:text-white',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/khyberkamawal',
      color: 'hover:bg-blue-400 hover:text-white',
      gradient: 'from-blue-400 to-blue-600'
    }
  ];

  // Floating Label Input Component
  const FloatingLabelInput = ({ 
    id, 
    name, 
    type = 'text', 
    label, 
    value, 
    onChange, 
    required = false,
    multiline = false,
    rows = 1
  }: {
    id: string;
    name: string;
    type?: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
  }) => {
    const hasValue = value.length > 0;
    const isFocused = focusedField === id;
    
    const InputComponent = multiline ? Textarea : Input;
    
    return (
      <div className="relative">
        <InputComponent
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          required={required}
          rows={multiline ? rows : undefined}
          className={`peer w-full pt-6 pb-2 px-3 border-2 rounded-lg transition-all duration-300 bg-transparent ${
            isFocused 
              ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
              : 'border-muted-foreground/20 hover:border-muted-foreground/40'
          } ${multiline ? 'resize-none' : ''}`}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-300 pointer-events-none ${
            hasValue || isFocused
              ? 'top-2 text-xs text-blue-600 font-medium'
              : 'top-1/2 -translate-y-1/2 text-muted-foreground'
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    );
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">📧</span>
              <span className="text-3xl">🤝</span>
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-2xl font-semibold font-poppins mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with innovative teams. 
                  Whether you need a full-stack web application, AI-powered solution, or mobile app, 
                  I'm here to help bring your vision to reality.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            {info.title}
                          </h4>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-lg font-medium hover:text-primary transition-colors group-hover:text-blue-600"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-white animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className={`transition-all duration-1000 delay-400 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-xl ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingLabelInput
                      id="name"
                      name="name"
                      label="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <FloatingLabelInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <FloatingLabelInput
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />

                  <FloatingLabelInput
                    id="message"
                    name="message"
                    label="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={6}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;