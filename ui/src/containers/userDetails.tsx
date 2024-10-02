import '../App.css'
import { useState, useEffect } from 'react'
import { Box, Card, Inset, Text, Strong, Flex, CheckboxCards } from '@radix-ui/themes'
import instance from '../utils/axios'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { id } = useParams()
    const [user, setUser] = useState()
    useEffect(() => {
        const getDetails = async () => {
            return await instance
                .get(`/users/${id}`)
                .then((response) => {
                    setUser(response.data);
                    console.log(response.data)
                });
        };
        getDetails();
    }, [])

    //   const [events, setEvents] = useState()
    //   useEffect(() => {
    //     const getEvents = async () => {
    //       return await instance
    //         .get("/events")
    //         .then((response) => {
    //           setEvents(response.data);
    //           console.log(response.data)
    //         });
    //     };
    //     getEvents();
    //   }, [])

    if (user) {
        return (
            <>
                <Box maxWidth="240px">

                    <Card size="2" key={user.id}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                alt="Bold typography"
                                style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 140,
                                    backgroundColor: 'var(--gray-5)',
                                }}
                            />
                        </Inset>
                        <Text as="p" size="3">
                            <Strong>{user.name}</Strong>
                            <p>Email: {user.email}</p>
                            <p>Zipcode: {user.zip_code}</p>

                        </Text>
                    </Card>

                </Box>
            </>
        )
    }
    else {
        return <div>User not found</div>;
    }
}

export default UserDetails