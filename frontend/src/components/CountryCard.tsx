import Link from "next/link";

export interface CountryCardProps {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent?: Continent;
  link?: boolean;
}

export interface Continent {
  id: number;
  name: string;
  countries: CountryCardProps[];
}

export default function CountryCard({
  name,
  code,
  emoji,
  continent,
  link = true,
}: CountryCardProps) {
  const cardContent = (
    <div
      className="country-card"
      style={{ cursor: "pointer", textDecoration: "none" }}
    >
      <h1>{name}</h1>
      <p>{code}</p>
      <p>{emoji}</p>
      {continent && <p>{continent.name}</p>}
    </div>
  );

  return link ? (
    <Link href={`/country/${code}`}>{cardContent}</Link>
  ) : (
    cardContent
  );
}
