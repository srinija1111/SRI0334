import React from 'react';
const Student=({rollno,name,email,mobile})=>{
    return(
        <div>
            <h4> student details</h4>
            <p> <strong> Rollno:</strong>{rollno}</p>
            <p> <strong> Name:</strong>{name}</p>
            <p> <strong> Email:</strong>{email}</p>
            <p> <strong> Mobile:</strong>{mobile}</p>
        </div>
    );
}
export default Student;