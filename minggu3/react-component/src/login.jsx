import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './login.css';


class Login extends Component {
    render(){
        return(<div className='div'>
            <h3 className='text-p' color='#000000'><b>Form Login</b></h3>

            <Box className='box' width='500px'>
                <h2 className='text-tpk'><b>Tugas Pertemuan ketiga</b></h2><br/>

                <form>
                <b><label>Username  </label></b>
                <TextField id="outlined-basic" label="Masukkan Username" variant="outlined" /><br/><br/>
                <b><label>Password  </label></b>
                <TextField id="outlined-basic" label="Masukkan Password Anda" variant="outlined" />
                <br/><br/>
                <Button variant="contained" color="primary" label="Login">Login</Button>
                <br/>
                <FormControlLabel value="Remember Me" control={<Checkbox color="primary" />}        label="Remember Me" labelPlacement="Remember Me"/><br/><br/>
                <Button variant="contained" className='btn-cancel' color="secondary" label="Cancel">Cancel</Button><br/>
                </form>
            </Box>

            
        </div>
        );
    }
}export default Login;