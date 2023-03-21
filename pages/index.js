import Header from "../components/Header";
import Head from "next/head";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen //この二つで背景色をつけた ">
      <Head>
        <title>insta-v4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}
