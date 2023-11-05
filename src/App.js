import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// layout
import RootLayout from "./layout/rootLayout";
import HelpLayout from "./layout/helpLayout";
import Faq from "./pages/helpPages/faq";
import Contacts from "./pages/helpPages/contacts";
import Email from "./pages/helpPages/email"
import NotFound from "./pages/notFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route path="about" element={<About />}></Route>                  
      <Route path="help" element={<HelpLayout></HelpLayout>}>
        <Route path="faq" element={<Faq></Faq>}></Route>
        <Route path="contacts" element={<Contacts></Contacts>}></Route>
        <Route path="email" element={<Email></Email>}></Route>
      </Route>
      <Route index element={<Home />}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
