import React from "react";

const BookMark = ({status, ...rest}) => {
return (
    <button {...rest}> <i className={"bi bi-bookmark" + (status ? "-check-fill" : "" )}></i></button> 
)
    
};
export default BookMark;
