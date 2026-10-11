# SOFTWARE DESIGN DOCUMENT (SDD)
# Personal Portfolio Website — MERN Stack

**Project Name:** Personal Portfolio Website  
**Project Type:** Full-Stack Web Application  
**Developer:** Harshitha P. M.  
**Institution:** NMIT — Nitte Meenakshi Institute of Technology  
**Department:** Artificial Intelligence and Data Science (AI&DS)  
**Academic Performance:** 9.02 CGPA  
**Technology Stack:** MongoDB, Express.js, React.js, Node.js  
**Development Environment:** VS Code with OpenAI Codex  
**Deployment Platform:** Vercel  
**Document Version:** 1.0  
**Status:** Initial implementation specification

---

# 1. Project Overview

## 1.1 Project Description

Build a responsive, full-stack personal portfolio website that represents the developer's academic background, technical skills, projects, achievements, experience, and professional aspirations.

The website should establish a strong online identity, make it easy for recruiters and collaborators to evaluate the developer's capabilities, and provide direct ways to view projects, download a résumé, and initiate contact.

The application will use React for the user interface, Node.js and Express.js for backend functionality, and MongoDB Atlas for persistent data storage. The complete application should be deployable on Vercel with appropriate environment configuration.

## 1.2 Project Vision

Create a portfolio that communicates three things within the first few seconds:

1. **Who I am:** An AI & Data Science engineering student at NMIT with a 9.02 CGPA.
2. **What I can do:** Build software, solve technical problems, learn new technologies, and develop meaningful projects.
3. **What I am working toward:** Becoming a capable technology professional through continuous learning, practical implementation, and technical exploration.

The website should feel personal, credible, polished, and technically competent.

## 1.3 Core Objectives

- Present academic information and technical skills professionally.
- Showcase projects with descriptions, technology stacks, GitHub links, and live demos.
- Communicate interests in AI, Data Science, software development, and computer systems.
- Provide a functional contact form with backend validation and secure message storage.
- Support résumé viewing and downloading.
- Include a meaningful learning and career-development section.
- Deliver an excellent experience on mobile, tablet, laptop, and desktop.
- Use a maintainable codebase that can be expanded as skills and projects grow.
- Follow production-level practices for accessibility, security, performance, and SEO.

## 1.4 Scope

### Version 1 — Required features

- Responsive homepage and navigation.
- Hero section with introduction and calls to action.
- About section.
- Education section.
- Technical skills section.
- Featured projects and complete project listing.
- Experience and achievements section.
- Learning and career interests section.
- Contact form.
- Résumé download.
- GitHub, LinkedIn, and email links.
- MongoDB persistence for contact submissions.
- Backend API using Express.js.
- Deployment configuration for Vercel.
- Loading, error, empty, and success states.
- Basic SEO, accessibility, and automated tests.

### Version 1 — Optional enhancements

Implement these only after all required features work correctly:

- Password-protected admin interface to manage projects.
- Dynamic project filtering.
- Blog or technical writing section.
- Visitor analytics integration with privacy-conscious configuration.
- Light/dark theme switcher.
- Animated project illustrations.
- GitHub profile statistics through a supported API.
- Dedicated project-detail pages.

Do not build all optional features before the core application is stable.

## 1.5 Out of Scope

The initial release must not require:

- User registration or public accounts.
- A paid subscription service.
- An AI chatbot.
- Payment processing.
- A complex content management system.
- A separate microservices architecture.
- A custom authentication system unless the optional admin feature is approved.

---

# 2. User Profile and Content Requirements

All personal information must be maintained in one easily editable location. Do not scatter personal details throughout components.

## 2.1 Verified Initial Profile Information

| Field | Value |
|---|---|
| Name | Harshitha P. M. |
| Institution | NMIT / Nitte Meenakshi Institute of Technology |
| Department | Artificial Intelligence and Data Science |
| CGPA | 9.02 |
| Degree | B.E. — confirm the exact official degree title |
| Current semester | To be confirmed |
| Graduation year | To be confirmed |
| Professional email | To be supplied |
| GitHub profile | To be supplied |
| LinkedIn profile | To be supplied |
| Résumé | To be supplied |

Treat the CGPA as the supplied value. Do not invent a grading scale, convert it into a percentage, or claim a rank or award.

If a field has not been supplied, display a configurable placeholder during development and hide the corresponding public-facing content until it is complete.

## 2.2 Profile Content Principles

All text must be:

- Professional and easy to understand.
- Specific rather than filled with generic motivational statements.
- Accurate and verifiable.
- Written in the first person where appropriate.
- Focused on demonstrated work and genuine interests.
- Free from invented internships, certifications, clients, awards, or professional experience.

The website must never present a planned project as a completed project.

## 2.3 Hero Content

Use the following as the initial copy, with all text editable through the central profile configuration.

**Headline:**

"Building my future through code, data, and curiosity."

**Supporting text:**

"I'm an Artificial Intelligence and Data Science engineering student at NMIT, exploring software development, intelligent systems, and practical solutions to real-world problems."

**Academic highlight:**

"9.02 CGPA | AI & Data Science | NMIT"

**Primary CTA:** Explore My Projects

**Secondary CTA:** Download Résumé

**Tertiary CTA:** Let's Connect

Do not label the developer an expert or professional AI engineer without supporting experience.

## 2.4 About Section

Include:

- Current academic background.
- Interest in technology and problem-solving.
- Current areas of learning.
- Approach to building projects.
- Future professional aspirations.

Provide an editable paragraph rather than permanently embedding long text in the component.

Suggested starting copy:

"I'm an engineering student specializing in Artificial Intelligence and Data Science. I enjoy understanding how technology works, turning concepts into practical projects, and continuously improving my programming and problem-solving skills. My current focus is on developing a strong technical foundation while exploring AI, data-driven applications, and software engineering."

This text is an initial draft and must remain editable.

## 2.5 Education Section

Display education as a timeline or structured card.

Each education entry should support:

- Institution name.
- Degree.
- Department.
- Start year.
- Expected completion year.
- CGPA or percentage.
- Relevant coursework.
- Optional institutional link.

Initial record:

- Institution: NMIT.
- Degree: B.E. — confirm the official designation.
- Department: Artificial Intelligence and Data Science.
- CGPA: 9.02.
- Dates and coursework: configurable, not invented.

## 2.6 Technical Skills

Create categorized skill groups rather than one large collection of badges.

Recommended categories:

