import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login/Login'
import Logout from '../Screens/Logout/Logout'
export default function Navigations(props) {
  const user = useSelector((state) => state.user.userReducer.user)
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user?.loggedIn ?
          <Stack.Screen name="Logout Screen" component={Logout} />
          :
          <Stack.Screen name="Login Screen" component={Login} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
