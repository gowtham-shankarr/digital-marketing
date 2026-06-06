import Link from "next/link";
import {
  Megaphone,
  ArrowRight,
  BookOpen,
  Target,
  Play,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { HomeProgress } from "@/components/learning/home-progress";
import { TrackCard } from "@/components/learning/lesson-card";
import { tracks, trackMeta } from "@/content/tracks";

function buildFeatures(totalLessons: number) {
  return [
    {
      icon: BookOpen,
      title: `${totalLessons} Lessons`,
      desc: `Complete curriculum across ${trackMeta.length} marketing tracks`,
    },
    {
      icon: Target,
      title: "Real Campaign Skills",
      desc: "SEO, ads, email, social, and analytics you use on the job",
    },
    {
      icon: Play,
      title: "Hands-On Practice",
      desc: "Audits, briefs, and campaign tasks in every lesson",
    },
    {
      icon: CheckCircle,
      title: "Track Progress",
      desc: "Quizzes, notes, and bookmarks saved in your browser",
    },
  ];
}

export default function HomePage() {
  const totalLessons = trackMeta.reduce((s, t) => s + t.lessonCount, 0);
  const totalMinutes = trackMeta.reduce((s, t) => s + t.estimatedMinutes, 0);
  const features = buildFeatures(totalLessons);
  const firstTrack = tracks[0];
  const firstLesson = firstTrack?.lessons[0];

  return (
    <div className="min-h-svh bg-background">
      <Header showSearch={false} />

      <main className="pt-14">
        <section className="border-b bg-gradient-to-b from-muted/50 to-background px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm">
              <Megaphone className="h-4 w-4" />
              Free digital marketing learning platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Learn Digital Marketing
              <br />
              <span className="text-muted-foreground">
                From Zero to Campaign Pro
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              14 modules from foundations to funnels, SEO, PPC, automation, and
              emerging topics — with deep lessons, practice tasks, and quizzes.
            </p>
            <HomeProgress totalLessons={totalLessons} />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {firstLesson && (
                <Link href={`/learn/${firstTrack.id}/${firstLesson.slug}`}>
                  <Button size="lg">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
              <Link href="/learn">
                <Button size="lg" variant="outline">
                  Study Dashboard
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {totalLessons} lessons · ~{Math.round(totalMinutes / 60)} hours of
              content
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Why MarketLearn?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <Card key={f.title}>
                  <CardHeader>
                    <f.icon className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                    <CardDescription>{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold">Learning Tracks</h2>
            <p className="mb-8 text-muted-foreground">
              Follow the recommended path or jump to any topic.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tracks.map((track) => (
                <TrackCard key={track.id} track={track} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Recommended Learning Path</h2>
            <p className="mt-4 text-muted-foreground">
              Foundations → Funnels → Website & CRO → SEO → PPC → Content → Social
              → Email → Automation → Analytics → Other Channels → Strategy →
              Advanced → Legal & Career
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tracks.map((t, i) => (
                <span key={t.id} className="flex items-center gap-2">
                  <Link href={`/learn/${t.id}`}>
                    <Button variant="outline" size="sm">
                      {t.title}
                    </Button>
                  </Link>
                  {i < tracks.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t px-4 py-8 text-center text-sm text-muted-foreground">
        <p>MarketLearn — Digital Marketing Learning</p>
      </footer>
    </div>
  );
}
