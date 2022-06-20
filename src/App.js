//import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";
import Error from "./components/error/Error";
import HomePage from "./components/HomePage/HomePage";
import CreateLink from "./components/CreateLink/CreateLink";
import { gql, useQuery } from '@apollo/client';
import './App.css';

function App() {

  const FEED_QUERY = gql`
  {
    links {
        speed
        rotation
        distance
    }
  }`;

  const { loading, error, data } = useQuery(FEED_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data.links.length);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/HomePage" element={<HomePage link = {data.links[data.links.length-1]}/>}/>
        <Route path="/AddData" element={<CreateLink />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
