import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// 1. Import the GTM component
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GTM Practice Sandbox",
  description: "A testing environment for GA4 and GTM tracking scenarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Updated: Using the Environment Variable. 
        The '!' tells TypeScript that we are sure this variable exists.
      */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      
      <body className={`${inter.className} bg-white text-slate-900`}>
        {/* Simple Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tighter">
              ANALYTICS<span className="text-blue-600">LAB</span>
            </Link>
            
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main>
          {children}
        </main>

        {/* Global Footer */}
        <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-xs">
          © 2026 GSingh Analytics Lab • Built for GTM Practice
        </footer>
      </body>
    </html>
  );
}