# Fabian Torres - Resume

My personal resume website built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Recent Updates

### Major Upgrades (2024)
- **Next.js**: Upgraded from 13.5.6 → 15.4.1
- **React**: Upgraded from 18.2.0 → 19.1.0
- **TypeScript**: Upgraded from 5.2.2 → 5.8.3
- **Node.js**: Requires Node.js 24+ (specified in package.json)
- **Package Manager**: Migrated from npm to pnpm for better performance

### New Features
- **PDF Download**: Added "Download as PDF" button that generates a compressed PDF of the resume
- **Enhanced Accessibility**: Replaced `react-focus-lock` with `@radix-ui/react-focus-scope` for better React 19 compatibility
- **Fixed Nested Links**: Resolved hydration errors from nested `<a>` tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1 (App Router)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.8.3
- **Theme**: Dark/Light mode with `next-themes`
- **Package Manager**: pnpm (for better performance)
- **PDF Generation**: html2pdf.js

## 📋 Prerequisites

- **Node.js**: 24.0.0 or higher
- **pnpm**: Latest version (recommended) or npm

## 🚀 Getting Started

### Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Development
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

### Build for Production
```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

### Start Production Server
```bash
# Using pnpm
pnpm start

# Or using npm
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main resume page
│   └── providers/
│       └── ThemeProvider.tsx # Dark/light theme provider
├── components/
│   ├── Accordion.tsx        # Work history accordion
│   ├── Burger.tsx           # Mobile navigation
│   ├── Navbar.tsx           # Desktop navigation
│   ├── ScrollToTopButton.tsx # Scroll to top functionality
│   └── Tag.tsx              # Skill tags
└── types/
    └── html2pdf.d.ts        # TypeScript declarations
```

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **PDF Export**: Download resume as compressed PDF
- **Print Styles**: Optimized for printing
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Optimized with Next.js 15 features

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration with custom colors and fonts
- `postcss.config.js` - PostCSS configuration for Tailwind processing
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## 📦 Package Manager Migration

This project uses **pnpm** for better performance and disk space efficiency:

### Why pnpm?
- **2-3x faster** than npm/yarn
- **Saves disk space** with content-addressable store
- **Strict dependency management**
- **Better monorepo support**

### Migration Commands
```bash
# Install pnpm globally
npm install -g pnpm

# Remove old dependencies
rm -rf node_modules package-lock.json

# Install with pnpm
pnpm install
```

## 🐛 Troubleshooting

### Styles Not Loading
If Tailwind CSS styles aren't working:
1. Ensure `postcss.config.js` exists with proper configuration
2. Restart the development server
3. Clear browser cache (hard refresh)

### PDF Generation Issues
- PDF generation only works in the browser (client-side)
- Ensure you're not blocking JavaScript
- Check browser console for any errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Fabian Torres** - Senior Software Developer with 20+ years of experience
- Email: fa.iverson@gmail.com
- Location: Cordoba, Argentina
- Specialties: React, Laravel, JavaScript, PHP
