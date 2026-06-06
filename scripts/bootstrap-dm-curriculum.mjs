#!/usr/bin/env node
/**
 * Bootstrap 14-module DM curriculum + deep indexes + generator registry.
 * Run: node scripts/bootstrap-dm-curriculum.mjs
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { FULL_CURRICULUM_TRACKS } from "./curriculum/full-curriculum.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const curriculumDir = join(__dirname, "curriculum");
const generatedDir = join(curriculumDir, "deep-content/generated");
const TRACKS = FULL_CURRICULUM_TRACKS;

mkdirSync(generatedDir, { recursive: true });
for (const track of TRACKS) {
  const varName = track.id.replace(/-/g, "_").toUpperCase() + "_GENERATED";
  writeFileSync(join(generatedDir, `${track.id}.mjs`), `/** stub — run curriculum:deep to populate */\nexport const ${varName} = {};\n`);
}
writeFileSync(
  join(generatedDir, "index.mjs"),
  TRACKS.map((t) => `export { ${t.id.replace(/-/g, "_").toUpperCase()}_GENERATED } from "./${t.id}.mjs";`).join("\n") + "\n"
);

function writeTrackFile(track) {
  const varBase = track.id.replace(/-/g, "_");
  const deepVar = varBase.toUpperCase() + "_DEEP";
  const genVar = varBase.toUpperCase() + "_GENERATED";

  const deepDir = join(curriculumDir, `${track.id}-deep`);
  mkdirSync(deepDir, { recursive: true });
  const deepIndexPath = join(deepDir, "index.mjs");
  if (!existsSync(deepIndexPath)) {
    writeFileSync(deepIndexPath, `/** Hand-authored deep overrides for ${track.id} */\nexport const ${deepVar} = {};\n`);
  }

  const content = `import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { ${genVar} } from "./deep-content/generated/${track.id}.mjs";
import { ${deepVar} } from "./${track.id}-deep/index.mjs";

export const _${varBase}Lessons = ${JSON.stringify(track.lessons, null, 2)};

export const ${varBase}Lessons = applyAllDeepOverrides(_${varBase}Lessons, ${genVar}, ${deepVar});
`;
  writeFileSync(join(curriculumDir, `${track.id}.mjs`), content);
}

for (const track of TRACKS) {
  writeTrackFile(track);
}

// Update generate-all-deep.mjs
const deepImports = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `import { _${t.id.replace(/-/g, "_")}Lessons } from "../${t.id}.mjs";\nimport { ${v}_DEEP } from "../${t.id}-deep/index.mjs";`;
}).join("\n");

const tracksArray = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `  { id: "${t.id}", lessons: _${t.id.replace(/-/g, "_")}Lessons, hand: ${v}_DEEP },`;
}).join("\n");

const indexExports = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `export { ${v}_GENERATED } from "./${t.id}.mjs";`;
}).join("\n");

writeFileSync(
  join(curriculumDir, "deep-content/generate-all-deep.mjs"),
  `#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
