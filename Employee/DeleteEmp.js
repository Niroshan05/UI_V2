import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

export default class DeleteEmp extends Component {
    constructor()
    {
        super();
        this.state={
            
            employeeId:''
            
    }
    this.delete=this.delete.bind(this);
    
}
    delete(){
        let employeeId=this.state.employeeId;
        axios.delete('http://localhost:50735/api/EmployeeDetails/DeleteEmployee/'+employeeId)
       .then(Response=>{
        alert("data deleted");
})
.catch(err=>{
    alert(err);
})

}

    render() {
        
        return (
            <div className="App-header">
                 
          <Card  style={{ }} >
          <Card.Header className="text-center">Sign in</Card.Header>
          <Card.Body>
     <form>
          <Form.Group className="mb-0" >
            <Form.Label >Employee Id</Form.Label>
         <Form.Control className="spacer" type="text" name="employeeId" onChange={(e)=>this.setState({employeeId:e.target.value})}></Form.Control>
         </Form.Group>
            
                <Button variant="danger" onClick={this.delete}>Delete</Button>
                </form>
     </Card.Body>
     </Card>
     
     </div>
            
        )
    }
}
