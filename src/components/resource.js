import React, { useState } from 'react';

const Blogger = ({ posts }) => {
  return <div>{posts && posts.map((post) => <li>{post}</li>)}</div>;
};

const AddResource = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState();
  const [ location , setLocation ] = useState("");
  const [ title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription ]= useState("");


  const addPost = () => {
    setPosts([...posts, category, title, location, description, formattedDate, data, data]);
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
     
      <div>
        <h3 style={{marginTop: "5rem"}}>Do you have information or resources to add?</h3>
      <h4> Share it with us!:</h4>
 {/*
 FORM: 

 location 
  Title
  Category
  description

  */}
<textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

<div style={{marginTop: "1rem"}}>

<label>Category:</label>
  <input
   id="category"
              placeholder="Enter a category"
              type="text"
              value={posts.category}
              onChange={(e) => setCategory(e.target.value)}
/>
<label style={{marginLeft: "1rem"}}>Title:</label>
<input
   id="title"
              placeholder="Title"
              type="text"
              value={posts.title}
              onChange={(e) => setTitle(e.target.value)}
/>
<label style={{marginLeft: "1rem"}}>Where is this resource located?:</label>
<input
   id="location"
              placeholder="Enter location"
              type="text"
              value={posts.location}
              onChange={(e) => setLocation(e.target.value)}
/>
<div className="bottom">
            <p className="timestamp"> {formattedDate}</p>
        </div>
    
        <input
   id="cdata"
   style={{display: "none"}}
              placeholder="Enter a category"
              type="text"
              value={posts.data}
              onChange={(e) => setData(e.target.value)}
/>
</div>
      
        <button onClick={addPost}>Add Resource</button>
      </div>

      <div style={{marginTop: "1rem"}}>
        <Blogger posts={posts} />
      </div>
      <style jsx>
        {`
         *{
            box-sizing: border-box;
        }
        .container {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        
        .content {
            display: block; 
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        
        h1 {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        
        .header {
            width: 100%;
            padding: 30px 0;
            text-align: center;
            background: #33cccc;
        }
        
        `}
      </style>
    </div>
  );
};
export default AddResource;
