import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import CountryCard from "@/components/CountryCard";
import Header from "@/components/Header";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
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

export default function CountryPage() {
  polyfillCountryFlagEmojis();
  const router = useRouter();
  const { code } = router.query;

  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data?.country;

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div>
      <Header />
      <CountryCard
        key={country.id}
        id={country.id}
        name={country.name}
        code={country.code}
        emoji={country.emoji}
        continent={country.continent}
        link={false}
      />
    </div>
  );
}
