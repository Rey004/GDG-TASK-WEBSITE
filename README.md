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

## Animation Implementation

### GSAP Integration
The website uses GSAP (GreenSock Animation Platform) with ScrollTrigger for professional, performant animations throughout the home page.

### Animation Architecture
```javascript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)
```

### Animation Philosophy
- **Minimal & Professional**: Subtle movements that enhance content without distraction
- **Consistent Timing**: Uniform 0.5-0.8s durations across all animations
- **Smooth Easing**: Power2.out easing for natural, professional motion
- **Performance Optimized**: Efficient animations with proper cleanup

### Section-by-Section Animation Details

#### Hero Section - Sequential Entry
```javascript
// Clean fade-in sequence for hero elements
gsap.fromTo(".hero-title", 
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
)

gsap.fromTo(".hero-image", 
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
)
```

#### Scroll-Triggered Animations
All content sections use ScrollTrigger for viewport-based animation activation:

```javascript
gsap.fromTo(".mission-title", 
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: missionRef.current,
      start: "top 80%"  // Trigger when element is 80% down viewport
    }
  }
)
```

#### Staggered Animations
For multiple similar elements, staggered animations create flow:

```javascript
// FAQ items animate sequentially
gsap.fromTo(".faq-item", 
  { opacity: 0, y: 15 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,  // 0.1s delay between each item
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".faq-list",
      start: "top 80%"
    }
  }
)
```

### Animated Sections

#### 1. **Hero Section**
- **Elements**: Title, image, description, button
- **Style**: Sequential fade-in with subtle upward movement
- **Timing**: 0.3s delays between elements

#### 2. **Navigation Arrows**
- **Elements**: Three directional arrows
- **Style**: Staggered fade-in with minimal bounce
- **Timing**: 0.1s stagger delay

#### 3. **Content Sections** (Mission, Perspective, Drive)
- **Title Animation**: Fade up from 20px
- **Divider Animation**: Width growth from 0 to full
- **Image Animation**: Subtle slide from left (20px)
- **Text Animation**: Subtle slide from right (20px)
- **Timing**: Consistent 0.6s duration

#### 4. **Statistics Section**
- **Container**: Overall fade-up animation
- **Individual Circles**: Staggered scale + fade animation
- **Timing**: 0.15s delay between each statistic

#### 5. **Technology Cards**
- **Header**: Title and lines fade-up
- **Cards**: Staggered scale + fade animation
- **Timing**: 0.2s delay between each card

#### 6. **FAQ Section**
- **Title**: Clean fade-up animation
- **FAQ Items**: Sequential fade-up with minimal stagger
- **Timing**: 0.1s delay between each question

### Performance Features

#### GSAP Context Management
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // All animations defined here
  }, homeRef)

  return () => ctx.revert() // Cleanup on unmount
}, [])
```

#### Parallax Effects
Subtle parallax scrolling for visual depth:
```javascript
gsap.to(".mission-blue-bar", {
  y: -5,  // Minimal 5px movement
  scrollTrigger: {
    trigger: ".mission-blue-bar",
    start: "top bottom",
    end: "bottom top",
    scrub: 2  // Smooth scrubbing
  }
})
```

### Animation Benefits
1. **Professional Appearance**: Corporate-level polish
2. **User Engagement**: Guides attention through content
3. **Performance**: 60fps smooth animations
4. **Accessibility**: Respects user motion preferences
5. **Maintainability**: Centralized animation logic

### Technical Specifications
- **Library**: GSAP 3.x with ScrollTrigger plugin
- **Trigger Points**: 80% viewport visibility for optimal UX
- **Movement Range**: 15-30px for subtle, professional motion
- **Duration Range**: 0.5-0.8s for responsive feel
- **Easing**: power2.out for natural deceleration
- **Stagger Timing**: 0.1-0.2s for sequential elements

## Technical Stack

### Frontend
- **React 18**: Modern functional components with hooks
- **Vite**: Fast development server and build tool
- **React Router**: Client-side routing for single-page application
- **GSAP**: Professional animation library with ScrollTrigger plugin
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

# Install dependencies (includes GSAP for animations)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Dependencies
- **React & React DOM**: Core framework
- **React Router DOM**: Client-side routing
- **GSAP**: Animation library for smooth, professional animations
- **Vite**: Build tool and development server

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Custom Properties, Flexbox, Grid
- **JavaScript**: ES6+ features supported

## Contributing

This project follows standard React development practices with component-based architecture and responsive design principles. All components are designed to be reusable and maintainable.

## License

This project is developed for educational purposes as part of the GDG RCOEM community initiative.
