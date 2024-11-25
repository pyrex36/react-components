import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileCard from './Profile.jsx'
import TweetCard from './TweetCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />     
    <ProfileCard /> 
    <TweetCard />
  </StrictMode>,
)
