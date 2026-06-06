import type { Metadata } from "next";
import { PlaybookBrowser } from "@/components/playbook/playbook-browser";

const description =
  "Copy-ready marketing templates, checklists, and frameworks — distribution, ICP, LinkedIn, SEO, PPC, analytics, and more.";

export const metadata: Metadata = {
  title: "Marketing Playbook",
  description,
  keywords: ["marketing templates", "marketing checklist", "digital marketing playbook", "campaign templates"],
  openGraph: {
    title: "Marketing Playbook | MarketLearn",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Marketing Playbook | MarketLearn",
    description,
  },
};

export default function PlaybookPage() {
  return <PlaybookBrowser />;
}
