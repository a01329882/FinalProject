import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
   <div style={{ background: '#90EE90'}} className="flex pa1 justify-between nowrap ">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">JetRacer</div>
        </Link>           
        <Link to="/" className="ml1 no-underline black">

        </Link>
        <div className="ml1">|</div>
   
        <Link
          to="/search"
          className="ml1 no-underline black"
        >

        
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              submit
            </Link>
          </div>
        )}
      </div>
   
     <div className="ml1">|</div>

      <div>



        <Link
          to="/recsys"

          className="ml1 no-underline black"
        >

        </Link>

      </div>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
        )}
      </div>
    </div>
 
  );
};

export default Header;
