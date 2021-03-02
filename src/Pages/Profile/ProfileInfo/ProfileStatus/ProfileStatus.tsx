import React, {useEffect, useState} from 'react'
import classes from './ProfileStatus.module.css'

type PropsTypes = {
    updateProfileStatus: (status: string) => void
    desc: string
    isOwner: boolean
}

export const ProfileStatus: React.FC<PropsTypes> = ({desc, updateProfileStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(desc || 'desc')

    useEffect(()=>{
        setStatus(desc)
    }, [desc])

    const onChangeProfileStatus = () => {
        setEditMode(false)
        updateProfileStatus(status)
    }
    return (
        <div className={classes.ProfileStatus}>
            Status:
            {
                editMode
                    ?   <input
                        onBlur={onChangeProfileStatus}
                        autoFocus={true}
                        onChange={(e) => {setStatus(e.target.value)}}
                        value={status}
                        type='text'
                    />
                    :   <span className={classes.ProfileStatus_status} onDoubleClick={ () => {
                            if (isOwner) {
                                setEditMode(true)
                            }
                        }}>
                            {status}
                        </span>
            }
        </div>
    )
}



