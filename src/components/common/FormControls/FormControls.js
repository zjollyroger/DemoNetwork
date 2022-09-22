import React from "react";
import style from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    return(
        <div className={style.formControl}>
            {meta.touched && meta.error && <div className={style.errorText}>{meta.error}</div>}
            <div>
                <textarea {...input} {...props} className={meta.touched && meta.error ? style.fieldArea : ''}>></textarea>

            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={style.formControl}>
            {meta.touched && meta.error &&
                <div className={style.errorText}>{meta.error}</div>
            }
            <div>
                <input {...input} {...props} className={meta.touched && meta.error ? style.fieldArea : ''}/>
            </div>
        </div>
    )
}