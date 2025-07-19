# Customization Guide

This guide explains how to customize the portfolio for your own use.

## 📝 Personal Information

### Basic Details
Update your personal information in `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Name - Your Title',
  description: 'Your description here',
  url: 'https://yourwebsite.com',
  author: {
    name: 'Your Name',
    email: 'your@email.com',
    linkedin: 'https://linkedin.com/in/yourusername',
    github: 'https://github.com/yourusername'
  }
};
```

### Hero Section
Edit the hero content in `src/components/sections/Hero.tsx`:
- Update the main heading (currently "RAZIN RAYEES")
- Modify the subtitle description
- Change the call-to-action text

### About Section
Customize your story in `src/components/sections/About.tsx`:
- Replace the paragraphs with your background
- Update location, education, and interests
- Modify the highlighted keywords

## 🚀 Projects

### Adding/Editing Projects
Update your projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project Name",
    description: 'Project description here',
    image: 'https://your-image-url.com/image.jpg',
    type: 'PROJECT TYPE',
    link: 'https://your-project-link.com'
  }
];
```

**Image Requirements:**
- Use high-quality images (recommended: 1200x900px)
- Supported formats: JPG, PNG, WebP
- Consider using a CDN for better performance

## 🏆 Certificates

### Updating Certificates
Modify your certificates in `src/data/certificates.ts`:

```typescript
export const certificates: CertificateProvider[] = [
  {
    provider: "Provider Name",
    logo: "https://provider-logo-url.com/logo.png",
    subtitle: "Course Type",
    courses: [
      {
        title: "Course Name",
        certificates: [
          {
            title: "Certificate Title",
            link: "https://certificate-link.com"
          }
        ]
      }
    ]
  }
];
```

## 🎨 Styling & Design

### Colors
Update colors in `tailwind.config.js` or use Tailwind's built-in color classes:
- Primary colors: Black and white (current theme)
- Accent colors: Cyan/blue gradients
- Background colors: White, black, gradients

### Typography
The portfolio uses "Be Vietnam" font. To change:
1. Update the font import in `index.html`
2. Modify the font-family in `src/index.css`

### Layout
- **Navigation**: Edit `src/components/layout/Navigation.tsx`
- **Footer**: Modify `src/components/layout/Footer.tsx`
- **Sections**: Each section is in `src/components/sections/`

## 📧 Contact Form

### Formspree Setup
1. Create account at [Formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `FORMSPREE_ENDPOINT` in `src/lib/constants.ts`

### Alternative Form Services
You can replace Formspree with:
- Netlify Forms
- EmailJS
- Custom backend API

## 🌐 Deployment

### Firebase Hosting
1. Update `.firebaserc` with your project ID
2. Run `firebase deploy`

### Other Platforms
The build output (`dist/`) can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📱 SEO & Meta Tags

### Basic SEO
Update meta tags in `index.html`:
- Title tag
- Description
- Keywords
- Open Graph tags

### Sitemap
Update `public/sitemap.xml` with your domain and pages.

## 🔧 Advanced Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to `src/App.tsx`
3. Update navigation in `src/lib/constants.ts`

### Custom Animations
- Use Tailwind transition classes
- Add custom CSS in `src/index.css`
- Consider Framer Motion for complex animations

### Performance Optimization
- Optimize images (use WebP format)
- Implement lazy loading
- Use a CDN for assets

## 🛠️ Development Tips

### File Structure
```
src/
├── components/
│   ├── ui/           # Reusable components
│   ├── sections/     # Page sections
│   └── layout/       # Layout components
├── data/             # Content data
├── lib/              # Utilities & constants
└── types/            # TypeScript types
```

### Best Practices
- Keep components small and focused
- Use TypeScript for type safety
- Follow the existing naming conventions
- Test on multiple devices and browsers

## 📋 Checklist

Before deploying your customized portfolio:

- [ ] Updated personal information
- [ ] Added your projects with proper images
- [ ] Updated certificates and achievements
- [ ] Configured contact form
- [ ] Updated meta tags and SEO
- [ ] Tested on mobile devices
- [ ] Verified all links work
- [ ] Optimized images for web
- [ ] Updated README with your information

## 🆘 Need Help?

If you need assistance:
1. Check the existing documentation
2. Look at the component files for examples
3. Create an issue in the repository
4. Refer to the original project structure

Remember to test your changes locally before deploying!