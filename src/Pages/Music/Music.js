import React from 'react'
import classes from './Music.module.css'
import audioTest from '../../audio/audio-boyka.mp3'
const Music = () => {
    const audioPlayHandler = (e) => {
        console.log(e.target)
    }

    return (
        <div className={classes.Music}>
            <h1>Music</h1>

            <div onClick={audioPlayHandler}>
                <p>Miya Boyko - AUF</p>
                <audio controls>
                    <source src={audioTest} type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    )
}

export default Music