import '../App.css'

import { useState, useEffect } from 'react'
import { Table, Button } from '@radix-ui/themes'
import instance from '../utils/axios'
import { Link } from 'react-router-dom'

function Organizations() {
  const [organizations, setOrganizations] = useState()
  useEffect(() => {
    const getOrganizations = async () => {
      return await instance
        .get("/organizations")
        .then((response) => {
          setOrganizations(response.data);
          console.log(response.data)
        });
    };
    getOrganizations();
  }, [])

    return (
      <>
        <div> <Link to={'/orgForm'} className='nav-link'><Button color="cyan">Add Organization</Button></Link></div>
        <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>State</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {organizations && organizations.map(function(i){

              return (
                  <Table.Row key={i.id}>
                    <Table.Cell><Link to={`/organizations/${i.id}`} >{i.name}</Link></Table.Cell>
                    <Table.Cell>{i.city}</Table.Cell>
                    <Table.Cell>{i.state}</Table.Cell>
                    
                  </Table.Row>
              )
            })}

          </Table.Body>
        </Table.Root>
        </div>

      </>
    )
  }
  
  export default Organizations