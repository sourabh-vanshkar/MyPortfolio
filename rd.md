# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application featuring a React frontend with a clean, professional design and an Express.js backend. The application showcases personal information, experience, projects, skills, and includes a functional contact form. The site is built with TypeScript and uses modern web technologies for a responsive, interactive user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful API design with JSON responses
- **Middleware**: Express middleware for request logging and error handling
- **Development**: Hot reload with Vite integration in development mode

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for server bundling
- **Development**: Concurrent development server with tsx
- **Production**: Optimized builds with static asset serving

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with scroll spy functionality
- **Hero Section**: Animated landing section with call-to-action buttons
- **About Section**: Personal information with animated cards
- **Experience Section**: Timeline-style work experience display
- **Projects Section**: Portfolio projects with technology badges
- **Skills Section**: Categorized skills with animated progress bars
- **Contact Section**: Functional contact form with validation
- **Theme Provider**: Dark/light mode switching capability

### Backend Components
- **Contact API**: POST endpoint for handling contact form submissions
- **Static Serving**: Serves built frontend assets in production
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging for API endpoints

### Data Management
- **Schema**: Drizzle ORM schema definitions for PostgreSQL
- **Validation**: Zod schemas for type-safe data validation
- **Database**: PostgreSQL with Drizzle ORM (currently using memory storage interface)

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **State Management**: TanStack Query manages server state and caching
3. **API Calls**: Frontend makes HTTP requests to Express backend
4. **Validation**: Backend validates requests using Zod schemas
5. **Processing**: Server processes requests and prepares responses
6. **Response**: JSON responses sent back to frontend
7. **UI Updates**: React components update based on response data

### Contact Form Flow
1. User fills out contact form with name, email, subject, and message
2. Form validation occurs on frontend using Zod schema
3. Valid data is sent to `/api/contact` POST endpoint
4. Backend validates data again and logs the submission
5. Success/error response is sent back to frontend
6. Toast notification displays result to user

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI/UX**: Radix UI primitives, Framer Motion, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack Query
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, PostgreSQL (@neondatabase/serverless)
- **Development**: tsx, Vite, esbuild
- **Validation**: Zod with drizzle-zod integration

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Uses Node.js 20 with PostgreSQL 16 modules
- Runs on port 5000 with automatic reloading
- Vite development server provides hot reload for frontend
- tsx provides hot reload for backend TypeScript

### Production Deployment
- **Build Process**: 
  1. Vite builds optimized frontend bundle
  2. esbuild bundles backend with external packages
- **Serving**: Express serves static frontend assets and API endpoints
- **Database**: PostgreSQL database with connection pooling
- **Environment**: Autoscale deployment target on Replit

### Database Setup
- Drizzle configuration points to PostgreSQL
- Schema located in `shared/schema.ts`
- Migrations stored in `./migrations` directory
- Database push available via `npm run db:push`

## Changelog

```
Changelog:
- June 13, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
