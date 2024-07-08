import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
}
