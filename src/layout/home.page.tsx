import React, {useState} from 'react';
import {Grid, Typography, Box, TextField, Container, IconButton, Fab} from "@mui/material";
import classes from './home.module.css';
import {Add} from '@mui/icons-material';


const HomePage:React.FC<{children:React.ReactNode, getSearchName:Function}> = ({children, getSearchName}) =>  {
    const [searchText, setSearchText] = useState<string>('');

    const getName = (e:any) => {
        let value:string =  e.target.value;
        setSearchText(value);
        getSearchName(value)
    }
    return (
        <>
            <Grid item component={'div'} xs={12} sm={12}>
                <Box className={`${classes.header}`}>
                    <div className={`${classes.shade}`}>
                        <Typography variant={'h2'} color={'#fff'}  sx={{mb:3, textTransform:'uppercase'}}>GraphQL The best way of making API Calls </Typography>
                        <Container className={`${classes.container}`} sx={{p:2, boxSizing:'border-box'}}>
                            <input type='text' placeholder='Search For a Person' onChange={(e) => getName(e)} value={searchText} className={`${classes.input}`}/>
                        </Container>
                    </div>
                </Box>
            </Grid>

            <Grid container xs={12} sm={12}  className={`${classes.list_wrapper}`}>
                <Grid item sx={{backgroundColor: '#e8e8e8', width:'100%', py:3}}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage;