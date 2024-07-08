import {
  useAddCountryMutation,
  useContinentsQuery,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const AddCountry = () => {
  const [addCountry] = useAddCountryMutation();
  const router = useRouter();

  const { data: continentsData } = useContinentsQuery();
  const continents = continentsData?.continents || [];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.continent = { id: parseInt(formJSON.continent, 10) };

    addCountry({ variables: { data: formJSON } })
      .then((res) => {
        router.push(`/countries/${res.data?.addCountry.id}`);
      })
      .catch(console.error);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row bg-bgDarkGrey border border-grey-2 justify-between gap-8 mx-8 md:mx-24 my-8 p-4 rounded-lg"
    >
      <label className="flex flex-col md:w-44">
        Name
        <input
          className="border-gray-400 border rounded-sm min-h-8"
          type="text"
          name="name"
          id="name"
        />
      </label>
      <label className="flex flex-col md:w-44">
        Emoji
        <input
          className="border-gray-400 border rounded-sm min-h-8"
          type="text"
          name="emoji"
          id="emoji"
        />
      </label>
      <label className="flex flex-col md:w-44">
        Code
        <input
          className="border-gray-400 border rounded-sm min-h-8"
          type="text"
          name="code"
          id="code"
        />
      </label>
      <label className="flex flex-col md:w-44">
        Continent
        <select name="continent" id="continent" className="rounded-sm min-h-8">
          {continents.map((continent) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          ))}
        </select>
      </label>
      <button className="bg-pinkHeader text-white rounded-md p-4 font-bold">
        Add
      </button>
    </form>
  );
};

export default AddCountry;
