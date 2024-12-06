import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title="Java Scipt"/>
    <Card title="React"/>
    <Card title="Computer"/>
  </StrictMode>,
)
