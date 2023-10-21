import React from 'react'


function TopicsData(props) {


  const date = new Date();
const formattedDate = date.toLocaleDateString();

  return (
    <>
     <div className="table">
  <column className="list">
    <li className="row">
        <a href={props.link}>
        <h4 className="title"> {props.title}</h4>
        <div className="bottom">
        {/*}  <p className="timestamp"> {formattedDate}</p>
      <p className="comment-count">${props.comments.length} </p>*/}
        </div>
        </a>
   
    </li>
    </column>

    <style jsx>
        {`
        .list {
            border: 2px solid black;
            margin: 1rem;
            width: 30%;
            min-width: 18rem;
            padding: 1rem;
        }
        .list:hover {
          box-shadow: 5px 10px 8px 10px #888888;
          transform: scale(1.1);
        }
        .table {
          display: flex;
        }
        @media screen and (max-width: 1200px) {
          .table {
            display: grid;
          }
        }
        `}
        </style>
    </div>
    </>
  )
}

export default TopicsData;