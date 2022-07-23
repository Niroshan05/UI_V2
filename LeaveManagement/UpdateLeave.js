import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import axios from 'axios';

export default class UpdateLeave extends Component {
    constructor(){
        super();
        this.state={
            Leave:[],
            leaveId:'',
            employeeId:'',
            employeeName:'',
            employeeLeaveBalance:'',
           numberofdays:'',
           startDate:'',
            endDate:'',
            status:'',
           reason:''
        
        }
        this.update=this.update.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    update()
    {
        let leaveId=this.state.leaveId;
        axios.patch("http://localhost:50735/api/LeaveManagementDetails/UpdateLeave/"+leaveId,
        {
            
        employeeId:this.state.employeeId,
        employeeName:this.state.employeeName,
        employeeLeaveBalance:this.state.employeeLeaveBalance ,
        numberofdays:this.state.numberofdays,
        startDate:this.state.startDate,
        endDate:this.state.endDate ,
        status:this.state.status ,
        reason:this.state.reason 

    }).then(response=>{
      console.warn(response);
        alert("leave  updated");
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
        const {Leave}=this.state;
        return (
            
            <div className="App-header">
              <Card  style={{ }} >
          <Card.Header className="text-center">update leave</Card.Header>
          <Card.Body>
          <form>
          <table  >
            <tr >
                <td ><label >Leaveid</label>
                <input className="spacer" type="text" name="leaveId" onChange={(e)=>this.handleChange({leaveId:e.target.value})}></input></td>
                </tr>
              <tr >
                <td ><label >Employeeid</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Employeename</label>
                <input className="spacer" type="text" name="emplyeeName" onChange={(e)=>this.handleChange({employeeName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >EmployeeleaveBalance</label>
                <input className="spacer" type="text" name="employeeLeaveBalance" onChange={(e)=>this.handleChange({employeeLeaveBalance:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Numberofdays</label>
                  <input className="spacer" type="text" name="numberofdays"  onChange={(e)=>this.handleChange({numberofdays:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Startdate</label>
                  <input className="spacer" type="date" name="startDate"  onChange={(e)=>this.handleChange({startDate:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Enddate</label>
                  <input className="spacer" type="date" name="endDate"  onChange={(e)=>this.handleChange({endDate:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Status</label>
                  <input className="spacer" type="text" name="status"  onChange={(e)=>this.handleChange({status:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Reason</label>
                  <input className="spacer" type="text" name="reason"  onChange={(e)=>this.handleChange({reason:e.target.value})} ></input>
                  </td>
              </tr>
              
              
              <tr>
                <td><Button variant="danger" onClick={this.update}>Update</Button>
                
                 </td>
              
              </tr>
            </table>
          
          </form>
          </Card.Body>
          </Card>
          </div>
         
             
        );
        

    }
}