1. Programming Languages.
2. Frontend Development.
3. Backend Development.
4. Databases.
5. AI and Data Science.
6. Developer Tools.
7. Computer Science Fundamentals.

Each skill may contain:

- Name.
- Category.
- Optional icon.
- Familiarity level.
- Evidence through related projects.
- Visibility flag.

Only show technologies that the developer has actually used or studied.

Do not automatically assign advanced proficiency percentages. If skill levels are included, use honest labels such as "Learning", "Familiar", and "Used in Projects". Skill bars should not imply objectively measured expertise.

## 2.7 Projects

Every project card must support:

- Project title.
- Short summary.
- Detailed description.
- Problem addressed.
- Approach or implementation.
- Technology stack.
- Key features.
- GitHub repository URL.
- Live demo URL.
- Optional thumbnail.
- Project status.
- Date or timeframe.
- Featured status.

Project statuses:

- Planning.
- In Progress.
- Completed.

Do not create fictional project descriptions, statistics, or repository links. Begin with empty project data or clearly marked sample content that is excluded from production.

Projects should be stored in MongoDB if the dynamic project functionality is enabled. If the initial release only needs a few stable project entries, they may be managed through a local data file first. The contact form must still use the backend and database.

## 2.8 Experience and Achievements

Support optional entries for:

- Internships.
- Technical events.
- Hackathons.
- Workshops.
- Certifications.
- Academic achievements.
- Leadership or volunteering.

Hide the section if there are no genuine entries. Do not use empty cards or artificial awards to fill space.

## 2.9 Learning and Career Interests

Include a section titled "Currently Exploring" or "What I'm Learning".

Possible topics, subject to actual involvement:

- AI and Data Science.
- Machine learning fundamentals.
- Software development.
- Data structures and algorithms.
- Computer architecture and performance.
- Full-stack web development.

Each entry may contain a topic, brief description, related resource, and associated project.

The section should communicate ongoing development without implying mastery of every listed subject.

---

# 3. Design System and Visual Direction

## 3.1 Design Philosophy

Use a **clean academic-professional editorial design**.

The portfolio should look like a carefully designed personal website belonging to an ambitious engineering student—not a generic startup landing page.

Visual priorities:

- White or warm off-white backgrounds.
- Blue primary accents.
- Dark-red accents for selected headings or highlights.
- Near-black body text.
- Generous whitespace.
- Clear typography.
- Subtle borders and shadows.
- Structured cards and timelines.
- Simple technical diagrams or illustrations where useful.

Avoid neon colors, excessive gradients, a dark futuristic aesthetic, excessive glassmorphism, and distracting animations.

## 3.2 Color Palette

Define colors as CSS variables so they can be changed globally.

| Token | Suggested value | Purpose |
|---|---|---|
| Primary | `#2457C5` | Buttons, links, selected elements |
| Primary hover | `#1B4297` | Hover state |
| Heading | `#20283A` | Main headings |
| Body | `#394150` | Paragraphs |
| Muted | `#687386` | Secondary text |
| Background | `#FFFFFF` | Main canvas |
| Alternate background | `#F5F7FB` | Section backgrounds |
| Border | `#E1E6EF` | Card borders and dividers |
| Accent red | `#8E2635` | Select headings and small highlights |
| Success | `#18794E` | Success states |
| Error | `#B42318` | Error states |

Verify contrast before finalizing. Never rely on color alone to communicate a state.

## 3.3 Typography

Use a consistent font system.

Suggested pairing:

- Headings: `Manrope`.
- Body: `Inter`.
- Fallback: system sans-serif.

Load fonts through a reliable provider or use locally available/system fallbacks. Avoid making the entire site dependent on a third-party font request.

Typography scale:

- Hero headline: responsive, approximately 2.8–4.5rem on desktop.
- Section headings: 2–2.5rem.
- Card headings: 1.15–1.4rem.
- Body text: 1rem–1.125rem.
- Supporting labels: 0.8–0.95rem.

Maintain readable line lengths and comfortable line spacing.

## 3.4 Layout

- Maximum content width: approximately 1,160–1,240px.
- Desktop side padding: 40–64px.
- Tablet side padding: 24–32px.
- Mobile side padding: 18–22px.
- Section vertical spacing: approximately 80–112px on desktop and 52–72px on mobile.
- Card corner radius: approximately 12–18px.
- Consistent grid and spacing tokens.

Avoid oversized empty areas that push meaningful content far below the fold.

## 3.5 Motion and Interaction

Use restrained motion for:

- Section reveal.
- Button hover.
- Card hover.
- Navigation state changes.
- Small decorative illustrations.

Requirements:

- Respect `prefers-reduced-motion`.
- Avoid animation that blocks interaction.
- Avoid cursor-following effects, excessive parallax, and continuous movement.
- Never hide essential information behind an animation.
- Do not delay navigation to finish an animation.

Use CSS transitions for simple effects. Introduce an animation library only if it materially improves the experience.

---

# 4. Information Architecture

## 4.1 Primary Navigation

Desktop navigation:

- Home.
- About.
- Education.
- Skills.
- Projects.
- Learning.
- Contact.

The résumé link may be a visually distinct navigation action.

Mobile navigation should collapse into an accessible menu with keyboard support and a visible close action.

## 4.2 Page Structure

The first version may use a single-page layout with section anchors, plus dedicated project-detail pages if required.

Recommended order:

1. Header.
2. Hero.
3. About.
4. Education.
5. Skills.
6. Featured projects.
7. Experience and achievements.
8. Learning and interests.
9. Contact.
10. Footer.

Optional routes:

- `/projects` — complete project listing.
- `/projects/:slug` — project detail.
- `/admin` — optional protected management interface.
- Not-found page for unknown URLs.

Do not create multiple pages merely to split content that works better as a single scrolling portfolio.

## 4.3 Header Requirements

- Brand text or name on the left.
- Navigation on the right.
- Visible active-section state.
- Résumé action where appropriate.
- Responsive mobile menu.
- Sticky positioning only if it does not obscure content.
- Correct focus behavior when opening or closing the mobile menu.

## 4.4 Footer Requirements

Include:

- Developer name.
- Institution or field of study, if desired.
- GitHub and LinkedIn links.
- Email link.
- Copyright year generated dynamically.
- Back-to-top link.

Do not add fake social accounts, testimonials, or visitor counts.

---

# 5. Detailed Component Specifications

## 5.1 Hero Component

**Component:** `HeroSection`

Responsibilities:

