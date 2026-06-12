# Cellar Notes v1 Product Backlog

## Priority Scale

- **P0:** Required for v1
- **P1:** Important for v1 polish
- **P2:** Only if time remains after all P0/P1 work

## Story Point Scale

Allowed values: 1, 2, 3, 5, 8

## STORY-001: App Foundation

As a user,
I want a fast, mobile-friendly web app foundation,
So that I can use Cellar Notes reliably on my phone.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- Next.js app is created with TypeScript.
- Tailwind CSS is configured.
- Basic app shell exists with warm, premium visual direction.
- Navigation supports the main v1 areas:
  - Wine list
  - Add wine
  - Wine detail route
- App runs locally.
- No non-MVP features are scaffolded.

### Suggested Implementation Order

1. Scaffold Next.js app.
2. Add TypeScript and Tailwind.
3. Create base layout.
4. Add placeholder routes/pages.
5. Apply initial design tokens for typography, color, spacing.

### Tasks

- Create Next.js project structure.
- Configure Tailwind CSS.
- Add base layout and metadata.
- Add reusable page container component.
- Add initial navigation.
- Add empty placeholder pages for list and create flows.
- Verify mobile viewport layout.

### Blockers / Prerequisites

- None.

## STORY-002: Supabase Data Model

As a user,
I want my wine entries to be saved,
So that my memories are available later.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- Supabase client is configured.
- Environment variables are documented.
- Wine entries table exists with fields for:
  - winery
  - wine name
  - vintage
  - grape
  - region
  - country
  - price
  - location
  - people
  - food pairing
  - occasion
  - notes
  - rating
  - photo URL/path
  - created timestamp
  - updated timestamp
- Rating supports only 1-100.
- Data model remains simple and avoids a complex wine database.

### Suggested Implementation Order

1. Define wine entry shape.
2. Create Supabase project/table.
3. Add Supabase client.
4. Add environment variable docs.
5. Add basic data access helpers.

### Tasks

- Define `WineEntry` TypeScript type.
- Create Supabase table migration or SQL setup instructions.
- Add Supabase browser/server client setup.
- Add create/read/update/delete helper functions.
- Add validation boundaries for rating.
- Document local env variables.

### Blockers / Prerequisites

- STORY-001.

## STORY-003: Create Wine Entry

As a user,
I want to add a wine I drank,
So that I can remember the bottle and the story around it.

### Priority

P0

### Story Points

8

### Acceptance Criteria

- User can open an add wine page.
- User can enter:
  - winery
  - wine name
  - vintage
  - grape
  - region
  - country
  - price
  - location
  - people
  - food pairing
  - occasion
  - notes
  - rating from 1-100
- Required fields are clear.
- Invalid rating values are rejected.
- Submitting creates a persisted wine entry.
- User receives success or error feedback.
- User is routed to either detail view or wine list after successful creation.

### Suggested Implementation Order

1. Build form UI.
2. Add local form state.
3. Add validation.
4. Connect to Supabase insert.
5. Add success/error states.
6. Test manually with realistic entries.

### Tasks

- Design create form sections:
  - Bottle
  - Taste/rating
  - Memory
- Add inputs for all v1 fields.
- Add rating input with min/max validation.
- Add submit button loading state.
- Persist record to Supabase.
- Handle insert errors.
- Redirect after successful creation.
- Add mobile spacing improvements for long form.

### Blockers / Prerequisites

- STORY-001.
- STORY-002.

## STORY-004: Upload Bottle or Label Photo

As a user,
I want to upload a label or bottle photo,
So that each wine memory is visually recognizable.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- User can attach one image while creating or editing an entry.
- Image uploads to Supabase Storage.
- Wine entry stores the image path or public URL.
- Uploaded image displays in card and detail views.
- UI handles upload progress/loading state.
- UI handles upload failure gracefully.
- App avoids multi-photo albums in v1.

### Suggested Implementation Order

1. Configure Supabase Storage bucket.
2. Add file input to form.
3. Upload file before or during save.
4. Store resulting image reference.
5. Render image in downstream views.

### Tasks

- Create Supabase Storage bucket.
- Document bucket policy requirements.
- Add image file input.
- Validate file type as image.
- Upload selected file.
- Save image reference with wine entry.
- Show preview before submit if feasible.
- Display fallback image state if no photo exists.

