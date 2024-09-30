import { useState, useEffect } from 'react'
import { Table } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
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
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users && users.map(function(i){

              return (
                  <Table.Row key={i.id}>
                    <Table.Cell>{i.id}</Table.Cell>
                    <Table.Cell><Link to={`/users/${i.id}`} >{i.name}</Link></Table.Cell>
                    
                    
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