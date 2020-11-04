import React from 'react'
import classes from './Post.module.css'

const Post = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.Post}>
                <img className={classes.Post__img} src="http://cdn.onlinewebfonts.com/svg/img_167183.png" alt="post_img"/>
                <span className={classes.Post__text} >{props.text}</span>
            </div>
            <span>like</span>
        </div>
    )
}

export default Post