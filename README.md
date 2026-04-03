# 🌲 Linktree Clone - Full-Stack Link Sharing Platform

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb)

> **A high-fidelity technical clone of the world's most popular link-in-bio platform.** This project demonstrates advanced full-stack engineering practices using the latest cutting-edge web technologies like Next.js 16, React 19, and Tailwind CSS v4.

---

## 🚀 Overview

This Linktree Clone is a comprehensive web application designed to allow users to create, customize, and share a centralized profile containing all their important social links. It provides a seamless user experience from claiming a unique handle to real-time profile previewing and instant publishing.

### ✨ Key Features

#### 🛡️ Dynamic Handle Management
- **Handle Claiming**: Users can check and claim unique handles (e.g., `linktr.ee/myhandle`).
- **Availability Check**: Real-time validation to ensure handles are unique across the platform.

#### 📱 Interactive Dashboard (Generation Suite)
- **3-Step Wizard**: Streamlined process for creating a profile (Claim Handle → Add Links → Profile Details).
- **Real-time Mobile Preview**: A sticky, interactive phone mockup that updates instantly as you type your links and bio.
- **Dynamic Link Creation**: Add as many social/business links as needed with custom titles and URLs.

#### 🎨 Modern UI/UX
- **Glassmorphism**: Elegant use of backdrop blurs and translucent borders for a premium feel.
- **Custom Animations**: Smooth transitions and entrance animations using standard CSS and Tailwind utilities.
- **Responsive Architecture**: Fully optimized for Desktop, Tablet, and Mobile devices.

#### 🌟 Profile Excellence
- **Verified Status**: Automatic visual verification badge for every created profile.
- **Vibrant Aesthetics**: Dynamic gradients and high-contrast color palettes (Indigo, Purple, Pink).

---

## 🛠️ Technical Stack

### **Frontend (Client-Side)**
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) - Utilizing the latest React Server Components and optimized routing.
- **Core Library**: [React 19](https://react.dev/) - Leveraging the latest concurrent features and state management hooks.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Modern utility-first CSS with advanced JIT compilation.
- **Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/) - Robust feedback system for user actions.
- **Typography**: Integrated Google Fonts (Inter, Geist Sans, Geist Mono).

### **Backend (Server-Side)**
- **API Architecture**: Next.js Route Handlers (Serverless Functions) for handling POST/GET requests.
- **Logic**: Clean, modular API routes for handle validation and database insertions.

### **Database (Persistence)**
- **Engine**: [MongoDB](https://www.mongodb.com/) - High-performance NoSQL database.
- **Driver**: Native `mongodb` driver with a singleton connection promise for optimal resource usage.

---

## 🏗️ Architectural Model

The project follows a **Modified MVC (Model-View-Controller)** pattern tailored for the Next.js App Router ecosystem:

- **Model**: Defined implicitly through the MongoDB collection schema (`links` collection).
- **View**: React Server and Client Components (`page.js`, `GenerateClient.js`, `Navbar.js`).
- **Controller/API**: Route handlers in `app/api/` and Server Actions patterns for data mutations.

---

## 📂 Project Structure

```bash
Linktree-Clone/
├── 📁 app/                    # Next.js App Router root
│   ├── 📁 [handle]/           # Dynamic Route: User Profile Display
│   │   └── page.js            # Profile page for claimed handles
│   ├── 📁 api/                # API Endpoints (Backend)
│   │   └── 📁 add/
│   │       └── route.js       # Handle registration & data storage
│   ├── 📁 generate/           # Linktree Creation Page
│   │   ├── page.js            # Server entry (with Suspense)
│   │   └── GenerateClient.js  # Interactive Form & Preview Logic
│   ├── layout.js              # Root Layout (Navbar & Global CSS)
│   ├── page.js                # High-conversion Landing Page
│   └── globals.css            # Global Tailwind & CSS definitions
├── 📁 components/             # Reusable UI Components
│   └── Navbar.js              # Global Navigation Component
├── 📁 lib/                    # Core Utilities & Logic
│   └── mongodb.js             # MongoDB Singleton Connection
├── 📁 public/                 # Static Assets (Images, Icons)
├── 📄 package.json            # Dependency & Script Manifest
├── 📄 .env.local              # Environment Variables (Secrets)
└── 📄 tailwind.config.js       # Styling configuration
```

---

## 👥 User Roles & Access

| Role | Permissions | Capabilities |
| :--- | :--- | :--- |
| **End User** | All Users | Claim handles, Add/Edit links, Customize Bio, View Profiles. |
| **Admin** | System Level | Data management via MongoDB Atlas Dashboard (Internal). |
| **Visitor** | Public | View any claimed profile via unique URL. |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 20+ installed.
- MongoDB Atlas account and connection string.

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/linktree-clone.git
   cd linktree-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 💎 Technical Highlights

- **Optimized MongoDB Connection**: Implements a caching mechanism for the MongoDB client to prevent connection exhaustion in serverless environments.
- **Normalization**: Automatic handle normalization (lowercase, whitespace removal) for URL consistency.
- **Robust Error Handling**: Comprehensive validation on both client and server to prevent duplicate handles and empty submissions.
- **Modern React Syntax**: Built with React 19's `useSearchParams` and standard hooks for a forward-compatible codebase.

---

<div align="center">
  <p>Built with ❤️ by [Your Name]</p>
  <p><i>Link sharing, simplified and beautified.</i></p>
</div>
