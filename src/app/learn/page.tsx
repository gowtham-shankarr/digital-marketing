import type { Metadata } from "next";
import { StudyDashboard } from "@/components/learning/study-dashboard";

export const metadata: Metadata = {
  title: "Study Dashboard",
  description: "Your personal learning progress, bookmarks, quiz scores, and track breakdown.",
};

export default function LearnPage() {
  return <StudyDashboard />;
}
