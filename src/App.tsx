import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './widgets/Header/Header.tsx'
import './App.css'
import { routes } from './routes'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
