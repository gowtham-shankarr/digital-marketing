import type { Metadata } from "next";
import { PlaybookBrowser } from "@/components/playbook/playbook-browser";

export const metadata: Metadata = {
  title: "Marketing Playbook",
  description:
    "Copy-ready marketing templates, checklists, and frameworks — distribution, ICP, LinkedIn, SEO, email, and more.",
};

export default function PlaybookPage() {
  return <PlaybookBrowser />;
}
