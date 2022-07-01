
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';



const Home = () => {
    const [phones, setPhones] = useState()
    const [phonesToRender, setPhonesToRender] = useState()
    const [loading, setLoading] = useState(false)

    async function getData() {
        setLoading(true)
        const response = await axios.get('http://localhost:4000/phones')
        return response.data
    }

    useEffect(() => {
        getData().then((data) => {
            setPhones(data)
            setPhonesToRender(data)
            setLoading(false)
        })
    }, [])
  return (
    <div className="App">
            <Box sx={{
                width: '80vw',
                margin: 'auto',
                padding: '20px'
            }}>

                {!loading ? <Autocomplete
                    options={phones? phones:[]}
                    getOptionLabel={option => option.name}
                    onChange={(event,newValue) => setPhonesToRender(newValue ?  [newValue]: phones)}
                    renderInput={(params) => <TextField {...params} label="Search your phone by name" />}
                /> : <CircularProgress />}
            </Box>
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