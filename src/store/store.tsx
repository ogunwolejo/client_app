import React, {createContext} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PEOPLES_PAGE} from "../graphql-query";

export interface PersonData {
    People: []
}

export interface PeopleData {
    loading:boolean
    error:any
    data:PersonData
}

export const QueryContext = createContext<PeopleData>({
    loading:true,
    error:undefined,
    data:{
        People:[]
    }
});


const QueryContextProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const {loading, error, data} = useQuery(GET_PEOPLES_PAGE);
    return (
        <QueryContext.Provider value={{loading, error, data}}>
            {children}
        </QueryContext.Provider>
    );
}



export  {QueryContextProvider}