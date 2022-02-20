import {Text} from "react-native-elements";
import {TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import {withNavigation} from "react-navigation";

const NavLink = ({navigation, routeName, text}) => {
   return (
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
         <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   link: {
      color: '#00f',
      fontSize: 20,
      margin: 17
   }
})

export default withNavigation(NavLink)
