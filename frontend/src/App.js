import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          src={memories}
          alt='memories'
          className={classes.image}
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            align-items='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
