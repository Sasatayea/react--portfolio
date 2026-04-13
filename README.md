<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Outfit&weight=800&size=40&duration=4000&pause=1000&color=4F8FF7&center=true&vCenter=true&width=600&height=70&lines=Mostafa+Salah+Tayea;Backend+Software+Engineer;Java+%7C+Spring+Boot+%7C+Scalable+Systems" alt="Typing SVG" />
</p>

<p align="center">
  <a href="mailto:memosalah553@gmail.com"><img src="https://img.shields.io/badge/Email-memosalah553%40gmail.com-4F8FF7?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://linkedin.com/in/Mostafa-Salah"><img src="https://img.shields.io/badge/LinkedIn-Mostafa--Salah-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="https://github.com/Sasatayea"><img src="https://img.shields.io/badge/GitHub-Sasatayea-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="tel:+201118914120"><img src="https://img.shields.io/badge/Phone-%2B201118914120-2dd4bf?style=for-the-badge&logo=phone&logoColor=white" /></a>
</p>

---

# 🚀 Personal Portfolio — Developer Website

A modern, premium portfolio website showcasing my skills, projects, and professional background as a Backend Software Engineer. Built with a focus on **performance**, **aesthetics**, and **smooth animations**.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-r160-000000?style=flat-square&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Premium Dark Theme** | Custom-designed dark mode with neon accent colors (blue, purple, cyan, pink) |
| 🌐 **Interactive 3D Background** | Floating particles, distorted spheres, and orbital rings using Three.js |
| 🖱️ **Custom Cursor** | Animated dot-and-ring cursor with hover state detection |
| 📊 **Scroll Progress Bar** | Color-gradient progress indicator synced to scroll position |
| 🃏 **3D Tilt Cards** | Mouse-tracking perspective tilt with glare effect on project & skill cards |
| 🔮 **Glassmorphism UI** | Frosted glass panels with blur, border glow, and subtle transparency |
| 🌊 **Animated Gradient Orbs** | Floating, morphing gradient blurs for ambient depth |
| 📐 **Background Grid** | Subtle animated grid lines with radial fade mask |
| ⚡ **Loading Screen** | Branded loading animation with smooth exit transition |
| 📱 **Fully Responsive** | Optimized layouts for mobile, tablet, and desktop viewports |
| 🧲 **Framer Motion Animations** | Scroll-triggered reveal animations on every section |

---

## 🗂️ Project Structure

```
hello-clone-main/
├── public/                      # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/                  # Profile photo and images
│   ├── components/
│   │   ├── ui/                  # Shadcn UI primitives (toast, tooltip, etc.)
│   │   ├── Navbar.tsx           # Fixed navigation with smooth scrolling
│   │   ├── HeroSection.tsx      # Full-screen hero with name & CTA buttons
│   │   ├── AboutSection.tsx     # Bio, education, military service, coursework
│   │   ├── SkillsSection.tsx    # Technical & soft skills in tilt cards
│   │   ├── ProjectsSection.tsx  # Project showcase with featured layout
│   │   ├── ContactSection.tsx   # Contact form & quick contact links
│   │   ├── Footer.tsx           # Social links & credits
│   │   ├── Scene3D.tsx          # Three.js particle field & floating shapes
│   │   └── Interactions.tsx     # Custom cursor, scroll bar, loading screen
│   ├── pages/
│   │   ├── Index.tsx            # Main page assembling all sections
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Router & providers
│   ├── index.css                # Global styles, animations, glassmorphism
│   └── main.tsx                 # Entry point
├── index.html                   # HTML template with SEO meta tags
├── tailwind.config.ts           # Tailwind theme (neon colors, fonts)
├── vite.config.ts               # Vite build configuration
└── package.json                 # Dependencies & scripts
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 (SWC plugin) |
| **Styling** | TailwindCSS 3 + Custom CSS (glassmorphism, gradients, animations) |
| **3D Graphics** | Three.js + React Three Fiber + Drei |
| **Animations** | Framer Motion 11 (scroll-triggered, spring physics) |
| **UI Components** | Shadcn/UI (Radix primitives) |
| **Routing** | React Router DOM 6 |
| **Fonts** | Inter, Outfit, JetBrains Mono (Google Fonts) |
| **Icons** | Font Awesome 6 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/Sasatayea/react--portfolio.git
cd react--portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev

# Open in browser
# → http://localhost:8080/
```

