// src/routes/index.tsx
import Home from '../features/home/Home'
import About from '../features/about/About'
import Login from '../features/auth/Login'

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/login', element: <Login /> },
]
