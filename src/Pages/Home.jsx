import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catagory from '../Components/Category'
function Home() {
  const [uploadVideoResponse,setuploadVideoResponse] = useState({})
  const[dropResponse,setDropResponse]=useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="add-videos">
        <Add setuploadVideoResponse={setuploadVideoResponse}/>
      </div>
      <Link to={'/history'} style={{textDecoration:'none',color:'white',fontSize:'25px'}}>Watch History <i class="fa-solid fa-clock-rotate-left"></i></Link>
    </div>
    <div className="container-fluid w-100 mt-5 mb-5 row">
      <div className="all-videos col-lg-9">
        <h2>All Uploaded Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
      </div>
      <div className="catagory col-lg-3">
        <Catagory dropResponse={dropResponse}/>
      </div>
    </div>
    </>
  )
}

export default Home