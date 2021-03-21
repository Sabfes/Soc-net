import React from 'react'
import {maxLengthCreator, requiredField} from "../../../../utils/validate/validate";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../MyPosts.module.css";
import {TextArea} from "../../../../components/FormControls/FormControls";

const maxLength = maxLengthCreator(10)


type newPostValueType = {
    newPostText: string,
    handleSubmit: () => void,
}

const newPostForm: React.FC<InjectedFormProps<newPostValueType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder={'Post message'}
                className={classes.MyPost__textarea}
                validate={[requiredField, maxLength]}
                component={TextArea}
                name={'newPostText'}
            />
            <button>Add post</button>
        </form>
    )
}

export const NewPostReduxForm = reduxForm<newPostValueType>({
    form: 'ProfileNewPostForm'
})(newPostForm)
