import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Post from './Post';
function BlogPost() {
    return (
        <div>
            <div className='flex-container'>
                    <Post/>
                    <Post/>
                    <Post/>
                     <Post/>
            </div>
        </div>

    )
}

export default BlogPost