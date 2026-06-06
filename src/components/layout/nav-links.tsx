"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/learn", label: "Learn", match: (path: string) => path.startsWith("/learn") },
  {
    href: "/playbook",
    label: "Playbook",
    match: (path: string) => path.startsWith("/playbook"),
  },
] as const;

export function NavLinks({ variant = "header" }: { variant?: "header" | "sidebar" }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1", variant === "sidebar" && "flex-col items-stretch gap-0.5")}>
      {links.map(({ href, label, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              variant === "header" && "hidden sm:block",
              variant === "header" &&
                (active
                  ? "bg-white/15 text-header-foreground"
                  : "text-header-foreground/80 hover:bg-white/10 hover:text-header-foreground"),
              variant === "sidebar" &&
                (active
                  ? "bg-sidebar-active font-medium text-sidebar-active-foreground"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-sidebar-foreground")
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
