import React ,{useState} from 'react';

export default function Username ({username}) {

    // const[user,setUser]=useState(username);

    // function change(){

    //     let b=document.getElementById('ChangeUnInput').innerHTML;
    //     setUser(b);

    // }


    return(
        <>
         <div id="username"> Username: {username}</div>
          <div><button > Edit</button>
          
          {/* <div id="ChangeUnInput">
              <input type="text" > </input> */}
          </div>
        </>)
}
