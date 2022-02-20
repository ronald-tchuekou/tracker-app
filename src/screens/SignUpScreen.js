import React from "react"
import {StyleSheet, View} from "react-native";
import Form from "../components/Form";
import {Context as AuthContext} from "../contexts/AuthContext";
import {navigate} from "../navigator-ref";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignUpScreen = () => {
   const {clearErrorMessage, signUp} = React.useContext(AuthContext)
   const [loading, setLoading] = React.useState(false)

   function onSubmit(data) {
      setLoading(true)
      signUp(data, (err, res) => {
         setLoading(false)
         if (res)
            navigate('mainFlow')
      })
   }

   return (
      <View style={styles.container}>
         <NavigationEvents
            onWillFocus={clearErrorMessage}
         />
         <Form
            loading={loading}
            title={'Sign up for Tracker'}
            onSubmit={onSubmit}/>
         <NavLink routeName={'SignIn'} text={"Already have an account ? Sign in"}/>
      </View>
   )
}

SignUpScreen.navigationOptions = () => {
   return {
      headerShown: false
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   mt: {
      marginTop: 15
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

export default SignUpScreen