- Present the main identity and value proposition.
- Display the name, field, institution, and CGPA.
- Offer navigation to projects and contact.
- Provide résumé download.
- Optionally include a portrait or a restrained technical illustration.

Acceptance criteria:

- Primary heading is the page's main H1.
- At least one primary CTA works.
- Résumé link points to a real file.
- Hero remains readable at 320px viewport width.
- No horizontal overflow.
- Essential text is visible without hover.

## 5.2 About Component

**Component:** `AboutSection`

Responsibilities:

- Present the developer's background and interests.
- Support one or more paragraphs.
- Optionally display two or three concise highlights.

Acceptance criteria:

- No excessive wall of text.
- No unverified personal claims.
- Paragraph width remains comfortable to read.

## 5.3 Education Component

**Component:** `EducationSection`

Responsibilities:

- Display the institution and degree.
- Highlight the 9.02 CGPA.
- Present relevant coursework when provided.

Acceptance criteria:

- CGPA is visually noticeable but not exaggerated.
- Institution and degree information remain accessible on mobile.
- Missing dates are hidden instead of fabricated.

## 5.4 Skills Component

**Component:** `SkillsSection`

Responsibilities:

- Display categorized technical skills.
- Support icons when appropriate.
- Allow adding or removing skills without restructuring the UI.

Acceptance criteria:

- Categories are visually distinguishable.
- Icons include accessible labels where necessary.
- No meaningless skill percentage is displayed.
- Layout supports a variable number of skills.

## 5.5 Project Card

**Component:** `ProjectCard`

Each card includes:

- Project title.
- Summary.
- Technology tags.
- Status.
- Repository link.
- Demo link when available.
- Optional thumbnail.

Behavior:

- Clicking an explicit details action opens the project-detail page.
- External links open appropriately.
- Cards without demos do not show dead demo buttons.
- Projects with unavailable repositories do not show fabricated URLs.

## 5.6 Project Filtering

If project listing is implemented:

- Filter by technology or category.
- Provide an "All" option.
- Update results without reloading the page.
- Display a helpful empty state when no projects match.
- Make filters usable with a keyboard.
- Keep filter state understandable and predictable.

Avoid introducing complex search infrastructure for a small portfolio.

## 5.7 Contact Form

**Component:** `ContactSection`

Fields:

- Name — required.
- Email — required.
- Subject — optional or required according to final design.
- Message — required.
- Honeypot field — hidden from normal users and used for basic spam detection.

Behavior:

1. Validate fields on the client for convenience.
2. Submit to the backend API.
3. Validate all data again on the server.
4. Apply rate limiting.
5. Persist the submission in MongoDB.
6. Return a generic success message after successful persistence.
7. Display actionable validation or failure messages.
8. Prevent duplicate submissions while a request is in progress.

Success message:

"Thank you for reaching out. Your message has been received."

Failure message:

"Your message could not be sent right now. Please try again later or contact me directly by email."

Do not claim a message was received before the server confirms successful storage.

Do not expose MongoDB connection strings, internal exception details, or database errors to visitors.

## 5.8 Résumé Action

- Store the résumé in a stable public asset location, such as `frontend/public/resume.pdf`.
- Use a real PDF file.
- Provide an accessible download label.
- Verify the file exists before production deployment.
- Do not show the action if no résumé is available.
- Ensure deployment does not depend on a local computer path.

## 5.9 Loading and Error States

Every API-backed section must define:

- Initial loading state.
- Success state.
- Empty state.
- Error state.
- Retry behavior when appropriate.

A failed project API request must not crash the entire portfolio. Static profile content and navigation should remain usable wherever possible.

---

# 6. Functional Requirements

Use the following identifiers when implementing and testing the application.

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Render a responsive portfolio homepage | Must |
| FR-02 | Display accurate academic and profile details | Must |
| FR-03 | Display categorized technical skills | Must |
| FR-04 | Display featured projects | Must |
| FR-05 | Support working external project links | Must |
| FR-06 | Provide a functional résumé download | Must |
| FR-07 | Provide working social and email links | Must |
| FR-08 | Validate and submit contact form data | Must |
| FR-09 | Persist successful contact submissions in MongoDB | Must |
| FR-10 | Implement server-side input validation | Must |
| FR-11 | Implement rate limiting on contact submissions | Must |
| FR-12 | Deploy successfully on Vercel | Must |
| FR-13 | Include SEO metadata and social sharing metadata | Must |
| FR-14 | Support keyboard navigation and accessible forms | Must |
| FR-15 | Support project detail pages | Should |
| FR-16 | Support project filtering | Should |
| FR-17 | Provide an optional admin interface | Could |
| FR-18 | Integrate optional analytics | Could |

The release is not complete until all "Must" requirements pass their acceptance tests.

---

# 7. Non-Functional Requirements

## 7.1 Performance

Targets:

- Aim for a Lighthouse Performance score of 90 or above on representative production pages.
- Aim for Accessibility, Best Practices, and SEO scores of 90 or above where applicable.
- Avoid unnecessary JavaScript dependencies.
- Lazy-load below-the-fold images where appropriate.
- Optimize images into modern formats when supported.
- Reserve image dimensions to prevent layout shifts.
- Minimize blocking third-party resources.
- Avoid excessive client-side state management.

Core Web Vitals targets at the 75th percentile, when sufficient real-user data is available:

- LCP: at most 2.5 seconds.
- INP: at most 200 milliseconds.
- CLS: at most 0.1.

These are performance goals, not guaranteed results.

## 7.2 Accessibility

Target WCAG 2.2 AA principles.

Requirements:

- Semantic HTML.
- One clear H1.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Proper form labels.
- Accessible error messages.
- Sufficient text contrast.
- Alt text for meaningful images.
- Empty alt attributes for decorative images.
- Reduced-motion support.
- No interaction that requires a mouse.
- Appropriate accessible names for icon-only controls.

## 7.3 Responsive Design

Test at a minimum of:

- 320px mobile width.
- 375px mobile width.
- 768px tablet width.
- 1,024px laptop width.
- 1,440px desktop width.

The site must not exhibit horizontal overflow or clipped interactive elements at these widths.

## 7.4 Reliability

- Invalid API responses must be handled gracefully.
- Missing optional content must not crash components.
- API failures must produce useful user-facing feedback.
- Database connection failures must not expose secrets.
- Production errors must be logged appropriately without leaking private information.

## 7.5 Maintainability

