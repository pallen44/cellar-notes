# Sprint 1 Plan: Foundation and Create Flow

## Sprint Goal

Create the foundation for Cellar Notes and allow a user to save complete wine entries, excluding advanced polish and optional photo handling if needed.

## Duration

Week 1 of 3

## Sprint Commitment

- STORY-001: App Foundation
- STORY-002: Supabase Data Model
- STORY-003: Create Wine Entry

## Milestone Alignment

Milestone 1: Foundation and Wine Entry Creation

## Sprint Backlog

### STORY-001: App Foundation

As a user,
I want a fast, mobile-friendly web app foundation,
So that I can use Cellar Notes reliably on my phone.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Next.js app is created with TypeScript.
- Tailwind CSS is configured.
- Basic app shell exists with warm, premium visual direction.
- Navigation supports wine list and add wine flow.
- App runs locally.
- No non-MVP features are scaffolded.

#### Suggested Implementation Order

1. Scaffold app.
2. Configure Tailwind.
3. Create base layout.
4. Add placeholder pages.
5. Add initial responsive styling.

#### Tasks

- Create Next.js app.
- Configure TypeScript.
- Configure Tailwind CSS.
- Add base layout.
- Add initial navigation.
- Add list and create routes.
- Add mobile container styling.

#### Blockers / Prerequisites

- None.

### STORY-002: Supabase Data Model

As a user,
I want my wine entries to be saved,
So that my memories are available later.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Supabase client is configured.
- Wine entries table supports all v1 fields.
- Rating supports only 1-100.
- Environment variables are documented.
- Data model stays simple.

#### Suggested Implementation Order

1. Define fields.
2. Create Supabase table.
3. Add client setup.
4. Add data helpers.
5. Document env vars.

#### Tasks

- Define wine entry type.
- Create Supabase schema.
- Add Supabase client helper.
- Add insert/read helpers.
- Add rating validation.
- Document env vars.

#### Blockers / Prerequisites

- STORY-001.

### STORY-003: Create Wine Entry

As a user,
I want to add a wine I drank,
So that I can remember the bottle and the story around it.

#### Priority

P0

#### Story Points

8

#### Acceptance Criteria

- User can access add wine page.
- Form contains all v1 fields.
- Rating validates 1-100.
- Submit persists the wine entry.
- Success and error states exist.
- User is redirected after successful save.

#### Suggested Implementation Order

1. Build form sections.
2. Add local state.
3. Add validation.
4. Connect insert.
5. Add feedback and redirect.
6. Manually test.

#### Tasks

- Create add wine page.
- Add bottle metadata fields.
- Add memory fields.
- Add rating input.
- Add submit handling.
- Add validation.
- Add loading state.
- Add error message.
- Redirect after success.
- Test with at least 3 realistic entries.

#### Blockers / Prerequisites

- STORY-001.
- STORY-002.

## Sprint Acceptance Criteria

Sprint 1 is complete when:

- A developer can run the app locally.
- A user can create wine entries with all v1 non-photo fields.
- Entries persist in Supabase.
- Created entries can be verified through Supabase or a temporary list/read view.
- No future-scope features have been added.

## Risks

- Supabase setup may consume unexpected time.
- Form size may become unwieldy.
- Styling work may distract from core persistence.
- Photo upload may be tempting to start before create flow is stable.

## Blockers to Watch

- Missing Supabase credentials.
- Unclear database schema.
- Next.js/Supabase integration issues.
- Rating validation not enforced consistently.

## Definition of Done

- Code is committed.
- Story acceptance criteria are met.
- Main flow is manually tested.
- No known P0 defect remains in create flow.
- Any deferred work is noted for Sprint 2 or `future.md`.

## Sprint 1 Demo

Demonstrate:

1. Open app on mobile-sized viewport.
2. Navigate to add wine.
3. Create a wine entry with realistic data.
4. Confirm entry persists.
5. Show that non-MVP features are not present.
