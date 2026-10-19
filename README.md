# 1. Project Title

**UE Tutoring Finder**

*A student project for CS 499, Fall 2026 using the Tutoring Page in the official website of the University of Evansville*
---

# 2. Project Description

UE Tutoring Finder is a web application that makes it easy for University of Evansville students to find free tutoring. Today, the Fall 2026 peer tutoring schedule is available as PDF file that provides course, day, time, and room information for tutoring. Some of the entries are marked "TBD," and some sessions are "available by request" and require a completely separate request form that is expected to be submitted at least 72 hours in advance. The only issue is Math tutoring because is listed on its own department page, so it will not be available. So, a student who just wants to know if someone can help them with their CHEM 118 on Wednesday night, and at an available location needs to open the PDF, go through it manually, and possibly visit a second page.

This application will put all of that information into one searchable, filterable website. Students will be able to search by course and filter by day and location. They can also see what is available today, and click on it for further details. It will also help tutors out a lot because they will be able to add, edit, and remove sessions just by pressing a few buttons, so the schedule can be updated in one place, any time instead of by reposting the PDF file again and again.

---

# 3. Target Users

**Primary users: UE undergraduate students** who are looking for tutoring in a specific course. They are usually on their phones between classes, and therefore want a faster answer instead of digging through a PDF file. Moreover, it will be of utmost benefit to the first-year students because it will set them up for success in their future courses by notifying them with ample tutoring opportunities as they navigate through their first higher education experience (clear room and location information provided is also useful in case they are not familiar with the university premises).

**Secondary users: Academic Services / tutors**  who manage the schedule. They need a simple way to update sessions when details change, a "TBD" becomes confirmed, or a new course is added.

---

# 4. Core Features

1. **Search tutoring sessions:** Users can search by course code or subject (for example, "CHEM 118" or "Biology") and see a list of matching tutoring sessions.
2. **Filter sessions:** Users can narrow results by day of the week, subject, and location, and can hide sessions that are still marked TBD.
3. **View session details:** Users can open a session (in-depth view) to see the courses covered, day and time, room/building, session type (drop-in or by request), and tutor name. For "available by request" sessions, the page notifies the 72-hour notice requirement and provides links to UE's existing request form.
4. **See today's sessions:** The home page shows the sessions happening today so a student can quickly see what is available right now.
5. **Manage sessions:** Coordinators can create, edit, and delete tutoring sessions through a management page, so the student can always view the latest information.

---

# 5. Project Scope

**Why is this doable in 8 weeks?.** The application has a clear purpose and a small number of data types. The core features are a standard CRUD work that we covered in the course: React components, a Node/Express REST API, and PostgreSQL (to be learned).

**Essential functionality**
- Searchable and filterable list of sessions (features 1-2)
- Session detail view (feature 3)
- "Today's sessions" section on the home page (feature 4)
- Management page with create/edit/delete for sessions (feature 5)
- Responsive, easily accessible interface

**Optional features to consider**
- In-app form for requesting "available by request" sessions
- Mark sessions as "favorites" in the browser
- Export or print the filtered schedule

**Expected challenges**

- **Scheduling data:** Sessions repeat weekly and some courses share a session (for example, one session may cover BIOL 100, 107, and 119), so establishing the relationship between courses and sessions needs careful attention
- **Real data:** The current schedule is in a PDF file, so I will need to enter all the data manually and handle gaps such as "TBD" entries.
- **Time:** Connecting the front end, API, and database leaves little extra time, so I plan to keep the feature list small.

---

# 6. Initial UI Sketch

The app will be a single-page application with a simple top navigation bar: **Find Tutoring** and **Manage Sessions**.

### 6.1 Home / Find Tutoring (today's sessions, search, and results)

```
+----------------------------------------------------------------+
|  UE Tutoring Finder              [Find Tutoring] [Manage]      |
+----------------------------------------------------------------+
|                                                                |
|   Today's sessions                                             |
|   +--------------------------------------------------------+   |
|   | CHEM 118   6-8 PM   KC 101                             |   |
|   | MATH       5-9 PM   KC 304                             |   |
|   +--------------------------------------------------------+   |
|                                                                |
|   Find a tutor                                                 |
|   [ Search course or subject (e.g., CHEM 118)        ] [Search]|
|                                                                |
|   Filters:  Day [ Any v ]  Subject [ Any v ]  Location [ Any v]|
|             [ ] Hide sessions marked TBD                       |
|                                                                |
|   --------------------------------------------------------     |
|   12 sessions found                                            |
|                                                                |
|   +--------------------------------------------------------+   |
|   | CHEM 118            Monday 6-8 PM          KC 101      |   |
|   | Drop-in                              [View details]    |   |
|   +--------------------------------------------------------+   |
|   +--------------------------------------------------------+   |
|   | BIOL 100, 107, 119  Tuesday 6-8 PM         KC 203      |   |
|   | Drop-in                              [View details]    |   |
|   +--------------------------------------------------------+   |
|   +--------------------------------------------------------+   |
|   | ACCT 210 & 211      By request                         |   |
|   | Request needed (72 hrs)              [View details]    |   |
|   +--------------------------------------------------------+   |
|                                                                |
+----------------------------------------------------------------+
```

### 6.2 Session Details

```
+----------------------------------------------------------------+
|  UE Tutoring Finder              [Find Tutoring] [Manage]      |
+----------------------------------------------------------------+
|  < Back to results                                             |
|                                                                |
|   CHEM 118 Tutoring                                            |
|   ----------------------------------------------              |
|   Day / Time:   Monday, 6:00 - 8:00 PM (Central)               |
|   Location:     KC 101                                         |
|   Type:         Drop-in                                        |
|   Tutor:        First name + last initial                      |
|   Courses:      CHEM 118                                       |
|                                                                |
|   Tip: Bring your course materials and specific questions.     |
|                                                                |
|   (For by-request sessions: "Requests need 72 hours' notice"   |
|    + link to UE's existing request form)                       |
|                                                                |
|   [ Back to results ]                                          |
+----------------------------------------------------------------+
```

### 6.3 Manage Sessions

```
+----------------------------------------------------------------+
|  UE Tutoring Finder              [Find Tutoring] [Manage]      |
+----------------------------------------------------------------+
|   Manage sessions                          [ + Add session ]   |
|                                                                |
|   Course         Day / Time        Room     Type     Actions   |
|   ---------------------------------------------------------   |
|   CHEM 118       Mon 6-8 PM        KC 101   Drop-in  [Edit][Del]|
|   BIOL 100,107   Tue 6-8 PM        KC 203   Drop-in  [Edit][Del]|
|   ACCT 210/211   By request        --       Request  [Edit][Del]|
|                                                                |
|   -------------------------------------------------------      |
|   Add / edit session                                           |
|   Courses [ ________ ]  Day [ v ]  Start [ __ ]  End [ __ ]    |
|   Location [ v ]  Type [ Drop-in v ]  Tutor [ v ]              |
|   [ Save ]  [ Cancel ]                                         |
+----------------------------------------------------------------+
```

*These are the rough sketches*

---

# 7. Initial Data Requirements

The application will need to store the following major types of information:

- **Sessions:** Each tutoring session, including day, start/end time, type (drop-in or by request), and notes.
- **Courses:** Course codes and titles (for example, CHEM 118), linked to the session(s) that cover them. One session can cover several courses.
- **Subjects / Departments:** Groupings such as Biology, Chemistry, Business, Engineering, and Math, used for filtering.
- **Locations:** Buildings and room numbers (for example, KC 101).
- **Tutors:** Tutor name and contact information linked to the sessions they host.

