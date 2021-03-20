import React from 'react'
import classes from './News.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News: React.FC = () => {
    return (
        <div className={classes.News}>
            <h1>News</h1>
        </div>
    )
}

export default withAuthRedirect(News)
