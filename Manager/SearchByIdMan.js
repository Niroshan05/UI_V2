import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export default class SearchByIdMan extends Component {
    constructor(){
        super();
        this.state={
            // manager:[],
            managerId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
                    
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        
        let managerId=localStorage.getItem("mid");
        axios.get('http://localhost:50735/api/ManagerDetails/ShowSpecific/'+managerId)
        .then(Response=>{
            this.setState({
                managerId:Response.data.employeeId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
               
            })
        })
    }
    componentDidMount(){
        this.SearchById();
    }
    render() {
       
        let managerId= localStorage.getItem("mid");
        
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        
        return (
            <>  <div className="App-header"></div>
            
              <div className="App-header">

<Card style={{  }}></Card>
   <div className="alignleft">
                     <Card>
                     </Card><Card> <h3>&nbsp;managerId &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      :  {managerId}&nbsp;</h3><br></br>
                     </Card><Card> <h3>&nbsp;full name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          :  {firstName+"  "+lastName}&nbsp;</h3><br></br>
                     </Card><Card>  <h3>&nbsp;E_Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             :  {e_Mail}&nbsp;&nbsp;&nbsp;&nbsp;</h3><br></br>
                     </Card><Card>   <h3>&nbsp;Phone number &nbsp;&nbsp;&nbsp;:  {contactNumber}&nbsp;</h3><br></br>
                     </Card><Card>   <h3>&nbsp;Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        :  {department}&nbsp;</h3><br></br>
                    </Card> </div >
              
              </div>
              </>
        )
    }
}