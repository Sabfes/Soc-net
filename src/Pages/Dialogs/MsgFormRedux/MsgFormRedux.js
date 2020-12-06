import {Field, reduxForm} from "redux-form";
import classes from "../Dialogs.module.css";
import {TextArea} from "../../../components/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validate/validate";

const maxLength = maxLengthCreator(50)

const addMsgForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                name={'newMsg'}
                placeholder={'text'}
                validate={[requiredField, maxLength]}
                className={classes.Dialogs__textarea}
            >
            </Field>
            <button>Add message</button>
        </form>
    )
}

export const AddMsgFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(addMsgForm)