# 🤖 Universal Replit Prompt for Netlify Migration

## Copy and paste this prompt into Replit AI or Claude:

---

**PROMPT:**

I need to migrate my React/Vite website from Replit to Netlify for free hosting. Please help me prepare my project for deployment:

1. **Project Structure Setup:**
   - Ensure proper src/ directory structure with components, assets, and styles folders
   - Verify all import paths are correct (no @/ aliases unless properly configured in vite.config.ts)
   - Move all images/assets to src/assets/
   - Organize components into src/components/

2. **Configuration Files:**
   - Create/verify package.json with all dependencies
   - Create vite.config.ts with proper path aliases and build settings
   - Create tsconfig.json for TypeScript (if using TypeScript)
   - Create tailwind.config.js and postcss.config.js (if using Tailwind)
   - Create netlify.toml with:
     ```toml
     [build]
       command = "npm run build"
       publish = "dist"
     
     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
     ```

3. **Git and Deployment Files:**
   - Create .gitignore file excluding node_modules, dist, .env files
   - Create README.md with:
     - Project description
     - Local development instructions (npm install, npm run dev)
     - Deployment instructions for Netlify
     - Any important links to update before going live
   - Create DEPLOYMENT_GUIDE.md with step-by-step Netlify deployment instructions

4. **Code Cleanup:**
   - Remove any Replit-specific code or scripts
   - Fix any broken import paths
   - Ensure all environment variables are documented
   - Verify build command works: npm run build

5. **Final Checklist:**
   - List all external services/APIs used (Google Forms, Calendly, etc.)
   - Identify any placeholder URLs that need updating
   - Document custom domain setup process if applicable
   - Provide instructions for updating content later

Please organize everything into a production-ready structure that I can push to GitHub and deploy to Netlify with automatic CI/CD.

---

## 🎯 What This Prompt Does

This universal prompt will:
- ✅ Work for ANY React/Vite site on Replit
- ✅ Properly structure your project
- ✅ Create all necessary config files
- ✅ Set up Netlify deployment
- ✅ Fix common migration issues
- ✅ Provide deployment documentation

## 📝 Customization Tips

**If your site uses specific technologies, add:**

- **Next.js:** "This is a Next.js project, configure for Netlify accordingly"
- **Database:** "I use [database name], help me set up environment variables"
- **API Routes:** "I have API routes in /api, configure serverless functions"
- **Custom Domain:** "I have a custom domain at [domain.com], include setup instructions"
- **Forms:** "I use [form service], ensure it's configured correctly"

## 🔧 Alternative Shorter Prompt (If AI is struggling)

**SHORT VERSION:**

```
Prepare my Replit React/Vite site for Netlify deployment:
1. Fix all import paths (no @ aliases)
2. Create netlify.toml with build settings
3. Create proper .gitignore
4. Create package.json with all dependencies
5. Organize files: src/components, src/assets, src/styles
6. Create deployment guide
7. Remove Replit-specific code
```

## 📦 What You'll Get

After using this prompt, you'll have:
- ✅ Properly structured project
- ✅ All configuration files
- ✅ Deployment documentation
- ✅ README with instructions
- ✅ Ready to push to GitHub
- ✅ Ready to deploy to Netlify

## 🚀 Next Steps After Getting Output

1. **Download/Export** your Replit project
2. **Create GitHub repository**
3. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Migrate from Replit to Netlify"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
4. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Import from GitHub
   - Select your repository
   - Deploy!

## 💡 Pro Tips

1. **Test locally first:** Run `npm install && npm run build` before deploying
2. **Check the build log:** If deployment fails, Netlify shows detailed error logs
3. **Environment variables:** Add them in Netlify Dashboard → Site Settings → Environment Variables
4. **Custom domains:** Set up in Netlify Dashboard → Domain Management

## 🆘 Common Issues & Solutions

**"Module not found" errors:**
- Check all import paths are correct
- Ensure all dependencies are in package.json

**Build fails:**
- Verify Node version (add to netlify.toml if needed)
- Check for TypeScript errors

**Images not loading:**
- Ensure images are in src/assets/
- Check import statements

**Site loads but broken:**
- Add redirects rule to netlify.toml (included in prompt)
- Check browser console for errors

---

## 🎓 Why This Approach Works

This universal prompt:
- **Handles any React/Vite project** - Works for all Replit React sites
- **Automates the tedious parts** - Config files, structure, documentation
- **Prevents common mistakes** - Import paths, build settings, redirects
- **Provides documentation** - So you know what to do next
- **Future-proof** - Easy to update and maintain

---

## 🔄 Using This Prompt Multiple Times

Got multiple Replit sites to migrate? Just:
1. Use this same prompt for each site
2. Adjust project-specific details
3. Deploy each to its own Netlify site
4. Done!

Each site gets its own:
- GitHub repository
- Netlify deployment
- Custom domain (optional)
- Automatic updates

---

## 📞 Need Help?

If the AI assistant doesn't understand or makes mistakes:
1. Be more specific about your tech stack
2. Provide error messages if you have them
3. Mention specific features (forms, API routes, etc.)
4. Ask it to fix specific issues one at a time

Remember: You can always re-run the prompt with more details!
