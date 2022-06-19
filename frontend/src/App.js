// import logo from './logo.svg';
import './App.css';

import Todoslist from './components/todos-list'
import Signup from './components/signup'
import Login from './components/login'
import Addtodos from './components/add-todos'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Navbar';

import {Switch, Route, Link} from 'react-router-dom';

import {useState} from "react"

function App() {

  const [user, setUser]=useState(null);
  const [token, setToken]=useState(null);
  const [error, setError]=useState('');


  async function login(user = null){
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }

  async function signup(user = null){
    setUser(user);
  }



  return (
    <>

    <Navbar bg="primary" variant="dark">
      <div className="container-fluid">
      <Navbar.Brand>TodosApp</Navbar.Brand>
      <Nav className="me-auto">
      <Container>
        <Link className="nav-link" to={"/todos"}>Todos</Link>
        { user ? (
          <Link className="nav-link">Logout ({user})</Link>
          ):(
          <>
          <Link className="nav-link" to={"/login"}>Login</Link>
          <Link className="nav-link" to={"/signup"}>Sign up</Link>
          </>
          )}
        </Container>
      </Nav>
      </div>
    </Navbar>
    </>
  );
}

export default App;
