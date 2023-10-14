import {useRouter} from "next/router";
import React, {useState} from "react";
import axios from "axios";

const {SITE_URL} = process.env;

const Addhero = () => {
  const [formData, setFormData] = useState({
    superhero: "",
    realname: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`${SITE_URL}/api/hero`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setFormData({
      superhero: "",
      realname: "",
    });
  };

  return (
    <div className="min-h-[calc(100vh-108px)] max-w-[1000px] mx-auto p-5">
      <h1 className="text-center text-xl font-bold">
        Add a New Superhero Identity
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden max-w-[500px] w-full mx-auto mt-10">
          <div className="px-4 py-5 bg-white">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full">
                <label
                  htmlFor="superHero"
                  className="block text-sm font-medium text-gray-700"
                >
                  SuperHero Name
                </label>
                <input
                  type="text"
                  name="superhero"
                  id="super-hero"
                  value={formData.superhero}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="realname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Real Name
                </label>
                <input
                  type="text"
                  name="realname"
                  id="real-name"
                  value={formData.realname}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pb-5 bg-gray-50 text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-offset-2
            focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addhero;
