import { IJobTags } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function JobCard({
  name,
  company,
  tags,
  slug,
  jobSource
}: {
  name: string;
  company: string;
  tags: IJobTags[];
  slug: string;
  jobSource: string;
}) {

 function loadJob(slug:string){
      router.push(`/jobs/${slug}`)
  }

  const router = useRouter()
  return (
      <section className="border p-5 my-3">
        <p>{company}</p>
        <h1 className="text-xl font-bold my-3">{name}</h1>
        <section className="flex gap-2 flex-wrap items-center">
          <p>Tags:</p>
          {tags.map((tag, index) => {
            return (
              <p key={index} className="border capitalize px-2 py-1 my-2">
                {tag.text}
              </p>
            );
          })}
        </section>
        <p className="my-3">Publisher : <span className="text-red-500">{jobSource}</span></p>
        <button className="bg-red-500 text-white px-4 py-2 my-2" onClick={()=>loadJob(slug)}>
          <p>Read Job Description</p>
        </button>
      </section>
  );
}

export default JobCard;
