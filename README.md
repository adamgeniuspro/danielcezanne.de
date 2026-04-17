# danielcezanne.de

Personal blog about Business Intelligence, Strategy, and AI/Technology.

## Overview

- **Framework:** Static HTML/CSS/JS
- **Hosting:** Vercel (with Git-based deployment)
- **Domain:** danielcezanne.de
- **Author:** Daniel Cezanne

## Blog Posts

- OpenClaw: Was wirklich hinter der Technologie steckt
- KI 2026: Von der Euphorie zur echten Wertschöpfung
- KI verändert die Arbeitswelt
- Was ist Business Intelligence
- Die 5 KPIs für Unternehmer
- Wie KI deine Business-Entscheidungen verbessert

## Structure

```
/blog
├── index.html           (Home page)
├── blog.html            (Blog index - all posts)
├── about.html           (About page)
├── contact.html         (Contact page)
├── blog/                (Individual blog posts)
│   ├── openclaw-was-wirklich-hinter-der-technologie-steckt.html
│   ├── ki-2026-euphorie-wertschoepfung.html
│   └── ... (more posts)
├── css/                 (Stylesheets)
├── js/                  (JavaScript)
└── netlify/             (Netlify functions)
```

## How to Update

### Adding a New Blog Post

1. Create new HTML file in `/blog/` folder
2. Follow the same structure as existing posts (use `ki-2026-euphorie-wertschoepfung.html` as template)
3. Update `blog.html` with new post link
4. Optionally update `index.html` if it's one of the top 6 recent posts
5. Commit and push: `git push origin main`
6. Vercel auto-deploys to https://danielcezanne.de

### Editing Existing Content

1. Edit the HTML/CSS/JS directly
2. Save locally
3. Commit: `git add .` → `git commit -m "Update description"`
4. Push: `git push origin main`
5. Changes live in ~30 seconds

## Deployment

- **Current:** Netlify (manual deploys)
- **Next:** Vercel (automatic git-based deploys)

### Deploy to Vercel

1. Push to GitHub: `git push origin main`
2. Vercel auto-detects changes
3. Builds and deploys automatically
4. No manual steps needed!

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Netlify Functions (for contact/subscribe)

## Contact

daniel.cezanne@gmail.com

---

**Last Updated:** April 17, 2026
**Maintained by:** Daniel Cezanne + Adam (AI Assistant)
