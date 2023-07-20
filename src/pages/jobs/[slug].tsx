import { IJobTypeDetailed } from "@/types";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { CiMapPin } from "react-icons/ci";
import Head from "next/head";

interface DynamicPageProps {
  data: IJobTypeDetailed;
}

const DynamicPage: NextPage<DynamicPageProps> = ({ data }) => {
  // Parse the publishedDate string to a JavaScript Date object
  const publishedDate = new Date(data.postDate);

  // Format the date as "07/04/2023 02:51:35"
  const formattedDate = publishedDate.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <>
    <Head>
      <title>{data.title} | {data.company}</title>
    </Head>
      <div className="pt-[10vh]">
        <section className="bg-gray-200 py-8">
          <section className="max-w-[1000px] mx-auto p-5 lg:p-0">
            <h1 className="text-3xl header">{data.title}</h1>
            <p>
              {data.company} |{" "}
              <span className="text-red-500">{data.location}</span>
            </p>
            <br />
            <p>Posted: {formattedDate}</p>
            <section className="flex gap-3 items-center mt-2">
              {data.tags.map((tag, index) => {
                return (
                  <p
                    key={index}
                    className="border border-black capitalize px-2 py-1"
                  >
                    {tag.text}
                  </p>
                );
              })}
            </section>
          </section>
        </section>
        <section className="max-w-[1000px] mx-auto my-2 py-5 px-10 lg:p-0">
          <section className="flex flex-col lg:flex-row justify-between gap-3">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.originalPosting),
              }}
              className="lg:w-[65%]"
            />
            <div className="lg:w-[30%] bg-gray-200 h-full flex flex-col justify-center items-center p-5">
              <h1 className="text-center text-2xl header">{data.company}</h1>
              <hr className="my-4 border border-red-500 w-full" />
              <section className="flex gap-2 items-center">
                <CiMapPin size={20} />
                <p>{data.location}</p>
              </section>
              <button className="bg-red-500 text-white px-4 py-2 my-2">
                <a href={data.url} target="_blank">
                  Apply
                </a>
              </button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default DynamicPage;

export const getServerSideProps: GetServerSideProps<DynamicPageProps> = async (
  context
) => {
  const options = {
    method: "GET",
    url: `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${context.params?.slug}`,
    headers: {
      "X-RapidAPI-Key": "3eacc72e4amshb5e94d827aaf7acp12ece2jsnec5609b4f77e",
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
  };
  // Fetch the data using the ID from the query params (e.g., context.params.dynamicId)
  const response = await axios.request(options);
  const data = response.data;
  // Pass the fetched data as props to your dynamic page
  return {
    props: {
      data,
    },
  };
};
