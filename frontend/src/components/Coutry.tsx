import { Country } from "@/types";
import Link from "next/link";

type CountryProps = {
  country: Country;
  link: string;
};

export default function Coutry({
  country: { name, emoji },
  link,
}: CountryProps) {
  return (
    <Link href={link}>
      <div className="border border-gray-2 min-w-24 text-center py-1 rounded-lg md:my-8">
        <h1>{name}</h1>
        <p>{emoji}</p>
      </div>
    </Link>
  );
}
