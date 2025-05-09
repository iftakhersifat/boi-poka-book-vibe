import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import BooksDetails from './Components/BooksDetails/BooksDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, 
        loader: ()=>fetch("../booksData.json"),
       Component: Home},
       {
        path: "/about",
        Component:About
      },
      {
        path: "/bookDetails/:id",
        
        Component:BooksDetails
      },

      {
        path: "listedBooks",
        loader: ()=>fetch("../booksData.json"),
        Component: ListedBooks
      }
    ],
  },
  

  // error show
  {
    path: "*",
    element: <p className='text-center m-96 font-bold text-2xl'>404 error : not found</p>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