### Blockers / Prerequisites

- STORY-002.
- STORY-003.

## STORY-005: Browse Wine Cards

As a user,
I want to browse my wines as beautiful cards,
So that the app feels like a personal wine scrapbook instead of a spreadsheet.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- Wine list page fetches saved entries.
- Entries are displayed as cards.
- Each card includes:
  - photo if available
  - wine name
  - winery
  - vintage
  - rating
  - region/country
- Cards are mobile-friendly.
- Empty state encourages adding the first wine.
- Loading and error states are shown.

### Suggested Implementation Order

1. Fetch wine entries.
2. Build card component.
3. Render responsive grid/list.
4. Add empty/loading/error states.
5. Link cards to detail pages.

### Tasks

- Add wine list data loading.
- Create `WineCard` component.
- Add responsive card layout.
- Add empty state CTA.
- Add error state.
- Add loading skeleton or simple loading message.
- Link each card to detail route.

### Blockers / Prerequisites

- STORY-002.
- STORY-003.

## STORY-006: Wine Detail Page

As a user,
I want to view the full details of one wine,
So that I can relive the full memory around that bottle.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- User can open a wine detail page from a card.
- Detail page shows all saved v1 fields.
- Photo is shown prominently if available.
- Rating is visually emphasized.
- Missing optional fields do not create awkward blank sections.
- Detail page includes edit and delete entry actions.

### Suggested Implementation Order

1. Add dynamic detail route.
2. Fetch single wine entry.
3. Create detail layout.
4. Add edit/delete action links.
5. Polish mobile presentation.

### Tasks

- Create dynamic route for wine ID.
- Add single-entry fetch helper.
- Render bottle metadata.
- Render memory metadata.
- Render notes.
- Add fallback states for missing fields.
- Add edit button.
- Add delete action entry point.

### Blockers / Prerequisites

- STORY-005.

## STORY-007: Edit Wine Entry

As a user,
I want to edit a wine entry,
So that I can fix mistakes or add details later.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- User can open edit form from detail page.
- Existing values are prefilled.
- User can update any v1 field.
- Updated entry persists.
- User receives success/error feedback.
- User returns to detail page or list after saving.

### Suggested Implementation Order

1. Reuse create form structure.
2. Load existing entry.
3. Prefill fields.
4. Submit update.
5. Handle success/error states.

### Tasks

- Create edit route.
- Load entry by ID.
- Reuse or extract shared wine form component.
- Add update helper.
- Add save loading state.
- Redirect after save.
- Manually test editing each field group.

### Blockers / Prerequisites

- STORY-003.
- STORY-006.

## STORY-008: Delete Wine Entry

As a user,
I want to delete a wine entry,
So that I can remove mistakes or unwanted records.

### Priority

P0

### Story Points

3

### Acceptance Criteria

- User can delete from detail page.
- Delete action requires confirmation.
- Deleted entry is removed from browse list.
- User is redirected after deletion.
- Failed deletion shows an error.
- App does not accidentally delete without confirmation.

### Suggested Implementation Order

1. Add delete button to detail page.
2. Add confirmation UI.
3. Add delete helper.
4. Redirect to list after successful delete.
5. Handle failure.

### Tasks

- Add delete control.
- Add browser confirm or simple modal.
- Implement delete call.
- Add loading state.
- Redirect to wine list.
- Confirm deleted card disappears from list.

### Blockers / Prerequisites

- STORY-006.

## STORY-009: Search and Filter Wines

As a user,
I want to search or filter my wines,
So that I can quickly find a bottle I remember.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- User can search wines by practical MVP fields:
  - wine name
  - winery
  - grape
  - region
  - country
  - occasion
  - notes
- Search works from the browse page.
- Results update clearly.
- Empty result state is shown.
- Scope remains simple; no advanced faceted search in v1.

### Suggested Implementation Order

1. Add search input to browse page.
2. Filter client-side if dataset is small.
3. Include key text fields.
4. Add no-results state.
5. Add clear search action.

### Tasks

- Add search input component.
- Add local search query state.
- Implement case-insensitive filtering.
- Include relevant v1 fields in search.
- Add clear button.
- Add no-results message.
- Verify search on mobile.

### Blockers / Prerequisites

- STORY-005.

## STORY-010: Mobile Visual Polish

