import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

export default class SearchByIdMan extends Component {
    constructor(){
        super();
        this.state={
            // manager:[],
            managerId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
                    
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        
        let managerId=localStorage.getItem("mid");
        axios.get('http://localhost:50735/api/ManagerDetails/ShowSpecific/'+managerId)
        .then(Response=>{
            this.setState({
                managerId:Response.data.employeeId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
               
            })
        })
    }
    componentDidMount(){
        this.SearchById();
    }
    render() {
       
        let managerId= localStorage.getItem("mid");
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        
        return (
            <>  <div className="App-header">
            <form>
              <table > 
                  <thead>
             
                </thead>
              </table> 
            
            </form>
            </div>
              {/* //id displayer */}
              
              <Table striped bordered hover>
                  <thead>
                  
              <tr>
              <th>manager Id</th>
              <th>full name</th>
              
              <th>E_Mail</th>
              <th>Phone number</th>
              <th>Department</th>
              
              </tr>
             </thead>
            
            
                    <tbody>
                     <tr>
                     <td>{managerId}</td>
                     <td>{firstName+"  "+lastName}</td>
                     <td>{e_Mail}</td>
                     <td>{contactNumber}</td>
                     <td>{department}</td>
                     
                     </tr>
                    </tbody>
              
              </Table>
              </>
        )
    }
}