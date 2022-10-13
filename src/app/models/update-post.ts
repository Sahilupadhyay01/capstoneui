export interface UpdatePostRequest{
    jobTitle:string |undefined;
    jobBrief:string |undefined;
    responsibilities:string | undefined;
    requirementsAndSkills:string|undefined;
    visible:boolean|undefined;
    publishedDate:Date|undefined;
    updatedDate:Date|undefined;
}