import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class SearchbyId extends Component {
    constructor(){
        super();
        this.state={
            // employee:[],
            employeeId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
            dateJoined: '',
            managerId: '',
            leaveBalance: '',
            password: ''         
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        
        let employeeId=localStorage.getItem("empid");
        axios.get('http://localhost:50735/api/EmployeeDetails/ShowSpecific/'+employeeId)
        .then(Response=>{
            this.setState({
                employeeId:Response.data.employeeId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
                dateJoined:Response.data.dateJoined,
                managerId:Response.data.managerId,
                leaveBalance:Response.data.leaveBalance,
                password:Response.data.password 
            })

        })
    }
    
    componentDidMount(){
        this.SearchById();
        
    }
    render() {
        let empid=localStorage.getItem("empid");
        const{employeeId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        const{dateJoined}=this.state;
        const{managerId}=this.state;
        const{leaveBalance}=this.state;
        const{password}=this.state;
        return (
            <>  
            <div className="App-header">

              <Card style={{  }}>
                 <div className="alignleft">
                     <Card>
                     </Card><Card> <h3>&nbsp;Employee Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      :  {employeeId}&nbsp;</h3><br></br>
                     </Card><Card> <h3>&nbsp;full name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          :  {firstName+"  "+lastName}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;E_Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             :  {e_Mail}&nbsp;</h3><br></br>
                     </Card><Card>   <h3>&nbsp;Phone number &nbsp;&nbsp;&nbsp;:  {contactNumber}&nbsp;</h3><br></br>
                     </Card><Card>   <h3>&nbsp;Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        :  {department}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;Date Joined &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       :  {dateJoined}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;Manager Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        :  {managerId}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;Leave Balance &nbsp;&nbsp;&nbsp;&nbsp;      :  {leaveBalance}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           :  {password}&nbsp;</h3><br></br>
                     </Card> </div >
              {/* <Table striped bordered hover >
                  <thead>
                  
              <tr>
              <th>Employee Id</th>
              <th>full name</th>
              
              <th>E_Mail</th>
              <th>Phone number</th>
              <th>Department</th>
              <th>Date Joined</th>
              <th>Manager Id</th>
              <th>Leave Balance</th>
              <th>Password</th>
              </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{employeeId}</td>
                     <td>{firstName+"  "+lastName}</td>
                     <td>{e_Mail}</td>
                     <td>{contactNumber}</td>
                     <td>{department}</td>
                     <td>{dateJoined}</td>
                     <td>{managerId}</td>
                     <td>{leaveBalance}</td>
                     <td>{password}</td>
                 </tr>
             </tbody>
             
  
            
              </Table> */}
              <Button href="/EditEmp">Edit details</Button>
              </Card>
              </div>
              
              </>
        )
    }
}
