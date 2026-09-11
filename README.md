# JavaScript Workloads

JS monorepo. npm workspaces, Biome, one lockfile.

## Layout

```
apps/backend/monitoringExp   Express demo
apps/frontend                React / Vite apps
apps/vanilla                 HTML / CSS / JS
learning/                    notes and drills
```

New app: `apps/<area>/<name>` with package name `@jscd/<name>`. Shared libs go in `packages/<name>`.

## Setup

```bash
npm install
npm test
npm run lint
npm run format

npm run dev -w @jscd/monitoring-exp
```
