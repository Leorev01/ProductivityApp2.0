# 📊 Productivity App 2.0

A modern, responsive productivity application built with Next.js 15, TypeScript, and Tailwind CSS. Track your habits, manage tasks, and boost your productivity with an intuitive dashboard interface.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![React](https://img.shields.io/badge/React-19-61DAFB)

## ✨ Features

- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **🎯 Habit Tracking** - Create, edit, and track your daily habits
- **📊 Dashboard Analytics** - Visual overview of your productivity metrics
- **🔄 Real-time Navigation** - Dynamic navigation with active route highlighting
- **🎨 Modern UI/UX** - Clean interface built with Headless UI components
- **⚡ Fast Performance** - Optimized with Next.js 15 App Router

## 🚀 Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components & Icons
- **[Headless UI](https://headlessui.dev/)** - Unstyled, accessible UI components
- **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
productivity-app/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authenticated routes group
│   │   └── dashboard/            # Dashboard section
│   │       ├── layout.tsx        # Dashboard layout with sidebar
│   │       ├── page.tsx          # Dashboard home page
│   │       ├── habits/           # Habits management
│   │       │   └── page.tsx      # Habits listing page
│   │       └── components/       # Dashboard-specific components
│   │           ├── Habit.tsx     # Individual habit card
│   │           └── HabitsPage.tsx # Habits page container
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/                   # Shared components
│   ├── Navbar.tsx               # Main navigation
│   └── Home/                    # Landing page components
│       └── HeroSection.tsx      # Hero section component
├── types/                       # TypeScript type definitions
│   └── habit.ts                # Habit-related types
└── utils/                       # Utility functions and data
    └── storage.json             # Mock data storage
```

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd productivity-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎮 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Architecture Highlights

### Layout System
- **Nested Layouts**: Dashboard pages share a common sidebar layout
- **Route Groups**: Organized with `(auth)` route grouping for authenticated sections
- **Dynamic Navigation**: Active route detection with `usePathname()`

### Component Architecture
- **Separation of Concerns**: Layout, business logic, and presentation components are separated
- **Reusable Components**: Modular components for habits, navigation, and UI elements
- **TypeScript Integration**: Full type safety across components and data structures

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid UI development
- **Component-Level Styles**: Scoped styling with CSS modules where needed
- **Responsive Design**: Mobile-first responsive breakpoints

## 🔄 Navigation Flow

```
Landing Page (/)
└── Dashboard (/dashboard)
    ├── Dashboard Home
    ├── Habits (/dashboard/habits)
    ├── Team (/dashboard/team)
    ├── Projects (/dashboard/projects)
    ├── Calendar (/dashboard/calendar)
    ├── Documents (/dashboard/documents)
    └── Reports (/dashboard/reports)
```

## 🎯 Key Features Breakdown

### Dashboard Layout
- **Responsive Sidebar**: Collapsible navigation with mobile support
- **Persistent State**: Layout state maintained across route changes
- **Active Navigation**: Visual indicators for current page/section

### Habit Management
- **CRUD Operations**: Create, read, update, and delete habits
- **Visual Cards**: Clean card-based interface for habit display
- **Action Buttons**: Quick access to edit and delete functions

### Modern UI Components
- **Headless UI Integration**: Accessible dropdowns, dialogs, and menus
- **Icon System**: Consistent iconography with Heroicons
- **Animation Ready**: Framer Motion integration for smooth transitions

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

```bash
npm run build
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🔮 Future Enhancements

- [ ] **User Authentication** - Implement auth with NextAuth.js
- [ ] **Data Persistence** - Connect to database (PostgreSQL/MongoDB)
- [ ] **Analytics Dashboard** - Add charts and progress tracking
- [ ] **Task Management** - Expand beyond habits to include tasks
- [ ] **Calendar Integration** - Full calendar view with scheduling
- [ ] **Team Collaboration** - Multi-user functionality
- [ ] **Mobile App** - React Native companion app
- [ ] **Notifications** - Push notifications for habit reminders

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or reach out to the development team.

---

Built with ❤️ using Next.js and modern web technologies.
