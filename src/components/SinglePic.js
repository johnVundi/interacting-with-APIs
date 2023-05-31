import React from 'react'

function SinglePic({image}) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  )
}

export default SinglePic