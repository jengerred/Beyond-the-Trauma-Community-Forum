// Import the necessary React libraries
import React, { useState } from 'react';
import TopicsData from './topicsData';
import Wheel from '../images/Wheel.png';

// Create a new React component to represent the forum
const Topics = () => {
  // Create state to store the forum posts
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState('');

  // Add a new post to the forum
  const addPost = (text) => {
    setPosts([...posts, { text }]);
  };
  const handleButtonClick = () => {
    // Display the input text in the forum.
   addPost();
  };
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  // Render the forum posts
  return (
 <>

 <div className="top-bar">
    <h1 style={{fontWeight: "400"}}>Tactics of Abuse</h1>
        <h1 >Discussion Topics</h1>
        </div>

 <div className="main">
  <h3 style={{textAlign: "left"}}>Join the conversation by clicking on one of the discussion topics below.</h3>

<column style={{   
  height: "fit-content",
   margin: "auto",
   textAlign: "center"}}>
 <ol>

  {/** 
 <li className="row">
        <a href='/Tactic1'>
        <h4 className="title"> Using Coercion & Threats
</h4>
      <div className="bottom">
            <p className="timestamp"> {formattedDate}</p>
            <p className="comment-count"> 4 comments</p>
        </div>
        </a>
    </li>
    */}

    <TopicsData
    link='/Tactic1'
    title="Using Coercion & Threats"
    />
    <TopicsData
    link='/Tactic2'
    title="Intimidation"
    />
    <TopicsData
    link='/Tactic3'
    title="Emotional Abuse"
    />
        <TopicsData
    link='/Tactic4'
    title="Isolation"
    />
    <TopicsData
 link='/Tactic5'
    title="Minimizing, Denying, & Blaming"
    />
        <TopicsData
 link='/Tactic6'
    title="Using Children"
    />
        <TopicsData
    link='/Tactic7'
    title="Economic Abuse"
    />
    <TopicsData
 link='/Tactic8'
    title="Male Privilege"

    />
 </ol>
 </column>

        <column>
      
        <img src={Wheel} style={{border: "2px solid black", width: "45%", marginLeft: "50%", marginTop: "-60rem", marginBottom: "17rem"
    }}/>

        </column>


</div>


 </>
  );
};

// Export the Forum component so it can be used in other components
export default Topics;
