
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ShowAllEmp from './Employee/ShowAllEmp';
import SearchbyId from './Employee/SearchbyId';
import CreateEmp from './Employee/CreateEmp';
import EditEmp from './Employee/EditEmp';
import DeleteEmp from './Employee/DeleteEmp';
import Login from './Employee/Login';
import EmployeeDashboard from './Employee/EmployeeDashboard';

import ShowAllLeave from './LeaveManagement/ShowAllLeave';
import AddLeave from './LeaveManagement/AddLeave';
import ShowSpecificLeave from './LeaveManagement/ShowSpecificLeave';

import SearchByIdMan from './Manager/SearchByIdMan';



 
function App() {
  return (
    <>
    <div >
     <BrowserRouter> 
    <div className="App"> 
    <Navbar bg="dark" variant="dark">
        <nav className="me-auto">
              <div className="collapse navbar-collapse">
                <Link className="navbar-brand" to={'/Login'}>
                     LMS 
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                   <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                      <Link className="nav-link" to={'/EmployeeDashBoard'}>
                        DashBoard
                      </Link>
                    </li>
                   <li className="nav-item">
                      <Link className="nav-link" to={'/CreateEmp'}>
                       Register
                      </Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" to={'/Login'}>
                       Login
                      </Link>
                    </li> 
                   
                   
                      
                  </ul>  
                
                </div>
              </div>
              
            </nav>
             </Navbar>
      <Routes>
        
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/ShowAllEmp" element={<ShowAllEmp/>}></Route>
        <Route path="/SearchbyId" element={<SearchbyId/>}></Route>
        <Route path="/CreateEmp" element={<CreateEmp/>}></Route>
        <Route path="/EditEmp" element={<EditEmp/>}></Route>
        <Route path="/DeleteEmp" element={<DeleteEmp/>}></Route>
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}></Route>
        <Route path="/AllLeave" element={<ShowAllLeave/>}></Route>
        <Route path="/AddLeave" element={<AddLeave/>}></Route>
        <Route path="/SpecificLeave" element={<ShowSpecificLeave/>}></Route>
        <Route path="/SearchByIdMan" element={<SearchByIdMan></SearchByIdMan>}></Route>
        
        
    
     
      </Routes>
    </div>
    </BrowserRouter> 
    </div> 
    </>
  );
}

export default App;
