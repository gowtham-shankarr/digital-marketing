import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  averageQuizScore,
  computeStudyStreak,
  isValidProgressImport,
  mergeProgressData,
  parseLessonId,
  todayKey,
} from "./progress-helpers";
import type { ProgressData } from "./types";

const empty: ProgressData = {
  completedLessons: [],
  lastVisited: null,
  quizScores: {},
  bookmarkedLessons: [],
  studyDates: [],
  lessonNotes: {},
};

describe("parseLessonId", () => {
  it("parses track/slug", () => {
    assert.deepEqual(parseLessonId("javascript/variables"), {
      track: "javascript",
      slug: "variables",
    });
  });

  it("rejects invalid ids", () => {
    assert.equal(parseLessonId("nope"), null);
    assert.equal(parseLessonId("/slug"), null);
  });
});

describe("computeStudyStreak", () => {
  it("counts consecutive days through today", () => {
    const ref = new Date("2026-06-05T12:00:00.000Z");
    const dates = ["2026-06-03", "2026-06-04", "2026-06-05"];
    assert.equal(computeStudyStreak(dates, ref), 3);
  });

  it("counts streak ending yesterday if not studied today", () => {
    const ref = new Date("2026-06-05T12:00:00.000Z");
    const dates = ["2026-06-03", "2026-06-04"];
    assert.equal(computeStudyStreak(dates, ref), 2);
  });

  it("returns zero with no recent activity", () => {
    const ref = new Date("2026-06-05T12:00:00.000Z");
    assert.equal(computeStudyStreak(["2026-06-01"], ref), 0);
  });
});

describe("mergeProgressData", () => {
  it("merges arrays without duplicates", () => {
    const merged = mergeProgressData(
      { ...empty, completedLessons: ["html/intro"], bookmarkedLessons: ["css/box-model"] },
      { completedLessons: ["html/intro", "css/flexbox"], bookmarkedLessons: ["html/intro"] }
    );
    assert.deepEqual(merged.completedLessons.sort(), ["css/flexbox", "html/intro"]);
    assert.deepEqual(merged.bookmarkedLessons.sort(), ["css/box-model", "html/intro"]);
  });
});

describe("isValidProgressImport", () => {
  it("accepts partial payloads", () => {
    assert.equal(isValidProgressImport({ completedLessons: ["a/b"] }), true);
  });

  it("rejects invalid shapes", () => {
    assert.equal(isValidProgressImport(null), false);
    assert.equal(isValidProgressImport({ completedLessons: "nope" }), false);
  });
});

describe("averageQuizScore", () => {
  it("returns null for empty scores", () => {
    assert.equal(averageQuizScore({}), null);
  });

  it("averages scores", () => {
    assert.equal(averageQuizScore({ a: 80, b: 100 }), 90);
  });
});

describe("todayKey", () => {
  it("formats YYYY-MM-DD", () => {
    assert.equal(todayKey(new Date("2026-06-05T08:00:00.000Z")), "2026-06-05");
  });
});
