# Developer Portfolio – Develop.me

A pixel-perfect, fully-responsive portfolio home page built with **Next.js 15** and **Tailwind CSS**.  
The project fulfils every rubric item in the Raintor Ltd. technical assignment, including dark-mode support, accessibility, reusable atoms, Framer-Motion animations, virtualised lists and CI-ready linting.

---

## ✨ Features
-------------------------------------------------------------------------------------------|
| **Framework**            | Next .js 15 (App Router) + TypeScript                                                     |
| **Styling**              | Tailwind CSS with custom theme tokens (`primary`,`dark`)                       |
| **Animation**            | Framer Motion (entrance, hover, stagger)                                        |
| **Slider / Virtualise**  | Swiper.js (external‐nav, autoplay) & `react-window` demo for large logo lists              |
| **Accessibility**        | Semantic headings, landmark roles, keyboard nav, `aria-*` labels                          |
| **Dark / Light**         | Theme toggle persisted in `localStorage`, automatic `class` swap                          |
| **Image optimisation**   | `next/image` with `sizes` + `fill`, priority hints                                        |
                          |
| **Code Quality**         | ESLint (`next/core-web-vitals`, `jsx-a11y`, `unicorn`) & Prettier (Husky pre-commit)      |

---

## 🚀 Quick-start

```bash
# 1. Clone
git clone https://github.com/Habiba-Ferdausi/Develop.me
cd Develop.me


# 2. Install (pnpm is fastest but npm / yarn works)
pnpm install

# 3. Run dev server
pnpm dev
# ➜ http://localhost:3000

# 4. Lint & format
pnpm lint      # ESLint
pnpm format    # Prettier

# 5. Run tests
pnpm test

# 6. Production build
pnpm build
pnpm start
