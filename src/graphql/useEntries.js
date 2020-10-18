import {useQuery} from "@apollo/client";
import gql from "graphql-tag";

const useEntries = () => {
  const { entries, loading } = useAllEntries();
  return {
    loading,
    entries,
  };
};
export default useEntries;

function useAllEntries() {
  const {data, loading, error} = useQuery(
    gql`
      query GetAllEntries {
        entries {
          _id
          title
          type
          amount
          is_recurring
          date
        }
      }
    `
  );
  if (error) {
    throw new Error(`Failed to fetch entries: ${error.message}`);
  }
  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const entries = data?.entries ?? [];
  return {entries, loading};
}