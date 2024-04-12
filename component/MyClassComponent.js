import React from "react";
class MyClassComponent extends React.Component {

    render() {
    
    return (
    
    <div className="Container-fluid">
    
    
    <h5>Employee Details..</h5>
    <h6> my class component</h6>
    <table  className='table' style={{ tableLayout:'centre',width:'200px',height:'200px', alignContent:'center'}}>
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">EmpName</th>
          <th scope="col">Empid</th>
          <th scope="col">Ph.no</th>
          <th scope="col">Desg</th>

        </tr>
      </thead>
      <tbody>
        <tr class="table-primary">
          <th scope="row">1</th>
          <td>chandini</td>
          <td>222</td>
          <td>12345</td>
          <td>project manager</td>
        </tr>
        <tr class="table-success">
          <th scope="row">2</th>
          <td>varun tej</td>
          <td>222</td>
          <td>123456</td>
          <td>HR manager</td>
        </tr>
        <tr class="table-secondary">
          <th scope="row">3</th>
          <td>jai</td>
          <td>333</td>
          <td>1234567</td>
          <td>Team manager</td>
        </tr>
    
      </tbody>
    </table>
    
    
    
    </div>
    
    );
    
    }
    
    } 
    export default MyClassComponent;

