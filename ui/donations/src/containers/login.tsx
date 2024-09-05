import { useContext, useState } from 'react'
// import axios from 'axios'
import '../App.css' // 2 dots = upper level directory
import { Flex, Text, Button, TextField } from '@radix-ui/themes'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { jwtDecode } from 'jwt-decode'
// import AuthContext from '../context/AuthContext.jsx'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    // const {setUser, logout} = useContext(AuthContext)
    // const notify = () => toast("Wow so easy!");
  
    const updateEmail = (event) => {
      setEmail(event.target.value)
      console.log(event.target.value)
    }
  
    const updatePassword = (event) => {
      setPassword(event.target.value)
      console.log(event.target.value)
    }
  
    // const instance = axios.create ({
    //   baseURL: "http://localhost:3000",
    //   timeout: 1000,
    //   headers: {"Content-Type": "application/json"}
    // })
  
    // const submitLogin = async () => {
    //   console.log('submit')
    //   const response = await instance
    //     .post("/login", {email, password})
    //     .then((response) => {
    //       if (response.status == 200) {
    //         const jwt = response.data.token;
    //         localStorage.setItem("jwt", jwt);
    //         console.log(jwt);
  
    //         const userData = jwtDecode(jwt);
    //         localStorage.setItem("user", JSON.stringify(userData));
  
    //         setUser(userData);
    //         navigate('/counts')
    //       }
    //       else {
    //         console.log(response.data);
    //       }
    //     })
    //   }
  
    return (
      <>
        <div className="text-3xl font-bold underline">
          Please Sign In
        </div>
        <TextField.Root className='mt-3' placeholder="Email…" onChange={updateEmail}>
        </TextField.Root>
        <TextField.Root className='my-3' placeholder="Password…" onChange={updatePassword} />
        {/* <Button onClick={function(event){submitLogin(); notify()}}>
          Login
        </Button> */}
      </>
    )
  }
  
  export default Login
  