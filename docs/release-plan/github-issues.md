# GitHub Issue Backlog

This file mirrors the v1 product backlog as issue-ready work items. Actual GitHub issues could not be created from this environment because the repository has no configured Git remote and the GitHub CLI is not installed, so use this file as the source for manually creating issues or importing them later.

## Recommended Labels

- `v1`
- `priority:P0`
- `priority:P1`
- `sprint:1`
- `sprint:2`
- `sprint:3`
- `type:story`
- `area:foundation`
- `area:data`
- `area:entry-form`
- `area:photos`
- `area:browse`
- `area:detail`
- `area:editing`
- `area:search`
- `area:deployment`
- `area:qa`

## Issues

### Issue 1: STORY-001: App Foundation

**Labels:** `v1`, `priority:P0`, `sprint:1`, `type:story`, `area:foundation`
**Story Points:** 5

As a user,
I want a fast, mobile-friendly web app foundation,
So that I can use Cellar Notes reliably on my phone.

#### Acceptance Criteria

- [ ] Next.js app is created with TypeScript.
- [ ] Tailwind CSS is configured.
- [ ] Basic app shell exists with warm, premium visual direction.
- [ ] Navigation supports wine list, add wine, and detail route.
- [ ] App runs locally.
- [ ] No non-MVP features are scaffolded.

#### Tasks

- [ ] Create Next.js project structure.
- [ ] Configure Tailwind CSS.
- [ ] Add base layout and metadata.
- [ ] Add reusable page container component.
- [ ] Add initial navigation.
- [ ] Add empty placeholder pages for list and create flows.
- [ ] Verify mobile viewport layout.

#### Blockers / Prerequisites

None.

---

### Issue 2: STORY-002: Supabase Data Model

**Labels:** `v1`, `priority:P0`, `sprint:1`, `type:story`, `area:data`
**Story Points:** 5

As a user,
I want my wine entries to be saved,
So that my memories are available later.

#### Acceptance Criteria

- [ ] Supabase client is configured.
- [ ] Environment variables are documented.
- [ ] Wine entries table exists with all v1 fields.
- [ ] Rating supports only 1-100.
- [ ] Data model remains simple and avoids a complex wine database.

#### Tasks

- [ ] Define `WineEntry` TypeScript type.
- [ ] Create Supabase table migration or SQL setup instructions.
- [ ] Add Supabase browser/server client setup.
- [ ] Add create/read/update/delete helper functions.
- [ ] Add validation boundaries for rating.
- [ ] Document local env variables.

#### Blockers / Prerequisites

- STORY-001.

---

### Issue 3: STORY-003: Create Wine Entry

**Labels:** `v1`, `priority:P0`, `sprint:1`, `type:story`, `area:entry-form`
**Story Points:** 8

As a user,
I want to add a wine I drank,
So that I can remember the bottle and the story around it.

#### Acceptance Criteria

- [ ] User can open an add wine page.
- [ ] Form contains all v1 fields.
- [ ] Required fields are clear.
- [ ] Invalid rating values are rejected.
- [ ] Submitting creates a persisted wine entry.
- [ ] User receives success or error feedback.
- [ ] User is routed to detail view or wine list after creation.

#### Tasks

- [ ] Design form sections for bottle, taste/rating, and memory.
- [ ] Add inputs for all v1 fields.
- [ ] Add rating input with min/max validation.
- [ ] Add submit button loading state.
- [ ] Persist record to Supabase.
- [ ] Handle insert errors.
- [ ] Redirect after successful creation.
- [ ] Add mobile spacing improvements for long form.

#### Blockers / Prerequisites

- STORY-001.
- STORY-002.

---

