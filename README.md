# 📊 Productivity App

A modern productivity application with separated frontend and backend architecture. Track your habits, boost your productivity, and compete with friends through gamification features.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Express](https://img.shields.io/badge/Express-5+-lightgrey)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)
![bcrypt](https://img.shields.io/badge/bcrypt-Security-red)

## 🏗️ Architecture

This project consists of two separate applications:

- **Frontend**: Next.js 15 application with React, TypeScript, and Tailwind CSS
- **Backend**: Node.js API server with Express.js for authentication, habit management, and gamification
- **Data Storage**: JSON files in backend with API integration (transitioning to database)
- **Authentication**: JWT-based user authentication with bcrypt password hashing

## ✨ Features

### Current Features ✅
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **🎯 Habit Management UI** - View habits from backend API
- **✏️ Habit CRUD UI** - Add, edit, and delete habit interfaces with backend integration
- **📊 Dashboard Overview** - Basic dashboard layout with placeholder widgets
- **🔄 Real-time Navigation** - Dynamic navigation with active route highlighting
- **🎨 Modern UI/UX** - Clean interface built with Headless UI components
- **⚡ Modal Interactions** - Delete confirmation and edit modals
- **🔐 User Authentication** - Registration, login with JWT tokens and password hashing
- **📧 Email Service Backend** - Express server for email functionality
- **🏷️ Habit Completion Tracking** - In-memory tracking that resets on page refresh
- **🎮 Gamification Foundation** - User scoring system for habit completion tracking

### Planned Features 🚧
- [ ] **🏆 Competitive Leaderboards** - Compare productivity scores with friends and global users
- [ ] **🔥 Streak Tracking** - Long-term habit completion streaks with visual indicators
- [ ] **📈 Productivity Scoring** - Points-based system for habit completion and consistency
- [ ] **👥 Friend System** - Add friends and compete in productivity challenges
- [ ] **🎖️ Achievement Badges** - Unlock badges for milestones and consistent habits
- [ ] **📊 Analytics Dashboard** - Habit statistics, progress charts, and productivity insights
- [ ] **🎯 Challenges & Goals** - Create and join productivity challenges with friends
- [ ] **📱 Push Notifications** - Habit reminders and friend activity updates
- [ ] **💾 Database Integration** - Replace JSON files with PostgreSQL/MongoDB
- [ ] **📤 Data Export/Import** - Backup and restore functionality
- [ ] **📱 Mobile App** - React Native companion with full gamification

## 🎮 Gamification System

### Scoring Mechanics
- **Daily Completion**: +10 points per habit completed
- **Streak Bonuses**: +5 extra points for each day in streak (max +50/day)
- **Perfect Days**: +25 bonus points for completing all habits
- **Weekly Challenges**: +100 points for weekly goal completion
- **Monthly Milestones**: +500 points for consistency achievements

### Social Features
- **Friend Leaderboards**: See how you rank against your friends
- **Global Rankings**: Compete with users worldwide
- **Achievement Sharing**: Share badges and milestones on social media
- **Group Challenges**: Team up with friends for group productivity goals
- **Progress Comparison**: Visual charts comparing your progress with friends

### Engagement Features
- **Daily Streaks**: Visual streak counters with fire emojis 🔥
- **Level System**: Progress through productivity levels (Beginner → Expert → Master)
- **Seasonal Events**: Special challenges during holidays and events
- **Productivity Insights**: Weekly reports showing improvement areas

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
- **[JWT](https://jwt.io/)** - JSON Web Tokens for authentication
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Password hashing and security
- **[CORS](https://github.com/expressjs/cors)** - Cross-origin resource sharing
- **[dotenv](https://github.com/motdotla/dotenv)** - Environment variable management
- **[Nodemon](https://nodemon.io/)** - Development auto-restart

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

### Data Storage
- **Backend JSON Storage** - User and habit data stored in `backend/data/`
- **Frontend API Integration** - Frontend communicates with backend API
- **JWT Authentication** - Secure user sessions with token-based auth
- **Password Security** - bcrypt hashing for user passwords
- **Future Database** - Planned migration to PostgreSQL/MongoDB

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
│   │   │       ├── leaderboard/ # Friend rankings (planned)
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
│   │   ├── Gamification/        # Gamification components (planned)
│   │   │   ├── Leaderboard.tsx  # Friend rankings
│   │   │   ├── ScoreDisplay.tsx # User score widget
│   │   │   └── StreakCounter.tsx# Streak visualization
│   │   ├── Navbar.tsx           # Navigation component
│   │   └── Home/                # Landing page components
│   ├── types/                   # TypeScript definitions
│   │   ├── habit.ts             # Habit type definitions
│   │   ├── user.ts              # User and auth types
│   │   └── types.ts             # General type definitions
│   ├── utils/                   # Utility functions
│   │   ├── habits.json          # Static habit data (legacy)
│   │   ├── habitFunctions.ts    # Habit manipulation functions
│   │   ├── users.json           # Static user data (legacy)
│   │   ├── userFunctions.ts     # User utility functions
│   │   └── auth.ts              # Authentication helpers
│   ├── public/                  # Static assets
│   └── package.json             # Frontend dependencies
├── backend/                      # Node.js Backend API
│   ├── controllers/             # Business logic controllers
│   │   ├── authController.ts    # User registration and login
│   │   ├── userController.ts    # User profile management
│   │   ├── emailController.ts   # Email handling logic
│   │   └── habitController.ts   # Habit CRUD operations
│   ├── routes/                  # API route definitions
│   │   ├── auth.ts              # Authentication endpoints
│   │   ├── users.ts             # User management endpoints
│   │   ├── email.ts             # Email endpoints
│   │   └── habits.ts            # Habit endpoints
│   ├── models/                  # Data models and types
│   │   ├── User.ts              # User interface definitions
│   │   └── Habit.ts             # Habit interface definitions
│   ├── data/                    # JSON data storage
│   │   ├── users.json           # User data with scores and streaks
│   │   └── habits.json          # Habit data persistence
│   ├── index.ts                 # Main Express server
│   └── package.json             # Backend dependencies
├── issue.md                     # Development task tracking
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
git clone https://github.com/Leorev01/ProductivityApp2.0
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

3. **Set up environment variables**

**Backend (.env file):**
```bash
# Create backend/.env
PORT=4000
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

4. **Run the applications**

**Start the backend server (Terminal 1):**
```bash
cd backend
node index.ts
# Backend will run on http://localhost:4000
```

**Start the frontend development server (Terminal 2):**
```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:3000
```

5. **Open your browser**
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
node index.ts           # Start server (port 4000)
# Note: No dev script configured yet
```

## 🔌 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| `POST` | `/api/auth/register` | Register new user | ✅ Implemented |
| `POST` | `/api/auth/login` | User login with JWT | ✅ Implemented |

### User Endpoints
| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| `GET` | `/api/users/profile` | Get user profile | ✅ Implemented |
| `PUT` | `/api/users/profile` | Update user profile | 🚧 In Progress |
| `GET` | `/api/users/leaderboard` | Get friend rankings | 🚧 Planned |

### Habit Endpoints
| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| `GET` | `/api/habits` | Get all habits | ✅ Implemented |
| `POST` | `/api/habits` | Create new habit | 🚧 In Progress |
| `PUT` | `/api/habits/:id` | Update existing habit | 🚧 In Progress |
| `DELETE` | `/api/habits/:id` | Delete habit | 🚧 In Progress |

### Email Endpoints
| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| `POST` | `/api/email/send-email` | Send email with habit data | ✅ Implemented |

### Sample API Requests

**Register user:**
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123"
  }'
```

**Login user:**
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123"
  }'
```

**Get habits (authenticated):**
```bash
curl -X GET http://localhost:4000/api/habits \
  -H "Authorization: Bearer your-jwt-token-here"
```

**Response Examples:**
```json
// Registration/Login Success
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}

// Habits Response
{
  "habits": [
    {
      "id": 1,
      "userId": 1,
      "title": "Morning Exercise",
      "description": "30 minutes of cardio",
      "createdAt": "2025-01-01"
    }
  ]
}
```

## 🏗️ Architecture Highlights

### Frontend-Backend Integration
- **Complete Separation**: Frontend and backend are independent applications
- **JWT Authentication**: Secure token-based authentication system
- **API Communication**: Frontend calls backend REST API endpoints
- **Real-time Updates**: Planned WebSocket integration for live leaderboards

### Security Features
- **Password Hashing**: bcrypt with salt rounds for secure password storage
- **JWT Tokens**: Secure session management with expiration
- **Input Validation**: Server-side validation for all user inputs
- **CORS Protection**: Configured for secure cross-origin requests

### Gamification Architecture
- **User Scoring System**: Points tracked per user with daily/weekly calculations
- **Streak Tracking**: Consecutive day counters for habit completion
- **Social Features**: Friend relationships and competitive leaderboards
- **Achievement System**: Badge unlocking based on user milestones

### Data Flow
```
Frontend (React) ↔ Backend API (Express) ↔ JSON Storage → Future Database
                    ↓
               JWT Authentication
                    ↓
              Gamification Engine
```

## 🎯 Gamification Features in Detail

### Scoring System
```typescript
interface UserScore {
  userId: number;
  totalPoints: number;
  dailyPoints: number;
  weeklyPoints: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  badges: Badge[];
}
```

### Achievement Badges
- **🔥 Streak Master**: 30-day habit streak
- **⭐ Perfect Week**: Complete all habits for 7 days
- **🚀 Quick Starter**: Complete habits for first 7 days
- **💪 Consistency Champion**: 90% habit completion over 30 days
- **🏆 Leaderboard Leader**: Top 10 in weekly rankings

### Competitive Features
- **Daily Challenges**: Complete specific habit combinations
- **Weekly Competitions**: Compete with friends on weekly scores
- **Seasonal Events**: Special challenges during holidays
- **Team Challenges**: Group competitions with shared goals

## 🚀 Deployment

### Environment Variables

**Frontend:**
```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

**Backend:**
```bash
PORT=4000
NODE_ENV=production
JWT_SECRET=your-production-jwt-secret
DATABASE_URL=your-database-connection-string
```

### Production Deployment
- **Frontend**: Vercel (recommended for Next.js)
- **Backend**: Railway, Heroku, or DigitalOcean
- **Database**: PostgreSQL (recommended for production)
- **File Storage**: AWS S3 for user-uploaded content

## 🔮 Future Enhancements

### Core Features
- [ ] **PostgreSQL Integration** - Replace JSON files with proper database
- [ ] **Real-time WebSockets** - Live leaderboard updates and friend activity
- [ ] **Advanced Analytics** - Detailed productivity insights and trends
- [ ] **Mobile Push Notifications** - Habit reminders and social updates

### Gamification Expansion
- [ ] **Guild System** - Create and join productivity communities
- [ ] **Seasonal Championships** - Monthly and yearly competitions
- [ ] **Custom Challenges** - User-created challenge templates
- [ ] **Reward Store** - Spend points on virtual rewards and real-world prizes
- [ ] **Social Feed** - Activity streams showing friend achievements
- [ ] **Mentorship Program** - Connect experienced users with beginners

### Advanced Features
- [ ] **AI Habit Recommendations** - Machine learning for personalized suggestions
- [ ] **Integration APIs** - Connect with fitness trackers and other apps
- [ ] **Habit Templates** - Pre-built habit sets for common goals
- [ ] **Progress Photos** - Visual progress tracking with image uploads
- [ ] **Calendar Integration** - Sync with Google Calendar and other services
- [ ] **Data Analytics** - Advanced reporting and trend analysis

## 🛠️ Development

### Development Workflow

1. **Start backend server** with `cd backend && node index.ts` (port 4000)
2. **Start frontend server** with `cd frontend && npm run dev` (port 3000)
3. **Frontend** automatically reloads on file changes
4. **Backend** requires manual restart on changes (TypeScript compilation)
5. **Authentication** fully functional with registration and login

### Current Implementation Status

**✅ Completed:**
- User registration and login with JWT
- Password hashing with bcrypt
- Basic habit management UI
- Backend API structure
- Frontend-backend communication

**🚧 In Progress:**
- Complete habit CRUD operations
- User profile management
- Frontend authentication integration

**📋 Planned:**
- Friend system and social features
- Leaderboards and scoring system
- Achievement badges
- Database migration

## 🤝 Contributing

### Priority Development Areas

1. **Gamification System** - Implement scoring, streaks, and achievements
2. **Friend System** - Social features and friend management
3. **Database Migration** - Move from JSON to PostgreSQL/MongoDB
4. **Mobile App** - React Native companion app
5. **Real-time Features** - WebSocket integration for live updates

### Development Guidelines
- Follow TypeScript best practices
- Implement proper error handling
- Add comprehensive testing
- Maintain security best practices
- Update documentation for new features
- Consider scalability in architecture decisions

### Getting Involved
1. **Backend Development** - API endpoints and business logic
2. **Frontend Development** - React components and UI/UX
3. **Gamification Design** - Scoring systems and achievement mechanics
4. **Mobile Development** - React Native app development
5. **DevOps** - Deployment and infrastructure setup

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or run into issues:
- Open an issue on GitHub
- Join our Discord community (coming soon)
- Check out the documentation wiki

---

**Current Status**: Active development with authentication system implemented. Gamification features and social competitive elements are the next major milestone. The app is transitioning from JSON storage to a full database solution.

Built with ❤️ for the productivity community. Let's make habit building fun and social! 🚀