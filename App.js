import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import {Provider as AuthProvider} from "./src/contexts/AuthContext";
import {Provider as LocationProvider} from "./src/contexts/LocationContext";
import {setNavigator} from "./src/navigator-ref";
import LoadingScreen from "./src/screens/LoadingScreen";

const switchNavigator = createSwitchNavigator({
   Loading: LoadingScreen,
   loginFlow: createStackNavigator({
      SignIn: SignInScreen,
      SignUp: SignUpScreen
   }),
   mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
         TrackList: TrackListScreen,
         TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
   })
})

const App = createAppContainer(switchNavigator)

export default () => {
   return (
      <LocationProvider>
         <AuthProvider>
            <App ref={(navigator) => setNavigator(navigator)}/>
         </AuthProvider>
      </LocationProvider>
   )
}
