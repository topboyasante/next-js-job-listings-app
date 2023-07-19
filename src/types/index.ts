export interface IJobTags{
    text:string
}

export interface IJobType{
    title:string,
    jobSource:string,
    tags:IJobTags[],
    url:string
}