export type PlaybookCategory =
  | "distribution"
  | "icp"
  | "linkedin"
  | "seo"
  | "email"
  | "funnels"
  | "content"
  | "ppc"
  | "analytics"
  | "ecommerce"
  | "pr"
  | "competitor"
  | "social"
  | "automation"
  | "community"
  | "cold-outreach";

export type PlaybookItemType = "template" | "checklist" | "framework";

export interface PlaybookItem {
  slug: string;
  title: string;
  summary: string;
  category: PlaybookCategory;
  type: PlaybookItemType;
  template?: string;
  checklist?: string[];
  relatedLesson?: { track: string; slug: string };
  source?: string;
}

export const PLAYBOOK_CATEGORIES: Record<PlaybookCategory, string> = {
  distribution: "Distribution & Growth",
  icp: "ICP & List Building",
  linkedin: "LinkedIn & Social",
  seo: "SEO",
  email: "Email",
  funnels: "Funnels & CRO",
  content: "Content",
  ppc: "SEM / PPC",
  analytics: "Analytics",
  ecommerce: "Ecommerce & DTC",
  pr: "PR & Digital PR",
  competitor: "Competitor Intelligence",
  social: "Social Media",
  automation: "Automation & CRM",
  community: "Community",
  "cold-outreach": "Cold Outreach",
};
