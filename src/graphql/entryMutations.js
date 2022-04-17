import {gql} from '@apollo/client';

export const ADD_ENTRY = gql`
  mutation AddEntry($data: EntryInsertInput!) {
    insertOneEntry(data: $data) {
      _id
      title
    }
  }
`;

export const UPDATE_ENTRY = gql`
  mutation UpdateEntry($query: EntryQueryInput, $set: EntryUpdateInput!) {
    updateOneEntry(query: $query, set: $set) {
      _id
    }
  }
`;

export const DELETE_ENTRY = gql`
  mutation DeleteEntry($query: EntryQueryInput!) {
    deleteOneEntry(query: $query) {
      _id
      title
    }
  }
`;