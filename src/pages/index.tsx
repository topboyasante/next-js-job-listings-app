import Hero from "@/components/page-sections/homepage/Hero";
import Jobs from "@/components/page-sections/homepage/Jobs";
import { IJobType } from "@/types";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

type PageProps = {
  data: IJobType[];
};

function Index({ data }: PageProps) {
  return (
    <>
    <Head>
      <title>WDWR</title>
    </Head>
      <main>
        <Hero />
        <Jobs jobs={data} />
      </main>
    </>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const options = {
    method: "GET",
    url: "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest",
    params: {
      PageNumber: "20",
      PageSize: "20",
    },
    headers: {
      "X-RapidAPI-Key": "3eacc72e4amshb5e94d827aaf7acp12ece2jsnec5609b4f77e",
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data);
    return {
      props: {
        data: response.data.data || [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
      },
    };
  }
};
