import React from 'react'
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../../redux/reducers/UsersReducer";

type PropsTypes = {
    onFilterChanged: (filter: FilterType) => void,
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

const UsersSearchForm: React.FC<PropsTypes> = (props) => {
    const onSubmit = (values: FormType, {setSubmitting}: {setSubmitting :(isSubmitting: boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{term: '', friend: 'null'}}
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
