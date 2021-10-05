/**
 * @description This is a User Module, Here we are showing all the user Records.
 * when use double click on one of the card 1 modal will pop up and user need to Update the details.
 * @author Ashutosh Sarangi
 */


import React, { useEffect, Suspense, useState } from "react";
import FallBack from "../Components/fallback";
import "./user.css";
import {useDispatch, useSelector} from 'react-redux';
import {setUser, updateUser} from '../Store/action';
import UserModal from "../Components/userModal";

const UserCard = React.lazy(()=> import("../Components/userCard"));

function User(props){

    const userList = useSelector((state)=> state.userList);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        name:'',
        email:'',
        phone:'',
        website:'',
        address:{
            city:''
        },
        company:{
            name:''
        }
    });

    useEffect(()=>{
        dispatch(setUser());
    }, []);

    const handleUserClick = (user)=>{
        setModal(true);
        setSelectedUser(user);
    }

    const closeModal = ()=>{
        setModal(false);
    }

    const handleInput =(e)=>{
        switch(e.target.name){
            case 'city':
                setSelectedUser(
                    {...selectedUser, 
                        address:{
                            ...selectedUser.address,
                            city: e.target.value
                        }    
                    }
                );
            break;
            case 'company_name':
                setSelectedUser(
                    {...selectedUser, 
                        company:{
                            ...selectedUser.company,
                            name: e.target.value
                        }    
                    }
                );
            break;
            default :
                setSelectedUser(
                    {...selectedUser, 
                        [e.target.name] :  e.target.value
                    }
                );
        }
    }

    const updateUserForm = (e)=>{
        e.preventDefault();
        dispatch(updateUser(selectedUser))
        setModal(false);
    }

    return (
        <>
        <UserModal modal={modal} 
        closeModal={closeModal} 
        selectedUser={selectedUser} 
        handleInput={handleInput} updateUserForm={updateUserForm}/>
        <div className={`cardContainer ${modal ? 'backgroundModal': ''}`}>
        <Suspense fallback={<FallBack/>}>
            {
                userList.map((user)=>{
                    return (
                        <UserCard key={user.id} user={user} onDoubleClick={()=>handleUserClick(user)}/>
                    );
                })
            }
        </Suspense>
        </div>
        </>
        
    );
}

export default User;