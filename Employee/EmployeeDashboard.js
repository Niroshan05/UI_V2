import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'; 
import Table from 'react-bootstrap/esm/Table';


export default class EmployeeDashboard extends Component {
  constructor(){
    super();
    
   this.state={
     leave:[]
 
}

this.ShowSpecificLeave=this.ShowSpecificLeave.bind(this);
    
}
ShowSpecificLeave(e){
    
    let leaveId=this.state.leaveId;
    let employeeId=localStorage.getItem("empid");
    axios.get("http://localhost:50735/api/LeaveManagementDetails/ShowSpecificEmp/"+employeeId)
    .then(response=>{
      this.setState({leave:response.data})

  }).catch(error=>{
      console.warn(error)
  })
}
ShowRepLeave(e){

  let leaveId=this.state.leaveId;
  let employeeId=localStorage.getItem("empid");
  axios.get("http://localhost:50735/api/LeaveManagementDetails/ShowRepsLeave/"+employeeId)
  .then(response=>{
    if(response !=null){
    this.setState({Repleave:response.data})
 }else{
   this.setState({Repleave:null})
 }
 
}).catch(error=>{
    console.warn(error)
})
}

componentDidMount(){
  this.ShowSpecificLeave();
  this.ShowRepLeave();
}

    render() {
        let UserName=localStorage.getItem("userName");
        
        return (<>
        <div><h1>welcome {UserName}</h1></div>
           <div className="center">
           <div >
        <Row xs={1} md={2} className="g-1">

      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>My Details</Card.Title>
            <Card.Text>
             <Button href="/Searchbyid">Details</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Manager Details</Card.Title>
            <Card.Text>
              <Button href="/SearchByIdMan">Detail</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <br></br>
      </Row>
      {/* NEW ROW */}
      <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
      
        <Card  style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Apply Leave</Card.Title>
            <Card.Text>
              <Button href="/Addleave">Apply</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
        <Card>
          {/* belo part is to show leave details inside dashboard  */}
          <Card.Body>
            <Card.Title>My Leave</Card.Title>
            <Card.Text>
              <Table>
              
               <div>
               
            <Table striped bordered hover>
           
           
                <thead>
               
                <tr>
                <th>Leaveid</th>
                <th>Employeeid</th>
                <th>Managerid</th>
                
                <th>Numberofdays</th>
                <th>Startdate</th>
                <th>Enddate</th>
                <th>status</th>
                <th>Reason</th>
                </tr>
           </thead>
          
            {
 this.state.leave?this.state.leave.map(x=>
                   
            <tbody>
                <tr>
                    <td>{x.leaveId}</td>
                    <td>{x.employeeId}</td>
                    <td>{x.managerId}</td>
                    
                    <td>{x.numberofdays}</td>
                    <td>{x.startDate}</td>
                    <td>{x.endDate}</td>
                    <td>{x.status}</td>
                    <td>{x.reason}</td>
                </tr>
            </tbody>):null
                } 
            
            </Table>
            </div>
             </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
        <Card>
          {/* belo part is to show leave details inside dashboard  */}
          <Card.Body>
            <Card.Title>My Reporting Employee's Leave</Card.Title>
            <Card.Text>
              <Table>
              
               <div>
               
            <Table striped bordered hover>
           
           
                <thead>
               
                <tr>
                <th>Leaveid</th>
                <th>Employeeid</th>
                <th>Managerid</th>
                
                <th>Numberofdays</th>
                <th>Startdate</th>
                <th>Enddate</th>
                <th>status</th>
                <th>Reason</th>
                </tr>
           </thead>
          
            {
 this.state.Repleave?this.state.Repleave.map(x=>
                   
            <tbody>
                <tr>
                    <td>{x.leaveId}</td>
                    <td>{x.employeeId}</td>
                    <td>{x.managerId}</td>
                    
                    <td>{x.numberofdays}</td>
                    <td>{x.startDate}</td>
                    <td>{x.endDate}</td>
                    <td>{x.status}</td>
                    <td>{x.reason}</td>
                </tr>
            </tbody>):null
                } 
            
            </Table>
            </div>
             </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
       
            </div></div>
            </>
        )
    }
}
