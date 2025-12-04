import type { Metadata } from 'next';
import { PT_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Shell from '@/components/layout/Shell';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ui',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Novalyte Command Center',
  description: 'God’s Eye View for Novalyte AI critical infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${jetbrains.variable} bg-obsidian text-white`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
