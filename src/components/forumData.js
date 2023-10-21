import React from 'react'
import { useState } from 'react';
import Blog from './blog';
import Reply from './reply';

function ForumData(props) {
   

    const [message, setMessage] = useState('');


  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(message);
  
    };


    const date = new Date();
    const formattedDate = date.toLocaleDateString();

  return (
    <>
    <div className="top-bar">
        <h1>Beyond the Trauma Community Forum</h1>
        </div>
       
        <div className="main">
        <p style={{textAlign: "center",  border: "2px solid black", padding: "1rem", background: "white"}}>Share your story and start a conversation. These conversations are moderated to ensure everyone is safe from harassment, abuse, or spam (see our Code of Conduct page for posting guidelines). Please notify us immediately if you believe a post does not follow our guidelines.</p>
        <div className="header" style={{textAlign: "center"}}>
        <br/>
        <h2 className="title"> Tactic: {props.title}</h2>
      <p>{props.text}</p>

     <ul style={{listStylePosition: "inside", width: "60%", margin: "auto", textAlign: "left"}}>
        <li>{props.list}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
        <li>{props.list5}</li>
        <li>{props.list6}</li>
        <li>{props.list7}</li>
     </ul>
        
   

       <br/> 
      
    
        </div>
      <hr style={{height: "2px", backgroundColor: "black"}}></hr>
       <br/>
       <p style={{fontWeight: "bold", textAlign:"center"}}>Do you have an experience where you felt this tactic was used? Please share your story below.</p>

       <Blog/>
       {/*<Reply/>*/}
        </div>
    
    </>
  )
}

export default ForumData;
