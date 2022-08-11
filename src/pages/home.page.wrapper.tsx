import React, {useCallback, useContext, useEffect, useState} from "react";
import HomePage from "../layout/home.page";
import {Box, Container, Grid, Pagination} from "@mui/material";
import CardContainer from "../components/card.container";
import {PeopleData, PersonData, QueryContext} from "../store/store";
import {SearchContext} from "../store/search";
import useSearch from "../hooks/useSearch";
import {gql} from "graphql-tag";
import usePaginate from "../hooks/usePaginate";

import {RingLoader} from 'react-spinners'
import {red} from '@mui/material/colors';


//const list:Array<PeopleType> = [{name:'joshu', gender:'male'}, {name:'joshu', gender:'male'}, {name:'joshu', gender:'male'}, {name:'joshu', gender:'male'}, {name:'joshu', gender:'male'},{name:'joshu', gender:'male'},];

interface PeopleType {
    name:string,
    gender:string
}




const HomePageWrapper = () => {
    const context = useContext(QueryContext);
    const ctx = useContext(SearchContext);
    const [people, setPeople] = useState<[]>([]);
    const [person, setPerson] = useState<string>('');
    const [page, setPage] = useState<string>('1')


    useEffect(() => {
        !context.loading && setPeople(context.data.People)
    }, [context.loading])

    const getSearchName = (searchPerson:string):void => {
        setPerson(searchPerson);
    }

    // using the pagination custom hook
    const {loading, error, data} = usePaginate(page);
    const setPagePagination = (num:string) => {
        setPage(num)
    };
    useEffect(() => {
        !loading && setPeople(data.People)
    }, [page, loading, data])

    // the custom hook for using the search input field
    const result = useSearch(person);
    useEffect(() => {

        !result.loading && setPeople(result.data.Person);
    }, [result.loading, result.data ])



    return(
    <HomePage getSearchName={getSearchName}>
        <Box  sx={{ width:'100%', mt:5 }}>
            <Grid container>
                {
                    loading ? (
                        <div style={{height:'auto', width:'100%', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <RingLoader color={red[200]} loading={loading}  size={150} />
                        </div>
                    ) : (
                        people.map((el: PeopleType, i: number) => {
                            return (
                                <CardContainer key={i} name={el.name} gender={el.gender} loading={context.loading}
                                               state={people}/>
                            )
                        })
                        )
                }


            </Grid>
            <Container sx={{my:4, display:'flex', flexDirection:'column',alignItems:'center'}}>
                {!loading && <Pagination count={8} size="large" onClick={(e:any) => setPagePagination(e.target.innerText)} /> }
            </Container>
        </Box>
    </HomePage>)
}

export default HomePageWrapper;