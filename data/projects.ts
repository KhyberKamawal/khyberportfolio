export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'business' | 'tourism' | 'utility' | 'web';
  technologies: string[];
  icon: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  completionDate: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'smart-calculator-tools',
    title: 'Smart Calculator Tools',
    description:
      'A modern calculator application with multiple functionalities including scientific, BMI, and loan calculators for quick and accurate computations.',
    category: 'utility',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    icon: '🧮',
    image:
      'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://smartcalculatortools.netlify.app/',
    githubUrl: '',
    completionDate: '2025',
    featured: true
  },
  {
    id: 'universal-converter-tools',
    title: 'Universal Converter Tools',
    description:
      'A versatile tool for converting units like length, weight, currency, and temperature. Designed for accuracy and user convenience.',
    category: 'utility',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    icon: '⚖️',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://universalconvertertools.netlify.app/',
    githubUrl: '',
    completionDate: '2025',
    featured: false
  },
  // Add more projects with appropriate AI-generated images
  {
  id: 'ai-chatbot-platform',
  title: 'AI Chatbot Platform',
  description:
    'An intelligent chatbot solution powered by machine learning for natural conversations and customer support automation.',
  category: 'ai',
  technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
  icon: '🤖',
  image:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  demoUrl: 'https://frolicking-salmiakki-8b8613.netlify.app/', // ✅ updated
  githubUrl: 'https://github.com/yourusername/ai-chatbot',    // 🔄 update with real repo
  completionDate: '2025',
  featured: true
} ,
{
  id: 'pdf-converter-tool',
  title: 'PDF Converter Tool',
  description:
    'A fast and easy-to-use online tool for converting files to and from PDF formats, ensuring efficiency and reliability.',
  category: 'utility',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  icon: '📄',
  image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  demoUrl: 'https://pdfconvertertools.netlify.app/', // ✅ actual live demo
  githubUrl: 'https://github.com/KhyberKamawal/pdfconvertertools', // 🔄 update with your repo
  completionDate: '2025',
  featured: true
}

  // {
  //   id: 'business-analytics-dashboard',
  //   title: 'Business Analytics Dashboard',
  //   description:
  //     'Comprehensive business intelligence dashboard with real-time analytics, data visualization, and performance metrics.',
  //   category: 'business',
  //   technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
  //   icon: '📊',
  //   image:
  //     'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   demoUrl: 'https://businessdashboard.demo.com',
  //   githubUrl: 'https://github.com/yourusername/business-dashboard',
  //   completionDate: '2024',
  //   featured: true
  // },
  // {
  //   id: 'travel-experience-platform',
  //   title: 'Travel Experience Platform',
  //   description:
  //     'A comprehensive tourism platform connecting travelers with unique experiences and local guides worldwide.',
  //   category: 'tourism',
  //   technologies: ['Next.js', 'GraphQL', 'Stripe', 'Mapbox'],
  //   icon: '✈️',
  //   image:
  //     'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   demoUrl: 'https://travelexperience.demo.com',
  //   githubUrl: 'https://github.com/yourusername/travel-platform',
  //   completionDate: '2024',
  //   featured: false
  // },
  // {
  //   id: 'modern-ecommerce-store',
  //   title: 'Modern E-commerce Store',
  //   description:
  //     'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
  //   category: 'web',
  //   technologies: ['React', 'Redux', 'Styled Components', 'Commerce.js'],
  //   icon: '🛒',
  //   image:
  //     'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   demoUrl: 'https://ecommercestore.demo.com',
  //   githubUrl: 'https://github.com/yourusername/ecommerce-store',
  //   completionDate: '2024',
  //   featured: true
  // }
  
];