import React from "react";

const Field = ({ label, children, htmlfor, error }) => {
    const id = htmlfor || getChildId(children);

    //get child id
    function getChildId(children) {
        const child = React.Children.only(children);
        if ("id" in child?.props) {
            return child.props.id;
        }
    }
    return (
        <div className='form-control'>
            {label && (
                <label
                    className='auth-label'
                    htmlFor={id}>
                    {label}
                </label>
            )}
            {children}
            {!!error && <p className='text-red-500 text-sm'>{error.message}</p>}
        </div>
    );
};

export default Field;

