# Sawaira Saeed — Portfolio Website

A modern, interactive, responsive personal portfolio for **Sawaira Saeed**, a Software Engineer specializing in AI / Machine Learning.

> **Live site (after deploy):** `https://sawaira-saeed.github.io/`

---

## Tech Stack

- **HTML5** + **CSS3** + vanilla **JavaScript**
- **Bootstrap 5** (CDN) for layout utilities
- **Font Awesome 6** (CDN) for icons
- **Google Fonts** — Poppins (headings) + Inter (body)
- Intersection Observer API for scroll-reveal & active nav
- GitHub REST API for dynamic repository cards
- Hosting: **GitHub Pages**

No build step required — pure static files.

---

## Project Structure

```
sawaira-portfolio/
├── index.html
├── css/
│   ├── style.css          # theme, components, layout
│   └── responsive.css     # tablet/mobile breakpoints
├── js/
│   ├── projects.js        # project data + card rendering + modals
│   └── script.js          # nav, scroll, filters, form, GitHub API
├── assets/
│   ├── images/            # project screenshots (psytrack_architecture.png)
│   ├── icons/             # favicon.svg
│   ├── certificates/      # Azure_AI_900.pdf, NAVTTC_AI.pdf, Ezitech_ML_Internship.pdf, COMPPEC.pdf
│   └── resume/            # Sawaira_Saeed_CV.pdf
└── README.md
```

---

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server (recommended, so the GitHub API and relative paths work cleanly):

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Configuration

### 1. Contact form (Formspree)
The contact form needs a real backend to send messages. A free option is [Formspree](https://formspree.io):

1. Sign up at Formspree and create a new form.
2. Copy your endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Open `js/script.js` and set:
   ```js
   const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```
Until this is set, the form shows a helpful message instead of faking success.

### 2. Project links
Open `js/projects.js` and update each project's `github` and `demo` fields with specific repository / deployment URLs when available. Currently they point to the GitHub profile as a safe default.

### 3. Project metrics
For ML/DL projects (Employee Attrition, Smart Waste, Face Mask), replace the `metricsNote` placeholders with actual evaluation results (accuracy, precision, recall, F1, confusion matrix, training curves) from your notebooks.

### 4. Project screenshots
Add real screenshots to `assets/images/` and set each project's `image` field + `hasImage: true` in `js/projects.js`.

---

## Deploy to GitHub Pages

1. Create a new repository named **`sawaira-saeed.github.io`** (or any name) on GitHub.
2. Upload all files from this `sawaira-portfolio/` folder to the repository root.
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/Sawaira-saeed/sawaira-saeed.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. Wait ~1 minute. Your site will be live at:
   - `https://sawaira-saeed.github.io/` (if repo is `sawaira-saeed.github.io`)
   - or `https://sawaira-saeed.github.io/<repo-name>/` (for any other repo name)

The link works on **any laptop, tablet or phone** with an internet connection.

---

## Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Home | Hero with animated terminal + neural network + floating tech icons |
| 2 | About | Professional intro + quick info card |
| 3 | Skills | 6 categorized skill cards |
| 4 | Experience | Vertical timeline (CV-verified) |
| 5 | Education | BS Software Engineering + intermediate + matriculation |
| 6 | Projects | 8 projects with filterable cards + detail modals |
| 7 | Certifications | 4 certificate cards with PDF links |
| 8 | Contact | Contact info + validated form |

---

## Content Accuracy

All content is sourced from the owner's CV and verified materials:
- Contact: `sawairasaeed63@gmail.com`, LinkedIn, GitHub `Sawaira-saeed`
- Education: BS Software Engineering, Fatima Jinnah Women University, CGPA 3.65, Fresh Graduate 2026
- Certifications: Azure AI-900 (894/1000), NAVTTC AI, Ezitech ML, COMPPEC
- PsyTrack stack verified against CV + architecture diagram: Flutter + Firebase + Supabase + OneSignal

Projects marked **"Upcoming"** (AI Allergen Alert, BI Dashboard) are planned and clearly flagged.

---

## License

Personal portfolio of Sawaira Saeed. All rights reserved.