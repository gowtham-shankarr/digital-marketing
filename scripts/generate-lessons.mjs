import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

function lesson(slug, title, track, level, order, minutes, explain, example, tryIt, quiz, opts = {}) {
  return {
    slug, title, track, level, order, estimatedMinutes: minutes,
    explain, example, tryIt, quiz,
    playground: opts.playground || "none",
    starterCode: opts.starterCode,
    sandpackFiles: opts.sandpackFiles,
    sandpackTemplate: opts.sandpackTemplate,
  };
}

function q(question, options, answer) {
  return { question, options, answer };
}

const defaultQuiz = (topic) => [
  q(`What is a key concept in ${topic}?`, ["Syntax only", "Understanding fundamentals", "Memorizing code", "Skipping practice"], 1),
  q(`Best way to learn ${topic}?`, ["Read only", "Practice with examples", "Copy without understanding", "Avoid exercises"], 1),
];

const tracks = {
  "getting-started": {
    id: "getting-started", title: "Getting Started", icon: "Rocket", color: "bg-violet-500",
    description: "Essential foundations before writing code — tools, internet, Git, and deployment.",
    lessons: [
      lesson("what-is-web-development", "What is Web Development?", "getting-started", "base", 1, 12,
        `## What You'll Learn\nWeb development is building websites and web applications that run in browsers.\n\n### Frontend vs Backend\n- **Frontend**: What users see — HTML, CSS, JavaScript, React, Angular\n- **Backend**: Server logic — databases, APIs, authentication\n\n### How Browsers Work\n1. You enter a URL\n2. Browser requests the page from a server\n3. Server sends HTML, CSS, JS files\n4. Browser renders the page`,
        `Every website you visit — Google, YouTube, banking apps — is built by web developers using these technologies.`,
        `Think about your favorite website. List 3 things you see (frontend) and guess 1 thing happening behind the scenes (backend).`,
        [q("What does frontend development focus on?", ["Server databases", "What users see and interact with", "Hardware drivers", "Mobile OS kernels"], 1), q("What does a browser do first when you visit a URL?", ["Renders CSS", "Requests the page from a server", "Runs Python", "Compiles TypeScript"], 1)],
        { playground: "none" }),
      lesson("setting-up-environment", "Setting Up Your Environment", "getting-started", "base", 2, 15,
        `## What You'll Learn\nProfessional developers use specific tools. Here's what you need.\n\n### VS Code (Visual Studio Code)\nFree, powerful code editor. Download from code.visualstudio.com\n\n### Essential Extensions\n- **Live Server** — preview HTML instantly\n- **ESLint** — catches JavaScript errors\n- **Prettier** — formats code automatically\n- **GitLens** — Git history in editor\n\n### Terminal Basics\n\`\`\`bash\nls        # list files\ncd folder # change directory\nmkdir app # create folder\n\`\`\``,
        `Open VS Code, create a folder called \`my-first-project\`, and create a file \`index.html\`. You're ready to code!`,
        `Install VS Code and create a project folder with an index.html file. Open it in the editor.`,
        [q("Which tool is the standard code editor for web dev?", ["Microsoft Word", "VS Code", "Photoshop", "Excel"], 1), q("What does 'cd' do in terminal?", ["Creates directory", "Changes directory", "Deletes files", "Copies data"], 1)]),
      lesson("how-internet-works", "How the Internet Works", "getting-started", "base", 3, 12,
        `## What You'll Learn\nUnderstanding the internet helps you debug and build better apps.\n\n### URL Structure\n\`https://www.example.com/path?query=1\`\n- **https** — secure protocol\n- **www.example.com** — domain name\n- **/path** — resource path\n\n### DNS\nConverts domain names to IP addresses (like a phone book).\n\n### HTTP Request/Response\n1. Browser sends **request** (GET, POST, etc.)\n2. Server sends **response** (HTML, JSON, status code)`,
        `When you visit a site, your browser makes an HTTP GET request. The server responds with status 200 (OK) and HTML content.`,
        `Open DevTools → Network tab, reload a page, and find the first document request. Note the status code.`,
        [q("What does DNS do?", ["Styles CSS", "Maps domain to IP address", "Runs JavaScript", "Stores passwords"], 1), q("HTTP status 200 means?", ["Error", "Not found", "Success", "Redirect only"], 2)]),
      lesson("git-github-basics", "Git & GitHub Basics", "getting-started", "base", 4, 18,
        `## What You'll Learn\nGit tracks code changes. GitHub hosts your code online.\n\n### Core Commands\n\`\`\`bash\ngit init\ngit add .\ngit commit -m "Initial commit"\ngit push origin main\n\`\`\`\n\n### Why Git?\n- Undo mistakes\n- Collaborate with teams\n- Deploy from GitHub to Vercel`,
        `Every professional project uses version control. Start every project with \`git init\`.`,
        `Create a repo, make a commit, and push to GitHub.`,
        [q("What does git commit do?", ["Deletes repo", "Saves a snapshot of changes", "Deploys to Vercel", "Installs npm packages"], 1), q("GitHub is used for?", ["Running servers", "Hosting code repositories", "Writing CSS", "Designing logos"], 1)]),
      lesson("npm-package-managers", "npm & Package Managers", "getting-started", "base", 5, 14,
        `## What You'll Learn\nnpm installs libraries and runs project scripts.\n\n### Key Commands\n\`\`\`bash\nnpm init -y\nnpm install react\nnpm run dev\n\`\`\`\n\n### package.json\nLists dependencies and scripts. Never delete \`node_modules\` from git — use \`.gitignore\`.`,
        `Modern web apps depend on thousands of packages. npm manages them all.`,
        `Run \`npm init -y\` in a folder and inspect the generated package.json.`,
        [q("What does npm install do?", ["Deletes node_modules", "Downloads packages", "Commits to git", "Builds HTML"], 1), q("Where are scripts defined?", ["index.html", "package.json", "README only", ".env"], 1)]),
      lesson("project-folder-structure", "Project Folder Structure", "getting-started", "base", 6, 12,
        `## What You'll Learn\nOrganized projects are easier to maintain.\n\n### Typical Next.js Structure\n\`\`\`\nmy-app/\n├── src/app/       # Pages & routes\n├── src/components/ # Reusable UI\n├── public/        # Static assets\n├── package.json   # Dependencies\n└── tsconfig.json  # TypeScript config\n\`\`\``,
        `Consistent structure helps teams find files quickly.`,
        `Sketch a folder tree for a todo app with components, pages, and styles.`,
        [q("Where do Next.js pages live?", ["public/", "src/app/", "node_modules/", ".git/"], 1), q("Static images go in?", ["src/app/", "public/", "package.json", "tsconfig.json"], 1)]),
      lesson("browser-devtools", "Browser DevTools", "getting-started", "base", 7, 15,
        `## What You'll Learn\nDevTools are your debugging superpower. Open with F12 or Cmd+Option+I.\n\n### Key Tabs\n- **Elements** — inspect HTML/CSS live\n- **Console** — run JS, see errors\n- **Network** — monitor API calls\n- **Sources** — set breakpoints`,
        `When CSS doesn't apply, inspect the element in Elements tab and check which rules are active.`,
        `Open Console and run: \`document.title = 'Hello DevTools'\`. Watch the tab title change.`,
        [q("Which tab shows JavaScript errors?", ["Elements", "Console", "Network", "Lighthouse"], 1), q("Elements tab lets you?", ["Edit server code", "Inspect HTML and CSS", "Deploy apps", "Install npm packages"], 1)]),
      lesson("deploying-to-vercel", "Deploying to Vercel", "getting-started", "base", 8, 14,
        `## What You'll Learn\nVercel deploys Next.js apps in minutes.\n\n### Steps\n1. Push code to GitHub\n2. Import repo at vercel.com\n3. Vercel auto-detects Next.js\n4. Every push redeploys automatically\n\n### Preview URLs\nEach PR gets its own preview URL for testing.`,
        `This learning app itself is deployed on Vercel — you're using the result of this lesson!`,
        `Deploy any static HTML page to Vercel using their dashboard.`,
        [q("Vercel is optimized for?", ["Desktop apps only", "Next.js and frontend frameworks", "Video editing", "Database admin"], 1), q("Deploy trigger on Vercel?", ["Manual FTP only", "Git push to connected repo", "USB transfer", "Email attachment"], 1)]),
    ],
  },
  html: {
    id: "html", title: "HTML", icon: "Code2", color: "bg-orange-500",
    description: "Structure and semantics of the web — the foundation of every page.",
    lessons: [
      lesson("document-structure", "HTML Document Structure", "html", "base", 1, 15,
        `## What You'll Learn\nEvery HTML page has a standard skeleton.\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>\n\`\`\`\n\n- \`<!DOCTYPE html>\` — tells browser this is HTML5\n- \`<head>\` — metadata (not visible)\n- \`<body>\` — visible content`,
        `The DOCTYPE prevents browsers from rendering in "quirks mode". Always include it.`,
        `Add a \`<title>\` and \`<meta charset="UTF-8">\` to the head section.`,
        [q("Which tag wraps visible content?", ["<head>", "<body>", "<meta>", "<!DOCTYPE>"], 1), q("DOCTYPE declares?", ["CSS version", "HTML5 document", "JavaScript module", "JSON schema"], 1)],
        { playground: "html", starterCode: { html: "<h1>Hello World</h1>\n<p>My first page</p>", css: "body { font-family: system-ui; padding: 2rem; }", js: "" } }),
      lesson("headings-paragraphs", "Headings & Paragraphs", "html", "base", 2, 12,
        `## Headings\n\`<h1>\` to \`<h6>\` — h1 is most important. Use only one h1 per page.\n\n## Paragraphs\n\`<p>\` wraps text paragraphs.\n\n\`\`\`html\n<h1>Main Title</h1>\n<h2>Section</h2>\n<p>A paragraph of text.</p>\n\`\`\``,
        `Headings create document outline for SEO and screen readers.`,
        `Create a page about yourself with h1, two h2 sections, and paragraphs.`,
        defaultQuiz("headings")),
      lesson("links-images", "Links & Images", "html", "base", 3, 14,
        `## Links\n\`<a href="https://example.com">Visit</a>\`\n\n## Images\n\`<img src="photo.jpg" alt="Description" width="300">\`\n\nAlways include \`alt\` text for accessibility.`,
        `Use relative paths for local images: \`src="/images/logo.png"\``,
        `Add a link to your favorite site and an image with alt text.`,
        defaultQuiz("links and images"),
        { playground: "html", starterCode: { html: '<a href="https://developer.mozilla.org">MDN Docs</a>\n<img src="https://picsum.photos/200" alt="Random photo">', css: "a { color: blue; } img { border-radius: 8px; margin-top: 1rem; }", js: "" } }),
      lesson("lists", "Lists", "html", "base", 4, 10,
        `## Unordered List\n\`\`\`html\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n\`\`\`\n\n## Ordered List\n\`\`\`html\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>\n\`\`\``,
        `Use ul for bullet lists, ol for numbered steps.`,
        `Create a shopping list (ul) and recipe steps (ol).`,
        defaultQuiz("lists"),
        { playground: "html", starterCode: { html: "<h2>Shopping List</h2>\n<ul><li>Milk</li><li>Bread</li></ul>\n<h2>Steps</h2>\n<ol><li>Preheat oven</li><li>Mix ingredients</li></ol>", css: "li { margin: 0.5rem 0; }", js: "" } }),
      lesson("tables", "Tables", "html", "base", 5, 12,
        `## Table Structure\n\`\`\`html\n<table>\n  <thead><tr><th>Name</th><th>Age</th></tr></thead>\n  <tbody><tr><td>Alice</td><td>25</td></tr></tbody>\n</table>\n\`\`\``,
        `Use tables only for tabular data, not page layout.`,
        `Build a 3-column table of your favorite movies.`,
        defaultQuiz("tables")),
      lesson("forms-inputs", "Forms & Inputs", "html", "base", 6, 16,
        `## Basic Form\n\`\`\`html\n<form>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  <button type="submit">Submit</button>\n</form>\n\`\`\`\n\nInput types: text, email, password, number, checkbox, radio.`,
        `Always pair labels with inputs using the for/id attributes.`,
        `Create a login form with email, password, and submit button.`,
        defaultQuiz("forms"),
        { playground: "html", starterCode: { html: '<form><label>Email: <input type="email"></label><br><label>Password: <input type="password"></label><br><button type="submit">Login</button></form>', css: "form { padding: 1rem; } input { margin: 0.5rem 0; padding: 0.5rem; }", js: "" } }),
      lesson("semantic-html", "Semantic HTML", "html", "base", 7, 14,
        `## Semantic Tags\n\`\`\`html\n<header><nav>...</nav></header>\n<main>\n  <article><section>...</section></article>\n</main>\n<footer>...</footer>\n\`\`\`\n\nSemantic HTML improves SEO and accessibility.`,
        `Replace generic divs with meaningful tags when possible.`,
        `Restructure a page using header, nav, main, article, footer.`,
        defaultQuiz("semantic HTML"),
        { playground: "html", starterCode: { html: "<header><h1>My Blog</h1><nav><a href='#'>Home</a></nav></header>\n<main><article><h2>Post Title</h2><p>Content here.</p></article></main>\n<footer><p>&copy; 2025</p></footer>", css: "header, footer { background: #f0f0f0; padding: 1rem; }", js: "" } }),
      lesson("accessibility", "Accessibility (ARIA)", "html", "intermediate", 8, 16,
        `## Accessibility Basics\n- Use semantic HTML first\n- Add alt text to images\n- Ensure keyboard navigation\n- Use ARIA when HTML isn't enough: \`aria-label\`, \`role\`\n\n\`\`\`html\n<button aria-label="Close dialog">×</button>\n\`\`\``,
        `Accessible sites work for everyone, including screen reader users.`,
        `Add aria-label to an icon-only button.`,
        defaultQuiz("accessibility")),
      lesson("meta-seo", "Meta Tags & SEO", "html", "intermediate", 9, 12,
        `## Essential Meta Tags\n\`\`\`html\n<meta name="description" content="Page summary">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n\`\`\`\n\nSEO helps search engines understand your content.`,
        `Every page needs a unique title and description.`,
        `Add description and viewport meta tags to a page.`,
        defaultQuiz("SEO")),
      lesson("audio-video", "Audio & Video", "html", "intermediate", 10, 12,
        `## Media Elements\n\`\`\`html\n<video controls width="400">\n  <source src="video.mp4" type="video/mp4">\n</video>\n<audio controls src="audio.mp3"></audio>\n\`\`\``,
        `Always provide controls and fallback content.`,
        `Embed a video with controls attribute.`,
        defaultQuiz("media")),
      lesson("iframes", "Iframes", "html", "intermediate", 11, 10,
        `## Embedding Content\n\`\`\`html\n<iframe src="https://example.com" width="600" height="400"></iframe>\n\`\`\`\n\nUse sparingly — they can impact performance and security.`,
        `Sandpack and CodePen use iframes for isolated previews.`,
        `Embed a YouTube video using an iframe.`,
        defaultQuiz("iframes")),
      lesson("html5-apis", "HTML5 APIs Intro", "html", "intermediate", 12, 14,
        `## Browser APIs\n- **localStorage** — store data in browser\n- **Geolocation** — get user location\n- **Canvas** — draw graphics\n\n\`\`\`javascript\nlocalStorage.setItem('key', 'value');\n\`\`\``,
        `HTML5 added powerful APIs beyond markup.`,
        `Use localStorage to save a username.`,
        defaultQuiz("HTML5 APIs"),
        { playground: "html", starterCode: { html: '<input id="name" placeholder="Your name"><button id="save">Save</button><p id="out"></p>', css: "", js: "document.getElementById('save').onclick = () => { localStorage.setItem('name', document.getElementById('name').value); document.getElementById('out').textContent = 'Saved!'; };" } }),
      lesson("microdata-schema", "Microdata & Schema", "html", "advanced", 13, 12,
        `## Structured Data\n\`\`\`html\n<div itemscope itemtype="https://schema.org/Person">\n  <span itemprop="name">Alice</span>\n</div>\n\`\`\`\n\nHelps search engines show rich results.`,
        `JSON-LD is now preferred over microdata for SEO.`,
        `Add schema.org Person markup to a profile.`,
        defaultQuiz("schema")),
      lesson("web-components", "Web Components Intro", "html", "advanced", 14, 16,
        `## Custom Elements\n\`\`\`javascript\nclass MyButton extends HTMLElement {\n  connectedCallback() { this.innerHTML = '<button>Click</button>'; }\n}\ncustomElements.define('my-button', MyButton);\n\`\`\``,
        `Web Components are native, framework-free reusable elements.`,
        `Create a custom element that displays a greeting.`,
        defaultQuiz("web components")),
      lesson("html-performance", "HTML Performance", "html", "advanced", 15, 12,
        `## Performance Tips\n- \`loading="lazy"\` on images\n- \`<link rel="preload">\` for critical assets\n- Minimize DOM depth\n- Defer non-critical scripts`,
        `Fast HTML structure improves Core Web Vitals.`,
        `Add lazy loading to below-fold images.`,
        defaultQuiz("performance")),
      lesson("html-email", "HTML Email Basics", "html", "advanced", 16, 10,
        `## Email HTML Rules\n- Use tables for layout (legacy clients)\n- Inline CSS only\n- No JavaScript\n- Test across clients`,
        `Email HTML is stuck in 1999 — embrace table layouts.`,
        `Create a simple email template with inline styles.`,
        defaultQuiz("email HTML")),
    ],
  },
};

