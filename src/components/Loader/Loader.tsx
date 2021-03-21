import React from 'react'
import classes from './Loader.module.css'

const Loader = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader