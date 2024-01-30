import { useState, useEffect } from 'react'
import './LoginSignup.css'
import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux";
import { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure , resetState } from "../../redux/user/userSlice";

const LoginSignup = () => {
  
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [action,setAction] = useState("Login") 

  const [formData, setFormData] = useState({})

  const {currentUser, loading, error} = useSelector((state) => state.user)

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }

  const handleSignUp = async (e) => {

    e.preventDefault()

     try{
        dispatch(signUpStart())

        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            email: formData.phone_number+"@email.com"
          })
        });

        const data = await res.json()

        if(data['success'] === 0){  
          dispatch(signUpFailure(data['message'] === 0))
          return;
        }
        else{
          dispatch(signUpSuccess(data))      
          setFormData({})
          dispatch(resetState())   
          
          navigate('/login')
        }      
    }
    catch(err){             
      dispatch(signInFailure(err.message))
    }
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    try{  
        dispatch(signInStart())

        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json()

        if(data['success'] === 0){ 
          dispatch(signInFailure(data['message']))
          return;
        }
        else{
          dispatch(signInSuccess(data))      
          setFormData({})
          navigate('/')
        }   
        
        dispatch(resetState())
    }
    catch(err){             
      // dispatch(signInFailure(...error, err.message))

      console.log(err)
    }
  } 

  if(currentUser){
    return <Navigate to="/"/>
  }

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div> 
            <div className="underline"></div>
        </div>
        {action==="Login"?<div></div>:<div className="welcome-text">
            <h1>Welcome to become a new member</h1>
        </div>}
        {error && <p className='error'>{error}Error trying</p>}       
        {action === "Login" ? 
        <form autoComplete="off" onSubmit={handleLogin}>
            <div className="inputs">
                <div className="input">
                    <input type="phone" autoComplete="off" id="phone_number" onChange={handleChange} placeholder='Please enter your phone number : 07___'/>
                </div>
                <div className="input">
                    <input type="password" autoComplete="off" id="password"  onChange={handleChange}  placeholder='Please enter yout password' />
                </div>
            </div>    
            <div className="submit-container"> 
                <button className="submit">{loading ? 'Loading...' : 'Login'}</button>                
                <p>Dont have an account? <span onClick={() => {dispatch(resetState()); setFormData(null); setAction("Signup")}}>Create Account</span></p>
            </div>
        </form> 
        : 
        <form autoComplete="off" onSubmit={handleSignUp}>
            <div className="inputs">
                <div className="input">
                    <input type="text" id="username" autoComplete="off" onChange={handleChange}  placeholder='Please enter your name'/>
                </div>
                <div className="input">
                    <input type="phone" id="phone_number" autoComplete="off" onChange={handleChange}  placeholder='Please enter your phone number : 07___'/>
                </div>
                <div className="input">
                    <input type="password" id="password" autoComplete="off" onChange={handleChange}  placeholder='Please enter your password' />
                </div>
                <div className="input">
                    <input type="password" id="conf_password" autoComplete="off" onChange={handleChange}  placeholder='please Re enter your password'/>
                </div>
                <div className="input">
                    <input type="text" id="invitation_code" autoComplete="off" onChange={handleChange}  placeholder='Please enter the invitation code'/>
                </div>
                <div className="input">
                    <input type="text" placeholder='Please enter captcha code'/>
                </div>
            </div>    
            <div className="submit-container"> 
                <button className="submit">{loading ? 'Loading...' : 'Signup'}</button>                
                <p>Already have an account? <span onClick={() => {dispatch(resetState()); setFormData(); setAction("Login");}}>Login</span></p>
            </div>
        </form>
        }
        
      
    </div>
  ) 
}

export default LoginSignup
