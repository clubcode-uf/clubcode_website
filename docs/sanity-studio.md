# Sanity Studio - Editing the Website's Content

Sanity Studio is the admin panel where you edit **Events**, **Teams**, and the
**Exec Board**. No coding needed.

## Getting in

1. Go to **`/studio`** on the live site (or `http://localhost:3000/studio` if
   running locally).
2. Sign in with your Sanity account.
   - No account? Ask whoever manages the Sanity project to invite you at
     [sanity.io/manage](https://www.sanity.io/manage) (project ID: `39kk9pla`).

## The three content types

### Event (shows on the Events page)
| Field | Notes |
| --- | --- |
| Title | Required |
| Slug | Auto-generated from the title - click "Generate", don't overthink it |
| Summary | Short description shown on the card |
| Start Date and Time | **Important - see the warning below** |
| Location | e.g. "LIT 109" |

> ⚠️ **The Events page only shows UPCOMING events.** Anything with a start
> date in the past (or no date at all) is hidden automatically. If the Events
> page looks empty, it's because no event has a future date - not because the
> site is broken. Update the dates and it comes back.

### Executive (shows on the Teams page carousel)
- **Name**, **Role** (e.g. "President"), **Photo**, and **Order**.
- **Order** controls who appears first: 0 shows before 1, 1 before 2, etc.
- If someone has no photo, the site shows their first initial instead - so a
  missing photo won't break anything.

### Team (shows on the Teams page list)
- **Name**, **Leads** (at least one), **Members**, and **Order** (same
  rule: lower numbers show first).

## Making a change

1. Pick the content type in the left sidebar.
2. Click an item to edit it, or **Create** (pencil icon) to add a new one.
3. Fill in the fields.
4. Click **Publish**. ← this is the step people forget

> ⚠️ **Saving is not publishing.** A draft (shown with an "edited" dot) is
> invisible on the website until you hit **Publish**. To remove something from
> the site, open it and choose **Unpublish** or **Delete** from the menu.

## Published it but the live site didn't change?

The website is pre-built for speed, so it picks up content changes when it's
**redeployed**. If a published change isn't showing:

1. Wait a few minutes / hard-refresh the page (Cmd+Shift+R).
2. Still not there? Trigger a redeploy of the site (see
   [handover.md](handover.md) - usually just pressing "Redeploy" in the
   hosting dashboard, or pushing any commit to `main`).

## Quick fixes for common problems

| Problem | Likely cause |
| --- | --- |
| Events page says "No upcoming events" | All events have past dates - update them in Studio |
| I edited something but the site shows the old version | You saved a draft but didn't **Publish**, or the site needs a redeploy |
| An exec shows a letter instead of a photo | No photo uploaded for them - add one and Publish |
| Exec/team order looks wrong | Check the **Order** numbers (lower = first) |
| Can't sign in to Studio | You need an invite to the Sanity project - ask the current admin |
