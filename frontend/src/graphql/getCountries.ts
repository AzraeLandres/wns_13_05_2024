import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;
