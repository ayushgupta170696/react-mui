import logo from './logo.svg';
import './App.css';
import AddCommentIcon from '@mui/icons-material/AddComment';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useState} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import {Checkbox} from '@mui/material';

function App() {
  const [value, setValue] = useState(0);
  function customMe() {
     alert('function called');
  }
  function getValue(e){
  //  alert(e.target.value)
    console.warn(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <AddCommentIcon/>
      <AddIcCallIcon/>
      <Button color="primary">Primary</Button>
      <Checkbox color="primary" value="Anil" onChange={(e) => {getValue(e)}}></Checkbox>
        <Button color="primary" variant="contained"
         onClick={customMe}     
         startIcon={<Delete />}
         >Click me</Button>
      <ButtonGroup variant="contained"  orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
      {/* <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box> */}
    </header>
    </div>
  );
}

export default App;
