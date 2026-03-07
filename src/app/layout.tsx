import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "US GTM Engine | US Market Entry & GTM Validation System",
  description:
    "US GTM Engine helps international technology companies validaate US market demand and buld early pipeline through a structured 90-120 day operating sprint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#fbfbfc] text-gray-900 antialiased`}
      >
        <SiteHeader />

        {children}

        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-4 justify-between">
            <div>© {new Date().getFullYear()} US GTM Engine</div>
            <div className="flex gap-4">
              <a className="hover:text-gray-900" href="/approach">
                Approach
              </a>
              <a className="hover:text-gray-900" href="/deliverables">
                Deliverables
              </a>
              <a className="hover:text-gray-900" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}