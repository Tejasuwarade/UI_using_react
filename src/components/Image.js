import React from 'react';

export default function Image({image}){

    return(
        <div>
         <img class="dp" src={image} height={100} width={100}/>
        </div>
    )
}