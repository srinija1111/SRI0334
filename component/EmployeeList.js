import React from 'react';
const EmployeeList=()=>{
    const employees=[
        {empId:123, name:'gari',designation:'cse',salary:2000},
        {empId:103, name:'mari',designation:'ece',salary:4000},
    ];
    return(
        <div>
            <h2> employee details</h2>
            {employees.map(employee=>(
            <div key={employee.empId}>
                <p> <strong> Employee Id:</strong>{employee.empId}</p>
                <p> <strong> Employee Name:</strong>{employee.name}</p>
                <p> <strong> Employee Designation:</strong>{employee.designation}</p>
                <p> <strong> Employee Salary:</strong>{employee.salary}</p>
                <hr/>
                </div>
            ))}
        </div>
    );
}
export default EmployeeList;