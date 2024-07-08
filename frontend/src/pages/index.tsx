import AddCountry from "@/components/AddCountry";
import Coutry from "@/components/Coutry";
import Layout from "@/components/Layout";
import { useCountriesQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data } = useCountriesQuery();
  const countries = data?.countries || [];

  return (
    <Layout>
      <AddCountry />
      <div className="flex flex-wrap gap-2 justify-center m-8">
        {countries.map((country) => (
          <Coutry
            key={country.code}
            country={country}
            link={`/countries/${country.id}`}
          />
        ))}
      </div>
    </Layout>
  );
}
