import "./App.css";
import Home from "./pages/home/home";
import { Register } from "./pages/register/register/register.jsx";
import { Tasdiqlash } from "./pages/register/tasdiqlash/tasdiqlash";
function App() {
  return (
    <>
      <Tasdiqlash />
      <Home />
    </>
  );
}

export default App;
