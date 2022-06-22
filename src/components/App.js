import React from 'react';
import Header from './Header';
import LinkList from './LinkList';
import Recsys from './Recsys';
import HomePage from './HomePage/HomePage';
import Index from './Index/Index';
import LogIn from './log-in/LogIn';
import { gql, useQuery } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import CreateLink from './CreateLink/CreateLink';



const App = () => {

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

  console.log(data.links);

  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          
          <Route path="/" element={<Index/>
            } />
         
          <Route
            path="/create"
            element={<CreateLink/>}
          />


          <Route
            path="/recsys"
            element={<Recsys/>}
          />

          <Route
            path="/homepage"
            element={<HomePage link = {data.links[data.links.length-1]}/>}
          />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<LogIn/>} />

        </Routes>
      </div>
    </div>
  );
};

export default App;
