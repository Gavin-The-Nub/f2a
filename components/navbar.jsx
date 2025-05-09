"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/f2a-logo.png"
                alt="F2A CARS Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-secondary">F2A CARS</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/inventory"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Inventory
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/location"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Location
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-silver-400 text-secondary"
            >
              <PhoneCall size={16} className="text-primary" />
              0927 775 5709
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/inventory">View Inventory</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/inventory"
              className="text-sm font-medium py-2 text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/location"
              className="text-sm font-medium py-2 text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 justify-center border-silver-400 text-secondary"
              >
                <PhoneCall size={16} className="text-primary" />
                0927 775 5709
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/inventory">View Inventory</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
