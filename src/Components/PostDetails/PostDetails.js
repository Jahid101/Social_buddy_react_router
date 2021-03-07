import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

    return (
        <div>
            <h3>This is post details: {id}</h3>
            <p>User Posted: {post.id}</p>
            <p>User Title : {post.title}</p>
            <p>{post.body}</p>
            <h4>Number of Comments: {comments.length}</h4>
            {
                comments.map(comment => <Comment comment = {comment} ></Comment>)
            }
        </div>
    );
};

export default PostDetails;
