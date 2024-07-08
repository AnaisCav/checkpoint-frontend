import Layout from "@/components/Layout";
import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CountryDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useCountryQuery({
    variables: { countryId: parseInt(id as string) },
  });

  const country = data?.country;

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-[8rem]"> {country?.emoji}</h1>
        <p>
          Name : {country?.name} ({country?.code})
        </p>
        <p>Continent : {country?.continent?.name}</p>
      </div>
    </Layout>
  );
}
