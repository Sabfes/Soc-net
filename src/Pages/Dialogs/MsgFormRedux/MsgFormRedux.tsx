import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../Dialogs.module.css";
import {TextArea} from "../../../components/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validate/validate";

const maxLength = maxLengthCreator(50)

type AddNewMsgValuesType = {
    handleSubmit: () => void
}

const addMsgForm: React.FC<InjectedFormProps<AddNewMsgValuesType>> = ({handleSubmit, }) => {
    return (
        <form onSubmit={handleSubmit}>
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

export const AddMsgFormRedux = reduxForm<AddNewMsgValuesType>({
    form: 'dialogAddMessageForm'
})(addMsgForm)
