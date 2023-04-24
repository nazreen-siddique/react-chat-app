import { GoogleOutlined  } from "@ant-design/icons" 
import 'firebase/compat/app'
import {auth} from "../Firebase"
import firebase from 'firebase/compat/app'

const Login = () => {
  return (
    <div id ='login-page'>
      <div id="login-card">
        <h2>Welcome to Chat App</h2>
        <br />
        <div className="login-button google" onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In With Google
        </div>
      </div>
    </div>
  )
}

export default Login