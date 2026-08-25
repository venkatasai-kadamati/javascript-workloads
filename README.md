# JavaScript Workloads

A monorepo for JavaScript learning, DSA, and multi-framework projects. Organized by topic and use case.

## Structure

```
jscd/
├── apps/
│   ├── backend/
│   │   ├── api/                    # Core Express API
│   │   ├── twitter-backend/       # Social app backend
│   │   ├── streaming-backend/     # Video processing + HLS/RTMP
│   │   └── code-editor-backend/   # Rooms, auth, sockets, execution
│   ├── frontend/
│   │   ├── react-app-01/          # Small-to-medium React app
│   │   ├── react-app-02/          # Another React project
│   │   ├── react-app-03/          # Another React project
│   │   └── code-editor-web/       # Browser IDE UI
│   └── vanilla/
│       ├── html-css-js-sandbox/   # Plain HTML/CSS/JS projects
│       └── ui-experiments/        # UI practice and prototypes
├── packages/
│   ├── shared-utils/              # Common helpers
│   ├── ui-kit/                    # Shared components if needed
│   └── config/                    # Shared lint/test/build config
└── learning/
    ├── dsa/                       # Data structures & algorithms
    ├── prerequisites/             # JS fundamentals
    ├── testing/                   # Vitest/Jest practice
    └── notes/                     # Topic notes and snippets
```

## Setup

```bash
# Install all workspaces
npm install

# Install in specific workspace
npm install -D <package> -w @jscd/apps-backend-api
```

## Development

```bash
# Run backend API
npm run dev:api

# Run React projects
npm run dev:react1
npm run dev:react2
npm run dev:react3

# Run plain JS sandbox
npm run dev:vanilla

# Run tests
npm run test

# Run test watch mode
npm run test:watch
```

## Testing in Runnable Apps

Keep tests inside each runnable project so they stay close to the code they verify.

```txt
apps/backend/api/
├── src/
├── tests/
├── package.json
└── README.md

apps/frontend/react-app-01/
├── src/
├── tests/
├── package.json
└── README.md
```

Suggested scripts per app:

```json
{
  "scripts": {
    "dev": "node src/index.js",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

Recommended testing layers:

- `unit` — small functions, helpers, validators
- `integration` — API routes, service flow, DB calls
- `e2e` — full request flow against the running app

## Workspace Commands

```bash
# Run script in specific workspace
npm run <script> -w @jscd/apps-frontend-react-app-01
npm run dev -w @jscd/apps-backend-api
npm run test -w @jscd/learning-testing

# List all workspaces
npm query .workspace
```

## Each Workspace

| Workspace | Purpose | Tech |
|-----------|---------|------|
| `apps/backend/api` | Core backend API | Node.js, Express |
| `apps/backend/twitter-backend` | Twitter-style backend | Node.js, MongoDB, Express |
| `apps/backend/streaming-backend` | Streaming pipeline | Node.js, FFmpeg, HLS, RTMP |
| `apps/backend/code-editor-backend` | Editor collaboration backend | Node.js, sockets, containers |
| `apps/frontend/react-app-01/02/03` | React applications | React, Vite |
| `apps/frontend/code-editor-web` | Browser IDE UI | React, Monaco/CodeMirror |
| `apps/vanilla/html-css-js-sandbox` | Plain JS practice | HTML, CSS, Vanilla JS |
| `packages/shared-utils` | Reusable code | Plain JS/TS |
| `learning/dsa` | Data structures & algorithms | Algorithms, problem solving |
| `learning/prerequisites` | JS fundamentals | ES6+, closures, scope |
| `learning/testing` | Testing sandbox | Vitest, Jest patterns |

## Quick Start

1. Clone or navigate to repo
2. `npm install` (installs all workspaces)
3. Pick a project area: backend, frontend, vanilla JS, or learning
4. Run the matching workspace command

## API Build Guide

If starting a new backend API, begin in this order:

1. **Create the workspace**
   - Add `apps/backend/api/` with its own `package.json`
   - Keep the project isolated from other apps

2. **Define the first scope**
   - Start with one service and one purpose
   - Example: auth, users, files, streaming, or editor sessions

3. **Set up the skeleton**
   - `src/`
   - `tests/`
   - `routes/`
   - `controllers/`
   - `services/`
   - `middleware/`
   - `config/`

4. **Build the health check first**
   - Add `GET /health`
   - Verify the server boots before adding business logic

5. **Add one vertical feature at a time**
   - Route
   - Controller
   - Service
   - Validation
   - Test

6. **Wire testing early**
   - Unit test helpers first
   - Integration test the route after that
   - Keep tests alongside the feature they verify

7. **Add data and infra last**
   - Database
   - Auth
   - Caching
   - Queues / workers
   - File uploads / streaming / sockets

8. **Keep the API boring and predictable**
   - Consistent response shape
   - Clear error handling
   - Simple folder naming
   - Minimal abstractions at the start

### Practical order for your first API

1. `health` endpoint
2. `users` or `auth` module
3. request validation
4. error middleware
5. database connection
6. tests for routes and services
7. logging and env config
8. add the next feature only after the first is stable