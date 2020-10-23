import {gql} from '@apollo/client';

export const ADD_ENTRY =  gql`
  mutation AddEntry($data: EntryInsertInput!){
    insertOneEntry(data: $data) {
      _id
      title
    }
  }
`;