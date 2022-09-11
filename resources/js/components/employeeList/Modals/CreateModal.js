import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



class CreateModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
   } 

   inputEmployeeName = (event) => {
    this.setState({
        employeeName: event.target.value
    })
} 

inputEmployeeSalary = (event) => {
this.setState({
    employeeSalary: event.target.value
})
}

storeEmployeeData = ()=>{
    axios.post('/store/employee/data', {
       employeeName: this.state.employeeName,
       employeeSalary: this.state.employeeSalary, 
    }).then(()=>{
        toast.success("Employee Created Successfully");
        setTimeout(()=>{
           location.reload(); 
        },2500)
    })
}

  render(){
    return(
        <>
        <div className="row text-right mb-3 pb-3">
            <button className="btn btn-info text-center col-3 offset-md-9"
                data-toggle="modal"
                data-target="#modalCreate"
            >
                Add New Employee
            </button>
        </div>
        <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form className="form">
                <div className="form-group">
                    <label for="employeeName">Employee Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="employeeName" 
                    placeholder="Employee Name" 
                    onChange={this.inputEmployeeName}
                    />
                </div>
                <div className="form-group">
                    <label for="employeeSalary">Employee Salary</label>
                    <input type="text" 
                    className="form-control" 
                    id="employeeSalary" 
                    placeholder="Employee Salary" 
                    onChange={this.inputEmployeeSalary}/>
                </div>    
            </form>
            </div>
            <div className="modal-footer">
            <input type="button" 
                    className="btn btn-primary"                     
                    value="Save" 
                    onClick={this.storeEmployeeData}/>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>           
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default CreateModal;
