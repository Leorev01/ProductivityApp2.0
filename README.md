# 📊 Productivity App

A modern productivity application with separated frontend and backend architecture. Track your habits and boost your productivity with an intuitive dashboard interface.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Express](https://img.shields.io/badge/Express-5+-lightgrey)

## 🏗️ Architecture

This project consists of two separate applications:

- **Frontend**: Next.js 15 application with React, TypeScript, and Tailwind CSS
- **Backend**: Node.js API server with Express.js for email services only
- **Data Storage**: JSON files with in-memory tracking (no database integration yet)

## ✨ Features

### Current Features ✅
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **🎯 Habit Management UI** - View habits from JSON data source
- **✏️ Habit CRUD UI** - Add, edit, and delete habit interfaces (UI only, no persistence)
- **📊 Dashboard Overview** - Basic dashboard layout with placeholder widgets
- **🔄 Real-time Navigation** - Dynamic navigation with active route highlighting
- **🎨 Modern UI/UX** - Clean interface built with Headless UI components
- **⚡ Modal Interactions** - Delete confirmation and edit modals
- **🔐 Authentication Pages** - Login and signup page layouts (UI only)
- **📧 Email Service Backend** - Simple Express server for email functionality
- **🏷️ Habit Completion Tracking** - In-memory tracking that resets on page refresh

### Planned Features 🚧
- [ ] **Persistent Data Storage** - Replace JSON/in-memory with database
- [ ] **Backend API Integration** - Connect frontend habit management to backend
- [ ] **JWT Authentication** - Secure session management
- [ ] **Real Habit CRUD** - Actually persist habit changes
- [ ] **Analytics Dashboard** - Habit statistics and progress charts
- [ ] **Streak Tracking** - Long-term habit completion tracking
- [ ] **Push Notifications** - Habit reminders
- [ ] **Data Export/Import** - Backup and restore functionality
- [ ] **Mobile App** - React Native companion

## 🚀 Tech Stack

### Frontend Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Headless UI](https://headlessui.dev/)** - Unstyled, accessible UI components
- **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Backend Technologies
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Express.js 5](https://expressjs.com/)** - Web application framework
- **[CORS](https://github.com/expressjs/cors)** - Cross-origin resource sharing
- **[dotenv](https://github.com/motdotla/dotenv)** - Environment variable management
- **[Nodemon](https://nodemon.io/)** - Development auto-restart

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

### Data Storage
- **JSON Files** - Static habit data stored in `frontend/utils/habits.json`
- **In-Memory Tracking** - Daily completion tracking (resets on page refresh)
- **No Database** - Currently no persistent backend storage

## 📁 Project Structure

```
productivity-app/
├── frontend/                     # Next.js Frontend Application
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/              # Authenticated routes
│   │   │   └── dashboard/       # Dashboard pages
│   │   │       ├── habits/      # Habit management
│   │   │       │   ├── add/     # Add habit page
│   │   │       │   └── edit/    # Edit habit pages
│   │   │       ├── calendar/    # Calendar page
│   │   │       ├── layout.tsx   # Dashboard layout
│   │   │       └── page.tsx     # Dashboard home
│   │   ├── login/               # Login page
│   │   ├── signup/              # Signup page
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Landing page
│   │   └── globals.css          # Global styles
│   ├── components/              # Shared React components
│   │   ├── Habits/              # Habit-related components
│   │   │   ├── Habit.tsx        # Individual habit card
│   │   │   └── HabitsPage.tsx   # Habits page container
│   │   ├── Navbar.tsx           # Navigation component
│   │   └── Home/                # Landing page components
│   ├── types/                   # TypeScript definitions
│   │   ├── habit.ts             # Habit type definitions
│   │   └── types.ts             # General type definitions
│   ├── utils/                   # Utility functions
│   │   ├── habits.json          # Static habit data
│   │   ├── habitFunctions.ts    # Habit manipulation functions
│   │   ├── users.json           # Static user data
│   │   └── userFunctions.ts     # User utility functions
│   ├── public/                  # Static assets
│   └── package.json             # Frontend dependencies
├── backend/                      # Node.js Backend API
│   ├── controllers/             # Business logic controllers
│   │   └── emailController.js   # Email handling logic
│   ├── routes/                  # API route definitions
│   │   └── email.js             # Email endpoints
│   ├── index.js                 # Main Express server
│   └── package.json             # Backend dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # This documentation
```

## 🏃‍♂️ Getting Started

### Prerequisites
- **Node.js 18+** installed on your machine
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd productivity-app
```

2. **Install dependencies for both frontend and backend**

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

3. **Run the applications**

**Start the backend server (Terminal 1):**
```bash
cd backend
node index.js
# Backend will run on http://localhost:4000
```

**Start the frontend development server (Terminal 2):**
```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:3000
```

4. **Open your browser**
- **Frontend App**: http://localhost:3000
- **Backend API**: http://localhost:4000

## 🎮 Available Scripts

### Frontend Scripts (`frontend/`)
```bash
npm run dev             # Development server (port 3000)
npm run build           # Production build
npm run start           # Production server
npm run lint            # Code linting
```

### Backend Scripts (`backend/`)
```bash
node index.js           # Start server (port 4000)
# Note: No dev script configured yet
```

## 🔌 API Documentation

### Email Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/send-email` | Send email with habit data |

### Sample API Request

**Send email:**
```bash
curl -X POST http://localhost:4000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "habits": ["Exercise", "Meditation"]
  }'
```

**Response:**
```json
{
  "success": true
}
```

**Note:** The email functionality is currently a placeholder and logs to console only.

## 🏗️ Architecture Highlights

### Frontend-Backend Separation
- **Frontend**: Complete Next.js application with habit UI components
- **Backend**: Simple Express.js server providing email services only
- **Data Flow**: Frontend reads from JSON files, no backend integration for habits yet

### Frontend Architecture
- **App Router**: Next.js 15 with modern App Router structure
- **Route Groups**: Organized with `(auth)` route grouping for authenticated sections
- **JSON Data Source**: Habits loaded from `utils/habits.json`
- **In-Memory State**: Daily completion tracking (temporary, resets on refresh)
- **UI Components**: Modal-based CRUD operations (edit/delete modals)

### Backend Architecture
- **Minimal API**: Single email endpoint for demonstration
- **CORS Enabled**: Ready for frontend integration
- **ES6 Modules**: Using `require()` syntax (not ES modules yet)

### Component Architecture
- **Separation of Concerns**: Layout, business logic, and presentation components
- **Reusable Components**: Modular habit cards and navigation
- **TypeScript Integration**: Full type safety across components
- **Headless UI**: Accessible modal dialogs and UI components

### Data Storage
Currently using **JSON files** with in-memory tracking for development. The habits are loaded from `frontend/utils/habits.json` and daily completions are tracked in memory (resets on page refresh). In the future, this will be replaced with a proper database and backend API integration.

## 🔄 Navigation Flow

```
Landing Page (/)
└── Dashboard (/dashboard)
    ├── Dashboard Home
    ├── Habits (/dashboard/habits)
    │   ├── Add Habit (/dashboard/habits/add)
    │   └── Edit Habit (/dashboard/habits/edit/[id])
    └── Calendar (/dashboard/calendar)
```

## 🎯 Key Features Breakdown

### Current Implementation
- **JSON Data Source**: Habits are loaded from static JSON file
- **UI-Only CRUD**: Add, edit, delete interfaces without persistence
- **In-Memory Tracking**: Daily completion tracking (temporary)
- **Modal Interactions**: Delete confirmations and edit forms
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS

### Dashboard Layout
- **Dashboard Overview**: Basic layout with placeholder widgets
- **Habits Management**: List view with edit/delete actions
- **Navigation**: Simple sidebar navigation (not yet implemented)

### Habit Management
- **View Habits**: Display habits from JSON data
- **Modal Dialogs**: Edit and delete confirmation modals
- **Completion Toggle**: In-memory tracking of daily completions
- **Type Safety**: Full TypeScript definitions for habit data

### Backend Services
- **Email API**: Simple endpoint for sending emails (placeholder)
- **CORS Support**: Configured for frontend integration
- **Express Server**: Basic REST API structure ready for expansion

## 🚀 Deployment

### Frontend (Next.js)
```bash
cd frontend
npm run build
npm run start
```

### Backend (Express)
```bash
cd backend
node index.js
```

For production deployment, consider:
- **Vercel** for frontend (Next.js)
- **Railway**, **Heroku**, or **DigitalOcean** for backend
- **MongoDB Atlas** or **PostgreSQL** for future database needs

### Environment Variables
Currently no environment variables are required, but for future expansion:

**Frontend:**
```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

**Backend:**
```bash
PORT=4000
NODE_ENV=production
```

## 🔮 Future Enhancements

- [ ] **Database Integration** - MongoDB/PostgreSQL for data persistence
- [ ] **Backend API Integration** - Connect frontend habit management to backend
- [ ] **Real Habit CRUD** - Actually persist habit changes to database
- [ ] **JWT Authentication** - Secure session management with refresh tokens
- [ ] **User Profiles** - Individual user accounts and data isolation
- [ ] **Streak Tracking** - Long-term habit completion tracking with persistence
- [ ] **Analytics Dashboard** - Habit statistics and progress charts
- [ ] **Notification System** - Push notifications for habit reminders
- [ ] **Data Export/Import** - Backup and restore functionality
- [ ] **Team Collaboration** - Multi-user functionality and sharing
- [ ] **Mobile App** - React Native companion app
- [ ] **Advanced Filtering** - Search and filter habits by various criteria
- [ ] **Habit Templates** - Pre-built habit templates for common goals
- [ ] **Calendar Integration** - Full calendar view with scheduling
- [ ] **Progress Photos** - Visual progress tracking with image uploads
- [ ] **Email Integration** - Complete the email service functionality

## 🛠️ Development

### Development Workflow

1. **Start backend server** with `cd backend && node index.js` (port 4000)
2. **Start frontend server** with `cd frontend && npm run dev` (port 3000)
3. **Frontend** automatically reloads on file changes
4. **Backend** requires manual restart on changes (no nodemon configured yet)
5. **Data** is currently loaded from JSON files, no API integration yet

### Key Development Files

**Frontend:**
- `frontend/utils/habitFunctions.ts` - Habit data manipulation
- `frontend/types/habit.ts` - TypeScript type definitions
- `frontend/components/Habits/` - Habit management components
- `frontend/utils/habits.json` - Static habit data

**Backend:**
- `backend/index.js` - Express app configuration
- `backend/controllers/emailController.js` - Email handling logic
- `backend/routes/email.js` - Email API endpoint

### Current Limitations

- **No Persistence**: Habit changes are not saved
- **In-Memory Only**: Daily completions reset on page refresh
- **No Backend Integration**: Frontend and backend are not connected
- **No Authentication**: Login/signup pages are UI only
- **Static Data**: All habit data comes from JSON files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes in the appropriate frontend or backend directory
4. Test both frontend functionality and backend endpoints separately
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices in the frontend
- Maintain the current separation between frontend and backend
- Add proper error handling for both client and server
- Update documentation for new features
- Consider data persistence when adding new features
- Test thoroughly before submitting PRs

### Priority Areas for Contribution
1. **Database Integration** - Add persistent storage
2. **API Development** - Create habit CRUD endpoints in backend
3. **Frontend-Backend Integration** - Connect the two applications
4. **Authentication System** - Implement real user management
5. **UI/UX Improvements** - Enhance the current interface

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or reach out to the development team.

---

**Current Status**: This is a development version with separated frontend and backend. The frontend displays habit data from JSON files with basic UI interactions, while the backend provides a simple email service. Full integration and database persistence are planned for future releases.

Built with ❤️ using modern web technologies.
