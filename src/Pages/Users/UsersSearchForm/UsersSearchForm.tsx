import React from 'react'
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../../redux/reducers/UsersReducer";

type PropsTypes = {
    onFilterChanged: (filter: FilterType) => void,
}

const UsersSearchForm: React.FC<PropsTypes> = (props) => {
    const onSubmit = (values: FilterType, {setSubmitting}: {setSubmitting :(isSubmitting: boolean) => void}) => {
        props.onFilterChanged(values)
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{term: '', friend: null}}
            validate={ (values) => {
                const errors = {}
                return errors;
            }}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default UsersSearchForm
