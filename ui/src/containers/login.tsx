import { useContext, useState } from 'react'
import axios from 'axios'
import { Flex, Text, Button, TextField } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    // const notify = () => toast("Wow so easy!");
  
    const updateEmail = (event: any) => {
      setEmail(event.target.value)
      console.log(event.target.value)
    }
  
    const updatePassword = (event: any) => {
      setPassword(event.target.value)
      console.log(event.target.value)
    }
  
    const instance = axios.create ({
      baseURL: "http://localhost:3000",
      timeout: 1000,
      headers: {"Content-Type": "application/json"}
    })
  
    const submitLogin = async () => {
      console.log('submit')
      const response = await instance
        .post("/login", {email, password})
        .then((response) => {
          if (response.status == 200) {
            const jwt = response.data.token;
            // localStorage.setItem("user", jwt);
            login(jwt)
            console.log(jwt);
  
            // Put your notification toast here
            navigate('/counts')
          }
          else {
            console.log(response.data);
          }
        })
      }
  
    return (
      <>
        <div className="text-3xl font-bold underline">
          Please Sign In
        </div>
        <TextField.Root className='mt-3' placeholder="Email…" onChange={updateEmail}>
        </TextField.Root>
        <TextField.Root className='my-3' placeholder="Password…" onChange={updatePassword} />
        <Button onClick={submitLogin}>
          Login
        </Button>
      </>
    )
  }
  
  export default Login
  