import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import HomePage from "@/components/HomePage";
import { Carousel, CarouselCategory, CarouselProduct } from "@/components";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>EStore</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
        {/* <CarouselProduct /> */}
      </main>
    </>
  );
}
