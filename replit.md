# Overview

This is a modern, one-page agency website for Harsh Vora, a digital marketing and web development consultant. The application is built as a full-stack project with a React frontend and Express backend, designed to showcase services and capture leads through a contact form. The website features responsive design, smooth animations, and sections for hero, about, services, results, pricing, and contact.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Navigation**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: React Query (TanStack Query) for server state management and API calls
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for page transitions and component animations
- **Component Library**: Comprehensive set of shadcn/ui components including forms, dialogs, toasts, cards, and navigation elements

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with endpoints for contact form submissions
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request validation shared between frontend and backend
- **Development**: Vite integration for hot module replacement in development

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in shared TypeScript files with tables for users and contact submissions
- **Validation**: Drizzle-zod integration for automatic schema validation
- **Migrations**: Drizzle Kit for database migrations management

## Development Architecture
- **Monorepo Structure**: Client, server, and shared code organized in separate directories
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Type Safety**: Full TypeScript coverage with shared types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)

## External Dependencies

- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Font**: Google Fonts (Inter) for modern typography
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: Hookform resolvers for seamless form validation integration
- **Date Handling**: date-fns for date manipulation utilities
- **Development Tools**: Replit-specific plugins for development environment integration