# GDG RCOEM Website

A modern, responsive website for Google Developer Groups at Ramdeobaba College of Engineering and Management, built with React and Vite.

## Project Overview

This website serves as the digital hub for the GDG RCOEM community, showcasing the organization's mission, activities, and providing a platform for student engagement in Google developer technologies.

## Features

### Core Pages
- **Home Page**: Complete landing page with hero section, mission statement, perspective, and drive content
- **Events**: Work-in-progress page for upcoming workshops, hackathons, and tech talks
- **Team**: Work-in-progress page for member profiles and leadership showcase
- **Alumni**: Work-in-progress page for alumni network and success stories
- **Contact**: Work-in-progress page for contact forms and location information

### Interactive Components
- **Responsive Navigation**: Mobile-friendly navbar with hamburger menu
- **FAQ Section**: Expandable accordion-style frequently asked questions
- **Statistics Display**: Animated circular progress indicators showing key metrics
- **Technology Cards**: Interactive cards showcasing focus areas (Android, Flutter, Cloud)
- **Theme Toggle**: Seamless dark/light mode switching

### Design System
- **Google Material Design**: Consistent use of Google brand colors (#4285F4, #EA4335, #34A853, #FBBC05)
- **Responsive Layout**: Mobile-first design optimized for all screen sizes
- **Custom Error Page**: Themed 404 page with navigation options
- **Work-in-Progress Pages**: Professional placeholder pages for upcoming content

## Dark Mode Implementation

### Architecture
The dark mode system uses CSS custom properties (variables) for dynamic theme switching without page reloads.

### CSS Variables Setup
```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --secondary-text-color: #5f6368;
  --section-bg-color: #f8f9fa;
  --footer-bg-color: rgba(236, 236, 236, 1);
  --card-bg-color: #ffffff;
  --card-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  --divider-color: #5F6368;
}

[data-theme="dark"] {
  --bg-color: #1c1c1c;
  --text-color: #e0e0e0;
  --secondary-text-color: #b0b0b0;
  --section-bg-color: #1e1e1e;
  --footer-bg-color: #1a1a1a;
  --card-bg-color: #2a2a2a;
  --card-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  --divider-color: #7e7e7e;
}
```

### JavaScript Implementation
- **State Management**: React useState hook for theme state persistence
- **DOM Manipulation**: Direct attribute setting on document elements
- **Local Storage**: Theme preference saved across browser sessions
- **Initial Load**: Theme applied before component mounting to prevent flashing

### Theme Toggle Component
- **Visual Indicator**: Custom toggle switch with sun/moon icons
- **Smooth Transitions**: CSS transitions for seamless switching
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Technical Stack

### Frontend
- **React 18**: Modern functional components with hooks
- **Vite**: Fast development server and build tool
- **React Router**: Client-side routing for single-page application
- **CSS3**: Custom properties, Flexbox, Grid, and responsive design
- **SVG Icons**: Scalable vector graphics for crisp icons

### Development Tools
- **ESLint**: Code linting and formatting
- **Hot Module Replacement**: Real-time development updates
- **Asset Optimization**: Automatic image and bundle optimization

## Project Structure

```
src/
├── components/
│   ├── navbar/              # Navigation component
│   ├── faq/                 # FAQ accordion component
│   ├── footer/              # Footer with social links
│   ├── stats_circle/        # Statistics display components
│   ├── technologies/        # Technology showcase section
│   ├── tech_card/          # Individual technology cards
│   └── WorkInProgress/     # Reusable WIP component
├── pages/
│   ├── home_page/          # Main landing page
│   ├── events_page/        # Events page (WIP)
│   ├── team_page/          # Team page (WIP)
│   ├── alumni_page/        # Alumni page (WIP)
│   ├── contact_page/       # Contact page (WIP)
│   └── error_page/         # Custom 404 page
├── layout/
│   └── Layout.jsx          # Main layout wrapper
├── App.jsx                 # Root component with routing
└── index.css              # Global styles and CSS variables
```

## Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile Large**: 576px - 767px
- **Mobile Small**: 480px and below

### Mobile Optimizations
- **Touch-friendly navigation**: Collapsible mobile menu
- **Optimized images**: Responsive image sizing
- **Readable typography**: Fluid font scaling
- **Accessible interactions**: Larger touch targets

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Rey004/GDG-TASK-WEBSITE.git

# Navigate to project directory
cd GDG-TASK-WEBSITE

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Custom Properties, Flexbox, Grid
- **JavaScript**: ES6+ features supported

## Contributing

This project follows standard React development practices with component-based architecture and responsive design principles. All components are designed to be reusable and maintainable.

## License

This project is developed for educational purposes as part of the GDG RCOEM community initiative.
