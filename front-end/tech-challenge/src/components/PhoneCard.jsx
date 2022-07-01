import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { card } from '@mui/material';
import imgEnum from '../assets/imgEnum';
import { Link } from 'react-router-dom'



const PhoneCard = ({ data }) => {

    return (
        <Card sx={{ width: 400, margin: '20px 10px 0px 10px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.name}
                </Typography>
                <img style={{ height: '300px' }} src={imgEnum[data.imageFileName]} alt="" />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Manufactured By: {data.manufacturer}
                </Typography>

                <Typography variant="body2" sx={{ height: '41px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' >
                    <Link to={`/phones/${data.id}`} style={{ color: 'white', textDecoration: 'none' }}>More Details</Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default PhoneCard