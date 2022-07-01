import logo from './logo.svg';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './App.css';
import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhoneCard from './components/PhoneCard';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhoneDeatils from './components/PhoneDeatils';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/phones/:id' element={<PhoneDeatils />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
