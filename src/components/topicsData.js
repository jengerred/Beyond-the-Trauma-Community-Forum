import React from 'react'


function TopicsData(props) {



  const date = new Date();
const formattedDate = date.toLocaleDateString();

  return (
    <>
     <div style={{display: "flex"}}>
  <column style={{ border: "2px solid black", marginBottom: "1rem", padding: "1rem", width: "30%"}}>
    <li className="row">
        <a href={props.link}>
        <h4 className="title"> {props.title}</h4>
        <div className="bottom">
        <p className="timestamp"> {formattedDate}</p>
       {/*} <p className="comment-count">${props.comments.length} </p>*/}
        </div>
        </a>
   
    </li>
    </column>
    </div>
    </>
  )
}

export default TopicsData;