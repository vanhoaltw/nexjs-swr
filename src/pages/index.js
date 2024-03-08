/* eslint-disable @next/next/no-img-element */
import CreateBook from "@/components/CreateBook";
import Head from "next/head";
import { useCallback, useMemo } from "react";
import useSWR from "swr";

const getBooks = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, isLoading, mutate } = useSWR("/api/book", (url) =>
    getBooks(url)
  );

  const listBook = useMemo(() => data?.data || [], [data?.data]);
  const isEmpty = !isLoading && !listBook?.length;

  const createBookHanlder = useCallback(
    async (values) => {
      await mutate(
        fetch("/api/book", {
          method: "POST",
          body: JSON.stringify(values),
        })
          .then((r) => r.json())
          .then((r) => ({
            success: true,
            data: [...listBook, r.data],
          })),
        {
          optimisticData: {
            success: true,
            data: [...listBook, { _id: Date.now(), ...values }],
          },
          rollbackOnError: true,
          populateCache: true,
          revalidate: false,
        }
      );
    },
    [listBook]
  );

  return (
    <div className="h-full py-10">
      <Head>
        <title>CRUD with NextJS + MongoDb</title>
        <meta
          name="description"
          content="crud operation using react and mongodb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center justify-center h-full flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">
          Add your favorite books
        </h1>

        <CreateBook onCreate={createBookHanlder} />

        <ul className="flex items-center justify-center gap-6 flex-wrap min-h-60 px-8">
          {isLoading && !data ? (
            <div>Loading...</div>
          ) : (
            listBook?.map?.((i) => (
              <li key={i._id} className="w-40">
                <img
                  src={i?.thumbnail}
                  alt={i?.title}
                  style={{ aspectRatio: 6 / 9 }}
                  height="auto"
                  className="w-full rounded-md mb-2"
                />
                <p className="font-bold text-base">{i?.title}</p>
                <p className="line-clamp-2 text-sm text-gray-300 min-w-0 break-words">
                  {i?.description}
                </p>
              </li>
            ))
          )}

          {isEmpty && <li>Book not found.</li>}
        </ul>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
