# Youngmin Park's Personal Website

A modern personal website built with [SvelteKit](https://kit.svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/), deployed on GitHub Pages.

## Table of Contents

- [Quick Start](#quick-start)
- [Development](#development)
- [Project Structure](#project-structure)
- [Editing Content](#editing-content)
- [Styling](#styling)
- [Adding New Pages](#adding-new-pages)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Bungmint/bungmint.github.io.git
cd bungmint.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output in `build/`) |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Svelte type checking |
| `npm run check:watch` | Run type checking in watch mode |
| `npm run lint` | Check code formatting with Prettier |
| `npm run format` | Auto-format code with Prettier |

### Development Workflow

1. Run `npm run dev` to start the development server
2. Edit files in `src/` - changes will hot-reload automatically
3. Run `npm run check` to catch any TypeScript errors
4. Run `npm run format` to ensure consistent code style
5. Build and test with `npm run build && npm run preview`

---

## Project Structure

```
bungmint.github.io/
├── src/
│   ├── app.css                 # Global styles (Tailwind + custom CSS)
│   ├── app.html                # HTML template
│   ├── lib/
│   │   └── components/         # Reusable Svelte components
│   │       ├── Header.svelte   # Site header with profile & links
│   │       ├── Footer.svelte   # Site footer
│   │       └── Seo.svelte      # SEO meta tags component
│   └── routes/
│       ├── +layout.svelte      # Root layout (wraps all pages)
│       ├── +layout.ts          # Layout configuration
│       ├── +page.svelte        # Home page content
│       └── +error.svelte       # Error page (404, etc.)
├── static/
│   ├── images/                 # Image assets
│   │   ├── circle_crop.png     # Profile photo
│   │   └── cs70.png            # CS 70 course logo
│   ├── favicon.ico             # Site favicon
│   ├── CNAME                   # Custom domain configuration
│   └── .nojekyll               # Tells GitHub Pages not to use Jekyll
├── package.json                # Dependencies and scripts
├── svelte.config.js            # SvelteKit configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── postcss.config.cjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler configuration
└── .prettierrc                 # Code formatting configuration
```

---

## Editing Content

### Profile Information (Header)

Edit `src/lib/components/Header.svelte`:

```svelte
<!-- Change your name -->
<h1>Youngmin Park</h1>

<!-- Change your bio -->
<p>I am an undergraduate student at UC Berkeley...</p>

<!-- Update social links -->
<a href="https://github.com/YourUsername">GitHub</a>
```

### Main Page Sections

Edit `src/routes/+page.svelte`:

#### Research Section
```svelte
<section class="section">
    <h2>Research</h2>
    <p>Your research interests here...</p>
</section>
```

#### Teaching Section
Add or modify teaching entries:
```svelte
<div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
    <div class="flex-shrink-0">
        <img src="/images/course-logo.png" alt="Course Name" class="w-44 h-auto" />
    </div>
    <div class="flex-1">
        <h3>Course Name</h3>
        <p>Teaching Assistant, <a href="...">Semester</a></p>
    </div>
</div>
```

### Adding New Sections

Add a new section to `src/routes/+page.svelte`:

```svelte
<section class="section">
    <h2 id="section-id">Section Title</h2>
    <p class="text-neutral-600 leading-relaxed">
        Your content here...
    </p>
</section>
```

### Profile Photo

Replace `static/images/circle_crop.png` with your new photo. For best results:
- Use a square image
- Recommended size: 400x400 pixels or larger
- Supported formats: PNG, JPG, WebP

### Favicon

Replace `static/favicon.ico` with your new favicon. You can generate one from your profile photo using:
- [favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

---

## Styling

### Tailwind CSS

This project uses Tailwind CSS for styling. Common utility classes:

| Class | Description |
|-------|-------------|
| `text-neutral-600` | Gray text color |
| `text-primary` | Primary link color (#1772d0) |
| `mb-4` | Margin bottom (1rem) |
| `py-8` | Padding vertical (2rem) |
| `flex`, `gap-4` | Flexbox with gap |

### Custom CSS Classes

Defined in `src/app.css`:

- `.container-main` - Centered container with responsive padding
- `.section` - Standard section spacing
- `.link` - Styled links with underline
- `.card` - Card-style container

### Theme Colors

Edit `tailwind.config.cjs` to change theme colors:

```javascript
theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#1772d0',  // Main link color
                hover: '#f09228'      // Hover color
            }
        }
    }
}
```

### Fonts

The site uses the Lato font from Google Fonts. To change:

1. Update the import in `src/app.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
   ```

2. Update the font family in `tailwind.config.cjs`:
   ```javascript
   fontFamily: {
       sans: ['YourFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
   }
   ```

---

## Adding New Pages

### Create a New Page

1. Create a new folder in `src/routes/`:
   ```bash
   mkdir src/routes/projects
   ```

2. Create `+page.svelte` inside:
   ```svelte
   <script lang="ts">
       import Seo from '$lib/components/Seo.svelte';
   </script>

   <Seo title="Projects - Youngmin Park" />

   <div class="container-main">
       <h1>Projects</h1>
       <!-- Your content -->
   </div>
   ```

3. The page will be available at `/projects/`

### Add Navigation Link

Edit `src/lib/components/Header.svelte` to add navigation:

```svelte
<nav class="flex gap-4 mt-4">
    <a href="/projects/">Projects</a>
    <a href="/research/">Research</a>
</nav>
```

---

## Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. GitHub Actions will build and deploy automatically
3. Check the Actions tab for deployment status

### Manual Build

```bash
# Build the site
npm run build

# The output is in the `build/` directory
```

### GitHub Pages Configuration

1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. The custom domain is configured in `static/CNAME`

---

## Troubleshooting

### Common Issues

#### Build Fails with Type Errors
```bash
# Run type checking to see all errors
npm run check
```

#### Styles Not Updating
1. Clear your browser cache
2. Restart the dev server
3. Delete `.svelte-kit/` folder and restart

#### Images Not Loading
- Ensure images are in `static/images/`
- Reference them with absolute paths: `/images/photo.png`

#### Local Development Issues
```bash
# Clear all caches and reinstall
rm -rf node_modules .svelte-kit
npm install
npm run dev
```

### Getting Help

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| [SvelteKit](https://kit.svelte.dev/) | Web framework |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS |
| [Vite](https://vitejs.dev/) | Build tool |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |
| [GitHub Pages](https://pages.github.com/) | Hosting |

---

## License

MIT License - feel free to use this as a template for your own personal website.
