import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: 'Khyber Kamawal - Full Stack Developer & AI Specialist',
  description: 'Professional portfolio of Khyber Kamawal - Versatile developer specializing in web/mobile apps, automation, and AI chatbots. Expert in React.js, Node.js, MongoDB, Python.',
  keywords: 'Khyber Kamawal, Full Stack Developer, React.js, Node.js, MongoDB, Python, AI Chatbots, Web Development',
  authors: [{ name: 'Khyber Kamawal' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Khyber Kamawal - Full Stack Developer & AI Specialist',
    description: 'Professional portfolio showcasing web development expertise and innovative projects',
    type: 'website',
    locale: 'en_US',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
