import {gql} from '@apollo/client';

export const GET_APPLICATION = gql`
  query GetApplication($query: ApplicationQueryInput) {
    application (
      query: $query
    ) {
      balance
    }
  }
`;

export const UPDATE_APPLICATION = gql`
  mutation UpdateApplication($query: ApplicationQueryInput, $set: ApplicationUpdateInput!) {
    updateOneApplication(query: $query, set: $set) {
      _id
      balance
    }
  }
`;