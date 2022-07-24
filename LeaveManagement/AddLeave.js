import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import emailjs from 'emailjs-com'

export default class AddLeave extends Component {
    constructor(){
        super();
        this.state={
            Leave:[],
            leaveId: '',
            employeeId: '',
            managerId: '',
            startDate:'' ,
            endDate:'' ,
            numberofdays:'' ,
            type:'' ,
            status:'' ,
            reason:'' ,
            appliedOn:'' ,
            managerComment:''
                      
            
        
        }
        this.create=this.create.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    create(e)
    {
       let employeeId=localStorage.getItem("empid");
       let managerId=localStorage.getItem("mid");
       let status="Pending";
      
      //  var showdate=new Date();
      //  let appliedOn=showdate.getFullYear()+'-'+showdate.getMonth()+'-'+showdate.getDate();
       let appliedOn="2022-07-07";
       let managerComment="need to check";
        axios.post("http://localhost:50735/api/LeaveManagementDetails/AddLeave",
        {
            

            employeeId:employeeId,
            managerId:managerId,
            startDate:this.state.startDate,
            endDate:this.state.endDate ,
            numberofdays:this.state.numberofdays,
            type:this.state.type ,
            status:status,
            reason:this.state.reason ,
            appliedOn:appliedOn,
            managerComment:managerComment
           
    
          }).then(response=>{
            console.warn(response);
        alert("leave inserted");
        this.sendEmail(e);
        window.location="/EmployeeDashboard"
    })
    .catch(error=>{
        alert(error);
    })
    }
    sendEmail(e) {
      e.preventDefault();    
  
      emailjs.sendForm('service_6q8sl9c', 'template_0br1935', e.target, 'V94Z_reup8HiLV9vj')
        .then((result) => {
              
        }, (error) => {
            console.log(error.text);
        });
    }
  
    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }

    
    render() {
        const {Leave}=this.state;
        let employeeId=localStorage.getItem("empid")
        return (
            
            <div className="App-header">
              <Card  style={{ width:'30rem'  }} >
                 <Card.Header className="text-center">Apply Leave</Card.Header>
                 <Card.Body>
            <form>
              
            <Form.Group className="mb-0" >
                <Form.Label >startDate</Form.Label>
                <Form.Control className="spacer" type="date" name="startDate" onChange={(e)=>this.handleChange({startDate:e.target.value})}></Form.Control>
                </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >endDate</Form.Label>
                  <Form.Control className="spacer" type="date" name="endDate"  onChange={(e)=>this.handleChange({endDate:e.target.value})}></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >numberofdays</Form.Label>
                  <Form.Control className="spacer" type="text" name="numberofdays"  onChange={(e)=>this.handleChange({numberofdays:e.target.value})}></Form.Control>
                  </Form.Group>
                  
                <Form.Group className="mb-0" >
                <Form.Label >Leave</Form.Label>
                <Form.Select aria-label="Floating label select example" name="type" onChange={(e)=>this.handleChange({type:e.target.value})}  >
                <option>Open this to select Leave Type</option>
                <option value="Normal">Normal</option>
                <option value="Earned">Earned</option>
                <option value="sick">Sick</option>
                </Form.Select>
                </Form.Group>

                  <Form.Group className="mb-0" >
                  <Form.Label >reason</Form.Label>
                  <Form.Control className="spacer" type="text" name="reason"  onChange={(e)=>this.handleChange({reason:e.target.value})}></Form.Control>
                  </Form.Group>
                  

               
                  <Button variant="danger" onClick={this.create}>Apply</Button> 
                </form>
            </Card.Body>
            </Card>
              
          
          </div>
       
          
        );
        

        }
}

