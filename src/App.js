import React,{ Component } from "react";
import * as actions from "./actions/actions";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class App extends React.Component{
    componentDidMount(){
        this.props.getEmployees();
    };

    render(){
        return(
            <Container fluid
                       className="mt-5">
                <Button variant="danger"
                        size="sm"
                        className="float-right">Add <i className="fas fa-plus"></i></Button>
                <Table variant="danger"
                       size="lg"
                       className="text-center text-white"
                       striped
                       hover>
                    <thead>
                       <tr>
                          <th>SNO</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Edit</th>
                          <th>Delete</th>
                       </tr>
                    </thead>
                    <tbody>
                        {this.props.records.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.firstName}</td>
                                <td>{element.lastName}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td><i className="fas fa-edit"></i></td>
                                <td><i className="fas fa-trash-alt" 
                                       onClick={()=>{this.props.deleteEmployee(element.firstName)}}></i></td>
                            </tr>
                        ))}                 
                    </tbody>
                </Table>
            </Container>
        )
    };
};

const receive = (state)=>{
  console.log(state);
  if(state.hasOwnProperty("status")){
       if(state.status.delete === "success"){
           let i = state.records.findIndex((element,index)=>{
              return element.firstName === state.status.firstName;
           });
           state.records.splice(i,1);
       }   
    
  }
  return{
     records : state.records,
     status : state.status
  }
};

const send = (dispatch)=>{
   return{
      getEmployees : ()=>{ dispatch(actions.getEmployees()) },
      deleteEmployee : (firstName)=>{ dispatch(actions.deleteEmployee({"firstName":firstName})) }
   }
};

export default connect(receive,send)(App);
