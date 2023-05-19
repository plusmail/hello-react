import React from 'react';
import PropTypes from "prop-types";

const MyComponent = ({name, favoriteNumber, email, children})=>{


    return (
        <>
            <div>{name}</div>
            <div>{email}</div>
            <div>{children}</div>
            <div>나가 좋아 하는 숫자{favoriteNumber}</div>
        </>
    );
}

MyComponent.defaultProps ={
    name:"이순신",
    email:"bb@b.co.kr"
}
MyComponent.propTypes ={
    name: PropTypes.string,
    email: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export  default MyComponent;