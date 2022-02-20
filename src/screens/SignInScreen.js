import React from "react"
import {StyleSheet, View} from "react-native";
import Form from "../components/Form";
import {Context as AuthContext} from "../contexts/AuthContext";
import {navigate} from "../navigator-ref";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {
   const {clearErrorMessage, signIn} = React.useContext(AuthContext)
   const [loading, setLoading] = React.useState(false)

   function onSubmit(data) {
      setLoading(true)
      signIn(data, (err, res) => {
         setLoading(false)
         if (res)
            navigate('TrackList')
      })
   }

   return (
      <View style={styles.container}>
         <NavigationEvents
            onWillFocus={clearErrorMessage}
         />
         <Form
            loading={loading}
            title={'Sign in for Tracker'}
            onSubmit={onSubmit}/>
         <NavLink routeName={'SignUp'} text={"You don't have an account ? Sign up"}/>
      </View>
   )
}

SignInScreen.navigationOptions = () => {
   return {
      headerShown: false
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1, justifyContent: "center", alignItems: "center"
   }, mt: {
      marginTop: 15
   },
   link: {
      color: '#00f',
      fontSize: 20,
      margin: 17
   },
   btn_title: {
      fontSize: 20,
      fontWeight: '600'
   },
   button: {
      margin: 15,
      paddingHorizontal: 10,
      width: 220
   }
})

export default SignInScreen
