import {createContext} from "react";
import {useQuery} from "@apollo/client";
import {gql} from "graphql-tag";



interface SearchType {
    search:string | undefined
}

export const SearchContext = createContext<SearchType>({
    search:undefined
})

