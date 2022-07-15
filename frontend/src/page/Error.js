import React from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ m: 2, width: '50%' }} spacing={2}>
        <Alert severity="error">잘못된 주소로 들어오셨습니다.</Alert>
        <Button
          onClick={() => {
            navigate('/')
          }}
          mt={2}
        >
          Home
        </Button>
      </Stack>
    </Box>
  )
}

export default Error
