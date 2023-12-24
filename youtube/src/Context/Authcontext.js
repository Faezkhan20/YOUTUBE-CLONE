import { createContext, useEffect, useReducer } from "react"
import toast from "react-hot-toast";
import api from "../Helpers/AxiosConfig";


export const AuthContext = createContext();

const reducer = (state , action) => {
    switch(action.type){
        case 'LOGIN' :
            return {...state , user : action.payload} 
        case 'LOGOUT' :
            return {...state , user : null}
        default :
            return state;
    }
}

const ParentAuthContext = ({children}) => {
    
    const initialState = {user : null};

    const [state , dispatch] = useReducer(reducer , initialState);

    const Login = (data) => {
        dispatch({type : "LOGIN" , payload : data})
    }

    const Logout = () => {
        localStorage.removeItem("My-token")
        dispatch({type : "LOGOUT"})
        toast.success("Logout Successfull")
    }

    useEffect(() => {

        async function getCurrentUser(){
            try{
                const response = await api.post("/auth/getcurrentuser" , {token});
                if(response.data.success){
                    Login(response.data.user);
                }
            }catch(error){
                console.log(error , "Error hai")
                toast.error(error.response.data.message)
            }
        }
        const token = JSON.parse(localStorage.getItem("My-token"));
        if(token){
            getCurrentUser();
        }
    }, [])

    return (
        <AuthContext.Provider value={{state , Login , Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentAuthContext