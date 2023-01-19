import React from 'react'
import { Container } from '@mui/system';
import { TextField, Button } from '@mui/material'
import { useQuery, gql, useMutation } from '@apollo/client'

export const Form = () => {
  const [firstState, setFirstState] = React.useState('')
  const [secondState, setSecondState] = React.useState('')
  const [thirdState, setThirdState] = React.useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(firstState, secondState, thirdState)
  }

  return (
    <form style={{ marginLeft: 50 }} onSubmit={handleSubmit}>
      <h3>Add / Edit form</h3>
      <TextField
        fullWidth
        id="outlined-basic"
        label=""
        variant="outlined"
        value={firstState}
        onChange={(e) => setFirstState(e.target.value)}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label=""
        variant="outlined"
        value={secondState}
        onChange={(e) => setSecondState(e.target.value)}
        style={{ marginTop: 20 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label=""
        variant="outlined"
        value={thirdState}
        onChange={(e) => setThirdState(e.target.value)}
        style={{ marginTop: 20 }}
      />
      <Button fullWidth variant='contained' type="submit" style={{ marginTop: 20 }}>Submit</Button>
    </form>
  )
}