import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Add smooth scrolling behavior
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.documentElement.style.scrollPaddingTop = '80px' // Account for fixed header
}

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)