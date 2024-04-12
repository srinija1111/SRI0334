// import logo from './logo.svg';
// import './App.css';
// import MycomponentwithJSX from './component/MycomponentwithJSX';
// import MyComponentWithoutJSX from './component/MyComponentWithoutJSX';
// import MyFunctionComponent from './component/MyFunctionComponent';
// import MyClassComponent from './component/MyClassComponent';



// function App() {
//   return (
//     <div>
//       <h5> Week:2 Task</h5> 
//       <MycomponentwithJSX/>
//       <hr/>
//       <h4> My component without JSX</h4>
//       <MyComponentWithoutJSX/>
//       <hr/>
//       <MyFunctionComponent/>
//       <hr/>
//       <MyClassComponent/>

//     </div>
    // <div className="App">
      
      
      /* <div class="container">
        <h3> 
        Hello world!
           
          
        
      </h3>
      </div>
      <hr/>
      <div class="container">
        <h3> Name : Srinija</h3>
        <h3> Halticket no : 2211cs010544</h3>
        <h3> Group : 8D </h3>
      </div>

      <hr/> 
      <div class="container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.ryPFRmMaJefG_6Xf4HZdBgAAAA&pid=Api&P=0&h=180" alt ="photo" image controls height="150px" width="150px"></img>
        <h3> Name : Srinija </h3>
        <p> 
          Iam srinija , studying Btech 2nd year in Mallareddy university,my aim is to purse higher studies in Abroad.My hobbies are reading and dancing and i want to become a software Engineer with good package in top companies.
           </p>
      </div>
      
        

        
      
    </div> */
//     import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// // import Week2 from './component/week2';
// import Week3 from './component/week3';
// import WelcomeMessage from './component/welcome';
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <WelcomeMessage name="srinija" hallticket="2211CS010544" branch="cse" />
//         <hr/>
//         {/* <employeedetails/>
//         <studentdetails/> */}
//         <Week3/>
//       </div>
//     </div>
//   );
// }

// export default App;
// import logo from "./logo.svg";
import "./App.css";
// import Week1 from "./Components/Week1";
// import Week2 from "./Components/Week2";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import WeekComponent3 from "./component/WeekComponent3";
//  import Week4 from "./component/Week4";
// import FacultyMem from "./component/FacultyMem";
// import Students from "./component/Students";

// function App() {
//   return (
//     <div className="App">
//       <div className="container-fluid">
//         <h2 style={{color:'green'}}> Week 5 Task</h2>
//         <hr/>
//         <h2 style={{color:'red'}}>SRINIJA , 2211CS010544 ,8D</h2>
//         <hr/>
//         <h2 style={{color:'blue'}}> 1.Displaying Students list using Bootstrap card layout</h2>
        
//         <Students/>
//         <h2 style={{color:'blue'}}> 2.Displaying Employee  List using Bootstrap card layout</h2>
//         <FacultyMem/>
//       </div>

//       {/* <Week1></Week1> */}
//       {/* <Week2></Week2> */}
//       {/* <WeekComponent3/> */}
//       {/* <Week4/>  */}
//     </div>
//   );
// }
// import React from 'react';
// import { TernaryOperator, UserTypeComponent,StudentDetails } from './component/Week6';
// import './App.css'
// export default function App() {
//   return (
//     <div>
//     <center> <div className="container-fluid"><h1 className="text-primary"> Week6    srinija 2211cs010544</h1></div></center>
    
    
//       <hr></hr>
//       <div className='question1'>
//        <div className=''> <TernaryOperator/></div>
      
//       <center> <div className='question3'><UserTypeComponent/></div></center>
//      <div className='one'>  <StudentDetails/> </div>
//       </div>
//     </div>
//   );
// }
// import Home from './component/Home';
// import Login from './component/Login';
// import MruhCommunity from './component/MruhCommunity';
// import Logout from './component/Logout';


// import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

// const App = () => {
//   return (
//   <BrowserRouter>
//   <div className='container-fluid'>
//   <nav className="navbar navbar-expand-lg navbar-light bg-primary">

//   <span className="navbar-brand"><h3 style={{color:"white"}}>MruhCommunity</h3></span>

   
  

  
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-
//   bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle
  
//   navigation">
//   <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
// <ul className="navbar-nav ms-auto">
// <li >
// <Link className="nav-item nav-link active" to="/"><h4 style={{color:"yellow"}}>Home</h4></Link>
// </li>
// <li >
// <Link className="nav-item nav-link" to="/login"><h4 style={{color:"yellow"}}>Login</h4></Link>
// </li>
// <li class="nav-item">
// <Link className="nav-item nav-link" to="/mruhcommunity"><h4 style={{color:"yellow"}}>MruhCommunity</h4></Link>
// </li>
// <Link className="nav-item nav-link" to="/logout"><h4 style={{color:"yellow"}}>Logout</h4></Link>
// </ul>
// </div>
// </nav>
// <Routes>
// <Route exact path="/" element={<Home />} />
// <Route path="/login" element={<Login />} />
// <Route path="/mruhcommunity" element={<MruhCommunity />} />
// <Route path="/logout" element={<Logout />} />

// </Routes>
// </div>
// </BrowserRouter>
//   );
// }
// export default App;
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './component/about';
import Login from './component/Login';
import Register  from './component/registration';   

    function App() {
    return (
        <div className="App">
        <BrowserRouter>
        
        <nav>
            <div className='navbar'>
            <ul>
              <h2> SRINIJA </h2>
              <h2>2211cs010544</h2>
              <h2> week 8</h2>
                
                <li> <Link to = ' ' > <h2 className = "text-dark"> MruhCommunity</h2> </Link> </li>
                <li> <Link to='/' style={{ color: 'black', fontSize: '20px' }}>Home</Link></li>
                <li><Link to='/about' style={{ color: 'black', fontSize: '20px' }}>About</Link></li>
                <li><Link to='/login' style={{ color: 'black', fontSize: '20px' }}>Login</Link></li>
               
            </ul>
            </div>
        </nav>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register/>} />
            
        </Routes>
        </BrowserRouter>
        </div>
    );
    }

    export default App;










  
