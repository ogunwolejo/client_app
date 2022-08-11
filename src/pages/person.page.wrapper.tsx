import React, {useEffect, useState} from 'react';
import {Grid, Container} from '@mui/material';
import { useParams} from 'react-router-dom';
import PersonPage from "../layout/person.page";
import DataCard from "../components/data.card";
import classes from './person.page.module.css'
import {useQuery} from "@apollo/client";
import {gql} from "graphql-tag";

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
        !loading &&  data;
    }, [loading, data])


    return (
        <PersonPage >
            <Grid item xs={12} sx={{p:1}}>
                <Container className={`${classes.person_card}`}>
                    {loading ? (<div>Loading...</div>) : <DataCard data={data.Person[0]}/> }
                </Container>
            </Grid>
        </PersonPage>
    );
}
export default PersonPageWrapper;