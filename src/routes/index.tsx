// src/routes/index.tsx
import Home from '../features/home/Home'
import About from '../features/about/About'

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
]
