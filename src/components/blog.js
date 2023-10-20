import React, { useState } from 'react';

const Blogger = ({ posts }) => {
  return <div>{posts && posts.map((post) => <li>{post}</li>)}</div>;
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState();
  const [username, setUsername] = useState();
  const [comment, setComment] = useState();

  const addPost = () => {
    setPosts([...posts, comment, username, formattedDate, data, data]);
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
         <div className="comments">
            <div className="comment">
       <div className="top-comment">


       </div>
       <div className="comment-content">
    
       </div>
        </div>
        </div>
      <div>
      <p>Please enter your comments here:</p>

        <textarea
        required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br/>
<br/>
           <label style={{marginRight: ".5rem"}}>Username:</label>
<input
              id="username"
              style={{padding: ".5rem"}}
              placeholder="Enter a Username"
              type="text"
              value={posts.username}
              onChange={(e) => setUsername(e.target.value)}
/>

       <div className="bottom">
            <p className="timestamp"> {formattedDate}</p>
        </div>

        <input
   id="data"
   style={{display: "none"}}
              placeholder="Enter a category"
              type="text"
              value={posts.data}
              onChange={(e) => setData(e.target.value)}
/>
        <button onClick={addPost}>Add Comment</button>
      </div>
      <hr style={{height: "2px", backgroundColor: "black"}}></hr>

      <div>
        <Blogger  posts={posts}/>
      </div>

      <style jsx>
        {`
        .timestamp {
            margin-bottom: 1rem;
        }
        `}
        </style>
 </div>
  );
};
export default Blog;