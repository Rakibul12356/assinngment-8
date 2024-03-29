import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Children/Home/Home';
import BookDetails from './Components/Children/BookDetails/BookDetails';
import ListedBook from './Components/Children/ListedBook/ListedBook';
import ReadBook from './Components/Children/ListedBook/ReadBook/ReadBook';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/bookList.json')
      },
      {
        path: '/listed-book',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/bookList.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/bookList.json')
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
