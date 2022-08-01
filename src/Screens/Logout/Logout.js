import React from 'react'
import { useDispatch, } from 'react-redux'
import Header from '../../Components/Header'
import Button from '../../Components/Button'
import { logout } from '../../Redux/thunks'
import { StyleSheet, Text, View } from 'react-native'

export default function Logout({ navigation }) {
  const dispatch = useDispatch()
  const onLogoutPressed = () => {
    dispatch(
      logout({})
    )
  }
  return (
    <View style={styles.container}>
      <Header>Press To Logout</Header>
      <Button
        mode="outlined"
        onPress={onLogoutPressed}
        backgroundColor="blue"
        color = "white"
      >
        Logout
      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 24,
      backgroundColor: "white",
  }
})
