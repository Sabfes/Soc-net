import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {
    return (
        <div className={classes.MyPost}>
            <h1>My posts</h1>

            <div>
                <textarea className={classes.MyPost__textarea} name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>

            {
                props.posts.map( (post, i) => {
                    return <Post key={i} text={`Post ${i+1}`}/>
                })
            }
        </div>
    )
}

export default MyPosts