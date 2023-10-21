import React from 'react';
import TopicsPage from './TopicsPage';
import ResourcesPage from './ResourcesPage';

function HomePage() {
  return (
    <>
    <h3 style={{margin: "1rem", textAlign: "center"}}>Beyond The Trauma Community Forum</h3>
    <h5 style={{margin: "1rem", textAlign: "center"}}> A platform for women who are domestic violence survivors to find peer support, information, and resources.</h5>
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