import React from "react";

function MycomponentwithJSX(){
    const element = <h3>Hello</h3>;
    const name = 'srinija';
    const age = 10;
    var cTime = new Date().toTimeString();
    const isLoggedIn = true;
    

    return(
        <div>
            
            <h6>components with using JSX </h6>
            <h6>Example 1: HTML- like syntax</h6>
            <h6>Basic HTML Tags</h6>
            <p>{element}</p>
            <hr/>
            <div>
                <h6>Example 2: Nested elements</h6>
                <h6 style={{color:'blue'}}> Mallareddy university</h6>
                <h6>Department of CSE</h6>
                <h6> section : 8</h6>
                <p>Welcome to MERN Stack Classes!!!!!</p>
                <hr/>
                <div>
                <h6>Example 3: Attribute in JSX</h6>
                <h6 className="my-class">Malla Reddy University</h6>
                <h6 style={{color:'red'}}>Department of CSE</h6>
                <p>Welcome to MERN Stack Classes!!!!!</p>
                <hr/>
                <div>
                <h6>Example 4: Expressions in JSX</h6>
                
                <h6 style={{color:'red', fontWeight:'120px'}}>Hello, {name}!</h6>
                <p className="p">You are {age} years old.</p>
                <hr/>
                <div>
                <h6>Example 5: Function in JSX</h6>
                
                <p>The current time is {cTime}</p>
                <hr/>
                <div>
                <h6>Example 6: Conditional Rendering</h6>
                
               <h6>{isLoggedIn ? 'Welcome back!!!!' : 'Please log in...'}</h6>
               <hr/>
               <div>
                <h6> Example 7: Fragments</h6>
               
              <h6>Mern stack</h6>
              <p>Lab Session</p>
           



               </div>
                </div>
                </div>
                </div>


                </div>

    </div>
        </div>

    );
}
export default MycomponentwithJSX;