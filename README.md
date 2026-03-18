# StealthLab

AI research lab management platform for tracking papers, compute resources, researchers, and experiments.

## Features

- **Paper Tracker** -- Track reading status and notes for AI research papers
- **Compute Management** -- Monitor GPU cluster utilization and job scheduling
- **Researcher Directory** -- Manage team members with expertise and h-index profiles
- **Experiment Dashboard** -- Run and track ML experiments with metrics logging
- **Status Filtering** -- Filter papers by reading, reviewed, implementing, or cited status
- **Multi-Tab Interface** -- Switch between papers, compute, researchers, and experiments

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **State Management:** Zustand
- **Database:** Supabase (with SSR support)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd stealthlab
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
stealthlab/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/              # Utilities, store, mock data
├── public/               # Static assets
├── tailwind.config.ts
└── package.json
```

