import Head from "next/head";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <Hero />
      </main>
    </Layout>
  );
}
