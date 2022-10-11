import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Card, Button, Container, Row } from 'react-bootstrap';
import './Blog.css';
function Post() {

    const [posts, setPost] = useState();
    useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/users/1/posts")
            .then((result) => setPost(result.data));
    }, []);
 
    return (
        <>
            {posts?.map((post) => {
                return (
                    <>
                        <div className="card">
                            <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt="Avatar" style={{ width: '100%' }}></img>
                            <div className="container">
                                <h4><b>{post.title.slice(1, 10)}</b></h4>
                                <p style={{ textAlign:'justify' }}>{post.body.slice(1,300)}</p>
                                <button className='post-button'>Read More</button>
                            </div>
                        </div>
                    </>
                 );
            })}
        </>
    )
}

export default Post


