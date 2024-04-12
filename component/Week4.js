import React, { useState, useEffect } from "react";
import "./Week4.css";
import "bootstrap/dist/css/bootstrap.min.css";
function UseStateExample() {
  const name = null;
  const rno = null;
  const branch = null;
  const group = null;
  const [details, setDetails] = useState(
    <div>
      <h3>Name: {name}</h3>
      <h3>Roll No: {rno}</h3>
      <h3>Branch: {branch}</h3>
      <h3>group: {group}</h3>
    </div>
  );
  const getDetails = () => {
    const name = "V.SRINIJA";
    const rno = "2211cs010544";
    const branch = "CSE";
    const group = "8D";
    setDetails(
      <div>
        <h3>Name: {name}</h3>
        <h3>Roll No: {rno}</h3>
        <h3>Branch: {branch}</h3>
        <h3>Group: {group}</h3>
        

      </div>
    );
  };
  return (
    <div className="">
      <h2>
        1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h2>
      <h2 style={{ textDecorationLine: "underline" }}>Use State Example</h2>
      <div className="">
        <h3>{details}</h3>

        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
  const headings = ["SNO", "Name of the student", "Roll No", "Email ID"];
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );

      const data = await response.json();

      console.log(data);

      setDetails(data);
    };

    fetchStudentDetails();
  }, []);
  const [details, sliceDetails] = useState();
  return (
    <div className="">
      <h2>
        2. Create a React Component, Display student Hall-ticket, Name and
        Email-Id using useEffect() fetch student info from student.json.
      </h2>

      <h2 style={{ textDecorationLine: "underline" }}>
        Use effect example by fetching data from student.json
      </h2>
      <div>
        <table striped bordered hover variant="danger">
          <thead>
            <tr> 
              <th>sno</th>
              <th>name</th>
              <th>rollno</th>
              <th>email</th>
            </tr>
            
          </thead>
          <tbody>
            {Details.slice(0, 5).map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.EmailID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function Week4() {
  return (
    <div className="">
      <h2>
        WEEK 4 - Task<hr></hr>
        SRINIJA , 2211CS010544 , 8D
      </h2>
      <hr />
      <UseStateExample />
      <br />
      <UseEffectExample />
    </div>
  );
}
export default Week4;