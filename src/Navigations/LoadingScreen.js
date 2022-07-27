import { HomeScreen, User } from '../';
import React from 'react'


export default function(Stack) {
    return (
        <>
            <Stack.Screen name = "HomeScreen" component={HomeScreen} />
            <Stack.Screen name = "User" component={User} />
        </>    
    )
}