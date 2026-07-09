import React,{ useEffect,useState}from "react";
const User =()=>{
    const [users, setUsers]=useState([]);
    const getUsers =async()=>{
        try{
            const response = await fetch("http://localhost:8000/api/user");
            const data=await response.json();
            console.log(data);
            setUsers(data.data);
        }catch (error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getUsers(); 
    },[]);
    return(
        <div>
            <h2>User List</h2>

            {users.map((user)=>(
                <div key={user._id}>
                <h3>{user.userName}</h3>
                <p>{user.email}</p>
                <p>{user.password}</p>
                </div>  
            ))}
        </div>
    );  
};
export default User;