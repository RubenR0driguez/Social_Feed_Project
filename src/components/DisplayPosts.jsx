import React from 'react'

const DisplayPost = (posts) => {

    const displayFeed = posts.map((posts) => 
        
            <li>{posts}</li>
         
        
    )

    return (
        <div>
           <ul>{displayFeed}</ul>
        </div>
    )
}

export default DisplayPost;