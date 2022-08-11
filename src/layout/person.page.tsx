import React from 'react'
import {Grid, Box, Fab, Typography, Button,} from '@mui/material';
import classes from './person.module.css'
import {Add} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const PersonPage:React.FC<{children:React.ReactNode}> = ({children}) => {
    const navigate = useNavigate();

    const backHomePage = () => navigate(-1);

    return (
        <>
            <Grid item xs={12} >
                <Box sx={{width:'100%', backgroundColor:'blue'}} className={`${classes.container}`}>
                    <Typography variant={'h3'} sx={{color:'#fff'}}>Person Details</Typography>
                    <Button variant={'contained'}  sx={{m:3}} size={'large'} onClick={backHomePage}>BACK HOME</Button>
                </Box>
            </Grid>
            <Grid container className={`${classes.list_wrapper}`} >
                <Grid container sx={{backgroundColor: '#fff', width:'100%', py:3}}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default PersonPage;