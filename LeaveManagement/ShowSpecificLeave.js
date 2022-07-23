import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class ShowSpecificLeave extends Component {
    constructor(){
        super();
        
       this.state={
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
    
    this.ShowSpecificLeave=this.ShowSpecificLeave.bind(this);
        
    }
    ShowSpecificLeave(e){
        e.preventDefault();
        let leaveId=this.state.leaveId;
        axios.get("http://localhost:50735/api/LeaveManagementDetails/ShowSpecific/"+leaveId)
        .then(Response=>{
            this.setState({
                leaveId:Response.data.leaveId,
                employeeId:Response.data.employeeId,
                employeeName:Response.data.employeeName,
                employeeLeaveBalance:Response.data.employeeLeaveBalance,
                numberofdays:Response.data.numberofdays,
                startDate:Response.data.startDate,
                endDate:Response.data.endDate,
                status:Response.data.status,
                reason:Response.data.reason
            })
        })
        .catch(err=>{
            console.log(err);
             alert(err);

        });
    }
    render() {
        const{leaveId}=this.state;
        const{employeeId}=this.state;
        const{employeeName}=this.state;
        const{employeeLeaveBalance}=this.state;
        const{numberofdays}=this.state;
        const{startDate}=this.state;
        const{endDate}=this.state;
        const{status}=this.state;
        const{reason}=this.state;
        return (
            
           <> <div className="App-header">
                <Card>
                    <Card.Body>
              
          <form>
            <table > 
                <thead>
            <tr >
                <td ><label >LeaveId</label>
                <input className="spacer" type="text" name="leaveId" onChange={(e)=>this.setState({leaveId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><Button variant="danger" onClick={(e)=>this.ShowSpecificLeave(e)}>search</Button>
                
                 </td>
              
              </tr>
              </thead>
            </table> 
          
          </form>
          </Card.Body>
          </Card>
         
          </div>
         
            <div>
            <Table striped bordered hover>
                
                <thead>
                
                <tr>
                <th>Leaveid</th>
                <th>Employeeid</th>
                <th>Emplyeename</th>
                <th>employeeleavebalance</th>
                <th>Numberofdays</th>
                <th>Startdate</th>
                <th>Enddate</th>
                <th>status</th>
                <th>Reason</th>
                </tr>
           </thead>

            <tbody>
                <tr>
                    <td>{leaveId}</td>
                    <td>{employeeId}</td>
                    <td>{employeeName}</td>
                    <td>{employeeLeaveBalance}</td>
                    <td>{numberofdays}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>{status}</td>
                    <td>{reason}</td>
                </tr>
            </tbody>
           
            </Table>
            </div>
            </>
         
            
            
        )
    }
}
