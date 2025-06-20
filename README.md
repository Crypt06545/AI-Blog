# 🧠 AI Blog Generator

## 🌐 Project Overview

The **AI Blog Generator** is a full-stack web application that allows users to generate and manage blogs using **AI integration**. Users can input a blog title and instantly generate content using **Gemini AI**. The platform includes secure authentication, a rich-text editor, category-based filtering, and seamless user experience built with **Next.js App Router**, **Clerk**, **RTK Query**, and **MongoDB**.

---

## 🚀 Live Site

🔗 [Live Link](https://ai-blog-six-kappa.vercel.app)

---

## 🎯 Key Features

### 🔐 Authentication (Clerk)

- Secure login with Clerk (email/password & social login)
- Protected routes using Next.js middleware
- Personal blog dashboard for logged-in users

### 🤖 AI Blog Generator (Gemini API)

- Users input a blog **title**
- Content is generated via **Gemini AI**
- Direct integration with rich editor for real-time editing

### ✍️ Rich Text Editor

- Integrated **Quill.js** for enhanced formatting
- Supports headings, lists, bold/italic, links, and more

### 📄 Blog Management

- **Create, Update, Delete** blogs (only for logged-in users)
- Instant UI update using **RTK Query** (no Redux)
- Toast notifications for blog operations
- Category-based tagging

### 🔍 Search & Filtering

- Search blogs by title
- Filter by blog category
- Blogs displayed in responsive card layout

---

### 🖼 Cloudinary Integration

- Upload and manage blog images using **Cloudinary**
- Optimized image storage and fast delivery via CDN

## 🛠️ Technologies Used

### Frontend / Full Stack

- **Next.js (App Router, SSR, API Routes)**
- **React.js**
- **Tailwind CSS**
- **RTK Query** (for API state management)
- **Quill.js** (Rich Text Editor)
- **Clerk** (Authentication)
- **Google Gemini API** (AI integration)
- **MongoDB** (Database via Mongoose or direct MongoDB driver)

---

## 📦 Installation & Usage

### Prerequisites

- Node.js v16+
- MongoDB Atlas or Local MongoDB
- Clerk Project + Keys
- Gemini API Key

---

### 🔧 Setup Instructions

#### 1. Install dependencies

```bash
npm install
```

#### 2. Configure Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
MONGO_URL=your-mongodb-connection-uri
NEXT_GEMINI_API_KEY=your-gemini-api-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET_KEY=your-cloudinary-secret-key
```

#### 3. Run the development server

```
npm run dev
```
