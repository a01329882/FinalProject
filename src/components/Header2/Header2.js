import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants';
import './Header2.css'

const Header2 = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  console.log("this is " + authToken);
  return (
    <div className='header2Main'>
    <div className="header2 flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Jet Racer</div>
        </Link>           
        <Link to="/SignUp" className="ml1 no-underline black">
          SignUp
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          search
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
    </div>
  );
};

export default Header2;