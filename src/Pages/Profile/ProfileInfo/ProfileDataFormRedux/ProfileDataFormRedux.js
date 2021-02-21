import React from "react";
import classes from "./ProfileDataFormRedux.module.css";
// import Contact from "../Contacts/Contact";
import {createField, Input, TextArea} from "../../../../components/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {requiredField} from "../../../../utils/validate/validate";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
             <div className={classes.MainInfo}>
                 <div>
                     <p>Full Name:</p>
                     {
                        createField('FullName', 'fullName', [requiredField], Input,)
                    }
                </div>

                <div className={classes.MainInfo__job}>
                    <p>Looking For a job?</p>
                    {
                        createField('Looking For a job?', 'job', [], Input, {type: 'checkbox'})
                    }
                </div>
                <div>
                    <p>Job Description:</p>
                    {
                        createField('job Description', 'job-description', [requiredField], TextArea)
                    }
                </div>
                <div>
                    <p>About Me:</p>
                    {
                        createField('AboutMe', 'aboutMe', [requiredField], TextArea)
                    }
                </div>
            </div>

            <button>save</button>
            {/*<div>*/}
            {/*    Contacts:*/}
            {/*    {*/}
            {/*        Object.keys(profileInfo.contacts).map( item => {*/}
            {/*            return <Contact key={item} title={item} value={profileInfo.contacts[item]}/>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm({
    form: 'profileData',
})(ProfileDataForm)

