import React, { useEffect, useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { Container } from '@mui/system';
import { Form } from '../components/Form';
import { Button, Grid } from '@mui/material';

export const Dashboard = () => {
  // const { loading, error, data } = useQuery()
  // const [] = useMutation()
  const [array, setArray] = useState([])

  // useEffect(() => {
  //   if (data) {
  //     
  //   }
  // }, [data]);

  const handleRemove = (itemId: number) => {
    setArray(array.filter((item: any) => parseInt(item.id) !== itemId))
  }

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Grid container>
        <Grid columns={8}>
          {array.map((item: any) => (
            <div key={item.title}>
              <p>
                {item.title}:
              </p>
              <Button color="error" onClick={() => handleRemove(parseInt(item.id))}>Remove</Button>
            </div>
          ))}
        </Grid>
        <Grid columns={8}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  )
};
