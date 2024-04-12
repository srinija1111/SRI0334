import React, { useState } from 'react';
import stuimg from '../images/student logo.jpg';
import '../App.css'
const WelcomeComponent = () => {
  return (
    <div>
      <h3 >Welcome Component</h3>
      <h4>
        Hello  , you are now LoggedIn to Welocome COMPONENT
      </h4>
    </div>
  );
};

const LoginComponent = () => {
  return (
    <div>
      <h3 >Login Component</h3>
    </div>
  );
};

const ConditionalRenderingWithLogical = ({ isLoggedIn }) => {
  return (
    <div>
      
      <h2>2. React Component using Logical Operator.</h2>
      {isLoggedIn && (
        <div>
          <h4 style={{margin:'20px', padding:'15px'}}>
            You are now LoggedIn to ACC NO :
          </h4>
        </div>
      )}
    </div>
  );
};

const ConditionalRenderingWithIfElse = ({ isLoggedIn }) => {
  let message;
  if (isLoggedIn) {
    message = <h3>You are Logged in</h3>;
  } else {
    message = <h3>You are not Logged in</h3>;
  }

  return (
    <div>
      
      <h2>3. React Component using If-Else.</h2>
      {message}
    </div>
  );
};


const TernaryOperator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <center>
     <div className='question7'>   <h2>1. React Component using Ternary Operator</h2>
        {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
        <button  onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
     <div className='question2'>   <ConditionalRenderingWithLogical isLoggedIn={isLoggedIn} /></div>
      <div className='question2'>  <ConditionalRenderingWithIfElse  isLoggedIn={isLoggedIn}/></div>
      </center>
    </div>
  );
};

const UserTypeComponent = () => {
  const [userType, setUserType] = useState(''); 

  const renderUserDetails = () => {
    const user = ((user) => user.type === userType); 
    if (!user) return null; 

    switch (userType) {
      case 'student1':
        return (
          <center>
            <div className="container">
              <h3 >This is Admin Component</h3>
            </div>
          </center>
        );
        case 'student2':
          return (
            <center>
              <div className="container">
                <h3 >This is User Component</h3>
              </div>
            </center>
          );
     
      default:
        return null; 
    }
  };


  return (
    <div>
      <h2 style={{margin:'10px',padding:'10px'}}>4. React Component using Switch - Case Condition</h2>
      {renderUserDetails()}
      <div>
        
        <button onClick={() => setUserType('student1')}>ADMIN</button>
        <button onClick={() => setUserType('student2')}>USER</button>
      </div>
    </div>
  );
};



class StudentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          type: 'student1',
          name: 'srinija',
          group: '8D',
          rollNo: '2211cs010544',
          subjects: ['MERN', 'OOSE', 'P&S', 'DM', 'COA'],
        },
        {
          type: 'student2',
          name: 'Ramya',
          group: '8D',
          rollNo: '2211cs010625',
          subjects: ['MERN', 'OOSE', 'P&S', 'DM', 'CN'],
        },
      ],
    };
  }

  render() {
    return (
      <center>
        <div className="container">
          <h5 className="mt-4 mb-4"> React Component, Render 2 Student Details (RollNo, Group, Name, Subjects) using map() method</h5>
          <div className="row justify-content-center">
            {this.state.students.map((user, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card border border-2 border-dark" style={{ width: '280px', height: '400px' }}>
                  <img src={stuimg} alt="Profile" className="mx-auto mt-3 mb-3" style={{ width: '100px', height: '100px' }} />
                  <div className="card-body">
                    <h5  className="card-title">
                      {user.name}
                    </h5>
                    <h5  className="card-text">
                      Group - {user.group}
                    </h5>
                    <h5  className="card-text">
                      Roll No - {user.rollNo}
                    </h5>
                    <hr />
                    <hr />
                    <h5 style={{ textAlign: 'left' }} className="card-text">
                      {user.subjects.join(', ')}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </center>
    );
  }
}



export { TernaryOperator, ConditionalRenderingWithLogical, UserTypeComponent, StudentDetails };