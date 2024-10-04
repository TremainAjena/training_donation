import { useContext, useState } from 'react'
import instance from '../utils/axios'
import { Flex, Text, Button, TextField } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function addOrganization() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()

    const navigate = useNavigate()
    const { submit } = useContext(AuthContext)
    // const notify = () => toast("Wow so easy!");

    const updateName = (event: any) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    const updateEmail = (event: any) => {
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    const updatePhone = (event: any) => {
        setPhone(event.target.value)
        console.log(event.target.value)
    }

    const updateCity = (event: any) => {
        setCity(event.target.value)
        console.log(event.target.value)
    }

    const updateState = (event: any) => {
        setState(event.target.value)
        console.log(event.target.value)
    }

    
    const submitForm = async () => {
        console.log('submit')
        const response = await instance
            .post("/organizations", { name, email, phone, city, state })
            .then((response) => {
                if (response.status == 200) {

                    // const jwt = response.data.token;
                    // localStorage.setItem("user", jwt);
                    submit()
                    console.log();

                    // Put your notification toast here
                    navigate('/organizations')
                }
                else {
                    // console.log(response.data);
                }
            })
    }

    return (
        <>
            <div className="text-3xl font-bold underline">
                Please enter organization information below.
            </div>
            <TextField.Root className='mt-3' placeholder="Name…" onChange={updateName}></TextField.Root>
            <TextField.Root className='my-3' placeholder="Email…" onChange={updateEmail} />
            <TextField.Root className='mt-3' placeholder="Phone…" onChange={updatePhone}></TextField.Root>
            <TextField.Root className='my-3' placeholder="City…" onChange={updateCity} />
            <TextField.Root className='mt-3' placeholder="State…" onChange={updateState}></TextField.Root>
            <Button onClick={submitForm}>
                Save
            </Button>
        </>
    )
}

export default addOrganization
