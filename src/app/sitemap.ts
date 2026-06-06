import type { MetadataRoute } from "next";
import { tracks } from "@/content/tracks";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devlearn.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/learn`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/playbook`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/playground`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const trackRoutes = tracks.map((track) => ({
    url: `${BASE_URL}/learn/${track.id}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const lessonRoutes = tracks.flatMap((track) =>
    track.lessons.map((lesson) => ({
      url: `${BASE_URL}/learn/${track.id}/${lesson.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...trackRoutes, ...lessonRoutes];
}
