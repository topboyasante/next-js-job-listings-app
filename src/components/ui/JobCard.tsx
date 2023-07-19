import { IJobTags } from "@/types";
import React from "react";

function JobCard({
  name,
  company,
  tags,
  url,
}: {
  name: string;
  company: string;
  tags: IJobTags[];
  url: string;
}) {
  return (
    <main className="border p-5 my-3">
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
      <button className="bg-red-500 text-white px-4 py-2 my-2">
        <a href={url}>Apply</a>
      </button>
    </main>
  );
}

export default JobCard;
