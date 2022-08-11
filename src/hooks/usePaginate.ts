import {gql} from "graphql-tag";
import {useQuery} from "@apollo/client";

const usePaginate = (pageNum:string) => {
    const {loading, error, data} = useQuery(gql(
        `
            query($search:String) {
              People(search:$search) {
                name
                gender
              }
            }
        `), {
            variables:{search:pageNum}
        }
    )

    return {
        loading, error, data
    }
}

export default usePaginate;