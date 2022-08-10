import React, {PropsWithChildren, useState} from 'react';
import {Grid, Typography, Box, TextField, Container, IconButton, Fab} from "@mui/material";
import classes from './home.module.css';
import {Add} from '@mui/icons-material'

const HomePage:React.FC<{children:PropsWithChildren}> = ({children}) =>  {
    const [searchText, setSearchText] = useState('');
    return (
        <>
            <Grid item component={'div'} xs={12} sm={12}>
                <Box className={`${classes.header}`}>
                    <div className={`${classes.shade}`}>
                        <Typography variant={'h2'} color={'#fff'}  sx={{mb:3, textTransform:'uppercase'}}>GraphQL The best way of making API Calls </Typography>
                        <Container className={`${classes.container}`} sx={{p:2, boxSizing:'border-box'}}>
                            <input type='text' placeholder='Search For a Person' onChange={(e) => setSearchText(e.target.value)} className={`${classes.input}`} value={searchText}/>
                        </Container>
                    </div>
                </Box>
                <Fab color="primary" aria-label="add" size='large' className={`${classes.fab}`} >
                    <Add/>
                </Fab>
            </Grid>

        </>
    )
}

export default HomePage;