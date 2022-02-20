import React from "react"

const createDataContext = (reducer, actions, initialValues) => {

   const Context = React.createContext(initialValues)

   const Provider = ({children}) => {
      const [state, dispatch] = React.useReducer(reducer, initialValues, undefined)

      const boundedActions = {}
      for (let key in actions) {
         boundedActions[key] = actions[key](dispatch)
      }

      return <Context.Provider value={{state, ...boundedActions}}>
         {children}
      </Context.Provider>
   }

   return {Context, Provider}
}

export default createDataContext
