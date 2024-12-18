import ContactForm from "./Challenge/ContactForm";
import Home from "./Challenge/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactForm",
    element: <ContactForm/>
  }
]);
const AppRouter = () => {
  return <RouterProvider router={routing}/>;
};

export default AppRouter;