### Issue 4: STORY-004: Upload Bottle or Label Photo

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:photos`
**Story Points:** 5

As a user,
I want to upload a label or bottle photo,
So that each wine memory is visually recognizable.

#### Acceptance Criteria

- [ ] User can attach one image while creating or editing an entry.
- [ ] Image uploads to Supabase Storage.
- [ ] Wine entry stores the image path or public URL.
- [ ] Uploaded image displays in card and detail views.
- [ ] UI handles upload progress/loading state.
- [ ] UI handles upload failure gracefully.
- [ ] Multi-photo albums are excluded from v1.

#### Tasks

- [ ] Create Supabase Storage bucket.
- [ ] Document bucket policy requirements.
- [ ] Add image file input.
- [ ] Validate file type as image.
- [ ] Upload selected file.
- [ ] Save image reference with wine entry.
- [ ] Show preview before submit if feasible.
- [ ] Display fallback image state if no photo exists.

#### Blockers / Prerequisites

- STORY-002.
- STORY-003.

---

### Issue 5: STORY-005: Browse Wine Cards

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:browse`
**Story Points:** 5

As a user,
I want to browse my wines as beautiful cards,
So that the app feels like a personal wine scrapbook instead of a spreadsheet.

#### Acceptance Criteria

- [ ] Wine list page fetches saved entries.
- [ ] Entries are displayed as cards.
- [ ] Each card includes photo, wine name, winery, vintage, rating, and region/country.
- [ ] Cards are mobile-friendly.
- [ ] Empty state encourages adding the first wine.
- [ ] Loading and error states are shown.

#### Tasks

- [ ] Add wine list data loading.
- [ ] Create `WineCard` component.
- [ ] Add responsive card layout.
- [ ] Add empty state CTA.
- [ ] Add error state.
- [ ] Add loading skeleton or simple loading message.
- [ ] Link each card to detail route.

#### Blockers / Prerequisites

- STORY-002.
- STORY-003.

---

### Issue 6: STORY-006: Wine Detail Page

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:detail`
**Story Points:** 5

As a user,
I want to view the full details of one wine,
So that I can relive the full memory around that bottle.

#### Acceptance Criteria

- [ ] User can open a wine detail page from a card.
- [ ] Detail page shows all saved v1 fields.
- [ ] Photo is shown prominently if available.
- [ ] Rating is visually emphasized.
- [ ] Missing optional fields do not create awkward blank sections.
- [ ] Detail page includes edit and delete entry actions.

#### Tasks

- [ ] Create dynamic route for wine ID.
- [ ] Add single-entry fetch helper.
- [ ] Render bottle metadata.
- [ ] Render memory metadata.
- [ ] Render notes.
- [ ] Add fallback states for missing fields.
- [ ] Add edit button.
- [ ] Add delete action entry point.

#### Blockers / Prerequisites

- STORY-005.

---

### Issue 7: STORY-007: Edit Wine Entry

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:editing`
**Story Points:** 5

As a user,
I want to edit a wine entry,
So that I can fix mistakes or add details later.

#### Acceptance Criteria

- [ ] User can open edit form from detail page.
- [ ] Existing values are prefilled.
- [ ] User can update any v1 field.
- [ ] Updated entry persists.
- [ ] User receives success/error feedback.
- [ ] User returns to detail page or list after saving.

#### Tasks

- [ ] Create edit route.
- [ ] Load entry by ID.
- [ ] Reuse or extract shared wine form component.
- [ ] Add update helper.
- [ ] Add save loading state.
- [ ] Redirect after save.
- [ ] Manually test editing each field group.

#### Blockers / Prerequisites

- STORY-003.
- STORY-006.

---

