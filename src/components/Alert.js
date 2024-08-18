import React from 'react';

export const Alert = (props)=>{
    return(
        <div className={`alert alert-${props.color} alert-dismissible fade show`} role="alert">
             {props.title}
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;