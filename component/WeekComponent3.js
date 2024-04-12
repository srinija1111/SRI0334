import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week3.css";

const PropsComponent = (props) => {
  return (
    <div>
      <div>
        <div className="container-1">
          <h2 className="text-success">
            Hello,
            <span style={{ color: "darkorange" }}>{props.name}</span>
          </h2>
          <h2 className="text-success">
            Registration id :
            <span style={{ color: "#d50eeb" }}>{props.hallticket}</span>
          </h2>
        </div>
      </div> 
    </div>
  );
};

const PropComponent = (props) => {
  const studentDetails = [
    {
      stu_id: "2   2101",
      stu_name: "Rapo",
      stu_email: "22101@gmail.com",
    },
    {
      stu_id: "22102",
      stu_name: "sai",
      stu_email: "22102@gmail.com",
    },

    {
      stu_id: "22103",
      stu_name: "janaki",
      stu_email: "22103@gmail.com",
    },
    {
      stu_id: "22104",
      stu_name: "srinu",
      stu_email: "22104@gmail.com",
    },
  ];
  return (
    <div>
      <div className="container-2">
        <div class="center">
          <h3><u>Displaying Using Function Component</u></h3>
          <h3><u>Student Details</u></h3>
          <table className="table table-info table-striped" >
            <thead>
              <tr>
                <th>Std_ID</th>
                <th>Std_Name</th>
                <th>Std_Email</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr data-index={index}>
                  <td>{student.stu_id}</td>
                  <td>{student.stu_name}</td>
                  <td>{student.stu_email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
class PropsClass extends React.Component {
  render() {
    const employeeDetails = [
      {
        emp_id: "1001",
        emp_name: "mahi",
        desg: "HR",
      },
      {
        emp_id: "1002",
        emp_name: "Jansi",
        desg: "TL",
      },
      {
        emp_id: "1003",
        emp_name: "Raji",
        desg: "CEO",
      },
      {
        emp_id: "1004",
        emp_name: "manija",
        desg: "employee",
      },
    ];
    return (
      <div>
        <div className="container-3">
          <div class="text-center center">
            <h3><u>Displaying using Class Component</u></h3>
            <h3><u>Employee Details</u></h3>
            <table className="table table-warning table-striped">
              <thead>
                <tr>
                  <th>Emp_ID</th>
                  <th>Emp_Name</th>
                  <th>Emp_Designation </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((emp, index) => (
                  <tr data-index={index}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.emp_name}</td>
                    <td>{emp.desg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const StudentComponent = (props) => {
  console.log(props);
  const { student } = props;
  return (
    <div>
      <div className="container-4">
        <table className="table table-secondary table-striped">
          <tbody>
            <tr>
              <td>Stud_Roll No.:</td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td>Stud_Name:</td>
              <td>{student.Name}</td>
            </tr>
            <tr>
              <td>Stud_Mobile:</td>
              <td>{student.Mobile}</td>
            </tr>
            <tr>
              <td>Stud_Email:</td>
              <td>{student.Email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

 

const WeekComponent3=()=>{
  const student = {
    RollNo: "2211cs010544",
    Name: "srinija",
    Mobile: "1234567890",
    Email: "2211cs010544@mallareddyuniversity.ac.in",
  };

  return(
    <div>
      <div>
      <h1 style={{color:"#5b0eeb"}}>Week 3-Create React App and Demonstrate Props</h1>
      <div class="container-1">
        <h1>Question 1</h1>
        <h3> Create a React Component, using props render one & multiple attribute values and display it on the webpage</h3>
        <h2>
          <h3><u>Component by using props</u></h3>
        </h2>
        <h3><u>Rendering single attributes by using props</u></h3>
        <PropsComponent name="srinija" />
        <h3><u>Rendering multiple attributes by using props</u></h3>
        <PropsComponent name="srinija" hallticket="2211CS010544" />
      </div>
      <hr></hr>
      <div class="container-2">
        <h1>Question 2</h1>
        <h2>
          <h3> Create a React Component, using props through functions display student details (Std-id, Std-Name, Std-Email) on the webpage.</h3>
        </h2>
        <PropComponent
          ID="2211CS010544"
          name="v.srinija"
          email="2211cs010544@mallareddyuniversity.ac.in"
        />
      </div>
      <hr></hr>
      <div class="container-3">
        <h1>Question 3</h1>
        <h2>
          <h3> Create a React Component, using props through classes display employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.</h3>
        </h2>
        <PropsClass/>
      </div>
      <hr></hr>
      <div class="container-4">
        <h1>Question 4</h1>
        <h2>
          <h3>Create a Student component and able to display Student details which vary in htno, name, mailid, and mobileno to users.</h3>
        </h2>
        <StudentComponent student={student} />
      </div>
    </div>
    </div>
  );
}
export default WeekComponent3;