### Issue 8: STORY-008: Delete Wine Entry

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:editing`
**Story Points:** 3

As a user,
I want to delete a wine entry,
So that I can remove mistakes or unwanted records.

#### Acceptance Criteria

- [ ] User can delete from detail page.
- [ ] Delete action requires confirmation.
- [ ] Deleted entry is removed from browse list.
- [ ] User is redirected after deletion.
- [ ] Failed deletion shows an error.
- [ ] App does not accidentally delete without confirmation.

#### Tasks

- [ ] Add delete control.
- [ ] Add browser confirm or simple modal.
- [ ] Implement delete call.
- [ ] Add loading state.
- [ ] Redirect to wine list.
- [ ] Confirm deleted card disappears from list.

#### Blockers / Prerequisites

- STORY-006.

---

### Issue 9: STORY-009: Search and Filter Wines

**Labels:** `v1`, `priority:P0`, `sprint:2`, `type:story`, `area:search`
**Story Points:** 5

As a user,
I want to search or filter my wines,
So that I can quickly find a bottle I remember.

#### Acceptance Criteria

- [ ] User can search wines by practical MVP fields.
- [ ] Search works from the browse page.
- [ ] Results update clearly.
- [ ] Empty result state is shown.
- [ ] Scope remains simple; no advanced faceted search in v1.

#### Tasks

- [ ] Add search input component.
- [ ] Add local search query state.
- [ ] Implement case-insensitive filtering.
- [ ] Include wine name, winery, grape, region, country, occasion, and notes.
- [ ] Add clear button.
- [ ] Add no-results message.
- [ ] Verify search on mobile.

#### Blockers / Prerequisites

- STORY-005.

---

### Issue 10: STORY-010: Mobile Visual Polish

**Labels:** `v1`, `priority:P1`, `sprint:3`, `type:story`, `area:foundation`
**Story Points:** 5

As a user,
I want the app to feel warm, personal, and premium on my phone,
So that logging wine feels enjoyable and memorable.

#### Acceptance Criteria

- [ ] Main flows are comfortable on mobile.
- [ ] Typography, spacing, cards, and colors support the memory-book feel.
- [ ] Forms are readable and not cramped.
- [ ] Buttons and inputs are touch-friendly.
- [ ] Visual style aligns with `SPEC.md` and `docs/ui-ux-inspiration.md` if available.
- [ ] Polish does not introduce non-MVP features.

#### Tasks

- [ ] Audit mobile layout for each page.
- [ ] Add consistent spacing scale.
- [ ] Improve card image treatment.
- [ ] Add tasteful color palette.
- [ ] Improve button/input styling.
- [ ] Add empty-state copy.
- [ ] Add final visual pass.

#### Blockers / Prerequisites

- STORY-003.
- STORY-005.
- STORY-006.
- STORY-007.
- STORY-008.
- STORY-009.

---

### Issue 11: STORY-011: Deployment and Production Readiness

**Labels:** `v1`, `priority:P0`, `sprint:3`, `type:story`, `area:deployment`
**Story Points:** 5

As a user,
I want Cellar Notes deployed and stable,
So that I can use it from my phone anytime.

#### Acceptance Criteria

- [ ] App is deployed to Vercel.
- [ ] Production Supabase environment variables are configured.
- [ ] Storage works in production.
- [ ] README includes local setup and deployment steps.
- [ ] Manual smoke test passes in production.
- [ ] User can log 10 real or realistic sample bottles.

#### Tasks

- [ ] Add README setup section.
- [ ] Add README deployment section.
- [ ] Configure Vercel project.
- [ ] Add Supabase env vars to Vercel.
- [ ] Verify Supabase table access.
- [ ] Verify Supabase Storage access.
- [ ] Run production smoke test.
- [ ] Record known limitations.

#### Blockers / Prerequisites

- STORY-001 through STORY-010.

---

### Issue 12: STORY-012: v1 Manual QA

**Labels:** `v1`, `priority:P1`, `sprint:3`, `type:story`, `area:qa`
**Story Points:** 3

As a user,
I want the core app flows to be tested with realistic entries,
So that v1 is dependable enough for personal use.

#### Acceptance Criteria

- [ ] Manual QA checklist exists.
- [ ] At least 10 realistic wine entries are created during testing.
- [ ] Create, photo upload, browse, detail, edit, delete, search/filter, and mobile usage are tested.
- [ ] Critical defects are fixed before release.
- [ ] Non-critical defects are documented.

#### Tasks

- [ ] Write QA checklist.
- [ ] Create 10 realistic test entries.
- [ ] Test photo upload on mobile.
- [ ] Test edit and delete flows.
- [ ] Test search cases.
- [ ] Test empty states if possible.
- [ ] Test production deploy.
- [ ] Document known issues.

#### Blockers / Prerequisites

- STORY-011.
