import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const RoutersPrivates = ({children}) => {
   const isAuthToken = !!localStorage.getItem('token')

   return isAuthToken ? children : <Navigate to="/" />
}