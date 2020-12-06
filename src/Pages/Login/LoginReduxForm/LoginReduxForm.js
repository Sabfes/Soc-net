import {Field, reduxForm} from "redux-form";
import {Input} from "../../../components/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validate/validate";

const maxLength = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[maxLength, requiredField]} name={'email'} placeholder='login'/>
            <Field component={Input} validate={[maxLength, requiredField]} name={'password'} placeholder='password'/>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>
                <span>remember me</span>
            </div>
            <button>login</button>
            {
                props.error
                    ?   <div style={{color: 'red', marginTop: '20px', fontSize: '24px'}}>
                            {props.error}
                        </div>
                    : null
            }
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)