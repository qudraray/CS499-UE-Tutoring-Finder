# UE Tutoring Finder (Milestone 2: React UI Prototype)

**Live Prototype URL:** https://qudraray.github.io/CS499-UE-Tutoring-Finder/

A React website for finding free tutoring at the University of Evansville. Search sessions, filter them, view details, and add, edit, or delete sessions.

## Setup & Run Instructions

1. Install Node.js.
2. Run these commands:

        git clone https://github.com/qudraray/CS499-UE-Tutoring-Finder.git
        cd CS499-UE-Tutoring-Finder
        npm install
        npm run dev

3. Open the link shown in the terminal.

To publish to GitHub Pages, run `npm run deploy`.

## Component Overview

- **App**: holds the list of sessions and decides which page to show.
- **Navbar**: buttons at the top to switch pages.
- **FindTutoring**: home page with today's sessions, search, filters, and results.
- **SearchFilters**: search box and Day, Subject, and Location filters.
- **SessionCard**: one session shown as a card. Used in more than one place.
- **SessionDetails**: full information about one session.
- **ManageSessions**: table for adding, editing, and deleting sessions.
- **SessionForm**: form used for adding and editing a session.

## Mock Data

The mock data is in `src/data/sessions.js` and comes from the Fall 2026 tutoring schedule PDF.

- **sessions**: list of tutoring sessions. Each has an id, subject, courses, day, start and end time, location, tutor, and type.
- **tutors**: list of tutors with id, name, and email.
- **subjects**: subject names used in the filter.

Session type is `drop-in`, `request` (needs 72 hours' notice), or `tbd`.

State is handled with `useState`. Changes reset on page refresh because there is no database yet.