// Generate remaining tracks programmatically with template content
const trackDefs = [
  { id: "css", title: "CSS", icon: "Palette", color: "bg-blue-500", desc: "Style and layout — from colors to Grid and animations.",
    lessons: [
      ["selectors-specificity", "Selectors & Specificity", "base", 1, 14],
      ["box-model", "The Box Model", "base", 2, 14],
      ["colors-typography", "Colors & Typography", "base", 3, 12],
      ["display-positioning", "Display & Positioning", "base", 4, 16],
      ["flexbox", "Flexbox", "base", 5, 18],
      ["css-grid", "CSS Grid", "base", 6, 18],
      ["responsive-design", "Responsive Design", "intermediate", 7, 16],
      ["css-variables", "CSS Variables", "intermediate", 8, 12],
      ["transitions", "Transitions", "intermediate", 9, 12],
      ["transforms", "Transforms", "intermediate", 10, 12],
      ["pseudo-classes", "Pseudo-classes & Elements", "intermediate", 11, 14],
      ["animations-keyframes", "Animations & Keyframes", "advanced", 12, 16],
      ["css-architecture-bem", "CSS Architecture (BEM)", "advanced", 13, 14],
      ["tailwind-intro", "Tailwind CSS Intro", "advanced", 14, 16],
      ["container-queries", "Container Queries", "advanced", 15, 12],
      ["print-styles", "Print Styles", "advanced", 16, 10],
    ]},
  { id: "javascript", title: "JavaScript", icon: "Braces", color: "bg-yellow-500", desc: "Programming the web — interactivity, logic, and APIs.",
    lessons: [
      ["variables", "Variables (let, const)", "base", 1, 12],
      ["data-types", "Data Types", "base", 2, 14],
      ["operators", "Operators", "base", 3, 10],
      ["conditionals", "Conditionals", "base", 4, 12],
      ["loops", "Loops", "base", 5, 14],
      ["functions", "Functions", "base", 6, 16],
      ["arrays-objects", "Arrays & Objects", "base", 7, 16],
      ["dom-manipulation", "DOM Manipulation", "base", 8, 18],
      ["events", "Events", "intermediate", 9, 16],
      ["es6-features", "ES6+ Features", "intermediate", 10, 18],
      ["async-await", "Async/Await & Promises", "intermediate", 11, 20],
      ["fetch-api", "Fetch API", "intermediate", 12, 16],
      ["error-handling", "Error Handling", "intermediate", 13, 14],
      ["modules", "Modules (import/export)", "intermediate", 14, 14],
      ["closures-scope", "Closures & Scope", "advanced", 15, 16],
      ["classes-prototypes", "Classes & Prototypes", "advanced", 16, 16],
      ["map-set", "Map, Set & Collections", "advanced", 17, 12],
      ["web-storage", "localStorage & sessionStorage", "advanced", 18, 12],
      ["web-apis", "Web APIs", "advanced", 19, 14],
      ["debugging", "Debugging Techniques", "advanced", 20, 14],
    ]},
  { id: "typescript", title: "TypeScript", icon: "FileCode", color: "bg-indigo-500", desc: "Typed JavaScript for safer, scalable applications.",
    lessons: [
      ["why-typescript", "Why TypeScript?", "base", 1, 12],
      ["basic-types", "Basic Types", "base", 2, 14],
      ["interfaces-types", "Interfaces vs Types", "base", 3, 14],
      ["functions-types", "Functions & Return Types", "base", 4, 14],
      ["arrays-tuples", "Arrays & Tuples", "base", 5, 12],
      ["union-intersection", "Union & Intersection Types", "intermediate", 6, 14],
      ["generics", "Generics", "intermediate", 7, 18],
      ["enums", "Enums", "intermediate", 8, 10],
      ["type-guards", "Type Guards", "intermediate", 9, 14],
      ["utility-types", "Utility Types", "intermediate", 10, 16],
      ["decorators", "Decorators", "advanced", 11, 14],
      ["module-resolution", "Module Resolution", "advanced", 12, 12],
      ["strict-mode", "Strict Mode Config", "advanced", 13, 12],
      ["ts-with-frameworks", "TS with React/Node", "advanced", 14, 16],
    ]},
  { id: "react", title: "React", icon: "Atom", color: "bg-cyan-500", desc: "Component-based UI library for modern web apps.",
    lessons: [
      ["what-is-react", "What is React?", "base", 1, 12],
      ["jsx", "JSX", "base", 2, 14],
      ["components-props", "Components & Props", "base", 3, 16],
      ["use-state", "State (useState)", "base", 4, 16],
      ["events-react", "Events in React", "base", 5, 12],
      ["conditional-rendering", "Conditional Rendering", "base", 6, 12],
      ["lists-keys", "Lists & Keys", "base", 7, 14],
      ["use-effect", "useEffect", "intermediate", 8, 18],
      ["forms-controlled", "Forms & Controlled Inputs", "intermediate", 9, 16],
      ["lifting-state", "Lifting State Up", "intermediate", 10, 14],
      ["context-api", "Context API", "intermediate", 11, 16],
      ["custom-hooks", "Custom Hooks", "intermediate", 12, 16],
      ["react-router", "React Router", "intermediate", 13, 16],
      ["performance", "Performance Optimization", "advanced", 14, 16],
      ["error-boundaries", "Error Boundaries", "advanced", 15, 12],
      ["portals", "Portals", "advanced", 16, 10],
      ["compound-components", "Compound Components", "advanced", 17, 14],
      ["nextjs-intro", "Next.js App Router Intro", "advanced", 18, 18],
    ]},
  { id: "angular", title: "Angular", icon: "Triangle", color: "bg-red-500", desc: "Full-featured framework for enterprise web applications.",
    lessons: [
      ["what-is-angular", "What is Angular?", "base", 1, 12],
      ["cli-setup", "CLI Setup", "base", 2, 14],
      ["components-templates", "Components & Templates", "base", 3, 16],
      ["data-binding", "Data Binding", "base", 4, 14],
      ["directives", "Directives (*ngIf, *ngFor)", "base", 5, 16],
      ["services-di", "Services & Dependency Injection", "base", 6, 16],
      ["routing", "Routing & Navigation", "intermediate", 7, 18],
      ["forms", "Forms (Template & Reactive)", "intermediate", 8, 18],
      ["http-client", "HTTP Client", "intermediate", 9, 16],
      ["pipes", "Pipes", "intermediate", 10, 12],
      ["lifecycle-hooks", "Lifecycle Hooks", "intermediate", 11, 14],
      ["rxjs-observables", "RxJS Observables", "advanced", 12, 18],
      ["state-management", "State Management", "advanced", 13, 16],
      ["lazy-loading", "Lazy Loading Modules", "advanced", 14, 14],
      ["testing-basics", "Testing Basics", "advanced", 15, 14],
      ["angular-vercel", "Angular + Vercel Deploy", "advanced", 16, 12],
    ]},
  { id: "extras", title: "Essential Extras", icon: "BookOpen", color: "bg-emerald-500", desc: "Topics every developer needs beyond syntax.",
    lessons: [
      ["rest-apis-json", "REST APIs & JSON", "base", 1, 14],
      ["http-methods", "HTTP Methods & Status Codes", "base", 2, 12],
      ["environment-variables", "Environment Variables", "base", 3, 12],
      ["web-accessibility", "Web Accessibility (WCAG)", "base", 4, 16],
      ["responsive-images", "Responsive Images & Performance", "base", 5, 14],
      ["cors", "CORS Explained", "intermediate", 6, 14],
      ["authentication", "Authentication Concepts", "intermediate", 7, 16],
      ["css-js-frameworks", "CSS vs JS vs Frameworks", "intermediate", 8, 12],
      ["debugging-mindset", "Debugging Mindset", "intermediate", 9, 14],
      ["portfolio-next-steps", "Portfolio & Next Steps", "intermediate", 10, 14],
    ]},
];

