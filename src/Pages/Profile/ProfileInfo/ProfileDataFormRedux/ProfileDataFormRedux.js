import React from "react";
import classes from "./ProfileDataFormRedux.module.css";
import {createField, Input, TextArea} from "../../../../components/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {requiredField} from "../../../../utils/validate/validate";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
             <button type="submit">save</button>

            {
                props.error
                    ?   <div style={{color: 'red', marginTop: '20px', fontSize: '24px'}}>
                        {props.error}
                    </div>
                    : null
            }

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
                        createField('Looking For a job?', 'lookingForAJob', [], Input, {type: 'checkbox'})
                    }
                </div>
                <div>
                    <p>Job Description:</p>
                    {
                        createField('job Description', 'lookingForAJobDescription', [requiredField], TextArea)
                    }
                </div>
                <div>
                    <p>About Me:</p>
                    {
                        createField('AboutMe', 'aboutMe', [requiredField], TextArea)
                    }
                </div>
            </div>

            <div>
                Contacts:
                {
                    Object.keys(props.profileInfo.contacts).map( (item, index) => {
                        return <div key={index}>
                            {createField(item, 'contacts.' + item, [], Input)}
                        </div>
                    })
                }
            </div>
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm({
    form: 'profileData',
})(ProfileDataForm)

