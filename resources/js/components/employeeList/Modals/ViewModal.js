import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ViewModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
   } 

  render(){
    return(
        <div className="modal fade" id={"viewModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Name: <strong>{this.props.employeeData.currentEmployeeName}</strong>
              <hr></hr>
              Salary: <strong>{this.props.employeeData.currentEmployeeSalary}</strong>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>           
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewModal;
