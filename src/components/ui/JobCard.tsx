import { IJobTags } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

function JobCard({
  name,
  company,
  tags,
  slug,
  jobSource,
}: {
  name: string;
  company: string;
  tags: IJobTags[];
  slug: string;
  jobSource: string;
}) {
  const [buttonWasClicked, setButtonWasClicked] = useState<boolean>(false);
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
      <p className="my-3">
        Publisher : <span className="text-red-500">{jobSource}</span>
      </p>
      <button
        className="bg-red-500 text-white px-4 py-2 my-2 disabled:bg-gray-500 ease duration-500"
        onClick={() => setButtonWasClicked(true)}
        disabled={buttonWasClicked}
      >
        {buttonWasClicked ? (
            <p>Loading Page...</p>
        ) : (
          <Link href={`/jobs/${slug}`}>
            <p>Read Job Description</p>
          </Link>
        )}
      </button>
    </section>
  );
}

export default JobCard;
