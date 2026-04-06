# SEO Setup — SynticAI

This file documents all SEO changes made to the project and the remaining manual steps to complete Google indexing.

---

## Primary Domain

```
https://synticai.com  ← PRIMARY (Google ranks this)
https://synticai.agency ← SECONDARY (site works but Google ignores for ranking)
```

---

## What Was Changed in Code

### 1. `src/app/layout.tsx`
- Added `metadataBase: new URL("https://synticai.com")` — required for all OG/canonical tags to work
- Added full `title` template: `"%s | SynticAI"` (pages get their own title + brand suffix)
- Added `description`, `keywords`, `authors`, `creator`, `publisher`
- Added `robots: { index: true, follow: true }` — tells Google to index all pages
- Added `openGraph` tags — controls how links look when shared on WhatsApp/LinkedIn
- Added `twitter` card tags — controls how links look on Twitter/X
- Added `<JsonLd />` component in `<head>` — structured data for Google
- Added `<link rel="canonical" href="https://synticai.com" />` — tells Google .com is primary
- Added `verification: { google: "" }` — placeholder for Google Search Console code

### 2. `src/components/common/JsonLd.tsx` ← NEW FILE
- Created Organization schema — tells Google: "SynticAI = AI development company"
- Created WebSite schema — enables Google sitelinks search box
- Lists all services (AI, ML, NLP, Computer Vision, Chatbots, etc.)
- `url: "https://synticai.com"` — primary
- `sameAs: ["https://synticai.agency"]` — alternate

### 3. `public/sitemap.xml` ← NEW FILE
- Lists all 10 pages with their URLs, priority, and update frequency
- Google uses this to discover and crawl all your pages
- Served at: `https://synticai.com/sitemap.xml`

```
/ (homepage)          priority: 1.0
/services             priority: 0.9
/company/about        priority: 0.8
/industries           priority: 0.8
/portfolio            priority: 0.8
/company/careers      priority: 0.7
/contact              priority: 0.7
/resource             priority: 0.7
/company/life         priority: 0.6
/salesforce           priority: 0.7
```

### 4. `public/robots.txt` ← NEW FILE
- Tells ALL search engine crawlers: allow everything
- Points crawlers to the sitemap
- Served at: `https://synticai.com/robots.txt`

### 5. `public/og-image.png` ← NEW FILE
- 1200×630px image shown when someone shares your link on WhatsApp, LinkedIn, Twitter
- Referenced in Open Graph and Twitter card metadata

### 6. Per-Page Metadata — Layout Files (NEW)
These layout files add metadata to pages that use `"use client"`:

| File | Page |
|---|---|
| `src/app/company/about/layout.tsx` | About Us |
| `src/app/company/life/layout.tsx` | Life at SynticAI |
| `src/app/company/careers/page.tsx` | Careers |
| `src/app/industries/layout.tsx` | Industries |
| `src/app/contact/layout.tsx` | Contact |
| `src/app/resource/layout.tsx` | Resources |
| `src/app/services/page.tsx` | Services |
| `src/app/portfolio/page.tsx` | Portfolio |
| `src/app/salesforce/page.tsx` | Salesforce |

Each page has:
- `title` — shows in Google search results and browser tab
- `description` — the text snippet shown under your link in Google
- `alternates.canonical` — tells Google the official URL
- `openGraph.url` — for social sharing previews

---

## How SEO Works (Quick Explanation)

```
Your Code Changes  →  Build (npm run build)  →  Upload to synticai.com
                                                        ↓
                                              Google crawls sitemap.xml
                                                        ↓
                                              Google reads metadata tags
                                                        ↓
                                              Google indexes your pages
                                                        ↓
                                              Your site appears in search!
```

---

## ✅ TODO — Manual Steps (Do These After Deployment)

### [ ] Step 1 — Build and Upload New Files
```bash
npm run build
```
Upload the new `out/` folder to Namecheap cPanel for `synticai.com`.

