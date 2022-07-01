import logo from './logo.svg';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './App.css';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhoneCard from './components/PhoneCard';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhoneDeatils from './components/PhoneDeatils';


function App() {
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
        <BrowserRouter>
            {!loading ? <Autocomplete
                sx={{ marginTop: '20px' }}
                options={phones ? phones : []}
                getOptionLabel={option => option.name}
                onChange={(event, newValue) => setPhonesToRender(newValue ? [newValue] : phones)}
                renderInput={(params) => <TextField {...params} label="Search your phone by name" />}
            /> : <CircularProgress />}
            <Routes>
            <Route path='/' element={<Home phonesToRender={phonesToRender} />} />
               <Route path='/phones/:id' element={<PhoneDeatils />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
