# Sprint 3 Plan: Polish, QA, and Deployment

## Sprint Goal

Make Cellar Notes feel finished, verify the MVP with realistic usage, and deploy v1 so it can be used on a phone.

## Duration

Week 3 of 3

## Sprint Commitment

- STORY-010: Mobile Visual Polish
- STORY-011: Deployment and Production Readiness
- STORY-012: v1 Manual QA

## Milestone Alignment

Milestone 3: Mobile Polish, QA, and Deployment

## Sprint Backlog

### STORY-010: Mobile Visual Polish

As a user,
I want the app to feel warm, personal, and premium on my phone,
So that logging wine feels enjoyable and memorable.

#### Priority

P1

#### Story Points

5

#### Acceptance Criteria

- Main flows are comfortable on mobile.
- Typography, spacing, cards, and colors support memory-book feel.
- Forms are readable and touch-friendly.
- Buttons and inputs are consistent.
- Empty states feel intentional.
- No non-MVP features are added.

#### Suggested Implementation Order

1. Audit all pages on mobile.
2. Improve spacing and typography.
3. Improve cards and details.
4. Improve forms.
5. Final polish pass.

#### Tasks

- Review list page on mobile.
- Review create/edit forms on mobile.
- Review detail page on mobile.
- Improve spacing and hierarchy.
- Improve card visual treatment.
- Improve photo presentation.
- Improve empty and error copy.
- Remove rough placeholder copy.

#### Blockers / Prerequisites

- STORY-003 through STORY-009.

### STORY-011: Deployment and Production Readiness

As a user,
I want Cellar Notes deployed and stable,
So that I can use it from my phone anytime.

#### Priority

P0

#### Story Points

5

#### Acceptance Criteria

- App is deployed to Vercel.
- Production Supabase env vars are configured.
- Storage works in production.
- README includes setup and deployment instructions.
- Production smoke test passes.
- App can log 10 real or realistic sample bottles.

#### Suggested Implementation Order

1. Prepare README setup instructions.
2. Configure Vercel.
3. Add env vars.
4. Deploy.
5. Smoke test.
6. Fix deployment issues.

#### Tasks

- Document local setup.
- Document Supabase setup.
- Document storage bucket setup.
- Document Vercel deployment.
- Connect project to Vercel.
- Configure production env vars.
- Deploy.
- Test production create flow.
- Test production photo upload.
- Test production browse/detail/edit/delete/search.

#### Blockers / Prerequisites

- STORY-001 through STORY-010.

### STORY-012: v1 Manual QA

As a user,
I want the core app flows to be tested with realistic entries,
So that v1 is dependable enough for personal use.

#### Priority

P1

#### Story Points

3

#### Acceptance Criteria

- Manual QA checklist exists.
- At least 10 realistic wine entries are created.
- Core flows are tested:
  - create
  - photo upload
  - browse
  - detail
  - edit
  - delete
  - search/filter
  - mobile usage
- Critical defects are fixed.
- Non-critical defects are documented.

#### Suggested Implementation Order

1. Create QA checklist.
2. Test locally.
3. Test deployed app.
4. Fix critical defects.
5. Record known issues.

#### Tasks

- Write manual QA checklist.
- Create 10 sample wine entries.
- Test rating boundaries: 1, 100, invalid values.
- Test entries with missing optional fields.
- Test photo upload.
- Test search by wine name.
- Test search by winery.
- Test search by grape/region/country.
- Test edit flow.
- Test delete flow.
- Test mobile Safari or Chrome.
- Record known limitations.

#### Blockers / Prerequisites

- STORY-011 for production QA.

## Sprint Acceptance Criteria

Sprint 3 is complete when:

- App is deployed.
- Production app supports all v1 flows.
- Mobile experience is acceptable and polished.
- README explains setup/deployment.
- 10 realistic entries have been created.
- Critical issues have been resolved.
- Non-MVP items remain in `future.md`.

## Risks

- Production environment variables may be misconfigured.
- Storage bucket permissions may differ between local and production.
- Late visual polish may expose layout issues.
- Manual QA may reveal bugs that require scope cuts.

## Blockers to Watch

- Vercel build errors.
- Supabase Storage public/private access mismatch.
- Mobile browser upload behavior.
- Unclear production setup instructions.

## Definition of Done

- v1 is deployed and usable on mobile.
- All P0 stories are complete.
- P1 polish/QA is complete or explicitly reduced.
- README is updated.
- No non-MVP features are included.
- Known issues are documented.

## Sprint 3 Demo

Demonstrate from production URL:

1. Open app on phone.
2. Add a wine with photo.
3. Browse wine cards.
4. Open detail page.
5. Edit the entry.
6. Search for the entry.
7. Delete a test entry.
8. Show README setup/deployment documentation.

# Recommended 3-Week Evening Schedule

Assumption: one developer works approximately 1.5-2.5 hours per weekday evening plus one longer weekend session per week.

## Week 1: Foundation and Create Flow

### Day 1

- Scaffold Next.js/TypeScript/Tailwind app.
- Add base layout and routes.
- Keep styling minimal.

### Day 2

- Define Supabase schema.
- Configure Supabase client.
- Document env vars.

### Day 3

- Build create wine form UI.
- Add all v1 fields.
- Group fields into readable sections.

### Day 4

- Add form state and validation.
- Enforce rating 1-100.
- Add loading/error states.

### Day 5

- Connect create form to Supabase.
- Redirect after successful save.
- Manual test with 3 entries.

### Weekend Session

- Fix Sprint 1 issues.
- Light mobile pass.
- Confirm no non-MVP scope has entered.

## Week 2: Photos and Core Journal Experience

### Day 6

- Configure Supabase Storage.
- Add photo upload field.
- Save photo reference.

### Day 7

- Build wine card list.
- Add loading, empty, and error states.
- Display uploaded photos.

### Day 8

- Build wine detail page.
- Display all metadata and memory fields.
- Add edit/delete actions.

### Day 9

- Build edit flow.
- Reuse create form logic where practical.
- Test updating entries.

### Day 10

- Build delete flow with confirmation.
- Add search/filter on browse page.
- Test complete local flow.

### Weekend Session

- End-to-end test:
  - create
  - upload
  - browse
  - detail
  - edit
  - delete
  - search
- Fix highest-priority bugs.

## Week 3: Polish, QA, and Deploy

### Day 11

- Mobile UI audit.
- Improve spacing, typography, cards, and forms.

### Day 12

- Improve detail page and empty states.
- Add warm/premium finishing touches.
- Remove placeholder copy.

### Day 13

- Prepare README setup/deployment docs.
- Configure Vercel project.
- Add production env vars.

### Day 14

- Deploy.
- Test production flows.
- Fix deployment and storage issues.

### Day 15

- Create 10 realistic wine entries.
- Test mobile usage.
- Log known issues.

### Final Weekend Session

- Fix critical QA findings.
- Final smoke test on phone.
- Confirm MVP-only scope.
- Tag or mark v1 release candidate.
