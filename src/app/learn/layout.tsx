import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/app-sidebar";

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <Header />
      <AppSidebar />
      <main className="min-h-svh overflow-y-auto pt-14 lg:ml-72">
        {children}
      </main>
    </div>
  );
}
