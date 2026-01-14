# Bitscale - Responsive Data Table Interface

A modern, fully responsive data table interface built with Next.js, featuring a grid-based workflow management system for data enrichment and automation.

## 🎯 Project Overview

This project is a **responsive data table application** designed for managing imported data, tracking email waterfalls, and automating data enrichment workflows. The interface adapts seamlessly across mobile, tablet, and desktop devices.

## ✨ Features

### Core Functionality

- **Dynamic Data Grid**: Display and manage large datasets with 2000+ rows
- **Email Waterfall Tracking**: Monitor email discovery status with visual indicators
- **Data Import System**: Load and process external data sources
- **Column Management**: View and manage 16/20 visible columns
- **Filtering & Sorting**: Advanced data filtering and sorting capabilities
- **Enrichment Tools**: Automated data enrichment with visual feedback

### Responsive Design

- **Mobile-First Approach**: Optimized for screens from 320px to 1920px+
- **Breakpoint Strategy**:
  - 📱 **Mobile** (`< 640px`): Compact layout, essential elements only, horizontal scroll for table
  - 📱 **Tablet** (`640px - 1024px`): Balanced layout with some hidden stats
  - 🖥️ **Desktop** (`≥ 1024px`): Full-featured layout with all controls visible

### Responsive Components

- ✅ **TableHeader**: Adaptive breadcrumb navigation, collapsible status badge
- ✅ **AlertBanner**: Stacked layout on mobile for payment alerts
- ✅ **Toolbar**: Wrapped buttons, hidden stats on mobile, compact text labels
- ✅ **DataTable**: Horizontal scrolling, responsive text sizes, flexible columns
- ✅ **TabBar**: Scrollable tabs, compact action buttons on mobile

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4 with custom theme
- **UI Components**: Custom component library with shadcn/ui patterns
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: [Geist](https://vercel.com/font) font family

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will auto-reload as you edit files.

## 📁 Project Structure

```
bitscale/
├── app/
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/
│       ├── BitsTable/    # Main data table components
│       │   ├── AlertBanner.tsx
│       │   ├── BitScaleTable.tsx
│       │   ├── DataTable.tsx
│       │   ├── TabBar.tsx
│       │   ├── TableHeader.tsx
│       │   └── Toolbar.tsx
│       ├── button.tsx    # Button component
│       └── table.tsx     # Table primitives
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with consistent spacing
- **Color System**: HSL-based color tokens for light/dark mode support
- **Icons**: Contextual icons for better UX (Users, Buildings, External Links)
- **Status Indicators**: Color-coded badges and progress bars
- **Interactive Elements**: Hover states, active states, and visual feedback

## 📱 Responsive Testing

The application has been optimized for the following viewports:

- Mobile: 375px, 414px
- Tablet: 768px, 820px
- Desktop: 1024px, 1440px, 1920px

## 🔧 Development

### Key Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This project is a demonstration of responsive design principles and modern web development practices.

---

Built with ❤️ using Next.js and Tailwind CSS
