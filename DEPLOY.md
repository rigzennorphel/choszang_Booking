# Go live — Ladakh Booking

Your site builds successfully (`npm run build`). Deploy to **Vercel** (free, made for Next.js).

## Option A — Vercel website (easiest)

1. Push this project to **GitHub** (see “Git setup” below).
2. Open [https://vercel.com](https://vercel.com) → sign up with GitHub.
3. **Add New Project** → import your repo.
4. Leave defaults:
   - **Framework:** Next.js  
   - **Build command:** `npm run build`  
   - **Output:** (automatic)  
5. Click **Deploy**. In ~2 minutes you get a URL like `https://ladakhbooking.vercel.app`.
6. Optional: **Settings → Domains** → add your own domain (e.g. `ladakhbooking.com`).

## Option B — Vercel CLI (from this folder)

```powershell
cd "S:\web development"
npm install -g vercel
vercel login
vercel
```

Follow prompts (link to your Vercel account). For production:

```powershell
vercel --prod
```

## Git setup (for Option A)

```powershell
cd "S:\web development"
git init
git add .
git commit -m "Initial commit — Ladakh Booking site"
```

Create a new repo on [https://github.com/new](https://github.com/new), then:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/ladakhbooking.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and repo name with yours.

## After you go live

- Update `lib/site.ts` with your real **phone** and **email**.
- Redeploy: Vercel rebuilds automatically on every `git push` to `main`.

## Local production test

```powershell
npm run build
npm run start
```

Open http://localhost:3000 (production mode).
