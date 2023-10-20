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
        <p style={{textAlign: "center",  border: "2px solid black", padding: "1rem", background: "white"}}>Sharing your story and Responding to others comments can be very helpful to the healing process.</p>
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
       <p style={{fontWeight: "bold"}}>Can you think of a situation or a time that you feel this tactic was used? Please Comment below.</p>
    
        </div>
      <hr style={{height: "2px", backgroundColor: "black"}}></hr>
       <br/>


       <Blog/>
       <Reply/>
        </div>
    
    </>
  )
}

export default ForumData;
