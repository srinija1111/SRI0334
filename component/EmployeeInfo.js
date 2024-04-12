import React from 'react';
const EmployeeCard=({employee})=>{
    return(
        <div className="card" style={{width:'18rem' , margin:'10px'}}>
       <div className="card-body">
        <h4 className="card-title">Employee Id:{employee.id}</h4>
        <h4 className="card-text">Employee Name:{employee.name}</h4>
        <h4 className="card-text">Employee Salary:{employee.salary}</h4>
       </div>
</div>
    );
}
const EmployeeInfo=()=>{
    const employees=[

        { id:123,name:'sri',salary:2000},
        { id:123,name:'sri',salary:2000},
        { id:123,name:'sri',salary:2000},
        { id:123,name:'sri',salary:2000},
        { id:123,name:'sri',salary:2000},
    ];
    return (
        <div>
            <h2>employee information</h2>
            <div className="row">
                {employees.map(employee=>(
                 <div className="col-md-4" keyword={employee.id} > 
                 <EmployeeCard employee={employee}/>
                 </div>
                ))}
            </div>
        </div>
    );
    }
    export default EmployeeInfo;