import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ActivityIndicator,  StyleSheet, Text, View  } from 'react-native'
import { useFormik } from 'formik';
import * as yup from "yup";
import Header from '../../Components/Header'
import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput'
import { loginSuccess } from '../../Redux/redux';
import { login } from '../../Redux/actions';
export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username can not be empty").min(2, "Password longer than 2 characters"),
    password: yup.string().min(5).required("Password can not be empty").min(6, "Password longer than 6 characters"),
  });
  const { values, handleChange, handleBlur, handleSubmit, touched, errors, setFieldValue } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: () => {
      setIsLoading(true)
      setTimeout(() => dispatch(
        login({
          name: values.username,
          password: values.password,
          loggedIn: true,
        })
      ), 1000)
      if (values.username && values.password && values.username === 'minh123' && values.password === '123456') {
      } else {
        setIsLoading(false)
        alert('Name or password incorrect')
      }
    },
    validationSchema,
  });
  return (
    <View style={styles.container}>
      <Header>Press to Login</Header>
      <TextInput
        label="name"
        placeholder="Username"
        value={values.username}
        onChangeText={useCallback(handleChange('username'), [])}
        autoCompleteType="name"
        errorText={errors.username}
        onBlur={handleBlur('username')}
        touched={touched.username}
      />
      <TextInput
        label="password"
        placeholder="Password"
        returnKeyType="done"
        value={values.password}
        onChangeText={useCallback(handleChange('password'), [])}
        secureTextEntry
        errorText={errors.password}
        onBlur={handleBlur('password')}
        touched={touched.password}
      />
     
        <Button title='Submit' mode="contained" onPress={handleSubmit}>
          Login
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