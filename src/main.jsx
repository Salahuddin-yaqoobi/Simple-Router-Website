import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
  // {
    // path : "/",
    // element : <Layout />,
    // children: [
      // {
        // path : "",
        // element : <Home />
      // },
      // {
        // path : "about",
        // element : <About />
      // },
      // {
        // path : "contact",
        // element : <Contact />
      // }
    // ]
  // }
// ])
// 

//There is another way to write the upper code so another way is given below we can use both

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* this which is written ac a name of userid is the value written on the upperbar to search */}
          <Route path='user/:userid' element={<User />} />
          <Route
          // 2
          loader={gitInfoLoader}
          path='/Github' 
          element={<Github />} />
        </Route>
      )
    )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
