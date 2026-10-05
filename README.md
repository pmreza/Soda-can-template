# 🥤 Delester - 3D Soda Can Experience with Prismic + Next.js

Welcome to **Delester**, an interactive, animated soda can experience built with [Next.js](https://nextjs.org/), [Three.js (via React Three Fiber)](https://docs.pmnd.rs/react-three-fiber), and [Prismic](https://prismic.io/).  
This project leverages the Prismic + Next.js Minimal Starter and adds custom 3D components, smooth animations, and CMS-powered content management.

---

## ⚡ Quick Start

1. **Create a Prismic Repo:**
   - Go to [Prismic Dashboard](https://prismic.io/dashboard)
   - Click **Create New Repository**
   - Choose **Next.js + Minimal Starter**
   - Complete setup steps

2. **Clone this Project:**

   ```bash
   git clone <your-github-repo-url>
   cd delester
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

---

## 🧱 Project Structure & Custom Components

| File/Component     | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `Bounded.tsx`      | Responsive layout wrapper with consistent padding             |
| `Button.tsx`       | Prismic-connected styled button                               |
| `DelesterLogo.tsx` | Custom animated SVG logo with masking                         |
| `CircleText.tsx`   | Animated spinning circular text SVG                           |
| `TextSplitter.tsx` | Splits and animates text character by character               |
| `SodaCan.tsx`      | 3D soda can rendered with Three.js (supports flavor textures) |
| `FloatingCan.tsx`  | Floating soda can using Drei’s `<Float>` wrapper              |
| `Header.tsx`       | Top navigation bar with logo                                  |
| `Footer.tsx`       | Footer with rotating SVG and branding                         |
| `ViewCanvas.tsx`   | Canvas for rendering 3D elements using React Three Fiber      |

---

## ✨ Features

* ✅ Realistic 3D soda can (multiple flavors)
* ✅ Floating animations with Drei
* ✅ Content managed via Prismic
* ✅ Slice-based editable pages
* ✅ Fully responsive design
* ✅ Animated SVG and text effects

---

## 📝 Customization

### Create Pages with Slices

1. Go to your [Prismic Dashboard](https://prismic.io/dashboard)
2. Click the ✏️ icon to create a **Page**
3. Add slices like rich text, images, or custom slices
4. Publish to view the page live at `/your-page-slug`

### Preview Content

This project supports Prismic’s **Preview Mode** locally. For preview setup in production, see:
🔗 [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs)

---

## 📂 Important Files

| File                 | Purpose                              |
| -------------------- | ------------------------------------ |
| `prismicio.ts`       | Prismic client setup                 |
| `app/page.tsx`       | Homepage rendering with UID `"home"` |
| `app/[uid]/page.tsx` | Dynamic page rendering based on UID  |
| `app/layout.tsx`     | Layout wrapper and providers         |
| `slices/*/index.tsx` | Slice component renderers            |

---

## 📦 Built With

* [Next.js](https://nextjs.org/)
* [Prismic CMS](https://prismic.io/)
* [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
* [Drei](https://github.com/pmndrs/drei)
* [Slice Machine](https://prismic.io/slice-machine)

---

## 🌐 Deployment

Deploy easily with Vercel or any cloud provider:
📘 [Deploy a Next.js App](https://prismic.io/docs/technologies/deploy-nextjs)

---

## 🧠 Learn More

* [Prismic + Next.js Guide](https://prismic.io/docs/technologies/nextjs)
* [Slice Machine Docs](https://prismic.io/docs/technologies/model-content-nextjs)
* [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)

---

## 📄 License

This project is for **educational purposes only** and is **not affiliated with or endorsed by** [Prismic](https://www.linkedin.com/company/prismic-io/), Next.js, or any other third-party tools mentioned.

#### 🎥 Inspired by the tutorial:

* **How I Built a 3D Soda Can Website Using Three.js & Prismic** by **Prismic**

📺 [Watch on YouTube](https://youtu.be/RKQqrNyAC6k?si=bT-Wfq4iwJbj6ExW)

All trademarks and assets belong to their respective owners.

---

> Created with ❤️ using Prismic, Next.js & Three.js
