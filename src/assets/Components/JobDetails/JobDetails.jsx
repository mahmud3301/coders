import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { featureJobsId } = useParams();
    console.log(featureJobsId);
    const jobDetail = useLoaderData();
    // console.log(JobDetail);
    const { company_name, job_description, job_responsibility, educational_requirements, experiences, job_title, salary, location, contact_information } = jobDetail;
    return (
        <div>
            <h1>Company Name: {company_name}</h1>
        </div>
    );
};

export default JobDetails;