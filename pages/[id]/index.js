import React from "react";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";

const {SITE_URL} = process.env;

const Hero = ({hero}) => {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const heroDelete = await axios(`${SITE_URL}/api/hero/${heroId}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] max-w-[1000px] mx-auto p-5">
      <h1 className="text-center text-3xl font-bold">SuperHero Detail</h1>

      <div className="bg-white shadow-lg rounded-md mt-10 p-5 max-w-[300px] mx-auto  flex justify-center items-center flex-col gap-3">
        <h2 className="text-xl font-bold">{hero.superhero}</h2>
        <p className="text-xl font-semibold">{hero.realname}</p>
        <div className="flex justify-between items-center w-full">
          <Link
            key={hero._id}
            href={`/${hero._id}/edit`}
            className="bg-blue-500 rounded-sm text-white py-1 px-3 flex itemss-center"
          >
            Edit
          </Link>
          <button
            className="bg-red-600 rounded-sm text-white py-1 px-3 flex items-center"
            onClick={deleteHero}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({params}) {
  const {SITE_URL} = process.env;
  const {data} = await axios.get(`${SITE_URL}/api/hero/${params.id}`);
  console.log(data);
  return {
    props: {
      hero: data.hero,
    },
  };
}

export default Hero;
