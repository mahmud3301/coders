import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import vector from "../../All Images/Vector-1.png"
import vector2 from "../../All Images/Vector.png"

const JobDetails = () => {
    const jobDetails = useParams();
    const featureData = useLoaderData();

    const [datas, setDatas] = useState({});
    useEffect(() => {
        if (featureData) {
            const values = featureData.find(
                (data) => data.id == jobDetails.detailsId
            );
            setDatas(values);
        }
    }, []);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = datas;

    return (
        <div>
            <div className="flex md:justify-between bg-">
                <div>
                    <img src={vector2} alt="" />
                </div>
                <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 lg:mr-14">
                    Job Details
                </h2>
                <div>
                    <img src={vector} alt="" />
                </div>
            </div>
            <div className="p-7">
                <div className="w-[67%]">
                    <p className="text-lg">{job_description}</p>
                    <p className="text-lg">{job_responsibility}</p>
                    <p className="text-lg">{educational_requirements}</p>
                </div>
                <div className="w-[33%]">

                </div>
            </div>
        </div>
    );
};

export default JobDetails;