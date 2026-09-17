import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import MoviesList from "./pages/MoviesList";
import MoviesProvider from "./providers/MoviesProvider";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: (
         <Home />
        ),
      },
      {
        path: "/movies-list",
        element: (
          <MoviesList />
        ),
      },
    ],
  },
 
]);


function App() {
  return (
    <>
      <MoviesProvider>
        <RouterProvider router={router} />
      </MoviesProvider>
    </>
  );
}

export default App;
