import Header from "@/components/Header";
import CountryCard, { CountryCardProps } from "@/components/CountryCard";
import { GET_COUNTRIES } from "@/graphql/getCountries";
import { use, useEffect, useState } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

import { ApolloProvider, gql, useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [countries, setCountries] = useState<CountryCardProps[]>([]);
  polyfillCountryFlagEmojis();

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="country-cards">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            id={country.id}
            name={country.name}
            code={country.code}
            emoji={country.emoji}
          />
        ))}
      </div>
    </div>
  );
}
