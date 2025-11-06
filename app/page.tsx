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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

const stats = [
  { value: "11K+", label: "files searched daily" },
  { value: "400+", label: "teams onboarded" },
  { value: "44%", label: "faster answer" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero-background.jpg"
          alt="Futuristic portal landscape with person standing before glowing gateway"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-8 md:px-10 lg:px-16">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 px-6 py-6 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold uppercase tracking-[0.28em]">
              AE
            </span>
            <span className="text-lg font-semibold tracking-[0.28em] text-white/80">
              AENON
            </span>
          </Link>
          <NavigationMenu className="order-3 w-full justify-center md:order-none md:w-auto">
            <NavigationMenuList className="w-full justify-between md:w-auto md:justify-center">
              {navigationLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild active={item.href === "#features"}>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto">
            <Button variant="ghost" className="hidden text-sm text-white/70 hover:text-white md:inline-flex">
              EN ⌄
            </Button>
            <Button size="sm" className="shadow-lg shadow-black/30">
              Get Started
            </Button>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center py-16">
          <section className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col gap-12 lg:col-span-7 xl:col-span-6">
              <div className="flex flex-col gap-6">
                <Badge className="w-fit bg-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/70">
                  FIND WHAT MATTERS. INSTANTLY.
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Knowledge connected by meaning
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Data Insights / Retrieval Layer Q&A
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start searching
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full border border-white/20 bg-white/10 sm:w-auto"
                  >
                    View Plans
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No setup needed. Works with your current tools.
                </p>
              </div>

              <Card className="max-w-md bg-white/[0.08]">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    EM
                  </div>
                  <div>
                    <CardTitle className="text-white">Elena Mora</CardTitle>
                    <CardDescription className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Research Lead · Lyris Labs
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm italic text-muted-foreground">
                    "I've used hundreds of creative tools, but feels different. It feels like a conversation with your better self."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-10 lg:col-span-5 xl:col-span-6">
              <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/10 p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-2">
                      <span className="text-3xl font-semibold text-white sm:text-4xl">
                        {stat.value}
                      </span>
                      <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 md:p-8">
                <p className="text-base text-white">
                  Whether it's a document, line of code or image, Aenon helps you discover the exact piece of information you need.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-auto flex w-full flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs uppercase tracking-[0.2em] text-white/50 sm:flex-row">
          <span>SIGNAL RECONSTRUCTION ACTIVE</span>
          <span>LONGITUDE DAD LATENT FIELD ACTIVE</span>
          <span>SCROLL TO EXPLORE</span>
        </footer>
      </div>
    </div>
  );
}
