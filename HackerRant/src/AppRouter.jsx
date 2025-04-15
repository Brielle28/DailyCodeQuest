import ContactForm from "./Challenge/ContactForm";
import Home from "./Challenge/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarRating from "./Challenge/StarRating";

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
  }
]);
const AppRouter = () => {
  return <RouterProvider router={routing}/>;
};

export default AppRouter;