const cssExamples = {
  "selectors-specificity": { css: "p { color: blue; }\n.highlight { color: red; }\n#main { color: green; }", html: '<p>Blue</p>\n<p class="highlight">Red</p>\n<p id="main">Green wins!</p>' },
  "flexbox": { css: ".container { display: flex; gap: 1rem; }\n.box { background: #3b82f6; color: white; padding: 1rem; flex: 1; }", html: '<div class="container"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div>' },
  "css-grid": { css: ".grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }\n.cell { background: #8b5cf6; color: white; padding: 1rem; text-align: center; }", html: '<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div></div>' },
};

const jsExamples = {
  "variables": { js: "let name = 'Alice';\nconst age = 25;\nconsole.log(name, age);\ndocument.body.innerHTML = `<h1>Hello ${name}</h1>`;", html: "<div id='out'></div>" },
  "dom-manipulation": { js: "const btn = document.getElementById('btn');\nbtn.addEventListener('click', () => {\n  document.getElementById('out').textContent = 'Clicked!';\n});", html: '<button id="btn">Click me</button>\n<p id="out">Waiting...</p>' },
};

const reactFiles = {
  "what-is-react": { "/App.js": `export default function App() {\n  return <h1>Hello React!</h1>;\n}` },
  "use-state": { "/App.js": `import { useState } from "react";\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}` },
  "components-props": { "/App.js": `function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default function App() {\n  return <Greeting name="Developer" />;\n}` },
};

