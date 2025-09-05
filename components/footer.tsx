import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Khyber Kamawal
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer & AI Specialist
            </p>
          </div>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Khyber Kamawal</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;