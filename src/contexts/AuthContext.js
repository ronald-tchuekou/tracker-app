import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from "../navigator-ref";

const authReducer = (state, action) => {
   switch (action.type) {
      case 'sign_in':
         return {isSignedIn: true, ...action.payload}
      case 'sign_out':
         return {isSignedIn: false}
      case 'add_error':
         return {...state, errorMessage: action.payload}
      case 'remove_error':
         return {...state, errorMessage: undefined}
      default:
         return state
   }
}

const signIn = (dispatch) => {
   return async (data, callback) => {
      try {
         const response = await trackerApi.post('/signin', data)
         await AsyncStorage.setItem('user', JSON.stringify(
            response.data
         ))
         dispatch({type: 'sign_in', payload: response.data})
         if (callback) callback(undefined, response.data)
      } catch (e) {
         dispatch({type: 'add_error', payload: e.response.data.message})
         if (callback) callback(e.response.data.message, undefined)
      }
   }
}

const signUp = (dispatch) => {
   return async (data, callback) => {
      try {
         const response = await trackerApi.post('/signup', data)
         await AsyncStorage.setItem('user', JSON.stringify(
            response.data
         ))
         dispatch({type: 'sign_in', payload: response.data})
         if (callback) callback(undefined, response.data)
      } catch (e) {
         dispatch({type: 'add_error', payload: e.response.data.message})
         if (callback) callback(e.response.data.message, undefined)
      }
   }
}

const signOut = (dispatch) => {
   return async (token, callback) => {
      try {
         await trackerApi.get('/signout', {
            headers: {
               Authorization: "Bearer " + token
            }
         })
         await AsyncStorage.removeItem('user')
         dispatch({type: 'sign_out'})
      } catch (e) {
         dispatch({type: 'add_error', payload: e.response.data.message})
      } finally {
         if (callback) callback()
      }
   }
}

const clearErrorMessage = (dispatch) => {
   return () => {
      dispatch({type: 'remove_error'})
   }
}

const checkLogin = (dispatch) => {
   return async () => {
      let res = await AsyncStorage.getItem('user')
      if (res) {
         dispatch({type: 'sign_in', payload: JSON.parse(res)})
         navigate('TrackList')
      }else{
         navigate('loginFlow')
      }
   }
}

export const {Context, Provider} = createDataContext(
   authReducer,
   {
      signUp,
      signIn,
      signOut,
      clearErrorMessage,
      checkLogin
   },
   {isSignedIn: false}
)
