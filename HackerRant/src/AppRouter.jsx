import ContactForm from "./Challenge/ContactForm";
import Home from "./Challenge/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarRating from "./Challenge/StarRating";
import ListManager from "./Challenge/ListManager";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactForm",
    element: <ContactForm/>
  },
  {
    path: "/start-rating",
    element: <StarRating/>
  },
  {
    path: "/list-manager",
    element: <ListManager/>
  }
]);
const AppRouter = () => {
  return <RouterProvider router={routing}/>;
};

export default AppRouter;
