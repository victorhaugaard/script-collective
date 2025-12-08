# Deploy Script Collective to Vercel

Vercel is the perfect hosting platform for Next.js projects (it's made by the same team!).

## Quick Deployment Steps

### 1. Push Your Code to GitHub
```bash
git add -A
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to https://vercel.com
2. Sign up/login with your GitHub account
3. Click "Add New Project"
4. Import your `script-collective` repository
5. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
6. Click "Deploy"

That's it! Your site will be live in ~2 minutes at `script-collective.vercel.app`

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
cd script-collective
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? script-collective
# - In which directory is your code located? ./
# - Want to modify settings? No

# Deploy to production
vercel --prod
```

### 3. Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `scriptcollective.com`
4. Follow the DNS configuration instructions:
   - Add `A` record pointing to `76.76.21.21`
   - Add `CNAME` for `www` pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (5-10 minutes)

## Environment Variables (Optional)

If you need to add environment variables (like API keys):

1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., `FORMSPREE_FORM_ID`)
3. Redeploy (or it'll automatically redeploy)

## Automatic Deployments

Vercel automatically:
- Deploys every push to `main` branch to production
- Creates preview deployments for pull requests
- Handles SSL certificates
- Optimizes images and assets
- Provides analytics

## Why Vercel > Netlify for Next.js

- **Built for Next.js** - Made by the same team
- **Faster builds** - Optimized for Next.js
- **Better edge functions** - If you need serverless functions later
- **Preview deployments** - Every PR gets its own URL
- **Free tier is generous** - 100GB bandwidth/month

## After Deployment

Your site will be live at:
- Production: `https://scriptcollective.com` (after domain setup)
- Vercel URL: `https://script-collective.vercel.app`

Every push to main will automatically deploy!
