# Sprint 2 Plan: Photos, Browsing, Detail, and Management

## Sprint Goal

Turn Cellar Notes into a usable personal journal by adding photo upload, card browsing, detail pages, editing, deleting, and MVP search/filter.

## Duration

Week 2 of 3

## Sprint Commitment

- STORY-004: Upload Bottle or Label Photo
- STORY-005: Browse Wine Cards
- STORY-006: Wine Detail Page
- STORY-007: Edit Wine Entry
- STORY-008: Delete Wine Entry
- STORY-009: Search and Filter Wines
- STORY-013 partial: component, integration, and search/filter tests

## Milestone Alignment

Milestone 2: Photos, Browsing, Detail, and Management

## Sprint Backlog

### STORY-004: Upload Bottle or Label Photo

As a user,
I want to upload a label or bottle photo,
So that each wine memory is visually recognizable.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- User can upload one image per entry.
- Image is stored in Supabase Storage.
- Entry stores image reference.
- Image displays in card and detail contexts.
- Upload failure is handled.
- Multi-photo albums are excluded.

#### Suggested Implementation Order

1. Configure storage bucket.
2. Add image input.
3. Upload file.
4. Store image reference.
5. Display image.

#### Tasks

- Configure Supabase Storage bucket.
- Document bucket policy.
- Add image picker to form.
- Add upload helper.
- Save image URL/path.
- Show upload loading state.
- Add no-image fallback.
- Test upload with phone photo dimensions.
- Add mocked success/failure tests for photo upload helper.

#### Blockers / Prerequisites

- STORY-002.
- STORY-003.

### STORY-005: Browse Wine Cards

As a user,
I want to browse my wines as beautiful cards,
So that the app feels like a personal wine scrapbook instead of a spreadsheet.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Wine list fetches saved entries.
- Entries render as cards.
- Cards show photo, name, winery, vintage, rating, region/country.
- Cards work on mobile.
- Empty/loading/error states exist.
- Cards link to detail pages.

#### Suggested Implementation Order

1. Fetch entries.
2. Build card component.
3. Render responsive list/grid.
4. Add states.
5. Link to detail.

#### Tasks

- Add list data fetch.
- Create wine card component.
- Add responsive grid/list.
- Add loading state.
- Add empty state.
- Add error state.
- Link cards to details.

#### Blockers / Prerequisites

- STORY-003.
- STORY-004 for photo display, though card layout can start before upload is complete.

### STORY-006: Wine Detail Page

As a user,
I want to view the full details of one wine,
So that I can relive the full memory around that bottle.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Detail page opens from a card.
- Full wine entry fields are shown.
- Photo is prominent if available.
- Rating is emphasized.
- Missing optional fields are handled cleanly.
- Edit and delete actions are accessible.

#### Suggested Implementation Order

1. Add dynamic route.
2. Fetch by ID.
3. Render detail.
4. Add actions.
5. Polish mobile layout.

#### Tasks

- Create dynamic detail route.
- Add fetch-by-ID helper.
- Render image/rating header.
- Render bottle metadata.
- Render memory fields.
- Render notes.
- Add edit link.
- Add delete entry point.
- Add not-found state.

#### Blockers / Prerequisites

- STORY-005.

### STORY-007: Edit Wine Entry

As a user,
I want to edit a wine entry,
So that I can fix mistakes or add details later.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Edit form opens from detail page.
- Existing values are prefilled.
- Any v1 field can be updated.
- Updated entry persists.
- Success/error states exist.
- User returns to detail or list after save.

#### Suggested Implementation Order

1. Extract shared form if needed.
2. Load existing entry.
3. Prefill form.
4. Submit update.
5. Redirect after save.

#### Tasks

- Create edit route.
- Reuse create form where practical.
- Add initial values.
- Add update helper.
- Add save loading state.
- Add update error handling.
- Test editing key fields.
- Test updating photo if included.

#### Blockers / Prerequisites

- STORY-003.
- STORY-006.

### STORY-008: Delete Wine Entry

As a user,
I want to delete a wine entry,
So that I can remove mistakes or unwanted records.

#### Priority

P0

#### Story Points

3

#### Acceptance Criteria

- Delete is available from detail page.
- Confirmation is required.
- Entry is removed from Supabase.
- User is redirected to list.
- Error state appears on failure.

#### Suggested Implementation Order

1. Add delete button.
2. Add confirmation.
3. Add delete helper.
4. Redirect.
5. Test.

#### Tasks

- Add delete button.
- Add confirm prompt or modal.
- Implement delete helper.
- Add deleting state.
- Add error handling.
- Redirect after success.
- Verify deleted record no longer appears.

#### Blockers / Prerequisites

- STORY-006.

### STORY-009: Search and Filter Wines

As a user,
I want to search or filter my wines,
So that I can quickly find a bottle I remember.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- Browse page includes search input.
- Search checks MVP fields:
  - wine name
  - winery
  - grape
  - region
  - country
  - occasion
  - notes
- Results update clearly.
- No-results state is shown.
- Advanced faceted search is excluded.

#### Suggested Implementation Order

1. Add search input.
2. Add query state.
3. Filter entries.
4. Add no-results state.
5. Add clear control.

#### Tasks

- Add search input to list page.
- Add local query state.
- Implement case-insensitive filtering.
- Include key fields.
- Add clear search button.
- Add no-results message.
- Test on mobile.
- Add automated tests for search/filter matching and no-results behavior.

#### Blockers / Prerequisites

- STORY-005.

## Sprint Acceptance Criteria

Sprint 2 is complete when:

- User can create entries with photos.
- User can browse entries as cards.
- User can open detail pages.
- User can edit entries.
- User can delete entries with confirmation.
- User can search/filter entries.
- Core flows work on mobile-sized viewport.

## Risks

- Photo upload may be the highest-risk technical area.
- Edit flow may become duplicated and hard to maintain.
- Search/filter scope may expand into non-MVP complexity.
- Delete confirmation must be simple but safe.

## Blockers to Watch

- Supabase Storage permissions.
- Image URL rendering in production-like environment.
- Dynamic routing bugs.
- Form reuse complexity.

## Definition of Done

- All committed stories meet acceptance criteria.
- Manual tests cover create, upload, browse, detail, edit, delete, and search.
- Automated component/integration tests cover forms, cards, details, data helpers, photo upload, and search/filter logic.
- No known P0 workflow break remains.
- Non-MVP ideas are not implemented.

## Sprint 2 Demo

Demonstrate:

1. Create a wine with photo.
2. View wine in card list.
3. Open detail page.
4. Edit a field.
5. Search for the edited entry.
6. Delete a test entry after confirmation.
7. Run component and integration tests for Sprint 2 functionality.
