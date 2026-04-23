import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { homeVideo } from './exports/videos'

const link = document.createElement("link");
link.rel = "preload";
link.as = "video";
link.href = homeVideo;
link.type = "video/mp4";
link.crossOrigin = "anonymous";
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)