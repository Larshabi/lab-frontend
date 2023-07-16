import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ChakraProvider>
      <div className="app container">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  );
}

export default App;
