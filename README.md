# 1. Project Title

**UE Tutoring Finder**

# UE Tutoring Finder — Milestone 2: React UI Prototype

**Live Prototype URL:** https://qudraray.github.io/CS499-UE-Tutoring-Finder/

## Setup & Run Instructions

Requires Node.js 18+.

    git clone https://github.com/qudraray/CS499-UE-Tutoring-Finder.git
    cd CS499-UE-Tutoring-Finder
    npm install
    npm run dev

Then open the local URL printed in the terminal (for example `http://localhost:5173/CS499-UE-Tutoring-Finder/`).

To build and deploy to GitHub Pages:

    npm run deploy

## Component Overview

| Component | Purpose |
|---|---|
| `App.jsx` | Holds shared state (sessions, current view, selected session) and switches between views |
| `Navbar` | Top navigation: Find Tutoring / Manage |
| `FindTutoring` | Home view: today's sessions, search, filters, and results list |
| `SearchFilters` | Search box, Day / Subject / Location dropdowns, and "Hide TBD" checkbox |
| `SessionCard` | Reusable card shown in both today's sessions and search results |
| `SessionDetails` | Detail view with day/time, room, type, tutor, and the 72-hour notice for by-request sessions |
| `ManageSessions` | Table of all sessions with Add, Edit, and Delete |
| `SessionForm` | Form with validation used for both adding and editing a session |
| `utils.js` | Helpers for time formatting and tutor labels |

## Mock Data

Defined in `src/data/sessions.js`, based on the Fall 2026 UE peer tutoring schedule PDF.

- `sessions`: array of objects `{ id, subject, courses[], day, start, end, location, tutorId, type, notes }`
  - `courses` is an array because one session can cover several courses (for example BIOL 100, 107, 119)
  - `type` is `'drop-in'`, `'request'` (available by request, 72 hours' notice), or `'tbd'`
  - `start` and `end` are 24-hour `"HH:MM"` strings
- `tutors`: array of `{ id, first, last, email }`
- `subjects`: list of subject areas used for filtering
- `DAYS`: Monday through Thursday

Interactive state uses `useState`. Add, edit, and delete changes are kept in memory only, so they reset on page refresh. A back end and database are planned for a later milestone.