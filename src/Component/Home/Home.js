import React, { useState, useEffect } from 'react';
import User from '../User/User';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>{            
            setPost(data);
        })    
    },[])
    return (    
         <div>
             <div>
                {
                    post.map( allPost =><User key={allPost.id} seePost={allPost}></User>)
                }
            </div>         
           
         </div>
        
    );
};

export default Home;