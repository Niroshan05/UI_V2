import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

export default class EditEmp extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            employeeId:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
            managerId:'',
            leaveBalance:'',
            password:'',
            checkPassword:''
        
        }
        this.editEmp=this.editEmp.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    editEmp(e)
    {
        
        e.preventDefault(this);
        let employeeId=localStorage.getItem("empid");
        let e_Mail=localStorage.getItem("userName");
        
        let managerId=localStorage.getItem("mid");
        let dateJoined=localStorage.getItem("doj");
        let leaveBalance=localStorage.getItem("lb");
        axios.patch('http://localhost:50735/api/EmployeeDetails/UpdateEmployee/'+employeeId,{

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:dateJoined ,
            managerId:managerId,
            leaveBalance:leaveBalance ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

    }).then(response=>{
        console.warn(response);
        alert("employee "+employeeId+" updated");
        window.location("/Searchbyid");
    })
    .catch(error=>{
        alert(error);
    })
    }

    handleChange(e)
    {
        this.setState(e);    
    }

    
    render() {
        let e_Mail=localStorage.getItem("userName");
        let employeeId=localStorage.getItem("empid");
        let managerId=localStorage.getItem("mid");
        let dateJoined=localStorage.getItem("doj");
        let leaveBalance=localStorage.getItem("lb");
        return (
            
          <div className="App-header">
                 
          <Card  style={{ width:'30rem'  }} >
          <Card.Header className="text-center">Editer</Card.Header>
          <Card.Body>
     <form>
     <Form.Group className="mb-0" >
         <Form.Label >Employee Id</Form.Label>
         <Form.Control className="spacer" type="text" name="employeeId" defaultValue={employeeId} onChange={(e)=>this.handleChange({employeeId:e.target.value})} disabled ></Form.Control>
         </Form.Group>
         <Form.Group className="mb-0" >
         <Form.Label >First Name</Form.Label>
         <Form.Control className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></Form.Control>
         </Form.Group>
         
         <Form.Group className="mb-0" >
         <Form.Label >Last Name</Form.Label>
         <Form.Control className="spacer "  type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})} ></Form.Control>
         </Form.Group>

         <Form.Group className="mb-0" controlId="formGroupEmail">
         <Form.Label >Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" defaultValue={e_Mail} name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})} disabled />
         </Form.Group>


           <Form.Group className="mb-0" >
           <Form.Label >Contact Number</Form.Label>
           <Form.Control className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >Department</Form.Label>
           <Form.Control className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >dateJoined</Form.Label>
           <Form.Control className="spacer" type="text" name="dateJoined" defaultValue={dateJoined} onChange={(e)=>this.handleChange({dateJoined:e.target.value})} disabled ></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >Manager id</Form.Label>
           <Form.Control className="spacer" type="text" name="managerId" defaultValue={managerId} onChange={(e)=>this.handleChange({managerId:e.target.value})} disabled></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >leaveBalance</Form.Label>
           <Form.Control className="spacer" defaultValue={leaveBalance} type="text" name="leaveBalance"  onChange={(e)=>this.handleChange({leaveBalance:e.target.value})} disabled ></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" controlId="formGroupPassword">
           <Form.Label >password</Form.Label>
           <Form.Control className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >check password</Form.Label>
           <Form.Control className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></Form.Control>
           </Form.Group>
        
           <Button variant="danger" value ="accepted"onClick={this.editEmp}>Edit</Button> 
         </form>
     </Card.Body>
     </Card>
     
     </div>
          

          
        );
        

        }
}
