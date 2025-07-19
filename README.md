# Razin Rayees Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Fast loading with optimized assets
- **SEO Optimized**: Meta tags and structured data
- **Contact Form**: Integrated contact form with Formspree
- **Interactive Design**: Smooth animations and hover effects
- **Modern UI**: Clean, professional interface

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting
- **Form Handling**: Formspree

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/razinrayees/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
├── styles/             # Global styles and CSS
└── assets/             # Static assets
```

## 🚀 Build and Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
The project is configured for Firebase Hosting:

```bash
npm run build
firebase deploy
```

## 🎨 Customization

### Colors and Styling
- Modify `tailwind.config.js` for theme customization
- Update global styles in `src/styles/globals.css`

### Content
- Update personal information in component files
- Replace project data in `src/data/projects.ts`
- Modify certificate data in `src/data/certificates.ts`

### Contact Form
- Configure Formspree endpoint in `src/components/sections/Contact.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Razin Rayees**
- Website: [razinrayees.com](https://razinrayees.com)
- LinkedIn: [@razinrayees](https://linkedin.com/in/razinrayees)
- GitHub: [@razinrayees](https://github.com/razinrayees)
- Email: razin@razinrayees.com

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons
- [Vite](https://vitejs.dev) for the fast build tool
- [React](https://reactjs.org) for the UI library