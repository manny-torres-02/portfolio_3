# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Personal Notes

## About me

### Primary Portfolio Introduction

I’m Manny, a freelance developer and cloud consultant. I build clean, thoughtful front-end experiences from design files or brand concepts, and I support them with reliable cloud architecture behind the scenes. I’ve worked across consulting, product teams, and community projects, and I love helping people bring ideas to life. Whether you’re an individual, a small business, or a growing startup, I’m here to help you create something that feels good to use and works the way it should.

⸻

### Slightly Bolder (For homepage hero section)

Hi — I’m Manny. I design and build polished digital experiences, from front-end interfaces to cloud architecture. I work with anyone who has an idea worth making real. If you’re looking to craft something genuine, functional, and well-made — I’d love to help.

⸻

### More Warm & Human (About page variant)

I love connecting with people and solving problems alongside them. Over the years, I’ve worked in consulting, product development, and cloud infrastructure — all of which shaped how I think about building things with care. My work is about clarity, usability, and creating experiences that feel intuitive and enjoyable.

## Contact form setup (no backend required)

This project uses an optional Formspree integration so the contact form can send emails without running your own server.

Setup steps:

1. Create a form at <https://formspree.io> and copy your endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
2. Copy `.env.example` to `.env.local` and set one of the following:

   - Using just the ID:

     ```env
     VITE_FORMSPREE_ID=abcdwxyz
     ```

   - Or the full URL:

     ```env
     VITE_FORMSPREE_URL=https://formspree.io/f/abcdwxyz
     ```

3. Restart the dev server so Vite picks up the env var.
4. Submit the contact form. You should see a success message and receive an email (or see it in the Formspree dashboard).

Notes:

- If you see the message: "No contact endpoint configured...", ensure the env var is set and the server restarted.
- You can later swap Formspree out for EmailJS or a custom backend (Node/Nodemailer) if you need more control.