const angularFiles = {
  "what-is-angular": { "/src/app.component.ts": `import { Component } from "@angular/core";\n@Component({ selector: "app-root", template: "<h1>Hello Angular!</h1>" })\nexport class AppComponent {}` },
  "data-binding": { "/src/app.component.ts": `import { Component } from "@angular/core";\n@Component({\n  selector: "app-root",\n  template: \`<input [(ngModel)]="name"><p>Hello {{ name }}</p>\`,\n})\nexport class AppComponent { name = "World"; }` },
};

for (const trackDef of trackDefs) {
  const lessons = trackDef.lessons.map(([slug, title, level, order, minutes]) => {
    const cssEx = cssExamples[slug];
    const jsEx = jsExamples[slug];
    const reactEx = reactFiles[slug];
    const angularEx = angularFiles[slug];

    let playground = "none";
    let starterCode, sandpackFiles, sandpackTemplate;

    if (trackDef.id === "css" && cssEx) {
      playground = "html";
      starterCode = { html: cssEx.html, css: cssEx.css, js: "" };
    } else if (trackDef.id === "css") {
      playground = "html";
      starterCode = { html: "<div class='demo'>Edit CSS to style me!</div>", css: ".demo { padding: 2rem; background: #f0f0f0; }", js: "" };
    } else if (trackDef.id === "javascript") {
      playground = "html";
      starterCode = jsEx || { html: "<p id='out'>Output here</p>", css: "", js: "// Write JavaScript here\nconsole.log('Hello JS!');" };
    } else if (trackDef.id === "typescript") {
      playground = "sandpack-ts";
      sandpackTemplate = "vanilla-ts";
      sandpackFiles = { "/index.ts": `const greeting: string = "Hello TypeScript";\nconsole.log(greeting);\nconst nums: number[] = [1, 2, 3];\nconsole.log(nums.map(n => n * 2));` };
    } else if (trackDef.id === "react") {
      playground = "sandpack-react";
      sandpackTemplate = "react";
      sandpackFiles = reactEx || { "/App.js": `export default function App() {\n  return <h1>${title}</h1>;\n}` };
    } else if (trackDef.id === "angular") {
      playground = "sandpack-angular";
      sandpackTemplate = "angular";
      sandpackFiles = angularEx || { "/src/app.component.ts": `import { Component } from "@angular/core";\n@Component({ selector: "app-root", template: "<h1>${title}</h1>" })\nexport class AppComponent {}` };
    }

    const explain = `## ${title}\n\nLearn the fundamentals of **${title.toLowerCase()}** in ${trackDef.title}. This ${level}-level lesson covers key concepts you need as a web developer.\n\n### Key Concepts\n- Understanding the syntax and purpose\n- Common patterns and best practices\n- Real-world usage examples\n\n### Why It Matters\n${trackDef.title} skills build on each other. Master this topic before moving to more advanced lessons.`;

    const example = `Here's a practical example of ${title.toLowerCase()}:\n\n\`\`\`${trackDef.id === "css" ? "css" : trackDef.id === "javascript" ? "javascript" : "text"}\n// Example code for ${title}\n\`\`\`\n\nTry running the playground below to see it in action.`;

    const tryIt = `**Exercise:** Practice ${title.toLowerCase()} by modifying the example code. Experiment with changes and observe the results.`;

    return lesson(slug, title, trackDef.id, level, order, minutes, explain, example, tryIt, defaultQuiz(title), {
      playground, starterCode, sandpackFiles, sandpackTemplate,
    });
  });

  tracks[trackDef.id] = {
    id: trackDef.id, title: trackDef.title, icon: trackDef.icon, color: trackDef.color,
    description: trackDef.desc, lessons,
  };
}

