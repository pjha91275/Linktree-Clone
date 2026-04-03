# 🌲 Linktree Clone - Full-Stack Link Sharing Platform

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb)

> **A modern, full-stack Linktree clone** built for speed and efficiency. This project utilizes the latest features of Next.js 16, React 19, and Tailwind CSS v4 to provide a fast, responsive UI with near-instant profile loading and real-time state synchronization.

---

## 🚀 Overview

This Linktree Clone is a functional web application that allows users to create a personalized landing page for their social links. Built with an optimized code structure, it ensures fast loading profile visits and a zero-lag creation experience in the dashboard.

### ✨ Key Features

#### 🛡️ Dynamic Handle Management
- **Handle Claiming**: Users can search for and claim unique handles like `linktr.ee/myhandle`.
- **Validation**: Real-time checks to ensure every handle is unique and URL-friendly.

#### 📱 Interactive Dashboard
- **3-Step Setup**: A guided flow to get your profile live in minutes (Handle → Add Links → Profile Details).
- **Instant Mobile Preview**: A sticky phone mockup that live-updates as you customize your profile.
- **Flexible Links**: Add, edit, and organize multiple links with custom icons and text.

#### 🎨 Modern UI & Experience
- **Premium Styling**: Uses glassmorphism effects, smooth gradients, and clean typography.
- **Animations**: Subtle micro-interactions and transitions using Tailwind CSS utility classes.
- **Fully Responsive**: Optimized for every screen size, from small phones to large monitors.

#### 🌟 Profile Features
- **Verified Badge**: Every profile comes with a signature verification checkmark.
- **Custom Bio**: Share your story with personal descriptions and profile pictures.

---

## 🛠️ Technical Stack

### **Frontend**
- **Next.js 16 (App Router)**: Utilizing Server Components for fast page loads and efficient routing.
- **React 19**: Using the latest hooks for high-speed state synchronization in the dashboard.
- **Tailwind CSS v4**: A utility-first approach for modern, high-performance styling.
- **React-Toastify**: Providing smooth, non-intrusive feedback for user actions.

### **Backend & Logic**
- **Route Handlers**: Next.js serverless functions for handling API requests and data security.
- **Database Logic**: Modular code for handle verification and link storage.

### **Database**
- **MongoDB**: A NoSQL collection-based database for flexible data management.
- **Optimization**: Implements a singleton connection pattern to ensure database stability.

---

## 🏗️ Architectural Model

The project follows a **Modified MVC (Model-View-Controller)** pattern tailored for the Next.js App Router ecosystem:

- **Model**: Defined implicitly through the MongoDB collection schema (`links` collection).
- **View**: React Server and Client Components (`page.js`, `GenerateClient.js`, `Navbar.js`).
- **Controller/API**: Route handlers in `app/api/` and Server Actions patterns for data mutations.

---

## ⚙️ Project Logic

The application is structured to separate different parts of the project efficiently:

- **Data Layer**: Handled via MongoDB where user profiles (handles, bios, and links) are stored.
- **Dynamic Routing**: Uses Next.js dynamic segments `[handle]` to serve unique profiles instantly.
- **Client-Side Preview**: Managed using React state to show immediate changes in the mobile mockup without needing a page refresh.

---

## 📂 Project Structure

```bash
Linktree-Clone/
├── 📁 app/                    # Main application routes
│   ├── 📁 [handle]/           # Dynamic user profile pages
│   ├── 📁 api/                # Backend API routes (Add handle, etc.)
│   ├── 📁 generate/           # Profile creation logic & UI
│   ├── layout.js              # Site-wide layout and fonts
│   └── page.js                # High-conversion landing page
├── 📁 components/             # Reusable UI parts like the Navbar
├── 📁 lib/                    # Database connection utilities
├── 📁 public/                 # Static assets (Favicon, home images)
├── 📄 package.json            # Scripts and dependencies
└── 📄 .env.local              # App configuration & secrets
```

---

## 👥 User Roles & Access

| Role | Permissions | Capabilities |
| :--- | :--- | :--- |
| **End User** | All Users | Claim a handle, add links, and create a profile. |
| **Visitor** | Public | View any claimed profile via its unique link. |
| **System** | Internal | Manages handle uniqueness and data storage. |

---

## 💎 Technical Implementation Highlights

- **Efficient DB Connections**: Implements a caching mechanism for the MongoDB client to ensure performance in serverless environments.
- **Automatic Serialization**: Handles are automatically normalized (spaces removed, lowercased) for consistent URLs.
- **Smart Validation**: Blocks duplicate handles and prevents incomplete profiles from being published.
- **Next-Gen React**: Uses `Suspense` and modern hooks for a smooth, flicker-free data flow.

---

## 🌟 Potential Future Improvements

While the current version provides a complete functional profile generation experience, there are several areas where the app can be further enhanced:

- **User Authentication**: A secure login system using NextAuth.js to allow users to save and edit their profiles later.
- **Enhanced Sharing**: A dedicated shareable link generator with "Copy to Clipboard" functionality.
- **Custom Themes**: More personalization options for profile background colors and link styles.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed.
- A MongoDB cluster (local or Atlas).

### Installation
1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/linktree-clone.git
   cd linktree-clone
   ```

2. **Install Packages**
   ```bash
   npm install
   ```

3. **Environments**
   Create a `.env.local` file:
   ```env
   MONGODB_URI=your_mongodb_uri
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Run Dev**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

<div align="center">
  <p>Built with ❤️ by Prince Jha</p>
  <p><i>Link sharing, simplified and beautified.</i></p>
</div>
