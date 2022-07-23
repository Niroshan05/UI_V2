import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export default class ShowAllEmp extends Component {
    constructor(){
        super();
        this.state={
            employee:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:50735/api/EmployeeDetails/Allemp')
        .then(response=>{
            this.setState({employee:response.data})

        }).catch(error=>{
            console.warn(error)
        })
    }
    render() {
        let UserName=localStorage.getItem("userName");
        return (
            <>
            <h1>welcome {UserName}</h1>
            <Table striped bordered hover>
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
    
                {
                this.state.employee?this.state.employee.map(x=>
                    <tbody>
                    <tr>
                        
                    <td> {x.employeeId} </td>
                    <td>{x.firstName+"  "+x.lastName}</td>
                    
                    <td> {x.e_Mail} </td>
                    <td> {x.contactNumber} </td>
                    <td> {x.department} </td>
                    <td> {x.dateJoined} </td>
                    <td>{x.managerId}</td>
                    <td> {x.leaveBalance} </td>
                    <td> {x.password} </td>
                    </tr>
                    </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}
