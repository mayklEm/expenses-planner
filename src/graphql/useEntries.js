import {gql} from '@apollo/client';

const useEntries = () => {
  return gql`
    query GetAllEntries {
      entries (
        sortBy: DATE_ASC
      ) {
        _id
        title
        type
        amount
        is_recurring
        date
      }
    }
  `;
};
export default useEntries;