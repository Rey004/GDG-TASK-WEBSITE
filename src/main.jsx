import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme');
console.log('main.jsx initializing theme:', savedTheme);
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.body.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.removeAttribute('data-theme');
  document.body.removeAttribute('data-theme');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
