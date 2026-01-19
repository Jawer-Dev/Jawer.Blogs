# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment Setup

Your project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How it Works

1. **Automatic Workflow**: Every push to the `main` branch triggers an automatic build and deployment
2. **GitHub Actions**: The `.github/workflows/deploy.yml` file handles the build and deployment process
3. **Live Site**: Your site will be live at: `https://jawer-dev.github.io/Jawer.Blogs/`

### Initial Setup (One-time)

1. **Go to Repository Settings**:
   - Visit: https://github.com/Jawer-Dev/Jawer.Blogs/settings/pages

2. **Configure GitHub Pages**:
   - Under "Build and deployment"
   - **Source**: Select "GitHub Actions"
   - Click "Save"

3. **Wait for First Deployment**:
   - GitHub Actions will automatically run the workflow
   - Check the "Actions" tab to monitor the build
   - Once complete, your site will be live at `https://jawer-dev.github.io/Jawer.Blogs/`

### How to Deploy

#### **Method 1: Automatic (Recommended)**
Simply push to main branch:
```bash
git add .
git commit -m "Your message"
git push origin main
```

The workflow will automatically:
- ✅ Install dependencies
- ✅ Build the project
- ✅ Deploy to GitHub Pages

#### **Method 2: Manual Deploy Locally**
```bash
npm run deploy
```

### Monitoring Deployments

1. Go to your repository's **Actions** tab
2. Click on the latest workflow run to see:
   - Build status
   - Deployment logs
   - Any errors or warnings

### View Your Live Site

Once deployed, visit: **https://jawer-dev.github.io/Jawer.Blogs/**

### Troubleshooting

**Issue**: Build fails in GitHub Actions
- **Solution**: Check the "Actions" tab for error logs and fix issues locally first

**Issue**: Site shows 404 errors
- **Solution**: Ensure `base: '/Jawer.Blogs/'` is set in `vite.config.js` ✅ (Already configured)

**Issue**: Changes not reflecting on live site
- **Solution**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Configuration Files

- **vite.config.js**: Sets the base path for GitHub Pages (`/Jawer.Blogs/`)
- **.github/workflows/deploy.yml**: Automated deployment workflow
- **package.json**: Deploy script configured

### Environment Variables (if needed)

If your project requires environment variables:
1. Go to Settings → Secrets and variables → Actions
2. Add your environment variables as GitHub Secrets
3. Update the workflow file to use them

### Custom Domain (Optional)

To use a custom domain instead of GitHub Pages:
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Update DNS records according to GitHub's instructions

---

**Your site is now ready for continuous deployment! 🎉**

Every push to `main` will automatically build and deploy your blog to GitHub Pages.
