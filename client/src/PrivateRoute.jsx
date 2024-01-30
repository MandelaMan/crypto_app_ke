import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const {currentUser} = useSelector((state) =>  state.user)

    return currentUser && currentUser.is_verified ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute