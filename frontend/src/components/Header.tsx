import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-pinkHeader text-center text-white py-4 flex flex-col gap-2">
      <h1 className="font-bold">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
