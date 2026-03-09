"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    pathname === href
      ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
      : "text-gray-600 hover:text-gray-900 pb-1 border-b-2 border-transparent transition";

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition">
          <Image
            src="/image/about/US_GTM_Engine_Transparent1.png"
            alt="US GTM Engine"
            width={180}
            height={45}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/approach" className={navLinkClass("/approach")}>
            Approach
          </Link>
          <Link href="/deliverables" className={navLinkClass("/deliverables")}>
            Deliverables
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="text-sm rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}