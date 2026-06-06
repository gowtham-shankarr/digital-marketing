# MarketLearn Curriculum Scripts

## Commands

| Script | Command | Purpose |
|--------|---------|---------|
| Bootstrap | `node scripts/bootstrap-dm-curriculum.mjs` | Regenerate track source files from lesson specs |
| Deep overrides | `npm run curriculum:deep` | Regenerates `scripts/curriculum/deep-content/generated/*.mjs` |
| Lesson output | `npm run curriculum:generate` | Writes `src/content/lessons/*.ts` and `src/content/tracks.ts` |
| Full build | `npm run build` | Runs deep → generate → `next build` |

## Tracks (12)

`dm-getting-started`, `marketing-fundamentals`, `content-marketing`, `seo`, `social-media`, `email-marketing`, `paid-ads`, `analytics`, `brand-creative`, `conversion`, `strategy`, `dm-projects`

## Adding or editing lessons

1. Edit lesson specs in `scripts/bootstrap-dm-curriculum.mjs` (TRACKS array) or the track `.mjs` file directly.
2. Optional hand-deep overrides in `scripts/curriculum/<track>-deep/index.mjs`.
3. Run `npm run curriculum:deep` then `npm run curriculum:generate`.
4. Run `npm run build` before deploy.
