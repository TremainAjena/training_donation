// import '../App.css'
import { useState, useEffect } from 'react'
import { Box, Card, Inset, Text, Strong, Flex, CheckboxCards, Table, Button } from '@radix-ui/themes'
import instance from '../utils/axios'
import { useParams } from 'react-router-dom'

function Details() {
    const { id } = useParams()
    const [organization, setOrganization] = useState()
    useEffect(() => {
        const getDetails = async () => {
            return await instance
                .get(`/organizations/${id}`)
                .then((response) => {
                    setOrganization(response.data);
                    console.log(response.data)
                });
        };
        getDetails();
    }, [])

    const [events, setEvents] = useState()
    useEffect(() => {
        const getEvents = async () => {
            return await instance
                .get(`/events/${id}`)
                .then((response) => {
                    setEvents(response.data);
                    console.log(response.data)
                });
        };
        getEvents();
    }, [])

    if (organization) {
        return (
            <>
                <Box maxWidth="240px">

                    <Card size="2" key={organization.id}>
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
                            <Strong>{organization.name}</Strong>
                            <p>Email: {organization.email}</p>
                            <p>Phone: {organization.phone}</p>
                            <p>Location: {organization.city}, {organization.state}</p>
                        </Text>

                    </Card>

                </Box>

                <Table.Root variant="surface">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Event Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {/* {events && events.map(function (x) { */}
                        {/* return ( */}
                            <Table.Body>
                                <Table.Row key={events}>
                                    <Table.RowHeaderCell>{events.name}</Table.RowHeaderCell>
                                    <Table.Cell>{events.location}</Table.Cell>
                                    <Table.Cell><Button>Edit</Button><Button>Delete</Button></Table.Cell>
                                </Table.Row>
                            </Table.Body>

                        {/* ) */}
                    {/* })} */}
                </Table.Root>
            </>
        )
    }
    else {
        return <div>Organization not found</div>;
    }
}

export default Details