Make sure these new files are included:
- `out/sitemap.xml`
- `out/robots.txt`
- `out/og-image.png`

---

### [ ] Step 2 — Open Google Search Console
Go to: https://search.google.com/search-console

---

### [ ] Step 3 — Add Your Property
- Choose **URL Prefix** (right side box — easier than Domain)
- Type: `https://synticai.com`
- Click **Continue**

---

### [ ] Step 4 — Verify Ownership (HTML Tag Method)
- On the verification screen, choose **"HTML tag"**
- You will see something like:
  ```html
  <meta name="google-site-verification" content="abc123xyz456def789" />
  ```
- **Copy only the content value** (the part inside `content="..."`)
  Example: `abc123xyz456def789`

---

### [ ] Step 5 — Add Verification Code to layout.tsx
Open `src/app/layout.tsx` and find this section:

```ts
verification: {
  // google: "YOUR_GOOGLE_VERIFICATION_CODE",
},
```

Uncomment it and paste your code:
```ts
verification: {
  google: "abc123xyz456def789",  // ← paste your actual code here
},
```

Then rebuild and re-upload:
```bash
npm run build
```
Upload the new `out/` folder again.

---

### [ ] Step 6 — Click Verify in Google Search Console
Once the new build with your verification code is live on `synticai.com`, go back to Google Search Console and click **Verify**.

---

### [ ] Step 7 — Submit Your Sitemap
After verification:
1. In the left sidebar → click **Sitemaps**
2. In the "Add a new sitemap" box, type:
   ```
   https://synticai.com/sitemap.xml
   ```
3. Click **Submit**

---

### [ ] Step 8 — Request Indexing for Homepage
1. In the top search bar of Search Console, type: `https://synticai.com`
2. Click **Request Indexing**
3. Google will crawl your homepage within 1–3 days

---

### [ ] Step 9 (Optional but Recommended) — Redirect .agency → .com
In Namecheap cPanel for `synticai.agency`:
- Go to **Redirects**
- Add a **301 (Permanent)** redirect:
  - From: `https://synticai.agency`
  - To: `https://synticai.com`

This ensures anyone visiting `.agency` automatically lands on `.com`, and Google transfers any authority from `.agency` to `.com`.

---

### [ ] Step 10 — Also Add .agency to Search Console (Optional)
Add `https://synticai.agency` as a second property in Search Console.
This is optional but lets you monitor traffic on both domains.

---

## Expected Timeline After Completing All Steps

| Time | What Happens |
|---|---|
| Day 1–3 | Google crawls your sitemap |
| Day 3–7 | Homepage appears when searching "SynticAI" |
| Week 2–4 | Sub-pages (Services, About, etc.) start appearing |
| Month 1–3 | Ranking for competitive terms like "AI development company" |

---

## Files Summary

```
d:\synticai\
├── public\
│   ├── sitemap.xml          ← NEW — Google page discovery
│   ├── robots.txt           ← NEW — crawler permissions
│   └── og-image.png         ← NEW — social share image
└── src\
    ├── app\
    │   ├── layout.tsx                        ← UPDATED — global SEO metadata
    │   ├── company\
    │   │   ├── about\layout.tsx              ← NEW — About page SEO
    │   │   ├── life\layout.tsx               ← NEW — Life page SEO
    │   │   └── careers\page.tsx              ← UPDATED — Careers SEO
    │   ├── industries\layout.tsx             ← NEW — Industries SEO
    │   ├── contact\layout.tsx                ← NEW — Contact SEO
    │   ├── resource\layout.tsx               ← NEW — Resources SEO
    │   ├── services\page.tsx                 ← UPDATED — Services SEO
    │   ├── portfolio\page.tsx                ← UPDATED — Portfolio SEO
    │   └── salesforce\page.tsx               ← UPDATED — Salesforce SEO
    └── components\
        └── common\
            └── JsonLd.tsx                    ← NEW — Google structured data
```