- Use small, focused components.
- Separate UI, business logic, API routes, and database models.
- Use consistent naming conventions.
- Use a single source of truth for profile content.
- Document environment variables.
- Use reusable design tokens.
- Avoid duplicated validation logic where a shared schema can be used.
- Avoid unnecessary abstractions.

## 7.6 Browser Compatibility

Support current stable versions of:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari.

Test mobile behavior in representative mobile browsers where available.

---

# 8. Technology Stack

## 8.1 Frontend

- React.
- Vite.
- JavaScript with JSX for a beginner-friendly initial implementation, or TypeScript if consistently supported by the generated project.
- React Router for optional multi-page navigation.
- CSS Modules, plain CSS, or another single consistent styling approach.
- Lucide React for icons, if needed.
- Fetch API for HTTP requests.

Choose one language strategy and use it consistently. Do not mix JavaScript and TypeScript randomly.

## 8.2 Backend

- Node.js.
- Express.js.
- MongoDB Node.js driver or Mongoose.
- Zod or an equivalent validation library.
- A rate-limiting middleware.
- A secure HTTP header middleware where compatible with the deployment architecture.

## 8.3 Database

- MongoDB Atlas.
- Separate development and production database configuration where practical.
- Indexed fields where queries require them.
- No public database access.
- Least-privilege database credentials.

## 8.4 Deployment

- Vercel for the frontend and serverless API deployment.
- MongoDB Atlas for the managed database.
- GitHub for source control.
- Environment variables configured through the deployment platform.

### Important deployment decision

Vercel is not a traditional always-running Node.js server host. The Express backend must be adapted to Vercel's supported serverless function model, or the backend must be hosted on a separate compatible service.

For this project, prefer a **single repository deployed on Vercel**, with React frontend assets and Express-compatible serverless API routes, provided the chosen Vercel runtime and routing setup supports the implementation.

Do not simply assume that a permanently listening Express server will run on Vercel.

Before implementation, Codex must verify the current supported Vercel Node.js runtime, function entry-point conventions, build configuration, and route rewrites using official documentation.

Do not create a second independent backend deployment unless the single-project approach proves incompatible or the project requirements change.

---

# 9. System Architecture

## 9.1 High-Level Architecture

```text
                  VISITOR
                     |
                     v
              React Frontend
               (Vite Build)
                     |
           ---------------------
           |                   |
           v                   v
    Static Portfolio      API Requests
                               |
                               v
                       Express API Layer
                               |
                    ----------------------
                    |                    |
                    v                    v
             Input Validation       Rate Limiting
                    |                    |
                    -----------+----------
                               |
                               v
                         Service Layer
                               |
                               v
                        MongoDB Atlas
                               |
                               v
                     Stored Contact Messages
```

The frontend should remain usable even when optional dynamic content cannot be loaded.

## 9.2 Frontend Responsibilities

- Render the interface.
- Manage navigation and local UI state.
- Fetch dynamic content.
- Validate input for user convenience.
- Submit contact messages.
- Display loading, success, and error states.
- Avoid storing server secrets.
- Avoid direct database connections.

## 9.3 Backend Responsibilities

- Expose API endpoints.
- Validate incoming data.
- Enforce rate limits.
- Normalize input.
- Persist contact messages.
- Retrieve projects if dynamic project management is implemented.
- Return consistent HTTP status codes and JSON responses.
- Log operational errors safely.

## 9.4 Database Responsibilities

- Store contact messages.
- Optionally store project entries.
- Enforce schema-level constraints where practical.
- Support required indexes.
- Keep data access restricted to the backend.

## 9.5 Data Flow: Contact Submission

```text
User fills form
      |
      v
Client-side validation
      |
      v
POST /api/contact
      |
      v
Server validates request
      |
      v
Rate-limit and spam checks
      |
      v
Normalize and validate data
      |
      v
Insert message into MongoDB
      |
      v
Return success response
      |
      v
Show success message to user
```

If validation fails, return a client error. If persistence fails, return a generic server error and do not show a success state.

---

# 10. Repository and Folder Structure

Use a single repository with a clean separation between frontend, backend, and shared configuration.

Recommended structure:

```text
personal-portfolio/
│
├── SPEC.md
├── README.md
├── .gitignore
├── .env.example
├── package.json
├── vercel.json
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   │
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── images/
│   │   └── resume.pdf
│   │
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── routes/
│       │   ├── HomePage.jsx
│       │   ├── ProjectsPage.jsx
│       │   ├── ProjectDetailPage.jsx
│       │   └── NotFoundPage.jsx
│       │
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── Container.jsx
│       │   ├── sections/
│       │   │   ├── HeroSection.jsx
│       │   │   ├── AboutSection.jsx
│       │   │   ├── EducationSection.jsx
│       │   │   ├── SkillsSection.jsx
│       │   │   ├── ProjectsSection.jsx
│       │   │   ├── ExperienceSection.jsx
│       │   │   ├── LearningSection.jsx
│       │   │   └── ContactSection.jsx
│       │   ├── projects/
│       │   │   ├── ProjectCard.jsx
│       │   │   └── ProjectFilters.jsx
│       │   └── ui/
│       │       ├── Button.jsx
│       │       ├── SectionHeading.jsx
│       │       ├── StatusMessage.jsx
│       │       └── LoadingState.jsx
│       │
│       ├── data/
│       │   ├── profile.js
│       │   ├── skills.js
│       │   └── education.js
│       │
│       ├── services/
│       │   ├── api.js
│       │   ├── contactService.js
│       │   └── projectService.js
│       │
│       ├── hooks/
│       ├── styles/
│       │   ├── globals.css
│       │   ├── variables.css
│       │   └── utilities.css
│       │
│       └── utils/
│
├── api/
│   ├── index.js
│   └── lib/
│       ├── app.js
│       ├── db.js
│       ├── config.js
│       ├── errors.js
│       ├── validation.js
│       ├── middleware/
│       │   ├── rateLimit.js
│       │   └── errorHandler.js
│       ├── routes/
│       │   ├── health.js
│       │   ├── contact.js
│       │   └── projects.js
│       ├── controllers/
│       │   ├── contactController.js
│       │   └── projectController.js
│       ├── services/
│       │   ├── contactService.js
│       │   └── projectService.js
│       └── models/
│           ├── ContactMessage.js
│           └── Project.js
│
└── tests/
    ├── frontend/
    ├── backend/
    └── e2e/
```

This is a logical target structure, not a requirement to create every file immediately. Remove empty folders and unnecessary abstractions.

