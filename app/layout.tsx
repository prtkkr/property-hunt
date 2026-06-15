import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/assets/style/globals.css';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Property Hunt',
  description: 'property, hunt, search  ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={poppins.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
