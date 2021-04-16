import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../../components/footer-admin'
import Api from '../../services/api';
import CustomizedDialogs from '../modal/termo';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp() {
  const classes = useStyles();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [crm, setCrm] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState([]);

  async function handleSumbmit(){
    const data = {
      name:name,
      email:email,
      password:password,
      crm:crm,
      cpf:cpf,
      phone:phone,
      check:true,
    }
    
    const response = await	Api.post('doctorSignUp', data);
      if(response.status === 201){
        window.location.href='/'
      }else{
        alert('Erro ao cadastrar o usuário!');
      }
   
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <br></br>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required 
                variant="outlined"
                id="name"
                name="name"
                label="Nome"
                fullWidth
                autoFocus
                value={name}
                onChange={e =>setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e =>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cpf"
                label="Cpf"
                name="cpf"
                autoComplete="cpf"
                value={cpf}
                onChange={e =>setCpf(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="crm"
                label="CRM"
                name="crm"
                autoComplete="crm"
                value={crm}
                onChange={e =>setCrm(e.target.value)}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone1"
                label="Telefone 1"
                type="phone"
                id="phone1"
                value={phone}
                onChange={e =>setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone2"
                label="Telefone 2"
                type="phone"
                id="phone2"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e =>setPassword(e.target.value)}
                
            />
              
              <Grid container justify="flex-start">

            </Grid>
            
          </Grid>
          <Grid item xs={12}>
          <CustomizedDialogs/>
          </Grid>
          
            <Grid item xs={12}>
            
              <FormControlLabel
                control={
                <Checkbox  color="primary" 
                  value = "ok"
                  onChange={e =>setCheck(e.target.value)}
            
                />
                  
              }
                
                label="Concordar com os termos"
              />
            </Grid>
          </Grid>
          
        </form>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            onClick={handleSumbmit}
            
          >
            Cadastrar
          </Button>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
