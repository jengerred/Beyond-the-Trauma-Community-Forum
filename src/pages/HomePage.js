import React from 'react';
import TopicsPage from './TopicsPage';
import ResourcesPage from './ResourcesPage';

function HomePage() {
  return (
    <>
    <h1 style={{margin: "1rem", textAlign: "center"}}>Beyond The Trauma Community Forum</h1>
    <h4 style={{margin: "1rem", textAlign: "center"}}> A platform for women who are domestic violence survivors to find peer support, information, and resources.</h4>
    <div style={{height: "10rem"}}>
      <p style={{margin: "1rem"}}>
        Description of what the project is and why 
      </p>
    </div>

    <TopicsPage/>
    <ResourcesPage/>
  </>
  )
}

export default HomePage