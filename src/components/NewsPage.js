import React from 'react'
import propTypes from 'prop-types'
import {Container, Toolbar, IconButton, Typography, Box, Paper, Grid,Card, CardMedia, CardContent} from '@material-ui/core'; 
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
cardMedia:{
paddingTop:"50%"
},

}))

const News = (props) => {
  const classes = useStyles();
  let cards = [1,2,3,4,5,6,7,8,9]; 
  
  return (
    <React.Fragment>
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" color="textPrimary" gutterBottom>Daily news</Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
    </Container>
    <section>
<Container className={classes.newsList} maxWidth="md" > 
<Grid container spacing={4}>
{cards.map((card)=>(
  <Grid item key={card} xs={12} sm={6} md={4} >
    <Card className={classes.card}>
     <CardMedia className={classes.cardMedia} 
     image="https://source.unsplash.com/random" 
     title="image"/>
<CardContent className={classes.cardContent}>
  <Typography variant="h6" gutterBottom>
  Braking news!
  </Typography>
  <Typography variant="subtitle1" gutterBottom>
  My test React application
  </Typography>
</CardContent>
    
    </Card>
  </Grid>
))}
</Grid>
</Container>
    </section>
    </React.Fragment>
  )
}


export default News