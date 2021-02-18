import {maxLengthCreator, requiredField} from "../../../../utils/validate/validate";
import {Field, reduxForm} from "redux-form";
import classes from "../MyPosts.module.css";
import {TextArea} from "../../../../components/FormControls/FormControls";

const maxLength = maxLengthCreator(10)

const newPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
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

export const NewPostReduxForm = reduxForm({
    form: 'ProfileNewPostForm'
})(newPostForm)