# DashApp - Modern Dashboard & Authentication


A modern, responsive dashboard application built with Next.js 15 and Tailwind CSS 4 that showcases a clean user interface with authentication, dynamic data tables, and dark mode support.

## ✨ Features

- **Seamless Authentication**
  - User-friendly login/signup interface
  - Client-side form validation with clear error messages
  - Persistent sessions using localStorage
  - Secure account management options

- **Interactive Dashboard**
  - Feature-rich data table with real-time sorting capabilities
  - Powerful search functionality for quick data filtering
  - Pagination controls for browsing large datasets
  - Responsive layout that adapts to any screen size

- **Polished UI/UX**
  - Clean, accessible components built with shadcn/ui
  - Dark/light mode with automatic system preference detection
  - Smooth transitions and responsive animations
  - Mobile-first design with touch-friendly controls

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/abhiboostin/algotree.git
   cd dashapp
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💻 Usage Guide

### Authentication

The application provides a straightforward authentication flow:

- Enter any valid email address and password (6+ characters)
- Toggle between login and signup modes with a single click
- Experience real-time validation feedback
- Automatic redirection to dashboard upon successful authentication

### Dashboard Navigation

The intuitive dashboard interface includes:

- A responsive sidebar with category navigation
- Top navigation bar with user account controls
- Mobile-optimized menu for smaller screens
- Clearly highlighted active section indicators

### Working with Data

The data table component offers powerful data management:

- Click any column header to sort data in ascending/descending order
- Use the search bar to instantly filter results across all fields
- Adjust rows per page to optimize your viewing experience
- Navigate through pages with the intuitive pagination controls

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for utility-first styling
- **Components**: [shadcn/ui](https://ui.shadcn.com/) for accessible, customizable UI
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful SVG icons
- **State Management**: React Context API for global authentication state
- **Typography**: Inter (sans-serif) & JetBrains Mono (monospace) from Google Fonts

## 📂 Project Structure
