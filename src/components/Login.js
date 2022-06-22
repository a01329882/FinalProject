import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {

const SIGNUP_MUTATION = gql`
  mutation CreateUserMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $name
    ) 
    {
     user {
        username
        id
     } 
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation TokenAuthMutation(
    $username: String!
    $password: String!
  ) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const navigate = useNavigate();
const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
});

const [login] = useMutation(LOGIN_MUTATION, {
  variables: {
    username: formState.email,
    password: formState.password
  },
  onCompleted: ({ tokenAuth }) => {
    localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
    console.log(tokenAuth.token);

    navigate('/homepage');
  }
});

const [signup] = useMutation(SIGNUP_MUTATION, {
  variables: {
    name: formState.name,
    email: formState.email,
    password: formState.password
  },
  onCompleted: ({ createUser }) => {
    //localStorage.setItem(AUTH_TOKEN, signup.token);
    console.log(createUser.user);
    navigate('/');
  }
});


  return (
    <div className='mcc'>
      <br/>
      <br/>
      <hr/>
      <br/>
      <div className='mcc2'>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      
      <div className="flex mt3">
  <button
    className="pointer mr2 button btn"
    onClick={formState.login ? login : signup}
  >
    {formState.login ? 'login' : 'create account'}
  </button>
  <button
    className="pointer button btn"
    onClick={(e) =>
      setFormState({
        ...formState,
        login: !formState.login
      })
    }
  >
    {formState.login
      ? 'need to create an account?'
      : 'already have an account?'}
  </button>
</div>
</div>
<br/>
    </div>
  );
};

export default Login;