import {useQuery} from "@apollo/client";
import {gql} from "graphql-tag";

interface ResultData {
    Person:[]
}

interface Result {
    loading:boolean,
    error:any,
    data: ResultData
}

const useSearch = (search:string) => {

    const {loading, error, data}= useQuery(gql(`
        query($search:String!) {
          Person(search: $search) {
            name
            gender
          }
        }`
    ), {
        variables: {search}
    });

    const mainresult = {
        loading:loading,
        error:error,
        data:data
    }
    return mainresult;
}

export default useSearch;