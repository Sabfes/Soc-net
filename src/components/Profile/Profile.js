import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <main className={classes.Profile}>
            <img className={classes.Profile__image} src="https://i.pinimg.com/originals/08/5d/ea/085dead0a9eeaeafef7e9a14708beb75.jpg" alt=""/>
            <h1>main content</h1>

            <div>
                <img width={'60'} height={'60'} src="https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png" alt=""/>
                <span>desc</span>
            </div>

            <div>
                My posts

                <div>new post</div>

                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </main>
    )
}

export default Profile