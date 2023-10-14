import Link from "next/link";
import Head from "next/head";
import React from "react";
import axios from "axios";

const Home = ({heros}) => {
  return (
    <div className="h-full">
      <Head>
        <title>CRUD with NextJS + MongoDb</title>
        <meta
          name="description"
          content="crud operation using react and mongodb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-[calc(100vh-100px)] max-w-[1000px] mx-auto p-5">
        <h1 className="text-center text-3xl font-bold">
          SuperHero Identity Manager
        </h1>

        <div className="flex gap-5 flex-wrap mt-8 justify-center">
          {heros.map((hero) => (
            <div
              className="shadow-md hover:shadow-sm p-4 transition-all duration-300 rounded-sm w-72  bg-white"
              key={hero._id}
            >
              <h3 className="text-xl text-center font-bold">
                {hero.superhero}
              </h3>
              <div className="flex justify-between mt-5">
                <Link
                  key={hero._id}
                  href={`/${hero._id}`}
                  className="bg-blue-600 rounded-sm text-white py-1 px-3 flex items-center"
                >
                  View
                </Link>
                <Link
                  key={hero.id}
                  href={`/${hero._id}/edit`}
                  className="bg-blue-600 rounded-sm text-white py-1 px-3 flex items-center"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const {SITE_URL} = process.env;
  const {data} = await axios.get(`${SITE_URL}/api/hero`);
  return {
    props: {
      heros: data.hero,
    },
  };
}

export default Home;
