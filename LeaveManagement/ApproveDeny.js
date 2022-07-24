import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Table from "react-bootstrap/Table";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import axios from 'axios';


export default class ApproveDeny extends Component {
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
    componentDidMount(){
        this.SearchById();
    }
    // show specific emp 
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
    //show specific leave
    ShowSpecificLeave(e){
        e.preventDefault();
        let leaveId=this.state.leaveId;
        axios.get("http://localhost:50735/api/LeaveManagementDetails/ShowSpecific/"+leaveId)
        .then(Response=>{
            this.setState({
                leaveId:Response.data.leaveId,
                employeeId:Response.data.employeeId,
                startDate:Response.data.startDate,
                endDate:Response.data.endDate,
                numberofdays:Response.data.numberofdays,
                type:Response.data.type,
                status:Response.data.status,
                reason:Response.data.reason,
                appliedOn:Response.data.appliedOn
            })
        })
        .catch(err=>{
            console.log(err);
             alert(err);

        });
    }

    //update function
    update(approveordeny)
    {
        let leaveId=this.state.leavId;
        let status=approveordeny;
        let managerComment=this.state.managerComment;
        axios.patch("http://localhost:50735/api/LeaveManagementDetails/AcceptDeny/"+leaveId+"/"+status+"/"+managerComment,
        {
            
        
        status:this.state.status ,
        managerComment:this.state.managerComment 

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
        const{leaveId}=this.state;
        const{employeeId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        
        const{leaveBalance}=this.state;
        const{numberofdays}=this.state;
        const{startDate}=this.state;
        const{endDate}=this.state;
        const{type}=this.state;
        const{status}=this.state;
        const{reason}=this.state;
        return (
            
           <> 
           <div className="App-header">

<Card style={{  }}>
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
   <div className="alignleft">
       <Card>
        <h5>&nbsp;Employee Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  {employeeId}&nbsp;</h5>
        <h5>&nbsp;Full name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  {firstName+"  "+lastName}&nbsp;</h5>
        <h5>&nbsp;Leave Balance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  {leaveBalance}&nbsp;</h5>
        <h5>&nbsp;Start date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {startDate}</h5>
        <h5>&nbsp;End date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{endDate}</h5>
        <h5>&nbsp;No of days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{numberofdays}</h5>
        <h5>&nbsp;leave type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{type}</h5>
        <h5>&nbsp;Reason &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{reason}</h5>
        <br></br>
        <FloatingLabel
        controlId="floatingInput"
        label="Manager Comments"
        className="mb-3" >
            <Form.Control className="spacer" type="text" name="managerComments"  onChange={(e)=>this.handleChange({managerComment:e.target.value})}></Form.Control>
        </FloatingLabel>  
      <Row className="g-3">
          
          <Col>
          <Button variant="danger" onClick={(e)=>this.update("Accepted")}>Accepted</Button>
       </Col> 
       <Col>
        <Button variant="danger" onClick={(e)=>this.update("Denied")}>Denied</Button>
      </Col>
      <Col> 
      <Button variant="danger" href="/employeeDashboard">cancel</Button>
        </Col>
         </Row>     
       </Card> </div >
      
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
