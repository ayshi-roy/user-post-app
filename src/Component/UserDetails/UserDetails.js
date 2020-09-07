import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';



const UserDetails = () => {
    
    const {userId} = useParams();    

    const [comment, setComment] = useState([]);
    useEffect(() => {
      const url=`https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setComment(data))
    }, []);

    const [postDetail, setDetail] = useState({});
    useEffect(() => {
      const url=`https://jsonplaceholder.typicode.com/posts/${userId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setDetail(data))
    }, []);

    


    return (
        <div>
            <div style={{marginLeft:'480px' }}>
                <h2>From Post Id = {userId} </h2>
                <h4>Tittle : {postDetail.title}</h4>
                <h4>Body :{postDetail.body}</h4>                
            </div>           
            
            <div>            
            {
                comment.map(allCmt => <Comment key={allCmt.id} seeCmt ={allCmt}></Comment>)
            }
            </div>            
        </div>
        
    );
};

export default UserDetails;