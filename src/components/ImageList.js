import "./imageList.css";
import React from 'react'
import SinglePic from './SinglePic'


function Imagelist({images}) {
  const renderedImage = images.map((image)=>{
    return  <SinglePic key={image.id} image={image} />
    });
  


  return (
    <div className="image-list" >
      <div >{renderedImage}</div>
    </div>
  )
}

export default Imagelist