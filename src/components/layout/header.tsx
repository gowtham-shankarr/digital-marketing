"use client";

import Link from "next/link";
import { Menu, Megaphone } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { CommandSearch } from "./command-search";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { cn } from "@/lib/utils";

export function Header({
  showSearch = true,
  className,
}: {
  showSearch?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-4 border-b border-white/10 bg-header px-4 shadow-md",
        className
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-header-foreground hover:bg-white/10 hover:text-header-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-0">
          <MobileNav />
        </SheetContent>
      </Sheet>

      <Link
        href="/"
        className="flex items-center gap-2.5 font-semibold text-header-foreground"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
          <Megaphone className="h-4 w-4" />
        </div>
        <span className={cn(showSearch ? "hidden sm:inline" : "inline")}>MarketLearn</span>
      </Link>

      {showSearch && (
        <div className="hidden flex-1 justify-center px-4 md:flex">
          <CommandSearch variant="header" />
        </div>
      )}

      <div className="ml-auto flex items-center gap-1">
        <NavLinks variant="header" />
        <ThemeToggle variant="header" />
      </div>
    </header>
  );
}
