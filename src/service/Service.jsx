import { observer } from 'mobx-react';
import GlobalState from '../global/globalState';
import Paper from '@mui/material/Paper';
import ServicesStore from '../global/ServicesStore'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BusinessDetailsStore from '../global/BusinessDetailsStore';
import './Service.css'


const Service = observer(({ i }) => {
    console.log("servie", ServicesStore.services[i])

    return (
        <>
            {/* <Paper elevation={3} >
                
                <div>name: {ServicesStore.services[i].name}</div><br />
                <div>description: {ServicesStore.services[i].description}</div><br />
                <div>price: {ServicesStore.services[i].price}</div><br />
              
            </Paper> */}
            <Card sx={{ width: 230 }} elevation={3} className='service'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="145 "
                        image={BusinessDetailsStore.business.logo}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ServicesStore.services[i].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h2> {ServicesStore.services[i].description}<br />price: {ServicesStore.services[i].price}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
})

export default Service