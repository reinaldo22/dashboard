import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from '../../../components/footer-admin';
import MenuAdmin from '../../../components/menu-admin';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
 
}));

export default function RegisterUser() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />


      <MenuAdmin title={'Usuários'}/>
     
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
             <h1>Ola</h1>
            
          </Grid>
          <Box pt={4}>
            <Footer/>
          </Box>
        </Container>
      </main>
    </div>
  );
}