If Vercel requires a different API entry-point convention for the selected runtime, adjust the structure while preserving the separation of concerns.

Do not maintain two different implementations of the same route.

---

# 11. Database Design

## 11.1 Database Name

Use a configurable database name, such as:

`personal_portfolio`

The actual database connection string must be supplied through an environment variable.

## 11.2 ContactMessage Collection

Each contact submission should contain the following fields:

| Field | Type | Constraints |
|---|---|---|
| `_id` | ObjectId | Generated by MongoDB |
| `name` | String | Required, 2–80 characters |
| `email` | String | Required, valid email, maximum 254 characters |
| `subject` | String | Optional, maximum 120 characters |
| `message` | String | Required, 10–3,000 characters |
| `createdAt` | Date | Generated by the server |
| `status` | String | Optional internal status |
| `source` | String | Optional controlled source label |

Do not store raw request headers, passwords, authentication tokens, or unnecessary personal information.

The server must ignore client-supplied timestamps and other fields that users should not control.

### Example logical record

```json
{
  "name": "Example Visitor",
  "email": "visitor@example.com",
  "subject": "Project Collaboration",
  "message": "I would like to discuss your project.",
  "createdAt": "SERVER_GENERATED_TIMESTAMP"
}
```

This is a schema illustration, not a real submission.

## 11.3 Project Collection

If projects are stored dynamically, use a collection with these fields:

| Field | Type | Constraints |
|---|---|---|
| `_id` | ObjectId | Generated |
| `title` | String | Required |
| `slug` | String | Required, unique |
| `summary` | String | Required |
| `description` | String | Optional |
| `technologies` | String array | Controlled list |
| `features` | String array | Optional |
| `repositoryUrl` | String | Optional, validated URL |
| `demoUrl` | String | Optional, validated URL |
| `imageUrl` | String | Optional |
| `status` | String | Controlled values |
| `featured` | Boolean | Default false |
| `sortOrder` | Number | Optional |
| `createdAt` | Date | Server generated |
| `updatedAt` | Date | Server generated |

Allowed project statuses:

- `planning`
- `in-progress`
- `completed`

Do not expose unpublished or private project information through public API responses.

## 11.4 Database Indexes

Create only indexes that support actual query requirements.

Suggested indexes:

- Contact messages: `createdAt` descending if messages are queried by date.
- Projects: unique index on `slug`.
- Projects: compound index on `featured` and `sortOrder` if used by the listing query.

If project records are only sorted in memory due to a very small dataset, do not add unnecessary indexes.

## 11.5 Data Retention

Define a retention policy before production.

For example, contact submissions may be reviewed and deleted after a suitable period. The exact retention period should be chosen based on the developer's needs and applicable privacy requirements.

Do not introduce automatic deletion until the retention policy has been explicitly decided.

---

# 12. Backend API Specification

All API responses should use JSON unless a route explicitly serves another content type.

Use the prefix `/api`.

## 12.1 Health Check

**Endpoint:** `GET /api/health`

Purpose:

- Verify that the API is reachable.
- Support basic deployment diagnostics.

Success:

```json
{
  "success": true,
  "data": {
    "status": "ok"
  }
}
```

Do not expose connection strings, internal paths, package details, or stack traces through this endpoint.

If database health is included, report a minimal status without revealing infrastructure details.

## 12.2 Get Projects

**Endpoint:** `GET /api/projects`

Purpose:

- Return publicly visible projects.

Optional query parameters:

- `featured=true`
- `technology=React`
- `status=completed`

Only allow recognized filter values. Validate pagination if pagination is implemented.

Success:

```json
{
  "success": true,
  "data": {
    "projects": []
  }
}
```

Return an empty array when no projects match.

Public API output must exclude private administrative metadata.

## 12.3 Get Project by Slug

**Endpoint:** `GET /api/projects/:slug`

Purpose:

- Return one publicly visible project.

Behavior:

- Validate the slug.
- Return `404` if the project does not exist or is not public.
- Return only the fields required by the client.

## 12.4 Submit Contact Message

**Endpoint:** `POST /api/contact`

Request body:

```json
{
  "name": "Example Visitor",
  "email": "visitor@example.com",
  "subject": "Hello",
  "message": "I would like to connect with you."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Your message has been received."
}
```

Recommended status codes:

- `201 Created` — message successfully stored.
- `400 Bad Request` — malformed JSON or invalid input.
- `413 Content Too Large` — request body exceeds the configured limit.
- `415 Unsupported Media Type` — unsupported request content type.
- `429 Too Many Requests` — rate limit exceeded.
- `500 Internal Server Error` — unexpected failure.
- `503 Service Unavailable` — database temporarily unavailable, where appropriate.

Never return a successful response when database insertion fails.

## 12.5 Error Response Convention

