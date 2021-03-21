import React from 'react'
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../../redux/reducers/UsersReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type PropsTypes = {
    onFilterChanged: (filter: FilterType) => void,
}

type FriendFormType = 'true' | 'false' | 'null';
type FormType = {
    term: string
    friend: FriendFormType
}

const UsersSearchForm: React.FC<PropsTypes> = (props) => {
    const filter = useSelector((state: AppStateType) => state.usersPage.filter)

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
            enableReinitialize={true}
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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
