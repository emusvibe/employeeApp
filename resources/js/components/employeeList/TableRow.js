import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableActionButtons from './TableActionButtons';

class TableRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
   } 

  render(){
    return(
        <tr>
          <th>{this.props.data.id}</th>
             <td>{this.props.data.employee_name}</td>
             <td>{this.props.data.salary}</td>
             <td><TableActionButtons eachRowId={this.props.data.id}/></td>
        </tr>      
    )
  }
}

export default TableRow;
