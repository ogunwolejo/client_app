import React from 'react';
import {Card, Box, Grid, CardHeader, Avatar, IconButton} from '@mui/material';
import { red } from '@mui/material/colors';
import {MoreVert, ArrowRightAlt} from '@mui/icons-material'
import {Navigate, useNavigate} from "react-router-dom";
import classes from './card.module.css'

const CardContainer: React.FC<{name:string, gender:string, loading:boolean, state:[]}> = ({name, gender, loading, state}) => {
    const navigate = useNavigate();
    const navigateToPersonDetails = (id:string) => navigate(`/person/${id}`, {
        replace:false,
        state
    });

    const FirstLetterInName = name[0].toUpperCase();
    return (
       <Grid item xs={12} sm={4} md={3} lg={2} mx={2} >
           <Card sx={{my:1, width:'100%'}}>
               {
                   !loading ? (
                       <CardHeader
                           avatar={
                               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                   {FirstLetterInName}
                               </Avatar>
                           }
                           title={name}
                           subheader={gender}
                           action={
                               <IconButton aria-label="arrow" onClick={navigateToPersonDetails.bind(null, name)}>
                                   <ArrowRightAlt  sx={{color: '#000'}}/>
                               </IconButton>
                           }
                       />
                   ) : (
                        null
                   )
               }
           </Card>
       </Grid>
    );
}

export default CardContainer;