
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';


let myStyle = {
  marginLeft: '15px',

}


const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);



  const calculateInterest = () => {
    setSi(p * t * r / 100)

  }
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simple Interest
            </Typography>

          </Toolbar>
        </AppBar>
        <br></br><br></br>

        <TextField onChange={(event) => setP(event.target.value)} id="outlined-basic" style={myStyle} label="EnterP" variant="outlined"></TextField><br></br>
        <TextField onChange={(event) => setT(event.target.value)} id="outlined-basic" style={myStyle} label="EnterT" variant="outlined"></TextField><br></br>
        <TextField onChange={(event) => setR(event.target.value)} id="outlined-basic" style={myStyle} label="EnterR" variant="outlined"></TextField>

        <br></br><br></br>
        <Button style={myStyle} onClick={() => calculateInterest()} variant="text">Calculator</Button>

        <Typography style={myStyle} variant="h6" gutterBottom>
          Simple Interest is : {si}
        </Typography>

      </div>
    </>

  );
}

export default App;
