import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import '../App.css'

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div class='profile-container'>
                <h2>Please login</h2>
            </div>
        )
    }
    return (
        <div class='profile-container'>
            <h2> Welcome {user.username}</h2>
        </div>
    )
}

export default Profile