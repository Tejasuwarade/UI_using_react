import React from 'react';
import moment from 'moment';

export default function Dob({dob,age}){

    return(
        <>
            Date oF Birth : {moment(dob).format("DD MMM YYYY")}  
            <div>Age : {age}</div>
        </>)
}