import React, {useEffect, useState, CSSProperties} from 'react';
import {Grid, Container} from '@mui/material';
import { useParams} from 'react-router-dom';
import PersonPage from "../layout/person.page";
import DataCard from "../components/data.card";
import classes from './person.page.module.css'
import {useQuery} from "@apollo/client";
import {gql} from "graphql-tag";
import {RingLoader} from 'react-spinners'
import {red} from '@mui/material/colors';


const PersonPageWrapper = () => {
    const {id} = useParams();
    const {loading, error, data} =  useQuery(gql(`
        query($search:String!) {
          Person(search: $search) {
            name
            height
            mass
            homeworld
            gender
          }
        }`
    ), {
        variables: {search:id}
    });


    useEffect(() => {
        !loading &&  console.log(data);
    }, [loading, data])


    return (
        <PersonPage >
            <Grid container xs={12}  sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Container  sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    {loading ? (<div style={{height:'auto', width:'50%', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <RingLoader color={red[200]} loading={loading}  size={150} />
                    </div>) : <DataCard data={data.Person[0]}/> }
                </Container>
            </Grid>
        </PersonPage>
    );
}
export default PersonPageWrapper;