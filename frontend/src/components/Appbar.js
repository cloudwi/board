import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

export default function ButtonAppBar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="h6"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate('/')
            }}
          >
            Home
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            안녕
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            하세요
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            flexGrow 으로 범위 지정함
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
