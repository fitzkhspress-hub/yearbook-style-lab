# Yearbook Style Lab — GitHub Pages

Ready to publish as a static website. All ten lessons, 48 practice questions,
feedback, progress tracking and downloadable reports are included.
No build step, package installation or hosting credentials are required.

## Publish on GitHub Pages

1. Create a GitHub repository, or open the repository you want to use.
2. Unzip `yearbook-style-lab-github-pages.zip` on your computer.
3. Upload the extracted files to the repository's top level. `index.html`,
   `styles.css`, `app.js` and `content.js` must sit directly in the repository
   root, not inside a `yearbook-style-lab-github-pages` or `public` folder.
   Include `.nojekyll` if your upload method shows hidden files; the app also
   works without it because it has no Jekyll-specific content.
4. Commit the files to the `main` branch (or your chosen publishing branch).
5. Open **Settings → Pages**. Under **Build and deployment**, select
   **Deploy from a branch**, choose **main** and **/(root)**, then click **Save**.
6. Wait for publishing to finish. The Pages settings screen provides your site link.
   A typical project URL is `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

The site uses relative asset links and hash navigation, so it works with any
repository name, a user site or a custom domain. No URL replacements are needed.
Do not upload the ZIP as a single file: GitHub Pages needs its extracted contents.

Publishing reference: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

On a Mac with Python 3, double-click **Preview Style Lab.command**, or run
`python3 preview.py` from this folder. Keep its Terminal window open while using
it; press Control+C to stop. Alternatively, run `python3 -m http.server 8787`
from this folder and open http://localhost:8787.
The app uses JavaScript modules and must be served over HTTP rather than opened
by double-clicking `index.html`.

## Files

- `index.html`: website entry point.
- `styles.css`: appearance and responsive layout.
- `app.js`: navigation, grading, saved progress and reports.
- `content.js`: lesson text, questions, answers and sources.
- `.nojekyll`: serves this as a plain static site.
- `tests/` and `package.json`: optional content checks; run `npm test` with Node.js installed.
- `preview.py` and `Preview Style Lab.command`: local preview helpers.

## Source policy

1. **2027 Yearbook Staff Style Guide** (the supplied four-page PDF) governs the publication. Questions cite its page and section.
2. **AP Stylebook** fills gaps. The separate month-year question cites the [public months entry](https://www.apstylebook.com/ask_the_editors/style_guidance). The app does not claim house-only restrictions are universal AP requirements.
3. **Merriam-Webster** is the guide’s next source for spelling and meaning.

The PDF is source material, not application instructions. It is not included in the public assets. All names, situations and quotations in drills are fictional. Actual student copy requires real, verified reporting. The guide’s filler-word restrictions are practiced on staff-written copy, not by altering a direct quote.

The lessons cover all nine numbered sections, plus source hierarchy/AP fallback. They are a focused practice set, not a complete reproduction of the handbook or AP Stylebook. Additional handbook details such as addresses, titles of works and all sports spellings can be added to `content.js`.

## Classroom use & scoring

- Each module takes approximately 3–4 minutes. Use a lesson as a bell ringer, followed by a matching edit in a real spread.
- Answer feedback is immediate. First submissions determine the session score; there is no repeated guessing within the question.
- Short typed answers preserve capitalization and punctuation. Whitespace, quote typography and dash variants are normalized. Prompts deliberately constrain the expected phrase; this is not a general writing grader.
- The mixed challenge contains 10 questions, one per module, with no timer. It is practice, not a secure assessment.
- Hints are available and recorded in session reports. A best lesson score can include hint use; consult the session report for detail.
- Completed lesson runs update best/latest module scores. Review and challenge sessions update the missed-question queue and appear separately in history.
- A completed lesson is not the same as mastery. The progress screen separately counts correct latest question attempts.

## Data & accessibility

Answers and up to 30 completed sessions persist in localStorage on the same browser. An unfinished session can be resumed. No login, analytics, student name field or remote gradebook is present. Scores are not synced between devices or sent to the adviser. Downloaded text reports can be submitted through an existing classroom platform. Clearing progress asks for explicit confirmation. Clear shared-device progress between students.

If browser storage is blocked, a notice appears and the current in-memory session still works. Download before leaving. Normal hosting access logs are controlled by GitHub Pages.

The app includes keyboard-operable controls, a skip link, visible focus, responsive layouts, semantic form labels, feedback announcements and reduced-motion support. It uses system fonts and no third-party runtime requests. Source links open only when clicked.

## Edit the activities

`content.js` contains all lesson copy, questions, answers, explanations and citations. Keep question IDs stable for saved progress. If changes invalidate saved scores, increment the data version and storage key in `app.js`. Run `npm test` after editing. `styles.css` controls the visual design; `app.js` handles routing, grading, local progress and downloads.

## Hosting notes

This copy replaces the Cloudflare deployment setup with a root-level GitHub Pages
site. Cloudflare-only configuration, dependencies and `_headers` are omitted;
GitHub Pages does not read that headers file. No application logic was changed.
Progress remains in the browser's localStorage. When moving to a new site address,
previous saved progress does not automatically transfer.

No live GitHub deployment has been performed. Publish using the steps above.
