import React from "react";
function MyFunctionComponentJSX(){
    return(
        <div> 
          
          <h5> student info</h5>
          <h6> my function component</h6>
            <table class="table" style={{ tableLayout:'centre',width:'200px',height:'200px',alignContent:'centre'}}>
  <thead>
    <tr>
    <th scope="col">s.no</th>
      <th scope="col">StuName</th>
      <th scope="col">Sid</th>
      <th scope="col">Dept</th>
      <th scope="col">Add</th>
      <th scope="col">ph.no</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-info">
      
      <th scope="row">1</th>
      <td>ramya</td>
      <td>625</td>
      <td>cse</td>
      <td>hi-tech</td>
      <td>12345</td>
     
    </tr>
    <tr class="table-secondary">
      <th scope="row">2</th>
      
      <td>noshitha</td>
      <td>613</td>
      <td>cse</td>
      <td>dulapally</td>
      <td>123456</td>
    </tr>
    <tr r class="table-primary">
      <th scope="row">3</th>
      <td> srinija</td>
      <td>544</td>
      <td>cse</td>
      <td>madhapur</td>
      <td>12364</td>
    </tr>
  </tbody>
</table>
        </div>
    );
}
export default MyFunctionComponentJSX;
   