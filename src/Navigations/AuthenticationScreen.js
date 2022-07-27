import { Login, Signup } from '../';
import React from 'react'

// Navigation Routes for Login and Signup Screen
export default function(Stack) {
    return (
        <>
            <Stack.Screen name = "Login Screen" style={{alignSelf: 'center'}} component={Login} />
            <Stack.Screen name = "Logout" style={{alignSelf: 'center'}} component={Signup} />
        </>    
    )
}