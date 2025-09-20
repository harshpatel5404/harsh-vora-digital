# Vercel Deployment Guide for Your Agency Website

This guide will help you deploy your React + TypeScript agency website to Vercel.

## Quick Deployment (Recommended)

### Option 1: Git Integration
1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository from GitHub
   - Vercel will automatically detect this is a Vite project
   - Click "Deploy" - your site will be live in seconds!

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
vercel

# Follow the prompts - Vercel will auto-detect your configuration
```

## Project Configuration

### Required Files for Deployment

Your project is already configured correctly with these essential files:

1. **package.json** - Contains the build script Vercel needs:
   ```json
   {
     "scripts": {
       "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist"
     }
   }
   ```

2. **vite.config.ts** - Already properly configured for production builds

### Add Client-Side Routing Support

Since your app uses Wouter for routing, create a `vercel.json` file in your project root to handle client-side routes:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This prevents 404 errors when users refresh the page or visit direct URLs.

## Build Settings

Vercel will automatically detect these settings, but you can verify them:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Environment Variables (If Needed)

If you need environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add variables with the `VITE_` prefix for client-side access:
   - `VITE_API_URL=https://your-api-domain.com`
   - `VITE_CONTACT_EMAIL=your-email@domain.com`

## Important Notes for Your Project

### Current Setup
- ✅ **Frontend Only:** Your current build will deploy the React frontend only
- ✅ **Static Assets:** All your images and assets will be included
- ✅ **Fast Loading:** Vite's optimized build ensures quick load times

### Backend Considerations
Your project has an Express server in the `server/` directory. For Vercel deployment:

- **Option A (Current):** Deploy frontend only - contact form won't work
- **Option B:** Convert to Vercel Functions (requires modifications)
- **Option C:** Deploy backend separately (e.g., Railway, Render)

## Deployment Checklist

- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Create `vercel.json` for routing support
- [ ] Remove any sensitive data from frontend code
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Deploy via Vercel dashboard or CLI

## After Deployment

1. **Custom Domain:** Add your own domain in Vercel dashboard
2. **HTTPS:** Automatic SSL certificate provided
3. **Analytics:** Built-in performance monitoring
4. **Previews:** Every branch gets a unique preview URL

## Troubleshooting

### Common Issues:
- **Build fails:** Check that all dependencies are in `package.json`
- **404 on refresh:** Add the `vercel.json` routing configuration
- **Missing assets:** Ensure all imports use relative paths

### Getting Help:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Your build logs are available in the Vercel dashboard

## Next Steps

After deploying, consider:
- Setting up a custom domain
- Enabling Vercel Analytics
- Configuring a separate backend for the contact form functionality

Your site will be available at `https://your-project-name.vercel.app` immediately after deployment!