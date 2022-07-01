import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import imgEnum from '../assets/imgEnum';
import { display } from '@mui/system';

const PhoneDeatils = () => {
    const { id } = useParams()
    const [phone, setPhone] = useState()
    const [loading, setLoading] = useState(false)

    async function getData() {
        setLoading(true)
        const response = await axios.get(`http://localhost:4000/phones/${id}`)
        return response.data
    }

    useEffect(() => {
        getData().then((data) => {
            setPhone(data)
            setLoading(false)
        })
    }, [])

    return (
        <Box
            sx={{
                width: '80vw',
                margin: 'auto',
                padding: '20px'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column-reverse' }}>
                <img style={{ height: '500px' }} src={imgEnum[phone?.imageFileName]} alt="" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80vw' }}>
                    <Box>
                        <Typography variant='h4'>
                            {phone?.name}
                        </Typography>
                        <Typography variant='h4'>
                            Price: ${phone?.price}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant='contained' >
                            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}> Home </Link>
                        </Button>
                    </Box>

                </Box>

            </Box>
            {!loading ?
                <Box >

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant='h5'> Tech spec:</Typography>
                            <Typography component='div'>
                                Color: {phone?.color}
                            </Typography>
                            <Typography>
                                Processor: {phone?.processor}
                            </Typography>
                            <Typography>
                                Ram: {phone?.ram} Gb
                            </Typography>
                            <Typography>
                                Screen: {phone?.screen}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant='h5'> Description:</Typography>
                            <Typography variant='p'>
                                {phone?.description}
                            </Typography>
                        </Box>
                    </Box>

                </Box> : <CircularProgress sx={{ margin: 'auto' }} />}
        </Box>
    )
}

export default PhoneDeatils