// Write individual track files
for (const [id, track] of Object.entries(tracks)) {
  const content = `import type { Lesson } from "@/lib/types";\n\nexport const ${id.replace(/-/g, "_")}Lessons: Lesson[] = ${JSON.stringify(track.lessons, null, 2)};\n`;
  writeFileSync(join(outDir, `${id}.ts`), content);
}

// Write tracks registry
const trackMeta = Object.values(tracks).map(({ id, title, description, icon, color, order: _o, lessons }) => ({
  id, title, description, icon, color,
  order: Object.keys(tracks).indexOf(id),
  lessonCount: lessons.length,
  estimatedMinutes: lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
}));

writeFileSync(join(__dirname, "../src/content/tracks.ts"),
`import type { Track } from "@/lib/types";
import { getting_startedLessons } from "./lessons/getting-started";
import { htmlLessons } from "./lessons/html";
import { cssLessons } from "./lessons/css";
import { javascriptLessons } from "./lessons/javascript";
import { typescriptLessons } from "./lessons/typescript";
import { reactLessons } from "./lessons/react";
import { angularLessons } from "./lessons/angular";
import { extrasLessons } from "./lessons/extras";

export const trackMeta = ${JSON.stringify(trackMeta, null, 2)} as const;

export const tracks: Track[] = [
  { id: "getting-started", title: "Getting Started", description: ${JSON.stringify(tracks["getting-started"].description)}, icon: "Rocket", color: "bg-violet-500", order: 0, lessons: getting_startedLessons },
  { id: "html", title: "HTML", description: ${JSON.stringify(tracks.html.description)}, icon: "Code2", color: "bg-orange-500", order: 1, lessons: htmlLessons },
  { id: "css", title: "CSS", description: ${JSON.stringify(tracks.css.description)}, icon: "Palette", color: "bg-blue-500", order: 2, lessons: cssLessons },
  { id: "javascript", title: "JavaScript", description: ${JSON.stringify(tracks.javascript.description)}, icon: "Braces", color: "bg-yellow-500", order: 3, lessons: javascriptLessons },
  { id: "typescript", title: "TypeScript", description: ${JSON.stringify(tracks.typescript.description)}, icon: "FileCode", color: "bg-indigo-500", order: 4, lessons: typescriptLessons },
  { id: "react", title: "React", description: ${JSON.stringify(tracks.react.description)}, icon: "Atom", color: "bg-cyan-500", order: 5, lessons: reactLessons },
  { id: "angular", title: "Angular", description: ${JSON.stringify(tracks.angular.description)}, icon: "Triangle", color: "bg-red-500", order: 6, lessons: angularLessons },
  { id: "extras", title: "Essential Extras", description: ${JSON.stringify(tracks.extras.description)}, icon: "BookOpen", color: "bg-emerald-500", order: 7, lessons: extrasLessons },
];

export function getTrack(id: string) {
  return tracks.find((t) => t.id === id);
}

export function getLesson(trackId: string, slug: string) {
  const track = getTrack(trackId);
  return track?.lessons.find((l) => l.slug === slug);
}

export function getAllLessons() {
  return tracks.flatMap((t) => t.lessons.map((l) => ({ ...l, trackTitle: t.title })));
}

export function getAdjacentLessons(trackId: string, slug: string) {
  const track = getTrack(trackId);
  if (!track) return { prev: null, next: null };
  const idx = track.lessons.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? { track: trackId, lesson: track.lessons[idx - 1] } : null;
  const next = idx < track.lessons.length - 1 ? { track: trackId, lesson: track.lessons[idx + 1] } : null;
  if (!prev && track.order > 0) {
    const prevTrack = tracks[track.order - 1];
    const last = prevTrack.lessons[prevTrack.lessons.length - 1];
    return { prev: { track: prevTrack.id, lesson: last }, next: next ? { track: trackId, lesson: track.lessons[idx + 1] } : null };
  }
  if (!next && track.order < tracks.length - 1) {
    const nextTrack = tracks[track.order + 1];
    return { prev, next: { track: nextTrack.id, lesson: nextTrack.lessons[0] } };
  }
  return { prev, next };
}
`);

console.log(`Generated ${Object.values(tracks).reduce((s, t) => s + t.lessons.length, 0)} lessons across ${Object.keys(tracks).length} tracks`);
