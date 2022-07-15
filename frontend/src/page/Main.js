import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import citys from '../data.json'
import TourCard from '../components/TourCard'
import '../App.css'

const Main = () => {
  return (
    <div>
      <Container sx={{ mt: 5 }}>
        {citys.map((city, index) => (
          <div key={index}>
            <Typography variant="h4" component="h2" mt={5} mb={3}>
              Top {city.name} Tours
            </Typography>
            <Grid container>
              {city.tours.map((tour, index) => (
                <TourCard key={index} tour={tour}></TourCard>
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Main
