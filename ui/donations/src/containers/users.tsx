import { useState, useEffect } from 'react'
import { Table } from '@radix-ui/themes'
import instance from '../utils/axios'

function Users() {
  const [users, setUsers] = useState()
  useEffect(() => {
    const getUsers = async () => {
      return await instance
        .get("/users")
        .then((response) => {
          setUsers(response.data);
          console.log(response.data)
        });
    };
    getUsers();
  }, [])

    return (
      <>
        <p>Hi everyone!!!</p>
        <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Zipcode</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users && users.map(function(i){

              return (
                  <Table.Row key={i.id}>
                    <Table.Cell>{i.name}</Table.Cell>
                    <Table.Cell>{i.email}</Table.Cell>
                    <Table.Cell>{i.zip_code}</Table.Cell>
                    
                  </Table.Row>
              )
            })}

          </Table.Body>
        </Table.Root>
        </div>

      </>
    )
  }
  
  export default Users