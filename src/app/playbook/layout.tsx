import { Header } from "@/components/layout/header";

export default function PlaybookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20">{children}</main>
    </div>
  );
}
