import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {NewPostReduxForm} from "./PostReduxForm/PostReduxForm";


type PropsType = {
    onChange: (data: any) => void
    posts: Array<{text: string}>
}

const MyPosts: React.FC<PropsType> = props => {
    return (
        <div className={classes.MyPost}>
            <h1>My posts</h1>

            <NewPostReduxForm onSubmit={props.onChange}/>

            {
                props.posts.map( (post, i) => {
                    return <Post key={i} text={post.text}/>
                })
            }
        </div>
    )
}
export default MyPosts
