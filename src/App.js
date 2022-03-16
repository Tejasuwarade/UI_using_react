import React ,{useState,useEffect} from "react";
import Username from "./components/Username.js";
import Gender from "./components/Gender.js";
import YourName from "./components/YourName.js";
import Location from "./components/Location.js";
import Image from "./components/Image.js";
import Email from "./components/Email.js";
import Add from "./components/Add.js";
import PhoneNum from "./components/PhoneNum.js";
import Dob from "./components/Dob.js";
import './index.css'



export default function App() {

    const [userData,setUser]=useState({});
    const [userGender,setUserGender]=useState('');
    const[name,setName]=useState('');
    const[userName,setUserName]=useState('');
    const[userImage,setUserImage]=useState("");
    const[userLong,setUserLong]=useState('');
    const[userLat,setUserLat]=useState('');
    const[userEmail,setUserEmail]=useState('');
    const[userAdd,setUserAdd]=useState('');
    const[userPhone,setUserPhone]=useState('');
    const[userDob,setUserDob]=useState('');
    const[userAge,setUserAge]=useState('');

    async function setDetails(){

        console.log(userData);
        setUserGender(userData.results[0]['gender']);
        setName(userData.results[0]['name']['title']+" "+userData.results[0]['name']['first']+" "+userData.results[0]['name']['last']);
        setUserName(userData.results[0]['login']['username']);
        setUserImage(userData.results[0]['picture']['large']);
        setUserLong(userData.results[0]['location']['coordinates']['longitude']);
        setUserLat(userData.results[0]['location']['coordinates']['latitude']);
        setUserEmail(userData.results[0]['email']);
        setUserAdd(userData.results[0]['location']['city']+" ,"+userData.results[0]['location']['country']+" ,Postcode:"+userData.results[0]['location']['postcode']+" ,"+userData.results[0]['location']['state']+", "+userData.results[0]['location']['street']['name']+" "+userData.results[0]['location']['street']['number'])
        setUserPhone(userData.results[0]['phone']);
        setUserDob(userData.results[0]['dob']['date']);
        setUserAge(userData.results[0]['dob']['age'])
        console.log(userGender);
        console.log(name);
        console.log(userName);
        console.log(userImage);
        console.log(userLong);
        console.log(userLat);
        console.log(userEmail);
        console.log(userAdd);
    }

    async function Data_extract() {

        let response=await fetch('https://randomuser.me/api/');
         let data = await response.json();
         
        return (data);
    
    } 

    useEffect( ()=>{async function fetchData (){

        let temp=await Data_extract();
        setUser(temp);
    } 
    fetchData();


        // console.log(userData);
        // setUserGender(userData.results[0]);
        // console.log(userGender);
    },[])

    useEffect(setDetails,[userData]);

     
    return(
<div>
    <div id="Image">
        <Image image={userImage}/>
        </div>
           <div className="container">
              
           <div id="name">
            <YourName name={name}/>
            </div>
            
            <div className="components">
                <Username username={userName}/>
            </div>
            <div className="components"><Gender  gender={userGender}/></div>
            <div className="components"><PhoneNum phone={userPhone}/></div>
            <div className="components"><Location userlong={userLong} userlat={userLat}/></div>
            <div className="components"><Email email={userEmail}/></div>
            <div className="components"><Add add={userAdd}/></div>
            <div className="components" ><Dob dob={userDob} age={userAge}/></div>
            
            {/* <Location/> */}
            </div>   

            </div> 
    )
}


