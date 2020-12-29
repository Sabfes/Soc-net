import React, {useEffect, useState} from 'react'
import classes from './ProfileStatus.module.css'

export const ProfileStatus = props => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.desc || 'desc')

    useEffect(()=>{
        setStatus(props.desc)
    }, [props.desc])

    const updateProfileStatus = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    return (
        <div className={classes.ProfileStatus}>
            {
                editMode
                    ?   <input
                        onBlur={updateProfileStatus}
                        autoFocus={true}
                        onChange={(e) => {setStatus(e.target.value)}}
                        value={status}
                        type='text'
                    />
                    :   <span onDoubleClick={ () => {setEditMode(true)} }>{status}</span>
            }
        </div>
    )
}



