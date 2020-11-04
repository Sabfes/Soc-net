import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = props => {

    const newPostText = React.createRef()

    const onChange = () => {
        props.onTextAreaChange(newPostText.current.value)
    }
    return (
        <div className={classes.MyPost}>
            <h1>My posts</h1>

            <div>
                <textarea onChange={onChange} ref={newPostText} className={classes.MyPost__textarea} value={props.textAreaValue} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={props.addNewPost}>Add post</button>
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