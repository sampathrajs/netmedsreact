import { useField } from 'formik';
import React from 'react';

const CheckBox = (props) => {

    return (
        <div>
            <label for={props.name} className="form-label">{props.title}</label>
            <div className="checkbox-group">
                {props.options.map(option => {
                    return (
                        <label key={option}>
                            <input
                                className="form-checkbox"
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={props.selectedOptions.indexOf(option) > -1}
                                type="checkbox" /> {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );

}
export const CheckboxInput = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="form-control">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };