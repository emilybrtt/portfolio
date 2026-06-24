import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './App'
import About from './routes/About'
import ContactPage from './routes/ContactPage'
import Home from './routes/Home'
import ProjectsPage from './routes/ProjectsPage'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'formacao', element: <About /> },
      { path: 'projetos', element: <ProjectsPage /> },
      { path: 'contato', element: <ContactPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
