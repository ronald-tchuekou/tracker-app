import React from "react"
import {StyleSheet, Text} from "react-native";
import {Button} from "react-native-elements";
import {Context as AuthContext} from "../contexts/AuthContext";
import {navigate} from "../navigator-ref";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView} from "react-navigation";

const AccountScreen = () => {
   const {signOut} = React.useContext(AuthContext)
   const [token, setToken] = React.useState('')

   React.useEffect(() => {
      AsyncStorage.getItem('user', (err, res) => {
         if (err) return
         if (res) {
            let user = JSON.parse(res)
            setToken(user.token)
         }
      })
   }, [])

   function onPress() {
      signOut(token, () => {
         navigate('SignIn')
      })
   }

   return (
      <SafeAreaView forceInset={{top: 'always'}}>
         <Text style={styles.title}>This is account screen</Text>
         <Button
            titleStyle={styles.btn_title}
            containerStyle={styles.button}
            title={'Log out'}
            onPress={onPress}
         />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 29
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

export default AccountScreen
