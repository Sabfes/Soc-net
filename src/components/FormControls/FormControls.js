import React from "react";
import classes from './FormControls.module.css'

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : null)}>
            <textarea  {...props} {...input} />
            {
                hasError
                    ? <span className={classes.errorMessage}>{meta.error}</span>
                    : null
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : null)}>
            <input className={classes.formControl__input} {...props} {...input} />
            {
                hasError
                    ? <span className={classes.errorMessage}>{meta.error}</span>
                    : null
            }
        </div>
    )
}