As a user,
I want the app to feel warm, personal, and premium on my phone,
So that logging wine feels enjoyable and memorable.

### Priority

P1

### Story Points

5

### Acceptance Criteria

- Main flows are comfortable on mobile.
- Typography, spacing, cards, and colors support the memory-book feel.
- Forms are readable and not cramped.
- Buttons and inputs are touch-friendly.
- Visual style aligns with `SPEC.md` and `docs/ui-ux-inspiration.md` if available.
- Polish does not introduce non-MVP features.

### Suggested Implementation Order

1. Review all pages on mobile.
2. Improve spacing and typography.
3. Improve card and detail presentation.
4. Improve form grouping.
5. Fix obvious visual inconsistencies.

### Tasks

- Audit mobile layout for each page.
- Add consistent spacing scale.
- Improve card image treatment.
- Add tasteful color palette.
- Improve button/input styling.
- Add empty-state copy.
- Add final visual pass.

### Blockers / Prerequisites

- STORY-003.
- STORY-005.
- STORY-006.
- STORY-007.
- STORY-008.
- STORY-009.

## STORY-011: Deployment and Production Readiness

As a user,
I want Cellar Notes deployed and stable,
So that I can use it from my phone anytime.

### Priority

P0

### Story Points

5

### Acceptance Criteria

- App is deployed to Vercel.
- Production Supabase environment variables are configured.
- Storage works in production.
- README includes local setup and deployment steps.
- Manual smoke test passes in production.
- User can log 10 real or realistic sample bottles.

### Suggested Implementation Order

1. Prepare environment variable documentation.
2. Connect repo to Vercel.
3. Configure production env vars.
4. Deploy.
5. Perform smoke test.
6. Fix deployment-only issues.

### Tasks

- Add README setup section.
- Add README deployment section.
- Configure Vercel project.
- Add Supabase env vars to Vercel.
- Verify Supabase table access.
- Verify Supabase Storage access.
- Run production smoke test.
- Record known limitations.

### Blockers / Prerequisites

- STORY-001 through STORY-010.

## STORY-012: v1 Manual QA

As a user,
I want the core app flows to be tested with realistic entries,
So that v1 is dependable enough for personal use.

### Priority

P1

### Story Points

3

### Acceptance Criteria

- Manual QA checklist exists.
- At least 10 realistic wine entries are created during testing.
- Each core flow is tested:
  - create
  - photo upload
  - browse
  - detail
  - edit
  - delete
  - search/filter
  - mobile usage
- Critical defects are fixed before release.
- Non-critical defects are documented.

### Suggested Implementation Order

1. Create manual QA checklist.
2. Test locally.
3. Test production.
4. Fix critical issues.
5. Document remaining known issues.

### Tasks

- Write QA checklist.
- Create 10 realistic test entries.
- Test photo upload on mobile.
- Test edit and delete flows.
- Test search cases.
- Test empty states if possible.
- Test production deploy.
- Document known issues.

### Blockers / Prerequisites

- STORY-011.

## MVP Cut Line

If schedule pressure occurs, preserve these at all costs:

1. STORY-001: App Foundation
2. STORY-002: Supabase Data Model
3. STORY-003: Create Wine Entry
4. STORY-004: Upload Bottle or Label Photo
5. STORY-005: Browse Wine Cards
6. STORY-006: Wine Detail Page
7. STORY-007: Edit Wine Entry
8. STORY-008: Delete Wine Entry
9. STORY-009: Search and Filter Wines
10. STORY-011: Deployment and Production Readiness

Can be reduced if necessary:

- STORY-010: Mobile Visual Polish
- STORY-012: v1 Manual QA

Do not cut basic manual smoke testing, even if STORY-012 is reduced.

## Explicit Future Backlog

Move or keep these in `future.md`; do not implement in v1:

- Social feed
- Friends
- OCR label scanning
- AI sommelier recommendations
- Public profiles
- Marketplace
- Restaurant/bar discovery
- Complex wine database
- Blind tasting mode
- Food pairing suggestions
- Flavor wheel
- Wine map
- Stats by grape/country/price
- Export printable journal pages
- Public tasting groups
- QR code tasting sessions
- Cellar inventory tracking
- Multi-photo galleries
- Advanced filtering and saved searches
- Authentication beyond what is strictly necessary for a personal v1
