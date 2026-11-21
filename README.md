# LinguaStep

A bilingual-friendly English sentence-learning platform. The first milestone is a responsive web foundation that can later be packaged for Android with Capacitor.

## Technology

- Next.js 16 + React 19 + TypeScript
- Supabase (PostgreSQL, Auth, Storage, Row Level Security)
- Capacitor 8 for Android packaging
- Static export (`out/`) so the same frontend can be hosted and bundled into the Android app

## Project structure

```text
app/                       Next.js routes and global styles
  page.tsx                 Dashboard
  learn/page.tsx           Normal lessons and practice preview
  stories/page.tsx         Story catalogue
  progress/page.tsx        Learning statistics preview
src/components/            Shared application shell and navigation
src/lib/                   Sample content and Supabase client
supabase/migrations/       Database schema and RLS policies
.github/workflows/         Cloud build validation
capacitor.config.ts        Android app identity and web output directory
```

## Run locally

Requires Node.js 24 (recommended for the cloud build) or a compatible newer Node.js release.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

1. Create a project at https://supabase.com.
2. Open SQL Editor and run `supabase/migrations/001_initial_schema.sql`.
3. Copy the project URL and publishable/anon key from Project Settings → API.
4. Copy `.env.example` to `.env.local` and fill in the two values.
5. Never put a Supabase service-role key in a `NEXT_PUBLIC_` variable or in browser code.

The UI currently uses sample data. The database schema is prepared, but authentication and live lesson loading are intentionally not connected in milestone 1.

## Static web build

```bash
npm run build
```

The static website is generated into `out/`. This is compatible with static hosting and is the asset folder Capacitor will package. The app uses client-side Supabase access; do not add Next.js server-only features or API routes without revisiting the Android/static-export architecture.

## Android preparation (later milestone)

After the web UI and Supabase integration are tested:

```bash
npx cap add android
npm run build
npx cap sync android
npx cap open android
```

Android Studio is required to produce a signed APK/AAB. The Android project is not generated in milestone 1.

## Deployment

Connect this repository to Vercel and set the two Supabase environment variables in the Vercel project settings. The build command is `npm run build`; the output directory is `out`.
