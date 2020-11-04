import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {
    return (
        <div className={classes.MyPost}>
            <h1>My posts</h1>

            <div>
                <textarea
                    onChange={(e) => props.onChange(e.target.value)}
                    className={classes.MyPost__textarea}
                    value={props.textAreaValue}
                    cols="30"
                    rows="10"
                >
                </textarea>
                <button onClick={props.onClick}>Add post</button>
            </div>

            {
                props.posts.map( (post, i) => {
                    return <Post key={i} text={post.text}/>
                })
            }
        </div>
    )
}

export default MyPosts