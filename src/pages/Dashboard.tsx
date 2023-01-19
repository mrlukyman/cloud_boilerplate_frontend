import React, { useEffect, useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { Container } from '@mui/system';
import { Form } from '../components/Form';
import { Button, Grid } from '@mui/material';

export const Dashboard = () => {
  // const { loading, error, data } = useQuery()
  // const [] = useMutation()
  const [songs, setSongs] = useState([])

  // useEffect(() => {
  //   if (data) {
  //     
  //   }
  // }, [data]);

  const handleRemoveSong = (songId: number) => {
    setSongs(songs.filter((song: any) => parseInt(song.id) !== songId))
  }

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Grid container>
        <Grid columns={8}>
          {songs.map((song: any) => (
            <div key={song.title}>
              <p>
                {song.title}: {song.artist} - {song.genre.name}
              </p>
              <Button color="error" onClick={() => handleRemoveSong(parseInt(song.id))}>Remove</Button>
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
