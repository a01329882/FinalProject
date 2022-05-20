//import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";
import Error from "./components/error/Error";
import HomePage from "./components/HomePage/HomePage";
import './App.css';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/HomePage" element={<HomePage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
