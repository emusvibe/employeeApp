import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import CreateModal from './Modals/CreateModal';
class Table extends Component{

 
   constructor(props){
        super(props);
        this.state = {
            employees: []
        }
   } 

   //Life cycle method
   componentDidMount(){
    this.getEmployeeList();
   }

      // Get Employee List 
   getEmployeeList = () =>{
        let self = this;
        axios.get('/get/employee/list').then(function(response){
            self.setState({
                employees: response.data
            })
        });
    }
    render(){
        return (
            <div className="container">
                <ToastContainer/>
                <CreateModal/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Employee Data</div>
    
                            <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employees.map(function(x ,i){
                                        return <TableRow key={i} data={x}/>    
                                    })
                                    }
                                               
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}  


export default Table;

// if (document.getElementById('employeeApp')) {
//     ReactDOM.render(<Table />, document.getElementById('employeeApp'));
// }
