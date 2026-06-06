/**
 * Topic-specific programming practice tasks for every lesson.
 * Replaces thin/generic tryIt content with hands-on exercises.
 */

const GENERIC_MARKERS = [
  "extend the starter code with one small feature",
  "Open the Live Demo for **",
  "Write one sentence",
  "Write down one question you had",
  "Apply the pattern to a feature you are building",
  "Follow the build steps and ship a working URL",
  "Memorize ",
  "On paper:",
  "Look up ",
];

export function isWeakPractice(tryIt) {
  const t = (tryIt || "").trim();
  if (!t) return true;
  if (t.length < 200) return true;
  if (GENERIC_MARKERS.some((m) => t.includes(m))) return true;
  return false;
}

function task({ goal, minutes = 15, parts, bonus, done }) {
  const sections = parts
    .map((p) => `**${p.label}** — ${p.body}`)
    .join("\n\n");
  return `### Programming task (~${minutes} min)

**Goal:** ${goal}

${sections}

**Done when:** ${done}${bonus ? `\n\n**Bonus:** ${bonus}` : ""}`;
}

function codeBlock(lang, code) {
  return `\`\`\`${lang}\n${code}\n\`\`\``;
}

/** Slug-specific high-quality tasks */
const SLUG_PRACTICE = {
  "what-is-web-development": () =>
    task({
      goal: "Trace how a URL becomes a page and label each technology's role.",
      parts: [
        { label: "Part A — Diagram", body: "Draw 5 boxes: Browser → DNS → Server → HTML/CSS/JS files → Rendered page. Label what each step does." },
        { label: "Part B — DevTools", body: "Open this site → Network tab → reload. Find the HTML document request and one JS file. Note status code and size." },
        { label: "Part C — Console", body: "In Console run `document.title` and `location.href`. Explain what each API tells you." },
      ],
      done: "You can explain frontend vs backend using your diagram without notes.",
    }),

  "document-structure": () =>
    task({
      goal: "Build a valid HTML5 page skeleton from scratch.",
      parts: [
        { label: "Part A — Write markup", body: `Create this structure in Live Demo:\n${codeBlock("html", `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <main><h1>Hello</h1></main>\n</body>\n</html>`)}` },
        { label: "Part B — Validate", body: "Run the demo. In DevTools Elements, confirm `<html>`, `<head>`, `<body>` exist in the right order." },
        { label: "Part C — Break & fix", body: "Remove `<!DOCTYPE html>`. Research quirks mode in one sentence. Restore it." },
      ],
      done: "Page renders with no console errors and correct document tree.",
    }),

  "flexbox": () =>
    task({
      goal: "Center a card horizontally and vertically with Flexbox.",
      parts: [
        { label: "Part A — Layout", body: `Add CSS:\n${codeBlock("css", `.wrap { display:flex; min-height:100vh; justify-content:center; align-items:center; }\n.card { padding:2rem; border:1px solid #ccc; }`)}` },
        { label: "Part B — Experiment", body: "Change `justify-content` to `flex-start`, then `space-between`. Describe what moved." },
        { label: "Part C — Real UI", body: "Add a row of 3 buttons inside `.card` with `gap: 0.5rem`. Keep them centered as a group." },
      ],
      done: "Card stays centered; you can explain justify vs align axes.",
    }),

  "variables": () =>
    task({
      goal: "Use let, const, and reassignment correctly.",
      parts: [
        { label: "Part A — Predict", body: `Before running, write expected output:\n${codeBlock("javascript", "const tax = 0.2;\nlet price = 50;\nprice = 60;\nconsole.log(price * (1 + tax));")}` },
        { label: "Part B — Build", body: "Create `userName` (const), `score` (let). Increment score twice, log `userName scored score`." },
        { label: "Part C — Error", body: "Try reassigning `tax`. Read the TypeError. Why does const block this?" },
      ],
      done: "Prediction matches output; you fixed the const reassignment attempt.",
    }),

  "functions": () =>
    task({
      goal: "Write and call a reusable function with parameters and return value.",
      parts: [
        { label: "Part A — Implement", body: `Write:\n${codeBlock("javascript", "function area(width, height) {\n  return width * height;\n}\nconsole.log(area(4, 5));\nconsole.log(area(10, 3));")}` },
        { label: "Part B — Extend", body: "Add `function perimeter(w, h)` returning `2 * (w + h)`. Log both for same rectangle." },
        { label: "Part C — Arrow", body: "Rewrite `area` as arrow function assigned to `const areaArrow`. Verify same results." },
      ],
      done: "Both functions return correct numbers for test inputs.",
      bonus: "Add default parameter `unit = 'px'` and include in a string return.",
    }),

  "arrays": () =>
    task({
      goal: "Create, read, update, and iterate an array.",
      parts: [
        { label: "Part A — CRUD", body: "Start with `const todos = ['learn HTML', 'learn CSS']`. Push a third item. Log todos[0] and todos.length." },
        { label: "Part B — Loop", body: "Use `for...of` to log each todo prefixed with `- `." },
        { label: "Part C — Transform", body: "Use `.map` to produce array of uppercase strings. Log result without mutating original." },
      ],
      done: "Original array unchanged after map; loop output is correct.",
    }),

  "promises": () =>
    task({
      goal: "Chain a Promise and handle success vs failure.",
      parts: [
        { label: "Part A — Create", body: `Wrap setTimeout in new Promise resolving 'done' after 500ms. Log result with .then().` },
        { label: "Part B — Reject", body: "Add version that rejects with `new Error('timeout')`. Catch and log `err.message`." },
        { label: "Part C — async/await", body: "Rewrite success path with async function + await. Same output." },
      ],
      done: "Both .then and await versions work; error path does not crash script.",
    }),

  "fetch-api": () =>
    task({
      goal: "Fetch JSON and render one field.",
      parts: [
        { label: "Part A — Request", body: `fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()).then(console.log)` },
        { label: "Part B — Guard", body: "Check `response.ok` before `.json()`. Log friendly message on 404 URL." },
        { label: "Part C — DOM", body: "Put `data.title` into a `<p id=\"out\">` using textContent." },
      ],
      done: "Success shows title; bad URL shows error message not blank screen.",
    }),

  "use-state": () =>
    task({
      goal: "Manage UI state with useState in React.",
      parts: [
        { label: "Part A — Counter", body: "In Sandpack: `const [n, setN] = useState(0)`. Two buttons increment/decrement. Display n." },
        { label: "Part B — Object state", body: "Store `{name, clicks}` in one useState. Update clicks without losing name." },
        { label: "Part C — Debug", body: "Console.log state inside event handler. Click fast — note each log value." },
      ],
      done: "Counter never goes below 0; object state updates correctly.",
    }),

  "services-dependency-injection": () =>
    task({
      goal: "Inject a service into a component and display its data.",
      parts: [
        { label: "Part A — Service", body: "Create `DataService` with `getItems()` returning string array. Inject in component constructor or `inject()`." },
        { label: "Part B — Template", body: "Render items with `@for` or `*ngFor`. Show empty message when array length is 0." },
        { label: "Part C — Test", body: "Swap service provider in component metadata with mock returning `['test']`." },
      ],
      done: "List renders from service; mock provider changes output.",
    }),
};

function matchSlugPractice(slug) {
  if (SLUG_PRACTICE[slug]) return SLUG_PRACTICE[slug]();
  return null;
}

function inferKeywords(slug, title) {
  const s = `${slug} ${title}`.toLowerCase();
  const rules = [
    [/variable|const|let|var\b/, "variables"],
    [/function|arrow|callback|closure/, "functions"],
    [/array|map|filter|reduce|forEach/, "arrays"],
    [/object|json|destructure/, "objects"],
    [/class|extends|inherit|prototype/, "classes"],
    [/promise|async|await/, "async"],
    [/fetch|http|api|ajax/, "fetch"],
    [/dom|querySelector|element|node/, "dom"],
    [/event|listener|click|keyboard/, "events"],
    [/loop|for\b|while/, "loops"],
    [/if\b|else|switch|ternary|condition/, "conditionals"],
    [/string|template|regex/, "strings"],
    [/number|math|operator/, "operators"],
    [/error|try|catch|throw/, "errors"],
    [/module|import|export/, "modules"],
    [/scope|hoist|strict/, "scope"],
    [/flex|grid|box-model|margin|padding|position/, "css-layout"],
    [/selector|specificity|cascade/, "css-selectors"],
    [/animation|transition|transform/, "css-animation"],
    [/form|input|validation/, "forms"],
    [/semantic|a11y|accessib|aria/, "a11y"],
    [/seo|meta/, "seo"],
    [/jsx|component/, "react-components"],
    [/hook|useState|useEffect|useMemo|useCallback/, "react-hooks"],
    [/router|route|navigat/, "routing"],
    [/signal|observable|rxjs/, "rxjs"],
    [/pipe|ngfor|ngif|directive/, "angular-template"],
    [/inject|service|di\b/, "angular-di"],
    [/reactive-form|formcontrol|ngmodel/, "angular-forms"],
    [/type|interface|generic|enum/, "typescript"],
    [/git|branch|commit|merge/, "git"],
    [/test|jest|vitest|spec/, "testing"],
    [/deploy|ci|cd|vercel/, "devops"],
  ];
  for (const [re, cat] of rules) {
    if (re.test(s)) return cat;
  }
  return "general";
}

const CATEGORY_PRACTICE = {
  variables: (title) =>
    task({
      goal: `Practice declaring and using variables for ${title}.`,
      parts: [
        { label: "Part A — Predict", body: "Write 3 lines using `const` and `let`. Predict console output before running in Live Demo." },
        { label: "Part B — Build", body: "Model a real value (price, username, count). Reassign only what should change." },
        { label: "Part C — Verify", body: "Intentionally reassign a const. Read the error and fix." },
      ],
      done: "Code runs without errors; you can explain const vs let.",
    }),

  functions: (title) =>
    task({
      goal: `Write functions that demonstrate ${title}.`,
      parts: [
        { label: "Part A — Named function", body: "Create a function with 2 parameters and a return value. Call it twice with different args." },
        { label: "Part B — Arrow", body: "Rewrite as arrow function. Confirm identical results." },
        { label: "Part C — Composition", body: "Call your function inside another function. Log final result." },
      ],
      done: "All calls return expected values.",
      bonus: "Add JSDoc comment describing params and return.",
    }),

  arrays: (title) =>
    task({
      goal: `Manipulate arrays for ${title}.`,
      parts: [
        { label: "Part A — Create", body: "Start with array of 4 items. Log length and first/last." },
        { label: "Part B — Transform", body: "Use `.map` and `.filter` — do not mutate original. Log both results." },
        { label: "Part C — Reduce", body: "Use `.reduce` to compute a single summary (sum, count, or concat)." },
      ],
      done: "Original array unchanged; map/filter/reduce outputs correct.",
    }),

  async: (title) =>
    task({
      goal: `Handle asynchronous code for ${title}.`,
      parts: [
        { label: "Part A — Promise", body: "Create Promise resolving after delay. Log with `.then()`." },
        { label: "Part B — async/await", body: "Same logic with async function. Compare readability." },
        { label: "Part C — Error", body: "Add `.catch` or try/catch for rejected path." },
      ],
      done: "Success and error paths both handled without uncaught exceptions.",
    }),

  dom: (title) =>
    task({
      goal: `Query and update the DOM for ${title}.`,
      parts: [
        { label: "Part A — Select", body: "Use querySelector/querySelectorAll on 2+ elements. Log NodeList length." },
        { label: "Part B — Mutate", body: "Change textContent or classList on button click." },
        { label: "Part C — Create", body: "document.createElement + appendChild a new list item." },
      ],
      done: "UI updates on interaction; no null reference errors.",
    }),

  events: (title) =>
    task({
      goal: `Wire user events for ${title}.`,
      parts: [
        { label: "Part A — Click", body: "addEventListener on button. Log event.type and target." },
        { label: "Part B — Input", body: "Listen to input or keydown. Display live value in a span." },
        { label: "Part C — Cleanup", body: "Remove listener or explain when memory leak happens if you don't." },
      ],
      done: "Events fire once per action; live display updates.",
    }),

  "css-layout": (title) =>
    task({
      goal: `Apply layout CSS for ${title}.`,
      parts: [
        { label: "Part A — Structure", body: "Add HTML with header, main, footer. Style with flex or grid in Live Demo." },
        { label: "Part B — Spacing", body: "Adjust margin/padding/gap until layout matches a sketch you draw." },
        { label: "Part C — Responsive", body: "Resize preview. Add one media query fixing mobile breakage." },
      ],
      done: "Layout works at desktop and mobile widths.",
    }),

  forms: (title) =>
    task({
      goal: `Build and validate a form for ${title}.`,
      parts: [
        { label: "Part A — Markup", body: "Create form with label+input pairs (text, email). Use proper `for`/`id`." },
        { label: "Part B — Validate", body: "Add required, minlength, or pattern. Submit empty — read browser message." },
        { label: "Part C — JS hook", body: "preventDefault on submit. Log FormData entries to console." },
      ],
      done: "Invalid submit blocked; valid submit logs correct data.",
    }),

  "react-components": (title) =>
    task({
      goal: `Build React components for ${title}.`,
      parts: [
        { label: "Part A — Render", body: "Create component returning JSX with heading + paragraph. Export and render in App." },
        { label: "Part B — Props", body: "Pass 2 props. Use them in JSX with `{prop}` syntax." },
        { label: "Part C — List", body: "Map array to 3 child elements with unique `key`." },
      ],
      done: "Sandpack renders without key warnings or errors.",
    }),

  "react-hooks": (title) =>
    task({
      goal: `Use React hooks for ${title}.`,
      parts: [
        { label: "Part A — State", body: "useState with button toggling boolean or counter." },
        { label: "Part B — Effect", body: "useEffect logging mount. Optional: cleanup on unmount." },
        { label: "Part C — Refactor", body: "Extract custom hook `useToggle()` and use in component." },
      ],
      done: "UI reacts to state; effect runs on mount.",
    }),

  "angular-template": (title) =>
    task({
      goal: `Practice Angular templates for ${title}.`,
      parts: [
        { label: "Part A — Bind", body: "Add interpolation `{{ }}` and one property binding `[ ]`." },
        { label: "Part B — Event", body: "Add `(click)` handler updating component property shown in template." },
        { label: "Part C — List", body: "Render array with @for or *ngFor. Show empty state when array is []." },
      ],
      done: "Template updates when property changes; list renders correctly.",
    }),

  typescript: (title) =>
    task({
      goal: `Apply TypeScript types for ${title}.`,
      parts: [
        { label: "Part A — Annotate", body: "Add types to function params and return. Fix one intentional error." },
        { label: "Part B — Interface", body: "Define interface for object shape. Use on a variable and function arg." },
        { label: "Part C — Narrow", body: "Use typeof or in check to narrow union type in if block." },
      ],
      done: "tsc/Sandpack shows error before fix and passes after.",
    }),

  testing: (title) =>
    task({
      goal: `Write tests for ${title}.`,
      parts: [
        { label: "Part A — Arrange", body: "Pick one pure function from the lesson. List 3 input/output pairs." },
        { label: "Part B — Assert", body: "Write pseudo-test or real test: expect(fn(input)).toBe(output)." },
        { label: "Part C — Edge", body: "Add test for empty input, null, or boundary value." },
      ],
      done: "Three cases documented; edge case would fail naive implementation.",
    }),

  git: (title) =>
    task({
      goal: `Practice Git workflow for ${title}.`,
      parts: [
        { label: "Part A — Branch", body: "Create branch `practice/topic-name`. Make one file change. `git status`." },
        { label: "Part B — Commit", body: "Stage and commit with conventional message `docs: ...` or `feat: ...`." },
        { label: "Part C — Diff", body: "Run `git diff HEAD~1`. Explain one line changed." },
      ],
      done: "Clean working tree after commit; you can explain branch purpose.",
    }),

  devops: (title) =>
    task({
      goal: `Apply deployment/CI concepts from ${title}.`,
      parts: [
        { label: "Part A — Checklist", body: "List 5 pre-deploy checks (build, lint, env vars, preview URL, smoke test)." },
        { label: "Part B — Script", body: "Run `npm run build` locally. Fix any error before proceeding." },
        { label: "Part C — Document", body: "Write 3-line deploy runbook: trigger, verify, rollback." },
      ],
      done: "Build passes; runbook is actionable.",
    }),

  general: (title, track, hasPlayground) =>
    task({
      goal: `Prove you understand ${title} by writing code, not just reading.`,
      parts: [
        {
          label: "Part A — Run",
          body: hasPlayground
            ? "Open **Live Demo**. Run starter code. Predict output, then verify."
            : "Open DevTools Console (F12). Type the example from the lesson manually.",
        },
        {
          label: "Part B — Modify",
          body: `Change one value, name, or class in the ${title} example. Observe what breaks or improves.`,
        },
        {
          label: "Part C — Extend",
          body: `Add one feature related to ${title}: extra element, log line, validation, or UI state.`,
        },
      ],
      done: `You can explain ${title} to a friend while pointing at your code.`,
      bonus: "Comment each new line with why you added it.",
    }),
};

function hasPlayground(lesson) {
  return (
    lesson.playground === "html" ||
    (lesson.playground && String(lesson.playground).startsWith("sandpack")) ||
    !!lesson.starterCode ||
    !!lesson.sandpackFiles
  );
}

function buildFromCategory(lesson, category) {
  const title = lesson.title;
  const fn = CATEGORY_PRACTICE[category] || CATEGORY_PRACTICE.general;
  if (category === "general") {
    return fn(title, lesson.track, hasPlayground(lesson));
  }
  return fn(title);
}

/**
 * Build a topic-specific programming practice task for a lesson.
 */
export function buildPracticeTask(lesson) {
  const slugTask = matchSlugPractice(lesson.slug);
  if (slugTask) return slugTask;

  const category = inferKeywords(lesson.slug, lesson.title);
  return buildFromCategory(lesson, category);
}

/** Apply practice tasks to lessons where tryIt is weak */
export function applyPracticeTasks(lessons) {
  return lessons.map((lesson) => {
    if (!isWeakPractice(lesson.tryIt)) return lesson;
    return { ...lesson, tryIt: buildPracticeTask(lesson) };
  });
}
