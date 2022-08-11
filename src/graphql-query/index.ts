import {gql} from 'graphql-tag';

export const GET_PEOPLES_PAGE = gql(`
    query {
      People {
        name
        gender
      }
    }
`);

