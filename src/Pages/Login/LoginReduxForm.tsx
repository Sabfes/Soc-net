import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../components/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validate/validate";

const maxLength = maxLengthCreator(30)

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    handleSubmit: () => void
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({error, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field component={Input} validate={[maxLength, requiredField]} name={'email'} placeholder='login'/>
            <Field component={Input} validate={[maxLength, requiredField]} name={'password'} placeholder='password'/>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>
                <span>remember me</span>
            </div>
            <button>login</button>
            {
                error
                    ?   <div style={{color: 'red', marginTop: '20px', fontSize: '24px'}}>
                            {error}
                        </div>
                    : null
            }
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)
