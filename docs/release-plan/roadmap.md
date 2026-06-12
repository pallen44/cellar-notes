# Cellar Notes v1 Roadmap

## Product Goal

Ship a polished personal wine memory journal in approximately three weeks. v1 should let one person log real bottles with photos, ratings, tasting notes, memories, and basic browsing/search on mobile.

## MVP Discipline

v1 includes only the features listed in `SPEC.md`:

- Add a wine entry
- Upload a label/bottle photo
- Rate wine from 1-100
- Add winery, wine name, vintage, grape, region, country
- Add price, location, people, food pairing, occasion, and notes
- Browse all wines as cards
- View a wine detail page
- Edit and delete entries
- Search/filter wines
- Mobile-friendly design
- Deployable app

Explicitly excluded from v1:

- Social feed
- Friends
- OCR
- AI recommendations
- Public profiles
- Marketplace
- Restaurant/bar discovery
- Complex wine database
- Blind tasting mode
- Stats dashboards
- Wine map
- Printable exports
- QR tasting sessions
- Cellar inventory management
- Multi-user collaboration
- Public sharing
- Advanced wine taxonomy
- Recommendation engines

These belong in `future.md`.

## Milestone 1: Foundation and Wine Entry Creation

### Goal

Establish the application foundation and enable creating a complete wine memory entry with structured fields.

### Acceptance Criteria

- App is scaffolded with Next.js, TypeScript, and Tailwind CSS.
- Basic warm, premium, mobile-first layout exists.
- Supabase project integration is configured.
- Database table exists for wine entries.
- A user can create a wine entry with all required v1 fields except photo upload if storage is not yet complete.
- Form validation prevents invalid rating values outside 1-100.
- Created entries persist in Supabase.

### Dependencies

- Next.js project setup
- Supabase account/project
- Environment variables for Supabase URL and anon key
- Initial data model definition

### Risks

- Overbuilding authentication or multi-user behavior before it is needed
- Losing time on perfect visual polish too early
- Supabase schema changes causing rework if fields are not decided upfront
- Form becoming too large or awkward on mobile

## Milestone 2: Photos, Browsing, Detail, and Management

### Goal

Make the app useful as a personal journal by supporting photo upload, card browsing, detail views, editing, deleting, and search/filter.

### Acceptance Criteria

- A user can upload one bottle/label photo per wine entry.
- Photos are stored and displayed reliably.
- All wines appear in a card-based browse view.
- Cards show the most important memory cues: photo, wine name, winery, vintage, rating, region/country.
- A user can open a detail page for a wine.
- Detail page shows the full memory: people, location, occasion, food pairing, notes, and metadata.
- A user can edit an existing entry.
- A user can delete an entry after confirmation.
- A user can search/filter wines using MVP-level controls.
- Empty, loading, and error states are handled.

### Dependencies

- Milestone 1 complete
- Supabase Storage bucket configured
- Stable route structure
- Shared wine entry types/helpers

### Risks

- Photo upload edge cases may take longer than expected
- Edit form may duplicate create form logic unless planned carefully
- Search/filter scope may expand beyond MVP
- Delete flow may accidentally remove records without confirmation

## Milestone 3: Mobile Polish, QA, and Deployment

### Goal

Ship a finished, deployable v1 that can be used on a phone to log 10 real bottles.

### Acceptance Criteria

- App is deployed to Vercel.
- Production environment variables are configured.
- Core flows work on mobile:
  - Create entry
  - Upload photo
  - Browse cards
  - View detail
  - Edit entry
  - Delete entry
  - Search/filter entries
- UI has a warm, premium, memory-book feel.
- App has sensible empty states and error states.
- README contains setup and deployment instructions.
- v1 has been manually tested with at least 10 realistic sample wine entries.
- Non-MVP ideas are documented in `future.md` and not implemented.

### Dependencies

- Milestones 1 and 2 complete
- Vercel account/project
- Supabase production configuration
- Manual test data

### Risks

- Deployment issues with env vars or storage permissions
- Mobile UI inconsistencies discovered late
- Last-minute feature creep
- Insufficient manual testing with realistic entries

## Recommended Release Strategy

Use three one-week sprints:

1. **Sprint 1:** Foundation, data model, create entry
2. **Sprint 2:** Photos, browse, detail, edit/delete, search
3. **Sprint 3:** Polish, QA, deployment, documentation

The single developer should prioritize vertical slices over isolated infrastructure. Each sprint should leave the app in a demonstrably usable state.
