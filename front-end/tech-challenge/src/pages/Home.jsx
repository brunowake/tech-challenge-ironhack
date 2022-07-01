
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';



const Home = ({phonesToRender}) => {

  return (
    <div className="App">

            <Box sx={{
                width: '80vw',
                margin: 'auto',
                padding: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
            {phonesToRender?.map((element,index) => <PhoneCard  key={index} data = {element}/>)}
            </Box>
        </div>
  )
}

export default Home