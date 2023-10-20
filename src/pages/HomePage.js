import React from 'react';
import TopicsPage from './TopicsPage';
import ResourcesPage from './ResourcesPage';

function HomePage() {
  return (
    <>
    <div className="top-bar">
    <h1>Beyond the Trauma</h1>
    </div>
    <div style={{height: "10rem"}}>
      <p>
        Description of what the project is and why 
      </p>
    </div>
    <TopicsPage/>
    <ResourcesPage/>
  </>
  )
}

export default HomePage