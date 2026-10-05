# Delester 3D Experience

An interactive 3D web experience built with Next.js, React Three Fiber (Three.js), GSAP, and Tailwind CSS. 

## Project Structure

- `src/app` - Next.js App Router pages, layouts, and global styles.
- `src/components` - Reusable React components including the 3D models and UI elements.
- `src/slices` - Prismic slices for CMS-driven content and sections.
- `public/labels` - Static assets, images, and 3D textures (e.g., custom soda can labels).
- `customtypes` - Prismic custom types definitions.
- `.github/workflows` - GitHub Actions for automated deployment to GitHub Pages.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pmreza/Soda-can-template.git
   cd Soda-can-template
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the project:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch. 
