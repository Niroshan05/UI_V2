import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ShowAllLeave from './ShowAllLeave';
import AddLeave from './AddLeave';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateLeave from './UpdateLeave';
import DeleteLeave from './DeleteLeave';
import ShowSpecificLeave from './ShowSpecificLeave';

export default function Leavenav() {
    return (
        <>
        <BrowserRouter>
        <div className="App">
        <Navbar bg="dark" variant="dark">
        <nav className="me-auto">
              <div className="collapse navbar-collapse">
                <Link className="navbar-brand" to={'/sign-in'}>
                  RemoteStack
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/ShowAllLeave'}>
                        show all leave
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/ShowSpecificLeave'}>
                        show specific leave
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/AddLeave'}>
                        Sign-up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/UpdateLeave'}>
                        edit leave details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/DeleteLeave'}>
                        delete leave details
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              
            </nav>
             </Navbar>
        
          <Routes>
            <Route path='/ShowAllLeave' element={<ShowAllLeave/>}></Route>
            <Route path='/AddLeave' element={<AddLeave/>}></Route>
            <Route path='/UpdateLeave' element={<UpdateLeave/>}></Route>
            <Route path='/DeleteLeave' element={<DeleteLeave/>}></Route>
            <Route path='/ShowSpecificLeave' element={<ShowSpecificLeave/>}></Route>
         
          </Routes>
    
        </div>
        </BrowserRouter>
        </>
    );
}
