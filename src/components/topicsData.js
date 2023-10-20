import React from 'react'


function TopicsData(props) {



  const date = new Date();
const formattedDate = date.toLocaleDateString();

  return (
    <>


   

    <li className="row">
        <a href={props.link}>
        <h4 className="title"> {props.title}</h4>
        <div className="bottom">
        <p className="timestamp"> {formattedDate}</p>
       {/*} <p className="comment-count">${props.comments.length} </p>*/}
        </div>
        </a>
    </li>



    </>
  )
}

export default TopicsData;