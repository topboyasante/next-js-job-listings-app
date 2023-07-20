
export interface IJobTags{
    text:string
}

export interface IJobType{
    title:string,
    jobSource:string,
    tags:IJobTags[],
    url:string,
    slug:string,
    company:string
}

export interface IJobTypeDetailed{
    title:string,
    jobSource:string,
    tags:IJobTags[],
    url:string,
    slug:string,
    company:string,
    summary:string,
    originalPosting:string,
    location:string,
    postDate:string
}