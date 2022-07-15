import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react'

function Articale() {
  const [open, setOpen] = useState(false)
  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>Welcome</h2>
      Hello web!Hello web!
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true)
          }}
        >
          create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>title</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello</DialogContentText>
          Create!!
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false)
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  )
}

export default Articale
