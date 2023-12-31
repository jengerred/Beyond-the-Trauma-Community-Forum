import React, { useState } from 'react';

const Blogger = ({ posts }) => {
  return <div>{posts && posts.map((post) => <li>{post}</li>)}</div>;
};

const Reply = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState();

  const addPost = () => {
    setPosts([...posts, data]);
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
     
      <div>
      <p>Reply</p>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
        <button onClick={addPost}>Reply</button>
      </div>
      <div>
        <Blogger posts={posts} />
      </div>
      <div className="comments">
        <div className="comment">
   <div className="top-comment">


   </div>
   <div className="comment-content">

   <p className="user" style={{fontSize: ".8rem", fontWeight: "bold"}}>
    Username
  </p>

   <div className="bottom">
        <p className="timestamp"> {formattedDate}</p>
    </div>

 
   </div>
    </div>
    </div>
    </div>

  );
};
export default Reply;