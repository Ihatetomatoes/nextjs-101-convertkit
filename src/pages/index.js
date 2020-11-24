import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl md:px-4 min-h-screen">
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <p>Hero component</p>
      </main>
    </div>
  );
}
