import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class CreateEmp extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            employeeid:'',
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
        this.create=this.create.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    create(e)
    {
        axios.post('http://localhost:50735/api/EmployeeDetails/AddEmployee',{

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:this.state.dateJoined ,
            managerId:this.state.managerId,
            leaveBalance:this.state.leaveBalance ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

    }).then(response=>{
        console.warn(response);
        alert("New Employee Added Successsfully");
        window.location="/Login";
    })
    .catch(error=>{
        alert("error");
    })
    }

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }
    

    
    render() {
        
        return (
            
            <div className="App-header">
                 
                 <Card  style={{ width:'30rem'  }} >
                 <Card.Header className="text-center">Sign in</Card.Header>
                 <Card.Body>
            <form>
                <Form.Group className="mb-0" >
                <Form.Label >First Name</Form.Label>
                <Form.Control className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-0" >
                <Form.Label >Last Name</Form.Label>
                <Form.Control className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-0" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})} />
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
                  <Form.Control className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >Manager id</Form.Label>
                  <Form.Control className="spacer" type="text" name="managerId"  onChange={(e)=>this.handleChange({managerId:e.target.value})}></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >leaveBalance</Form.Label>
                  <Form.Control className="spacer" type="text" name="leaveBalance"  onChange={(e)=>this.handleChange({leaveBalance:e.target.value})}></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-0" controlId="formGroupPassword">
                  <Form.Label >password</Form.Label>
                  <Form.Control className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >check password</Form.Label>
                  <Form.Control className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></Form.Control>
                  </Form.Group>
               
                  <Button variant="danger" onClick={this.create}>sign up</Button> 
                </form>
            </Card.Body>
            </Card>
            
            </div>
          
          

          
        );
        

        }
}
