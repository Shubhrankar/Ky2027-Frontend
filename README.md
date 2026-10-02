<div align="center">

# ✨ Kashi Yatra 2027 ✨

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=FFD700&center=true&vCenter=true&random=false&width=600&lines=%F0%9F%AA%94+Where+Spirituality+Meets+Technology;%F0%9F%8E%AD+IIT+BHU's+Cultural+Extravaganza;%F0%9F%8C%8A+Dive+Into+The+Ganga+of+Code" alt="Typing SVG" />

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white&labelColor=000000)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

</div>

---

## 🪔 About The Project

<img align="right" alt="Coding" width="400" src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif">

**Kashi Yatra 2027** is the official website for IIT (BHU) Varanasi's annual cultural festival — a digital pilgrimage where ancient Varanasi aesthetics meet cutting-edge web technologies.

### 🌟 The Experience

- 🏛️ **Immersive Banaras Theme** — Every pixel breathes the spiritual essence of Kashi
- ✨ **60+ Custom Animations** — Diyas flickering, Ganga flowing, temples glowing
- 🎭 **Seamless Transitions** — Page morphs that feel like magic
- 📱 **Fluid Responsiveness** — From mobile to 4K, beauty at every breakpoint

<br clear="right"/>

---

## 🎨 Animation Showcase

<div align="center">

| Feature | Animation Type | Library |
|---------|---------------|---------|
| 🌊 Hero Section | Parallax River Flow | GSAP ScrollTrigger |
| 🪔 Floating Diyas | Physics-based Movement | Framer Motion |
| 🏛️ Temple Silhouettes | Layered Parallax | CSS + GSAP |
| ✨ Particle Systems | WebGL Sparkles | Custom Canvas |
| 📜 Page Transitions | Morphing Layouts | Framer Motion |
| 🎭 Hover Effects | Spring Physics | Framer Motion |
| 🌅 Sky Gradients | Time-based Colors | CSS Animations |
| 💫 Loading States | Skeleton + Diya Spin | Custom CSS |

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

---

## 🚀 Tech Stack

<div align="center">

```
╔═══════════════════════════════════════════════════════════════╗
║                    ⚡ FRONTEND ARSENAL ⚡                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          ║
║   │  Next.js 15 │→→│ TypeScript  │→→│ Tailwind    │          ║
║   │  App Router │  │   Strict    │  │    CSS      │          ║
║   └─────────────┘  └─────────────┘  └─────────────┘          ║
║         ↓                ↓                ↓                   ║
║   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          ║
║   │   Framer    │  │    GSAP     │  │  TanStack   │          ║
║   │   Motion    │  │ ScrollMagic │  │    Query    │          ║
║   └─────────────┘  └─────────────┘  └─────────────┘          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🏠 Home Page
- Cinematic intro with video player
- Animated navigation drawer
- Parallax hero with flowing Ganga
- Floating diya particles
- Smooth scroll sections

</td>
<td width="50%">

### 👤 User Profile
- 4-step completion wizard
- Animated progress stepper
- Real-time validation
- Custom success/error states
- Celebration animations

</td>
</tr>
<tr>
<td width="50%">

### 🎓 College Search
- 39,000+ colleges database
- Fuzzy search with Fuse.js
- Abbreviation expansion (IIT → Indian Institute...)
- Animated dropdown
- Institution type badges

</td>
<td width="50%">

### 📋 Aadhaar KYC
- Drag & drop upload
- S3 presigned URLs
- AWS Textract extraction
- Auto-fill verification
- Animated success states

</td>
</tr>
</table>

---

## 📁 Project Structure

```
🪔 ky-2026-frontend/
├── 📱 app/                          # Next.js pages
├── 🎨 components/
│   ├── 🧭 navbar/                   # Navigation
│   ├── 📄 pages/                    # Page components
│   │   ├── 🏠 home/
│   │   │   ├── 🎬 sections/         # Hero, Intro, Footer...
│   │   │   │   ├── 🌅 Hero/
│   │   │   │   │   ├── 🖥️ desktop/
│   │   │   │   │   ├── 📱 mobile/
│   │   │   │   │   ├── 🌊 River/
│   │   │   │   │   └── 🌌 Sky/
│   │   │   │   └── ...
│   │   │   └── 🎨 constants/
│   │   ├── 👤 profile/
│   │   │   ├── 📄 sections/
│   │   │   ├── ⏳ loader/
│   │   │   └── ❌ error/
│   │   ├── ✅ complete-profile/
│   │   │   ├── 📝 steps/
│   │   │   │   ├── 📋 adhaar/
│   │   │   │   ├── 🎓 college/
│   │   │   │   └── 📱 phone/
│   │   │   └── ...
│   │   └── 📧 contact/
│   │       ├── 📄 sections/
│   │       ├── 🎭 decors/
│   │       ├── ⏳ loader/
│   │       └── 🔔 toasts/
│   ├── 🔔 toast/                    # Global toasts
│   └── 🧩 ui/                       # UI primitives
├── 📚 lib/
│   ├── 🔌 api/
│   │   ├── 🪝 hooks/
│   │   └── 📊 graphql/
│   └── 🖼️ images/
└── 🪝 hooks/                        # Custom hooks
```

---

## 🎭 Animation Philosophy

<div align="center">

```
    ╭──────────────────────────────────────────────╮
    │                                              │
    │   "Every transition should feel like        │
    │    the gentle flow of the Ganga —           │
    │    smooth, purposeful, and eternal."        │
    │                                              │
    │                    — Design Principle        │
    ╰──────────────────────────────────────────────╯
```

</div>

### 🌊 Animation Principles

| Principle | Implementation |
|-----------|----------------|
| **Fluidity** | Spring physics, no harsh stops |
| **Purpose** | Every animation guides attention |
| **Performance** | GPU-accelerated, 60fps target |
| **Accessibility** | Respects `prefers-reduced-motion` |

---

## 🛠️ Getting Started

```bash
# 📦 Install dependencies
pnpm install

# 🔐 Set up environment
cp .env.example .env.local

# 🚀 Launch development server
pnpm dev

# 🏗️ Build for production
pnpm build
```

---

## 🎨 Design System

<div align="center">

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🟡 Bright Gold | `#FFD700` | Primary accents, CTAs |
| 🟠 Saffron | `#FF9933` | Hover states, highlights |
| 🟤 Deep Wine | `#2d0a18` | Background gradients |
| 🔵 Royal Purple | `#1a0a2e` | Dark sections |
| ⚪ Cream | `#FFF8DC` | Text on dark |

</div>

---

## 📜 License

<div align="center">

**Private** — IIT (BHU) Varanasi

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

---

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&duration=3000&pause=1000&color=FFD700&center=true&vCenter=true&random=false&width=500&lines=Built+with+%E2%9D%A4%EF%B8%8F+at+IIT+BHU+Varanasi;%E0%A4%B9%E0%A4%B0+%E0%A4%B9%E0%A4%B0+%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A6%E0%A5%87%E0%A4%B5+%F0%9F%95%89%EF%B8%8F" alt="Footer" />

</div>
