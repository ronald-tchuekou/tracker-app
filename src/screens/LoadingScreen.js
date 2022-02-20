import React from "react"
import {Context as AuthContext} from "../contexts/AuthContext";

const LoadingScreen = () => {
   const {checkLogin} = React.useContext(AuthContext)

   React.useEffect(() => {
      checkLogin()
   }, [])

   return null
}

export default LoadingScreen
