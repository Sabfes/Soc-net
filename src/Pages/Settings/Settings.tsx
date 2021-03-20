import React from 'react'
import classes from './Settings.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings: React.FC = () => {
    return (
        <div className={classes.Settings}>
            <h1>Settings</h1>
        </div>
    )
}

export default withAuthRedirect(Settings)
