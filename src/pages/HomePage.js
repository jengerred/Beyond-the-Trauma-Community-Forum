import React from 'react';
import TopicsPage from './TopicsPage';
import ResourcesPage from './ResourcesPage';
import HeroImage from '../images/hero_image.jpg';

function HomePage() {
  return (
    <>

    <h1 style={{margin: "1rem", textAlign: "center"}}>Beyond The Trauma Community Forum: Grand Rapids, Michigan</h1>
    <h4 style={{margin: "1rem", textAlign: "center"}}> A platform for women in the Grand Rapids area who are domestic violence survivors to find peer support, information, and resources.</h4>
    
    <div className="home-container" >

        <div className="home-image">
          <img src={HeroImage} className="hero-image" />
        </div>

      <p style={{margin: "1rem"}}>
        Domestic violence is a complex issue that affects millions of women worldwide. Many women ask for help but cannot get the resources they need due to social barriers or limited resources. This disucssion forum will provide a safe environment for users to share stories, access resources, support each other, and, most of all, begin to <b>heal</b>.
        Your safety is our top priority, which is why our registration process is <b>secure</b> and <b>anonymous</b>. We have implemented a passwordless system using passkeys that require a fingerprint, face scan, or a personal identification number (PIN). To get started, create a username and setup a passkey.
      </p>
    
     
      <style jsx>
      {`
      .home-container{
        display: grid;
        grid-template-columns: min-content 1fr;
        height: fit-content;
        margin: 1rem;
        margin-bottom: 2rem;
      }

      .hero-image{
        height: 15rem;
      }

      @media screen and (max-width: 1200px) {
        .hero-image {
          display: grid;
          margin: auto;
        }
      }
        `}
      

      </style>
    </div>


    <TopicsPage/>
    <ResourcesPage/>
  </>
  )
}

export default HomePage
