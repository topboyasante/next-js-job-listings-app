import JobCard from "@/components/ui/JobCard";
import { IJobType } from "@/types";
import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type PageProps = {
  data: IJobType[];
  nextPage:string
};


function Index({ data,nextPage }: PageProps) {
  const [input, setInput] = useState<string>("");
  const [jobs, setJobs] = useState<IJobType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPageLink,setNextPageLink] = useState<string>(nextPage)

  useEffect(() => {
    setJobs(data);
  }, [data]);

  async function handleSearch(searchItem: string) {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search",
      params: {
        SearchQuery: `${searchItem}`,
        PageSize: "10",
        PageNumber: "1",
      },
      headers: {
        "X-RapidAPI-Key": "3eacc72e4amshb5e94d827aaf7acp12ece2jsnec5609b4f77e",
        "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setJobs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function loadNextPage(){
    setIsLoading(true)
    const options = {
      method: "GET",
      url: nextPageLink,
      params: {
        PageSize: "10",
        PageNumber: "1",
      },
      headers: {
        "X-RapidAPI-Key": "3eacc72e4amshb5e94d827aaf7acp12ece2jsnec5609b4f77e",
        "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data.data)
      setJobs(response.data.data);
      setNextPageLink(response.data.nextPage)
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <main>
      {/* Navbar */}
      <main className="mt-[10vh] bg-gray-200">
        <section className="max-w-[1000px] mx-auto p-5 lg:px-0">
          <h1 className="text-center header lg:text-5xl">
            FIND YOUR DREAM JOB
          </h1>
          <section className="my-5">
            {/* Search Bar */}
            <section className="flex items-center gap-2 w-full">
              <input
                type="text"
                className="bg-transparent text-black px-4 py-2 outline-none appearance-none border border-gray-500 w-[80%] lg:w-[90%]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={() => handleSearch(input)}
                className="text-xl text-white bg-red-500 px-4 py-[0.6rem] lg:w-[10%] flex justify-center items-center"
              >
                <AiOutlineSearch />
              </button>
            </section>
          </section>
        </section>
      </main>
      {/* Content */}
      <section>
        {isLoading ? (
          <section className="max-w-[1000px] mx-auto p-5 lg:p-0">
            <Skeleton
              count={data.length}
              style={{ padding: "3em", marginTop: "1em", marginBottom: "1em" }}
            />
          </section>
        ) : (
          <section className="max-w-[1000px] mx-auto p-5 lg:p-0">
            {jobs.map((job, index) => {
              return (
                <JobCard
                  key={index}
                  name={job.title}
                  company={job.jobSource}
                  tags={job.tags}
                  url={job.url}
                />
              );
            })}
            {/* Pagination Button */}
            <section
              className="max-w-[200px] mx-auto"
              onClick={()=>loadNextPage()}
            >
              <button className="px-4 py-2 bg-red-500 text-white my-5 w-[200px]">
                <p>Show More</p>
              </button>
            </section>
          </section>
        )}
      </section>
    </main>
  );
}

export default Index;
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const options = {
    method: "GET",
    url: "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest",
    params: {
      PageNumber: "1",
      PageSize: "10",
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
        nextPage:response.data.nextPage || ""
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
        nextPage:""
      },
    };
  }
};
