import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home_page/Home'
import Events from './pages/events_page/Events'
import Team from './pages/team_page/Team'
import Alumni from './pages/alumni_page/Alumni'
import Contact from './pages/contact_page/Contact'
import Error from './pages/error_page/Error'

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true, 
          element: <Home />
        },
        {
          path: 'events', 
          element: <Events />
        },
        {
          path: 'team', 
          element: <Team />
        },
        {
          path: 'alumni', 
          element: <Alumni />
        },
        {
          path: 'contact', 
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
