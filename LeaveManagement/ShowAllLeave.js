import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export default class ShowAllLeave extends Component {
    constructor(){
        super();
        this.state={
            leave:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:50735/api/LeaveManagementDetails/Allleave')
        .then(response=>{
            this.setState({leave:response.data})

        }).catch(error=>{
            console.warn(error)
        })
    }
    render() {
        return (
            <>
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
    
                {
                this.state.leave?this.state.leave.map(x=>
                    <tbody>
                    <tr>
                        
                    <td>{x.leaveId}</td>    
                    <td> {x.employeeId} </td>
                    <td>{x.employeeName}</td>
                    <td> {x.employeeLeaveBalance} </td>
                    <td> {x.numberofdays} </td>
                    <td> {x.startDate} </td>
                    <td> {x.endDate} </td>
                    <td>{x.status}</td>
                    <td> {x.reason} </td>
                    </tr>
                    </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}
