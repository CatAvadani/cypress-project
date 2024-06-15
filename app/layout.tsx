import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cypress Project',
  description: 'A Next.js project with Cypress',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen flex flex-col bg-red-900 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
