import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard"
import Signup from "./components/Signup"
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>

      <Router>
      <Navbar/>
      <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
