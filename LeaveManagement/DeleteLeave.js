import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

export default class DeleteLeave extends Component {
    constructor()
    {
        super();
        this.state={
           
            leaveId:''
            
    }
    this.delete=this.delete.bind(this);
}
    delete(){
        let leaveId =this.state.leaveId;
        axios.delete("http://localhost:50735/api/LeaveManagementDetails/DeleteLeave/"+leaveId)
           .then(Response=>{
            alert("Leave deleted");
})
.catch(err=>{
    alert(err);
})

}
    render() {
        return (
            <div className="App-header">
                 
          <Card  style={{ }} >
          <Card.Header className="text-center">cancel request</Card.Header>
          <Card.Body>
     <form>
          <Form.Group className="mb-0" >
            <Form.Label >Leave Id</Form.Label>
         <Form.Control className="spacer" type="text" name="leaveId" onChange={(e)=>this.setState({leaveId:e.target.value})}></Form.Control>
         </Form.Group>
            
                <Button variant="danger" onClick={this.delete}>Delete</Button>
                </form>
     </Card.Body>
     </Card>
     
     </div>
            
        )
    }
}
