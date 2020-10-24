import {gql} from '@apollo/client';

export const ENTRIES = gql`
  fragment EntryData on Entry {
    _id
    title
    type
    amount
    is_recurring
    date
  }
  
  query GetAllEntries {
    entries (
      query: { is_recurring: false }
      sortBy: DATE_ASC
    ) {...EntryData}
    
    recurringEntries: entries (
      query: { is_recurring: true }
    ) {...EntryData}
  }
`;