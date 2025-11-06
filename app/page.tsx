import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Illustration */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[70vh] -z-10 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: 'url(/Serene Winter Landscape.png)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-8 md:px-10 lg:px-16">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            AGNGE
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>

          {/* Mobile menu button */}
          <Button size="sm" className="md:hidden">
            Get Started
          </Button>
        </header>

        {/* Hero Section */}
        <main className="flex flex-1 flex-col justify-center py-16">
          <section className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-sm"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-sm"></div>
              </div>
              <Badge variant="default" className="px-4 py-1.5 text-xs">
                Trusted by 500+ Agencies Worldwide
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="mb-8 space-y-6">
              <h1 className="text-balance text-5xl font-semibold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Transform How You{" "}
                <span className="text-[#2563eb]">Run Your Agency</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
                Streamline invoicing, onboarding, client CRM, team operations, and commission tracking — all in one place.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button size="lg" className="text-base">
                Try It Free for 30 Days
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
