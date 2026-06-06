import { q } from "../helper.mjs";

const TRACK_CONTEXT = {
  "foundations": { domain: "Module 1 — Foundations", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "marketing-funnels": { domain: "Module 2 — Marketing Funnels", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "website-cro": { domain: "Module 3 — Website, Landing Pages & CRO", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "seo": { domain: "Module 4 — SEO", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "sem-ppc": { domain: "Module 5 — SEM / PPC", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "content-marketing": { domain: "Module 6 — Content Marketing", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "social-media": { domain: "Module 7 — Social Media Marketing", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "email-marketing": { domain: "Module 8 — Email Marketing", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "automation-crm": { domain: "Module 9 — Marketing Automation & CRM", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "analytics": { domain: "Module 10 — Analytics & Measurement", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "other-channels": { domain: "Module 11 — Other Channels & Specializations", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "strategy-branding": { domain: "Module 12 — Strategy, Branding & Planning", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "advanced-emerging": { domain: "Module 13 — Advanced & Emerging Topics", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
  "legal-career": { domain: "Module 14 — Legal, Ethics & Career", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },
};

/** Minimum bar for a lesson to count as "fully deep" */
export function scoreLessonDepth(lesson) {
  const whatIs = lesson.whatIs || "";
  const steps = lesson.steps || [];
  const objectives = lesson.objectives || [];
  const stepBodyLen =
    steps.reduce((n, s) => n + (s.body || "").length, 0) / Math.max(steps.length, 1);
  let score = 0;
  if (whatIs.length >= 700) score += 30;
  else if (whatIs.length >= 450) score += 15;
  if (steps.length >= 5) score += 20;
  else if (steps.length >= 4) score += 10;
  if (stepBodyLen >= 90) score += 20;
  else if (stepBodyLen >= 50) score += 10;
  if (objectives.length >= 4) score += 15;
  if ((lesson.commonMistakes || "").length >= 120) score += 10;
  if ((lesson.tryIt || "").length >= 80) score += 5;
  if ((lesson.quiz || []).length >= 5) score += 10;
  else if ((lesson.quiz || []).length >= 3) score += 5;
  return score;
}

export function isFullyDeep(lesson) {
  return scoreLessonDepth(lesson) >= 60;
}

function extractCode(lesson) {
  const chunks = [];
  const example = lesson.example || "";
  const fence = example.match(/```[\w]*\n([\s\S]*?)```/);
  if (fence) chunks.push(fence[1].trim());

  const starter = lesson.starterCode;
  if (starter) {
    if (starter.js) chunks.push(starter.js);
    if (starter.html) chunks.push(starter.html);
    if (starter.css) chunks.push(starter.css);
  }

  if (lesson.sandpackFiles) {
    for (const file of Object.values(lesson.sandpackFiles)) {
      if (typeof file === "string") chunks.push(file.trim());
    }
  }

  return chunks.filter(Boolean).join("\n\n");
}

function inferLinePurpose(line) {
  const t = line.trim();
  if (!t || t.startsWith("//") || t.startsWith("/*") || t.startsWith("*")) return "comment or setup";
  if (t.includes("import ") || t.includes("from ")) return "imports a dependency";
  if (t.includes("export ")) return "exports for other modules";
  if (t.includes("console.log")) return "prints output for debugging";
  if (t.includes("addEventListener")) return "attaches an event handler";
  if (t.includes("querySelector") || t.includes("getElementById")) return "selects a DOM element";
  if (t.includes("useState") || t.includes("useEffect")) return "React hook usage";
  if (t.includes("function ") || t.includes("=>")) return "defines or calls a function";
  if (t.includes("const ") || t.includes("let ")) return "declares a variable";
  if (t.startsWith("<") || t.startsWith("</")) return "HTML structure";
  if (t.includes("{") && t.includes(":")) return "CSS rule or object literal";
  if (t.includes("return ")) return "returns a value";
  if (t.includes("if ") || t.includes("else")) return "conditional logic";
  if (t.includes("for ") || t.includes("while ")) return "loop iteration";
  if (t.includes("await ") || t.includes("async ")) return "asynchronous operation";
  if (t.includes("class ")) return "class or component definition";
  return "core logic for this lesson";
}

function buildCodeWalkSteps(code, title) {
  if (!code) return null;
  const lines = code
    .split("\n")
    .map((l) => l.trimEnd())
    .filter((l) => {
      const t = l.trim();
      return t && !t.startsWith("//") && !t.startsWith("/*") && t !== "*/";
    });

  if (lines.length < 2) return null;

  const walk = lines.slice(0, 5).map((line, i) => {
    const trimmed = line.trim();
    const purpose = inferLinePurpose(trimmed);
    return {
      title: `Walk through line ${i + 1}`,
      body: `Read this line carefully:\n\n\`\`\`\n${trimmed}\n\`\`\`\n\nIt ${purpose}. Before running the demo, predict what changes in the page or console when this line executes. Then run it and confirm.`,
    };
  });

  return [
    ...walk,
    {
      title: "Change one thing",
      body: `Modify a single value in the ${title} example — a string, number, class name, or prop. Run again. Learning happens when you see cause and effect, not when you only read.`,
    },
    {
      title: "Break it on purpose",
      body: "Introduce a small mistake (wrong selector, typo, wrong type). Read the error message. Fix it without looking at the answer. This is how professional developers build intuition.",
    },
  ].slice(0, 5);
}

function expandWhatIs(lesson, ctx, code) {
  const existing = (lesson.whatIs || "").trim();
  const title = lesson.title;
  const summary = lesson.summary || "";

  if (existing.length >= 900) return existing;

  const intro =
    existing.length > 200
      ? existing
      : `**${title}** is a core topic in ${ctx.domain}. ${summary || `You need a clear mental model of ${title} before using it in real projects.`}`;

  const codeBlock = code
    ? `\n\n### Worked example\n\nStudy this code before you run it. Read top to bottom and predict the outcome:\n\n\`\`\`\n${code.slice(0, 1200)}${code.length > 1200 ? "\n// ..." : ""}\n\`\`\``
    : "";

  const mental =
    lesson.track === "javascript"
      ? `\n\n### Mental model\n\nJavaScript runs line by line in ${ctx.runtime}. When this lesson shows DOM code, the browser builds a tree from HTML first, then JavaScript can read and change that tree. When it shows async code, remember: long tasks must not freeze the page — that is why Promises and async/await exist.`
      : lesson.track === "typescript"
        ? `\n\n### Mental model\n\nTypeScript checks types at **edit/compile time**. The browser still runs JavaScript. Your job is to make illegal states unrepresentable so bugs surface as red squiggles, not as user-facing crashes.`
        : lesson.track === "react" || lesson.track === "angular"
          ? `\n\n### Mental model\n\nUI = data + render function. When data changes, the framework updates the DOM efficiently. Your lesson code shows the smallest slice of that pattern — master it here before scaling to full apps.`
          : lesson.track === "html" || lesson.track === "css"
            ? `\n\n### Mental model\n\nThe browser parses HTML into a DOM tree, then applies CSS to decide how each node looks. ${title} affects that pipeline directly — open DevTools Elements and Styles panels while you experiment.`
            : `\n\n### Mental model\n\nTreat ${title} as a building block you will combine with other topics in this course. Understand the why first, then the syntax, then the production pitfalls.`;

  return `${intro}${mental}${codeBlock}\n\n### What you will be able to do\n\nBy the end of this lesson you can explain ${title} in your own words, use it in the Live Demo without copy-pasting blindly, and avoid the mistakes listed in the Common Mistakes section.`;
}

function expandWhyUse(lesson, ctx) {
  const existing = (lesson.whyUse || "").trim();
  if (existing.length >= 200) return existing;
  return `**${lesson.title}** matters because real ${ctx.domain} work depends on it. Teams expect you to recognize when this concept applies, implement it correctly under time pressure, and debug it when something breaks in ${ctx.runtime}.

You are not learning trivia for a quiz — you are learning a tool you will reach for repeatedly when building features, reviewing pull requests, and fixing production bugs.`;
}

function expandWhenToUse(lesson, ctx) {
  const existing = (lesson.whenToUse || "").trim();
  if (existing.length >= 200) return existing;
  const level = lesson.level || "base";
  return `**Reach for ${lesson.title} when** the problem matches what this feature was designed to solve — not because it appeared in a tutorial.

**At ${level} level**, focus on the default happy path shown in the example. **In production**, you also consider edge cases, performance, accessibility, and how this topic composes with the next lessons in the ${lesson.track} track.

${ctx.practice}`;
}

function expandSteps(lesson, code) {
  const existing = lesson.steps || [];
  const avgLen =
    existing.reduce((n, s) => n + (s.body || "").length, 0) / Math.max(existing.length, 1);

  if (existing.length >= 5 && avgLen >= 85) return existing;

  const walked = buildCodeWalkSteps(code, lesson.title);
  if (walked) return walked;

  return [
    {
      title: `Understand the goal of ${lesson.title}`,
      body: `Read the summary and objectives. Write one sentence: "After this lesson I can ___." That sentence is your success criteria.`,
    },
    {
      title: "Study the example slowly",
      body: "Open the example code. For each block, ask: what goes in, what comes out, what changes in the UI or console?",
    },
    {
      title: "Run the Live Demo",
      body: "Execute the starter code. Compare actual output to your prediction. If they differ, find the line responsible.",
    },
    {
      title: "Modify one variable",
      body: "Change a value, label, class, or prop. Observe downstream effects. This confirms you understand the mechanism, not just the final screenshot.",
    },
    {
      title: "Complete the practice task",
      body: "Finish the Try It exercise without peeking at the quiz answers. Explain your solution aloud — teaching someone else is the fastest retention check.",
    },
  ];
}

function expandCommonMistakes(lesson) {
  const existing = (lesson.commonMistakes || "").trim();
  if (existing.length >= 180) return existing;
  const title = lesson.title;
  return `1. **Skipping the example** — reading about ${title} without running code leaves false confidence. Always execute the Live Demo.

2. **Copy-pasting without prediction** — paste code only after you predicted the output. If prediction was wrong, find out why before moving on.

3. **Ignoring edge cases** — empty inputs, null data, slow networks, and small screens break naive implementations. Ask "what if this value is missing?"

4. **Isolating the topic** — ${title} connects to earlier and later lessons. If stuck, review prerequisites in this track rather than jumping to a framework tutorial.`;
}

function expandTryIt(lesson, ctx) {
  const existing = (lesson.tryIt || "").trim();
  if (existing.length >= 280 && !existing.includes("extend the starter code with one small feature")) {
    return existing;
  }
  // practice-tasks.mjs applies after merge; keep short fallback for generated-only path
  return `### Programming task\n\nOpen the Live Demo for **${lesson.title}**. ${ctx.practice} Complete Part A–C in the merged practice tab after build.`;
}

function buildQuiz(lesson) {
  const existing = lesson.quiz || [];
  if (existing.length >= 5) return existing;

  const title = lesson.title;
  const track = lesson.track;
  const extras = [
    q(`What is the main purpose of ${title}?`, [
      "CSS decoration only",
      `Core ${track} knowledge used in real apps`,
      "Database administration",
      "Git branching strategy",
    ], 1),
    q(`Best way to learn ${title}?`, [
      "Read + run examples + practice",
      "Memorize definitions only",
      "Skip demos",
      "Avoid experiments",
    ], 0),
    q(`Where will you use ${title}?`, [
      "Production projects and interviews",
      "Never after this course",
      "Only on paper",
      "Only in design tools",
    ], 0),
    q(`After this lesson you should be able to…`, [
      `Explain and apply ${title}`,
      "Only copy-paste",
      "Ignore mistakes",
      "Skip prerequisites",
    ], 0),
    q(`Common mistake with ${title}?`, [
      "Practicing with code",
      "Using it without understanding the example",
      "Reading error messages",
      "Testing edge cases",
    ], 1),
  ];

  const merged = [...existing];
  for (const item of extras) {
    if (merged.length >= 5) break;
    if (!merged.some((m) => m.question === item.question)) merged.push(item);
  }
  return merged.slice(0, 5);
}

function estimateMinutes(lesson, code) {
  const base = lesson.estimatedMinutes || 25;
  const codeBonus = code ? Math.min(12, Math.floor(code.length / 200)) : 0;
  const depthBonus = isFullyDeep(lesson) ? 0 : 8;
  return Math.min(55, Math.max(28, base + codeBonus + depthBonus));
}

/**
 * Expand any lesson toward full teachable depth.
 * Returns null if lesson already meets the deep threshold.
 */
export function expandLessonToDeep(lesson, { force = false } = {}) {
  if (!force && isFullyDeep(lesson)) return null;

  const ctx = TRACK_CONTEXT[lesson.track] || TRACK_CONTEXT.javascript;
  const code = extractCode(lesson);

  return {
    estimatedMinutes: estimateMinutes(lesson, code),
    summary:
      lesson.summary ||
      `${lesson.title} — complete tutorial with mental model, worked example, line-by-line practice, mistakes, and quiz.`,
    objectives:
      lesson.objectives?.length >= 4
        ? lesson.objectives
        : [
            `Explain ${lesson.title} in plain language`,
            `Use ${lesson.title} correctly in the Live Demo`,
            `Know when ${lesson.title} is the right tool vs alternatives`,
            `Avoid common ${lesson.title} mistakes in real projects`,
          ],
    whatIs: expandWhatIs(lesson, ctx, code),
    whyUse: expandWhyUse(lesson, ctx),
    whenToUse: expandWhenToUse(lesson, ctx),
    steps: expandSteps(lesson, code),
    example:
      lesson.example ||
      (code
        ? `### ${lesson.title} — Code Example\n\n\`\`\`\n${code}\n\`\`\`\n\nRead each line. Run in the Live Demo. Change one value and observe the effect.`
        : `### ${lesson.title}\n\nUse the Live Demo and follow the step-by-step section above.`),
    realWorld:
      lesson.realWorld ||
      `${lesson.title} shows up in production ${ctx.domain} work — from junior feature tickets to senior architecture reviews. Expect interview questions and PR comments that assume you know this cold.`,
    commonMistakes: expandCommonMistakes(lesson),
    tryIt: expandTryIt(lesson, ctx),
    quiz: buildQuiz(lesson),
  };
}

/** Build override map for lessons not yet meeting the deep threshold */
export function buildGeneratedOverrides(lessons, { force = false } = {}) {
  const generated = {};
  for (const lesson of lessons) {
    if (!force && isFullyDeep(lesson)) continue;
    const expanded = expandLessonToDeep(lesson, { force });
    if (expanded) generated[lesson.slug] = expanded;
  }
  return generated;
}
