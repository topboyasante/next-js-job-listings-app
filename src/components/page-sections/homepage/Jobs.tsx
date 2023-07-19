import JobCard from '@/components/ui/JobCard'
import { IJobType } from '@/types'
import React from 'react'



function Jobs({jobs}:{jobs:IJobType[]}) {
  return (
    <main className='p-5 lg:p-0 max-w-[1000px] mx-auto'>
      <h1 className='text-2xl font-bold'>Top 20 Jobs</h1>
        <section className=''>
            {jobs.map((job,index)=>{
                return(
                   <JobCard
                   key={index}
                   name={job.title}
                   company={job.jobSource}
                   tags={job.tags}
                   url={job.url}
                   />
                )
            })}
        </section>
    </main>
  )
}

export default Jobs