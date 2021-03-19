import React from "react";
import classes from "./ProfileDataFormRedux.module.css";
import {Input, TextArea} from "../../../../components/FormControls/FormControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../../utils/validate/validate";
import Button from "../../../../components/Button/Button";
import {ProfileDataType, ContactsType} from '../../../../types/types'

type ProfileDataFormValue = {
    aboutMe: String,
    lookingForAJob: Boolean,
    lookingForAJobDescription: String,
    fullName: String,
    contacts: ContactsType,
    handleSubmit: () => void,
    initialValues: any,
}
type PropsTypes = {
    profileInfo: ProfileDataType,
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormValue, PropsTypes> & PropsTypes> = ({
    handleSubmit,
    error,
    profileInfo
     }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Button
                type="submit"
                value="save"
            />

            {
                error
                    ? <div style={{color: 'red', marginTop: '20px', fontSize: '24px'}}>
                        {error}
                    </div>
                    : null
            }

            <div className={classes.MainInfo}>
                <div>
                    <p>Full Name:</p>
                    <Field component={Input} validate={[requiredField]} name={'fullName'} placeholder='FullName'/>
                </div>

                <div className={classes.MainInfo__job}>
                    <p>Looking For a job?</p>
                    <Field component={Input} validate={[]} name={'lookingForAJob'} placeholder='Looking For a job?' type={'checkbox'}/>
                </div>
                <div>
                    <p>Job Description:</p>
                    <Field component={TextArea} validate={[requiredField]} name={'lookingForAJobDescription'} placeholder='job Description'/>
                </div>
                <div>
                    <p>About Me:</p>
                    <Field component={TextArea} validate={[requiredField]} name={'aboutMe'} placeholder='AboutMe'/>
                </div>
            </div>

            <div>
                Contacts:
                {
                    Object.keys(profileInfo.contacts).map((item, index) => {
                        return <div key={index}>
                            <Field component={Input} validate={[]} name={'contacts.' + item} placeholder={item}/>
                        </div>
                    })
                }
            </div>
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm<ProfileDataFormValue,PropsTypes>({
    form: 'profileData',
})(ProfileDataForm)

