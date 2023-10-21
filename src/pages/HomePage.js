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
        Domestic violence is a complex issue that affects millions of women worldwide. Many women ask for help but cannot get the resources they need due to social barriers or limited resources. This disucssion forum will provide a safe environment for users to share stories, access resources, support each other, and, most of all, begin to <b>heal</b>.
      </p>
    </div>

    <TopicsPage/>
    <ResourcesPage/>
  </>
  )
}

export default HomePage
