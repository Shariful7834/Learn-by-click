import "./App.css";
import Header from "./components/Header/Header";
import Navbars from "./components/Navbar/Navbars";
import { router } from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
