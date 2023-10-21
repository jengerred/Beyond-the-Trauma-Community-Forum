import React from 'react'
import AddResource from '../components/resource';
function ResourcesPage() {
  return (
    <>
    <div className="top-bar">
  
            <h1 >Information and Resources</h1>

        </div>

    <div className="container">
       
       
        <div className="content">
            <h2>Technology Safety & Privacy Toolkit for Survivors</h2>
            <p>
                Resources from the Safety Net Project for survivors on how to be safe using technology. 
                <br/>
                <a href="https://www.techsafety.org/resources-survivors">Technology Safety & Privacy Toolkit</a>
            </p>
            <h2>Michigan Coalition</h2>
            <h3>Michigan Coalition to End Domestic and Sexual Violence</h3>
            <p>
                Address
                <br/>
                3893 Okemos Rd, Okemos, MI 48864
                <br/><br/>
                Website
                <br/>
                <a href="https://mcedsv.org/">Michigan Coalition to End Domestic and Sexual Violence</a>
                <br/><br/>
                Phone: (517) 347-7000 
                <br/>
                Fax: (517) 347-1377
                <br/>
                TTY: (517) 381-8470
            </p>
            <h2>Assistance Providers</h2>
            <h3>YWCA West Central Michigan</h3>
            <p>
                Address
                <br/>
                25 Sheldon Blvd SE, Grand Rapids, MI 49503
                <br/><br/>
                Website
                <br/>
                <a href="https://www.ywcawcmi.org/welcome/">YWCA West Central Michigan</a>
                <br/><br/>
                Phone: (616) 451-2744
            </p>
            <h3>Safe Haven Ministries</h3>
            <p>
                Address
                <br/>
                2627 Birchcrest Dr SE, Grand Rapids, MI 49506
                <br/><br/>
                Website
                <br/>
                <a href="https://safehavenministries.org/">Safe Haven Ministries</a>
                <br/><br/>
               Phone: (616) 452-6664
            </p>
            <h2>Michigan Domestic Violence Hotline</h2>
            <p>
                Phone: 1-866-864-2338
                <br/>
                Text: 1-877-861-0222
                <br/>
                TTY: 1-517-898-5533
            </p>
            <h2>National Domestic Violence Hotline</h2>
            <p>
                Website
                <br/>
                <a href="https://www.thehotline.org/">National Domestic Violence Hotline</a>
                <br/><br/>
                Phone: 800-799-SAFE (7233)
                <br/>
                TTY: 800-787-3224 
            </p>
           
        </div>
       
    </div>

    <ul>
        <li>
          <h4>Grand Rapids Michigan </h4>
        </li>
        <ul style={{marginTop: ".5rem", marginBottom: ".5rem"}}>
            <li style={{fontWeight: "600"}}>
            YWCA
                </li>
            <p>The YWCA has many programs....</p>
            <li style={{fontWeight: "600"}}>Food Pantries</li>
            <ul>
                <li style={{fontWeight: "450"}}>Feeding America Mobile Food trucks
                   <p style={{fontWeight: "300"}}>See where and when their next truck will be.</p> 
                </li>
                <li style={{fontWeight: "450"}}>Matthews House 
                   <p style={{fontWeight: "300"}}>Located on 7th street.</p>
                </li>
                <li style={{fontWeight: "450"}}>The Other Way
                    <p style={{fontWeight: "300"}}>For WestSide Residents</p>
                </li>
            </ul>
            <li style={{fontWeight: "600"}}>Housing</li>
            <ul>
                <li style={{fontWeight: "450"}}>Grand Rapids Housing Commission</li>
                <p style={{fontWeight: "300"}}>Some description here</p>
                <li style={{fontWeight: "450"}}>YWCA Emergency Shelter</li>
                <p style={{fontWeight: "300"}}>Some description here</p>
                <li style={{fontWeight: "450"}}>United Way Emergency Shelter</li>
                <p style={{fontWeight: "300"}}>Some description here</p>
            </ul>
        </ul>
        <li>
            <h4>Kent County Michigan</h4>
      
        </li>
        <ul style={{marginTop: ".5rem", marginBottom: ".5rem"}}>
            <li  style={{fontWeight: "600"}}>
                <a href="https://www.michigan.gov/mdhhs/inside-mdhhs/county-offices/urban-counties/kent-county" target="blank">
                DHHS
                </a>
                </li>
            <p>Some description...</p>
            <li  style={{fontWeight: "600"}}>Michigan Works</li>
            <p>Some description...</p>
            <li style={{fontWeight: "600"}}>Housing / MSHDA</li>
            <p>Some description...</p>
        </ul>
    </ul>
    <div style={{marginLeft: "1rem", marginBottom: "1rem"}}>
    <AddResource/>
    </div>
  </>
  )
}

export default ResourcesPage
