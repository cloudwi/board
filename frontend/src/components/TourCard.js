import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import styled from 'styled-components'
import { createTheme, ThemeProvider } from '@mui/material'

import { AccessTime } from '@mui/icons-material'
import '../App.css'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
})

const TourCard = (props) => {
  return (
    <Grid item xs={6} md={4} xl={3} pl={2} pr={2}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Img url={props.tour.image}></Img>
          <Box padding={1}>
            <Typography variant="subtitle1" component="h2">
              {props.tour.name}
            </Typography>
            <Box
              width="100px"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'start',
              }}
            >
              <AccessTime fontSize="small"></AccessTime>
              <Typography ml={1} variant="body2" component="p">
                {props.tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'start',
                justifyItems: 'center',
                flexWrap: 'wrap',
              }}
              mt={2}
            >
              <Typography component="legend"></Typography>
              <Rating
                name="read-only"
                value={props.tour.rating}
                readOnly
                precision={0.5}
              />
              <Typography ml={1} variant="body2" component="p">
                {props.tour.rating}
              </Typography>
              <Typography ml={1} variant="body2" component="p">
                {props.tour.numberOfReviews} reviews
              </Typography>
            </Box>
            <Box>
              <Typography mt={1} ml={1} variant="h6" component="h3">
                From C ${props.tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard

const Img = styled.img`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