### Production Build

```bash
# Create optimized build
npm run build

# Preview the production build
npm run preview
```

### Linting & Testing

```bash
# Run ESLint
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

---

## 📑 Sections Overview

### 1. Hero Section
Full-screen landing with animated text reveal, gradient name, role subtitle, and three CTA buttons (View Projects, Get in Touch, GitHub). Includes an "Open to opportunities" status badge and a scroll-down mouse indicator.

### 2. About Me
Personal introduction with profile photo (grayscale-to-color hover effect). Displays key highlights as badges:
- ✅ Completed Military Service
- 🎓 Cairo University — BS in Computer Science (2019–2023)
- 📍 Osim, Giza, Egypt
- 📚 Relevant Coursework: Computer Architecture, Comparison of Learning Algorithms, Computational Theory

### 3. Skills & Tools
Four animated tilt cards covering technical skills:
- **Languages**: Java, JavaScript, SQL, HTML/CSS
- **Frameworks**: Spring Boot, Spring Security, Spring Data JPA, Spring MVC, Hibernate, JDBC, Thymeleaf, Bootstrap
- **Concepts**: OOP, DSA, RESTful APIs, MVC, Design Patterns, SOLID Principles, Clean Code
- **Tools**: Git & GitHub, Postman, MySQL

Plus a dedicated **Soft Skills** card: Problem Solving, Collaboration, Time Management, Communication, Leadership, Adaptability.

### 4. Projects
Four projects displayed in a responsive grid with 3D tilt effect:

| Project | Type | Key Technologies |
|---------|------|-----------------|
| **Movies Web Application** ⭐ | Featured — Full Width | Java, Spring Boot, Security, Angular, MySQL |
| **Books Store** | Backend API | Spring Data JPA, AWS S3, Swagger UI, AOP |
| **Employee System** | MVC Web App | Spring Boot MVC, Security, Thymeleaf |
| **DoctorNow** | Graduation Project | React Native, Firebase, Stripe, Google Maps |

### 5. Contact
Centered contact form with focus-glow input effects, plus quick-access badges for email, phone, and location.

### 6. Footer
Social links (GitHub, LinkedIn, Email) with hover glow effects.

---

## 🎨 Design System

### Color Palette

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--neon-blue` | `220 90% 56%` | Primary accent, links, interactive elements |
| `--neon-purple` | `265 90% 66%` | Secondary accent, gradient endpoints |
| `--neon-cyan` | `175 80% 50%` | Tertiary accent, status indicators |
| `--neon-pink` | `330 85% 60%` | Quaternary accent, special highlights |
| `--background` | `240 15% 3%` | Page background (near-black) |
| `--foreground` | `0 0% 98%` | Primary text (near-white) |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Outfit** | 600–900 | Headings (h1–h6) |
| **Inter** | 300–700 | Body text, UI labels |
| **JetBrains Mono** | 400–500 | Code snippets, monospace elements |

---

## 📬 Contact

**Mostafa Salah Tayea**

- 📧 Email: [memosalah553@gmail.com](mailto:memosalah553@gmail.com)
- 📱 Phone: [+201118914120](tel:+201118914120)
- 💼 LinkedIn: [Mostafa-Salah](https://linkedin.com/in/Mostafa-Salah)
- 🐙 GitHub: [Sasatayea](https://github.com/Sasatayea)
- 📍 Location: Osim, Giza, Egypt

---

<p align="center">
  <sub>Designed & Built by <strong>Mostafa Salah Tayea</strong> · 2025</sub>
</p>