Use a consistent response shape:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the submitted fields."
  }
}
```

For field validation errors, optionally include a `fields` object containing safe, user-readable messages.

Do not include raw exception objects or stack traces in production responses.

---

# 13. API Validation and Security

## 13.1 Server-Side Validation

Validate all user-submitted fields on the server.

Requirements:

- Trim surrounding whitespace.
- Enforce minimum and maximum lengths.
- Validate email format.
- Validate URL schemes for project links.
- Reject unexpected fields when practical.
- Reject malformed request bodies.
- Normalize controlled enum values.
- Never trust client-side validation alone.

Use a validation library to make schemas explicit and testable.

## 13.2 Input Safety

- Render visitor messages as plain text.
- Do not interpret user-provided text as HTML.
- Avoid unsafe HTML injection APIs.
- Never build MongoDB queries directly from untrusted request objects.
- Use explicit field selection and allowlists.
- Do not accept arbitrary MongoDB operators from clients.

## 13.3 Rate Limiting

Implement a limit on contact submissions.

Initial policy suggestion:

- A modest limit, such as 5 submissions per 15 minutes per client IP.
- A clear `429` response.
- A retry message that does not reveal internal implementation details.

The exact limit should be adjustable through configuration.

**Deployment consideration:** serverless instances may not share in-memory rate-limit state. An in-memory limiter is suitable only for basic development protection. For production, choose a shared rate-limit store or a platform-supported protection mechanism if consistent global limits are required.

Do not trust arbitrary client-supplied forwarding headers to determine identity without understanding the trusted proxy configuration.

## 13.4 Honeypot Protection

- Add a hidden field that normal users should not fill.
- If the field is populated, reject or safely discard the submission.
- Never use a CSS-hidden field that remains unnecessarily prominent to assistive technology.
- Do not rely on a honeypot as the only spam defense.

## 13.5 CORS

If the frontend and API share the same Vercel origin, prefer same-origin requests and avoid unnecessarily broad CORS configuration.

If separate origins are used:

- Explicitly allow known frontend origins.
- Do not combine wildcard origins with credentialed requests.
- Configure production and development origins separately.

## 13.6 Security Headers

Configure appropriate headers such as:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `X-Frame-Options` or a suitable `frame-ancestors` policy
- A Content Security Policy appropriate to the actual resources used.

Test the policy before enforcing it. Do not break font loading, images, or API requests through an overly restrictive policy.

## 13.7 Secrets Management

Never commit:

- MongoDB connection strings.
- API keys.
- Email provider credentials.
- Admin passwords.
- Session secrets.
- Private deployment tokens.

Use environment variables and keep `.env` files out of Git.

---

# 14. Environment Configuration

Create `.env.example` at the repository root with documented placeholders.

Example:

```dotenv
NODE_ENV=development
MONGODB_URI=
MONGODB_DB_NAME=personal_portfolio
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_MS=900000
```

Add any genuinely required frontend variables or third-party integration settings only when the implementation needs them.

Important rules:

1. `.env.example` contains no real credentials.
2. Local secrets stay in ignored environment files.
3. Production secrets are configured in Vercel Project Settings.
4. Only variables explicitly designed for browser exposure may be placed in frontend-exposed environment variables.
5. Never use a frontend variable to hide a secret; client-exposed values are public.
6. Restart the development server after changing relevant local environment configuration.

The frontend should use relative API paths, such as `/api/contact`, when deployed on the same origin.

---

# 15. Vercel Deployment Specification

## 15.1 Deployment Goal

The production website should be accessible at a Vercel-generated URL and optionally through a custom domain.

Both static frontend delivery and required API endpoints must work in the deployed environment.

## 15.2 Build Strategy

Codex must choose and verify one deployment configuration before generating final deployment files.

Recommended starting approach:

- Build the React frontend with Vite.
- Deploy its generated static assets through Vercel.
- Deploy supported Node.js API functions in the same repository.
- Use MongoDB Atlas for persistent data.
- Use Vercel's current supported routing and build configuration.

Do not assume that setting a `builds` array, rewriting all requests to Express, or placing a standalone Express server in a function file is automatically correct. Verify the selected approach against current official documentation.

## 15.3 Routing

The deployment must support:

- `/` — homepage.
- `/projects` — project listing, if implemented.
- `/projects/:slug` — project details, if implemented.
- `/api/health` — health endpoint.
- `/api/projects` — project API.
- `/api/contact` — contact submission.

Static asset requests must not accidentally be sent to the API.

Frontend route rewrites must not override API routes.

## 15.4 MongoDB Atlas Configuration

- Create a database user with minimal permissions.
- Configure network access securely.
- Use supported connection pooling practices for serverless functions.
- Cache the connection or connection promise appropriately within a warm function instance.
- Avoid opening an unnecessary new connection on every request.
- Set reasonable connection timeouts.
- Handle connection failures gracefully.
- Never expose MongoDB credentials to the frontend.

## 15.5 Production Verification

After deployment, verify:

1. Homepage loads.
2. All sections display correctly.
3. Project links work.
4. Résumé downloads.
5. API health check responds correctly.
6. Contact validation works.
7. A valid contact message is stored in MongoDB.
8. Invalid submissions are rejected.
9. Rate limiting behaves as configured.
10. Refreshing a project-detail URL works if client-side routing is enabled.
11. Mobile navigation works.
12. Browser console and server logs contain no unresolved critical errors.

## 15.6 Custom Domain

Custom domain configuration is optional.

If a domain is connected:

- Verify DNS configuration.
- Verify HTTPS.
- Test both the root domain and `www` behavior if both are configured.
- Select one canonical URL for SEO.

Do not make the application dependent on purchasing a domain.

---

# 16. SEO and Social Sharing

## 16.1 Metadata

Include:

- Descriptive page title.
- Meta description.
- Canonical URL when the production URL is known.
- Open Graph title.
- Open Graph description.
- Open Graph image when available.
- Appropriate social sharing metadata.
- Favicon.

Suggested title:

"Harshitha P. M. | AI & Data Science Engineering Student"

Suggested description:

"Explore the portfolio of Harshitha P. M., an AI and Data Science engineering student at NMIT, featuring technical skills, academic background, and projects."

## 16.2 Structured Data

Optionally add appropriate `Person` structured data using only verified public information.

Do not fabricate:

- Job titles.
- Employer affiliations.
- Awards.
- Professional certifications.
- Public profile URLs.

Validate the structured data before deployment.

## 16.3 SEO Acceptance Criteria

- Every route has a meaningful title.
- The main page has a useful meta description.
- Images have appropriate alt text.
- Links have descriptive labels.
- Important content is rendered in crawlable HTML.
- No private API data is exposed.
- A custom 404 page exists.
- No fake testimonials or keyword stuffing.

---

# 17. Accessibility and User Experience Details

## 17.1 Navigation

- Use semantic `nav` and anchor elements.
- Provide a skip-to-content link.
- Maintain a logical tab order.
- Display visible keyboard focus.
- Ensure the mobile menu opens and closes through keyboard interaction.
- Close the mobile menu when appropriate after navigation.

## 17.2 Contact Form

Every field must have an associated label.

Validation errors must:

- Identify the affected field.
- Explain how to fix the issue.
- Be available to assistive technology.
- Remain visible long enough to be read.

Do not communicate errors only through red borders.

## 17.3 Motion

Provide a reduced-motion experience.

Users must not be required to watch an animation to access the content.

## 17.4 Touch Interaction

- Ensure buttons and links have comfortable touch targets.
- Avoid tightly packed icon links.
- Prevent hover-only functionality.
- Verify menus and form controls on touch devices.

---

# 18. Testing Strategy

Use a proportionate testing strategy. Tests must validate real behavior, not merely verify that files exist.

## 18.1 Unit Tests

Suggested tools:

- Vitest.
- React Testing Library.
- A suitable Node.js test runner for backend logic.

Test:

- Form validation.
- Data normalization.
- Project filtering.
- Profile configuration.
- API response formatting.
- Validation schemas.
- Error handling.
- Date and status formatting.

## 18.2 Backend Integration Tests

Test:

- Health endpoint.
- Valid contact submission.
- Missing required fields.
- Invalid email.
- Oversized message.
- Malformed JSON.
- Rate limit response.
- Database failure handling.
- Project listing.
- Project not-found response.
- Invalid project filters.

Use a dedicated test database or mock only the relevant database boundary. Never run destructive tests against production data.

## 18.3 Frontend Tests

Test:

- Hero content renders.
- CGPA and institution are displayed correctly.
- Navigation works.
- Skills are categorized.
- Project cards display valid links.
- Empty project lists render correctly.
- Contact form validation works.
- Submission loading state works.
- Success and failure states are announced accessibly.
- Mobile menu is operable by keyboard.

## 18.4 End-to-End Tests

Use Playwright or another suitable browser-testing framework.

Minimum scenarios:

1. Visit the homepage.
2. Navigate to Projects.
3. Open a project detail page, if implemented.
4. Navigate to Contact.
5. Submit invalid form data.
6. Submit a valid test message against a controlled test environment.
7. Confirm a success response.
8. Verify the résumé link.
9. Verify responsive layout.
10. Verify a nonexistent route.

## 18.5 Visual Regression and Responsive Testing

Manually or automatically inspect:

- Mobile header.
- Hero layout.
- Project grid.
- Contact form.
- Footer.
- Empty states.
- Long project titles.
- Large text scaling.

A visually polished desktop page is not sufficient if the mobile layout fails.

---

# 19. Acceptance Criteria

The following conditions define a successful first release.

## 19.1 Content

- [ ] Name, NMIT, AI&DS, and 9.02 CGPA are correct.
- [ ] Missing personal details are not invented.
- [ ] All visible links point to real destinations.
- [ ] Project descriptions reflect actual work.
- [ ] Résumé link points to an actual file.

## 19.2 Interface

- [ ] Visual design matches the specified professional style.
- [ ] All sections have consistent spacing and typography.
- [ ] Navigation works on desktop and mobile.
- [ ] No horizontal overflow exists at target widths.
- [ ] Interactive elements have hover and focus states.
- [ ] Reduced-motion preferences are respected.
- [ ] Loading, error, and empty states are implemented.

## 19.3 Backend

- [ ] API routes return consistent JSON.
- [ ] Server-side validation is active.
- [ ] Contact messages persist successfully.
- [ ] Database failures do not produce false success messages.
- [ ] Rate limiting is configured.
- [ ] Sensitive information is not returned to clients.
- [ ] Secrets are not committed.

## 19.4 Deployment

- [ ] Vercel build succeeds.
- [ ] Production routes work.
- [ ] MongoDB Atlas connection works from the deployed API.
- [ ] The contact form works in production.
- [ ] Refreshing supported client-side routes works.
- [ ] No critical browser-console errors remain.
- [ ] Documentation explains deployment and environment setup.

## 19.5 Quality

- [ ] Required tests pass.
- [ ] No broken navigation or placeholder production links.
- [ ] Accessibility has been checked.
- [ ] SEO metadata is present.
- [ ] Lighthouse targets have been measured and reported honestly.

---

# 20. Development Phases

Codex must implement the application in phases rather than generating the entire system in one unreviewed operation.

## Phase 1 — Project Initialization

Tasks:

1. Inspect the existing repository.
2. Check installed Node.js and package-manager versions.
3. Determine whether the repository already contains application code.
4. Preserve existing work.
5. Create the initial folder structure.
6. Set up React and Vite.
7. Set up the backend entry point and Vercel-compatible deployment strategy.
8. Configure formatting and linting.
9. Create `.gitignore`.
10. Create `.env.example`.
11. Document the architecture.

Deliverables:

- Runnable frontend.
- Runnable or testable API structure.
- Initial README.
- Confirmed deployment approach.

Do not begin with animations or visual polish before the application builds.

## Phase 2 — Design System

Tasks:

1. Define CSS variables.
2. Configure typography.
3. Build responsive layout primitives.
4. Implement buttons, links, section headings, and reusable containers.
5. Add focus styles.
6. Add responsive breakpoints.

Deliverable:

A consistent design foundation that all later sections reuse.

## Phase 3 — Static Portfolio

Implement:

1. Header.
2. Hero.
3. About.
4. Education.
5. Skills.
6. Projects.
7. Experience and achievements.
8. Learning section.
9. Contact layout.
10. Footer.

Use a central profile configuration file.

At the end of this phase, the website must be visually usable even before dynamic API functionality is added.

## Phase 4 — Project Data and Routing

Tasks:

1. Define the project data model.
2. Choose static or database-backed project content.
3. Implement project cards.
4. Add filtering if included.
5. Implement project details if included.
6. Add loading and empty states.
7. Validate repository and demo links.

## Phase 5 — Contact API and Database

Tasks:

1. Configure MongoDB Atlas.
2. Implement database connection management.
3. Define the contact-message schema.
4. Implement request validation.
5. Implement the contact controller and service.
6. Implement rate limiting.
7. Implement spam checks.
8. Add consistent error responses.
9. Connect the frontend form.
10. Add backend integration tests.

## Phase 6 — Security and Accessibility

Tasks:

1. Verify server-side validation.
2. Check secret handling.
3. Configure appropriate security headers.
4. Verify API routing and CORS.
5. Test keyboard navigation.
6. Test contrast.
7. Test screen-reader labels.
8. Test reduced motion.
9. Verify error announcements.

## Phase 7 — Quality Assurance

Tasks:

1. Run linting.
2. Run unit tests.
3. Run integration tests.
4. Run end-to-end tests.
5. Run a production build.
6. Test mobile breakpoints.
7. Check all internal and external links.
8. Measure Lighthouse performance.
9. Resolve critical defects.

## Phase 8 — Deployment

Tasks:

1. Configure the Vercel project.
2. Set environment variables.
3. Verify MongoDB Atlas access.
4. Deploy to a preview environment.
5. Test the complete application.
6. Fix deployment-specific failures.
7. Promote to production.
8. Update the README with the final deployment instructions.

## Phase 9 — Optional Enhancements

Only after the core release is stable:

- Admin interface.
- Blog.
- Advanced project filtering.
- Analytics.
- Theme switching.
- Additional integrations.

---

# 21. Git and Development Workflow

Use small, reviewable changes.

Suggested commit sequence:

1. `chore: initialize portfolio project`
2. `feat: establish portfolio design system`
3. `feat: build responsive homepage sections`
4. `feat: add education and skills sections`
5. `feat: implement project cards and routing`
6. `feat: implement contact API`
7. `feat: persist contact messages in MongoDB`
8. `test: add API and frontend tests`
9. `fix: address responsive and accessibility issues`
10. `chore: configure Vercel deployment`

These are examples, not mandatory commit messages.

Before committing:

- Inspect changed files.
- Remove unused imports and debug statements.
- Confirm no secrets are staged.
- Run relevant tests.
- Review the Git diff.

Do not commit `.env` files or database credentials.

---

# 22. README Requirements

The generated README must explain:

1. Project overview.
2. Technology stack.
3. Features.
4. Architecture.
5. Repository structure.
6. Prerequisites.
7. Local installation.
8. Environment configuration.
9. Frontend development command.
10. Backend development or API testing command.
11. Database setup.
12. Test commands.
13. Production build command.
14. Vercel deployment.
15. Troubleshooting.
16. How to update profile content.
17. How to add a project.
18. How to replace the résumé.
19. How to configure a custom domain.

All commands must match the actual package scripts and project configuration. Do not document commands that do not exist.

---

# 23. Implementation Rules for Codex

These instructions are mandatory during code generation.

## 23.1 General Rules

- Read this specification before implementing each phase.
- Inspect the repository before modifying it.
- Do not delete existing files without understanding their purpose.
- Do not replace the project with an unrelated template.
- Implement one phase at a time.
- Keep the project runnable after each phase.
- Prefer simple, readable solutions.
- Do not add dependencies without a clear purpose.
- Do not duplicate existing functionality.
- Do not invent profile details.
- Do not fabricate test results.
- Do not claim deployment succeeded without verification.

## 23.2 Architecture Rules

- Keep components focused.
- Keep API calls outside presentation components where practical.
- Separate routes, controllers, services, and database access when the complexity justifies it.
- Reuse validation schemas where appropriate.
- Keep personal profile content centrally configurable.
- Use consistent error handling.
- Use asynchronous error handling correctly.
- Avoid unnecessary global state.

## 23.3 Visual Rules

- Follow the specified white/off-white, blue, and restrained dark-red visual system.
- Do not use a dark futuristic theme.
- Do not introduce neon gradients.
- Avoid generic template sections that add no real value.
- Do not add fake testimonials, counters, awards, or client logos.
- Do not use emojis as a replacement for every icon.
- Use responsive CSS rather than fixed desktop dimensions.
- Prioritize visual hierarchy and readability.

## 23.4 Backend Rules

- Never expose secrets to the browser.
- Never trust frontend validation alone.
- Never accept arbitrary database query objects from clients.
- Never return success before data persistence succeeds.
- Never leak raw database errors to public responses.
- Use a compatible Vercel API deployment pattern.
- Avoid assumptions about persistent in-memory state in serverless functions.

## 23.5 Dependency Rules

Before adding a library:

1. Determine whether native browser or Node.js functionality is sufficient.
2. Check whether the library is compatible with the selected runtime.
3. Use the existing package manager.
4. Avoid installing overlapping libraries.
5. Explain why the dependency is needed.

## 23.6 Completion Reports

At the end of every phase, Codex must report:

- What was implemented.
- Files created or modified.
- Commands executed.
- Tests run and their actual outcomes.
- Known limitations.
- Outstanding issues.
- Exact next steps.

Do not proceed to the next phase if the current phase has a critical build or runtime failure.

---

# 24. Master Prompt for Codex

Use the following prompt in Codex after saving this specification as `SPEC.md`.

## Initial instruction

You are acting as a senior full-stack software engineer, software architect, UI/UX designer, accessibility reviewer, and test engineer.

Your task is to implement the personal portfolio application described in `SPEC.md`.

Treat `SPEC.md` as the primary source of truth. Follow its requirements, design direction, architecture, security rules, acceptance criteria, and phased development plan.

### Your responsibilities

1. Inspect the existing workspace and understand its current state before changing files.
2. Read `SPEC.md` completely.
3. Create an implementation plan aligned with the development phases.
4. Identify technical uncertainties, especially Vercel's current serverless API conventions and MongoDB connection behavior.
5. Verify deployment-specific decisions against current official documentation when necessary.
6. Implement the application incrementally.
7. Run relevant commands and tests after each phase.
8. Fix errors before proceeding.
9. Keep all personal content configurable.
10. Never invent personal details, credentials, project accomplishments, or test results.

### Required development sequence

**First:** Inspect the repository and report its current structure. Then implement Phase 1 only.

**Second:** Confirm the application builds and its initial API architecture is compatible with the intended Vercel deployment.

**Third:** Implement the design system and static portfolio sections.

**Fourth:** Implement project functionality and the contact API.

**Fifth:** Complete validation, security, accessibility, and tests.

**Sixth:** Prepare and verify production deployment.

Do not generate the entire application in a single uncontrolled code dump. Work directly with the files in the VS Code workspace.

### Quality expectations

The final application must:

- Look polished and distinctive.
- Follow the clean academic-professional design specified in `SPEC.md`.
- Work across mobile, tablet, and desktop.
- Have functional navigation and external links.
- Handle loading, empty, success, and error states.
- Use MongoDB only through the backend.
- Protect database credentials and other secrets.
- Validate contact submissions on the server.
- Use a Vercel-compatible backend architecture.
- Include meaningful automated tests.
- Have a complete README.
- Pass the acceptance criteria in `SPEC.md`.

### Final instruction

Begin by inspecting the repository, reading `SPEC.md`, and presenting a concise implementation plan. Do not skip the repository inspection, overwrite existing work unnecessarily, or claim that a feature works until it has been tested.

---

# 25. Final Definition of Done

The project is complete when:

1. The portfolio presents the developer accurately and professionally.
2. The interface matches the specified visual system.
3. All required sections work on desktop and mobile.
4. Project links and résumé downloads work.
5. The contact form validates input and stores valid messages in MongoDB.
6. Server errors and invalid submissions are handled correctly.
7. Secrets remain private.
8. Automated tests for core functionality pass.
9. Vercel deployment succeeds.
10. The production API and database integration are verified.
11. SEO and accessibility requirements are checked.
12. The README provides accurate setup and deployment instructions.
13. All required acceptance criteria have been reviewed.
14. Remaining limitations are explicitly documented.

**The guiding principle:** Build a portfolio that demonstrates genuine technical ability through quality, clarity, real projects, and working functionality—not merely through visual effects or a long list of technologies.

End of specification.