${TRACKS.map((t) => `import { _${t.id.replace(/-/g, "_")}Lessons } from "../${t.id}.mjs";`).join("\n")}
${TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_").toUpperCase()}_DEEP } from "../${t.id}-deep/index.mjs";`).join("\n")}
import { buildGeneratedOverrides, isFullyDeep } from "./expand-lesson.mjs";
import { applyAllDeepOverrides } from "./merge.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "generated");
mkdirSync(outDir, { recursive: true });

const TRACKS = [
${tracksArray}
];

function writeGeneratedFile(trackId, overrides) {
  const varName = trackId.replace(/-/g, "_").toUpperCase() + "_GENERATED";
  const content = "/** AUTO-GENERATED */\\nexport const " + varName + " = " + JSON.stringify(overrides, null, 2) + ";\\n";
  writeFileSync(join(outDir, trackId + ".mjs"), content);
}

const stats = [];
for (const track of TRACKS) {
  const generated = buildGeneratedOverrides(track.lessons);
  writeGeneratedFile(track.id, generated);
  const afterMerge = applyAllDeepOverrides(track.lessons, generated, track.hand);
  stats.push({ track: track.id, total: track.lessons.length, deepAfter: afterMerge.filter(isFullyDeep).length });
}

writeFileSync(join(outDir, "index.mjs"), \`${indexExports}\`);
console.log("DM deep generation done", stats);
`
);

// Update expand-lesson TRACK_CONTEXT
const trackContext = TRACKS.map((t) => `  "${t.id}": { domain: "${t.title}", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },`).join("\n");
let expand = readFileSync(join(curriculumDir, "deep-content/expand-lesson.mjs"), "utf8");
expand = expand.replace(/const TRACK_CONTEXT = \{[\s\S]*?\};/, `const TRACK_CONTEXT = {\n${trackContext}\n};`);
writeFileSync(join(curriculumDir, "deep-content/expand-lesson.mjs"), expand);

// Update generate-rich-lessons.mjs
const trackImports = TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_")}Lessons } from "./curriculum/${t.id}.mjs";`).join("\n");
const tracksObj = TRACKS.map((t) => `  "${t.id}": { lessons: ${t.id.replace(/-/g, "_")}Lessons, title: ${JSON.stringify(t.title)}, description: ${JSON.stringify(t.description)}, icon: ${JSON.stringify(t.icon)}, color: ${JSON.stringify(t.color)} },`).join("\n");
const lessonImports = TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_")}Lessons } from "./lessons/${t.id}";`).join("\n");
const tracksArrayTs = TRACKS.map((t, i) => `  { id: "${t.id}", title: ${JSON.stringify(t.title)}, description: ${JSON.stringify(t.description)}, icon: ${JSON.stringify(t.icon)}, color: ${JSON.stringify(t.color)}, order: ${i}, lessons: ${t.id.replace(/-/g, "_")}Lessons },`).join("\n");

writeFileSync(
  join(__dirname, "generate-rich-lessons.mjs"),
  `import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
${trackImports}

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

const tracks = {
${tracksObj}
};

for (const [id, track] of Object.entries(tracks)) {
  const varName = id.replace(/-/g, "_") + "Lessons";
  writeFileSync(join(outDir, \`\${id}.ts\`), \`import type { Lesson } from "@/lib/types";\\n\\nexport const \${varName}: Lesson[] = \${JSON.stringify(track.lessons, null, 2)};\\n\`);
  console.log(\`✓ \${id}: \${track.lessons.length} lessons\`);
}

const trackMeta = Object.entries(tracks).map(([id, t], order) => ({
  id, title: t.title, description: t.description, icon: t.icon, color: t.color, order,
  lessonCount: t.lessons.length,
  estimatedMinutes: t.lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
}));

writeFileSync(join(__dirname, "../src/content/tracks.ts"), \`import type { Track } from "@/lib/types";
${lessonImports}

export const trackMeta = \${JSON.stringify(trackMeta, null, 2)} as const;

export const tracks: Track[] = [
${tracksArrayTs}
];

export function getTrack(id: string) { return tracks.find((t) => t.id === id); }
export function getLesson(trackId: string, slug: string) { return getTrack(trackId)?.lessons.find((l) => l.slug === slug); }
export function getAllLessons() { return tracks.flatMap((t) => t.lessons.map((l) => ({ ...l, trackTitle: t.title }))); }
export { getPathAdjacentLessons as getAdjacentLessons } from "./learning-path-nav";
\`);

console.log("Total lessons:", Object.values(tracks).reduce((s, t) => s + t.lessons.length, 0));
`
);

console.log(`Bootstrap complete: ${TRACKS.length} tracks, ${TRACKS.reduce((s, t) => s + t.lessons.length, 0)} lessons`);
