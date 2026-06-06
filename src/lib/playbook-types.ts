export type PlaybookCategory =
  | "distribution"
  | "icp"
  | "linkedin"
  | "seo"
  | "email"
  | "funnels"
  | "content";

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
};
