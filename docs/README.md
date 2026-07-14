# Club C.O.D.E. Website - Docs

Welcome! These docs are for whoever runs the website next. You don't need to be
a coding expert - start with the guide that matches what you want to do:

| I want to... | Read this |
| --- | --- |
| Update events, teams, or the exec board | [sanity-studio.md](sanity-studio.md) |
| Take over as web dev lead / understand how everything works | [handover.md](handover.md) |
| Run the site on my computer | The main [README](../README.md) in the project root |

## The one-minute version

- The site is built with **Next.js** (the code) and **Sanity** (the content).
- **Events, Teams, and Exec Board** content is edited in **Sanity Studio** - a
  simple admin panel at `/studio`. No coding needed.
- Everything else (Home page text, About page story, colors, layout) lives in
  the code, so changing it means editing code and pushing to GitHub.
- The site is **static**: it's rebuilt when deployed. If you publish content
  and don't see it on the live site, it usually just needs a redeploy.
