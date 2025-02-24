# [WordNest](https://wordnest-varun.vercel.app/) - Varun Anand Patkar

Welcome to **WordNest**, a fancy-schmancy blogging platform built with the magical powers of **Next.js 15**! This project is a one-stop shop for creating and viewing blogs instantly — no annoying page reloads here. It's lightning-fast, optimized for performance, and blessed with top-tier SEO enhancements to make your blogs shine on the interwebs.

---

## 🚀 Features Galore

### For Blog Lovers

- **Create Blogs:** Share your thoughts, stories, or cat adventures. It's your world.
- **View Blogs Instantly:** Seamless navigation with no page reloads because who has time for that?
- **Optimized Performance:** This baby runs smooth as butter, even when you're juggling multiple tabs.
- **Enhanced SEO:** Let’s make Google (and your audience) love your content!
- **Live Content API:** Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.
- **GitHub Authentication:** Allows users to log in easily using their GitHub account.
- **Pitch Submission:** Users can submit startup ideas, including title, description, category, and multimedia links (image or video).
- **View Pitches:** Browse through submitted ideas with filtering options by category.
- **Pitch Details Page:** Click on any pitch to view its details, with multimedia and description displayed.
- **Profile Page:** Users can view the list of pitches they've submitted.
- **Editor Picks:** Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.
- **Views Counter:** Tracks the number of views for each pitch instead of an upvote system.
- **Search:** Search functionality to load and view pitches efficiently.
- **Minimalistic Design:** Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

### For Tech Enthusiasts

This is not your average blogging platform; we’ve packed in all the Next.js 15 goodies:

- **Server-Side Rendering (SSR):** Content served faster than you can say "WordNest."
- **Static Site Generation (SSG):** Pre-rendered pages for ultimate speed.
- **Incremental Static Generation (ISR):** Real-time updates that scale like a dream.
- **Partial Pre-rendering (PPR):** Optimized rendering for better load times.
- **Next.js 15 Cache:** Keeps things zippy and fresh.
- **Server Actions:** Dynamically handle server-side logic with ease.
- **Data Fetching Architecture:** Smart fetching ensures you only get what you need.
- **Parallel & Sequential Data Fetching:** Custom fetching strategies for optimal performance.
- **Unstable After:** Because we're adventurous like that.

---

## 🔒 Authentication

We’ve got you covered with **NextAuth.js** for smooth and secure user authentication. No stress, just login and go.

---

## 📂 Tech Stack

- **Framework:** Next.js 15
- **Library:** React 19
- **CMS:** Sanity
- **Styling:** TailwindCSS + ShadCN
- **Language:** TypeScript

---

## 👨‍💻 Contributing

Just me, myself, and I for now! If you'd like to check out more of my projects or send me a friendly "Hey!", here’s where you can find me:

[![GitHub Profile](https://img.shields.io/badge/GitHub-Varun--Patkar-181717?style=for-the-badge&logo=github)](https://github.com/Varun-Patkar)
[![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-Varun--Patkar-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/varun-patkar/)

---

## 🌐 Deployment

[Link to Deployed App](https://wordnest-varun.vercel.app/)

---

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/JavaScript-Mastery-Pro/pitchify.git
cd pitchify
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## 🎉 Final Words

Whether you're here to blog your heart out or just geek out over the tech, **WordNest** is here for you. It's a labor of love, caffeine, and a touch of insanity (in the best way).

This project is inspired by a tutorial by the amazing [JavaScript Mastery](https://www.youtube.com/watch?v=Zq5fmkH0T78&t=85s). While the original tutorial focused on building a Y Combinator directory for startup pitches, I added my own spin to create a blogging platform tailored for creative writers and readers.

Enjoy exploring, and happy blogging!
