import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const jobDetails = useParams();
    const featureData = useLoaderData();
    const [datas, setDatas] = useState({});
    const handleAppNow = (id) => {
        let data = [];
        const storedData = localStorage.getItem("data");
        if (storedData) {
            data = JSON.parse(storedData);
        }
        if (data) {
            if (!data.includes(id)) {
                data.push(id);
                localStorage.setItem("data", JSON.stringify(data));
                toast.success("Job Applied Successfully");
            } else {
                toast.error("Job Already Applied");
            }
        } else {
            data = [id];
            localStorage.setItem("data", JSON.stringify(data));
            toast.success("Job Applied Successfully");
        }
    }
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, location, email, phone, id } = datas;
    useEffect(() => {
        if (featureData) {
            const values = featureData.find(
                (data) => data.id == jobDetails.detailsId
            );
            setDatas(values);
        }
    }, []);
    
    return (
        <div>
            <div className="flex md:justify-between bg-">
                <div>
                    <img src="https://i.ibb.co/c3vc2cp/Vector.png" />
                </div>
                <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 mx-auto justify-center">
                    Job Details
                </h2>
                <div>
                    <img src="https://i.ibb.co/99J32ys/Vector-1.png" />
                </div>
            </div><br /><br /><br /><br />
            <div className="p-7 lg:flex">
                <div className="lg:w-[65%] w-full">
                    <p className="text-lg text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Job Description:</span> {job_description}</p><br /><br />
                    <p className="text-lg text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Job Responsibility:</span> {job_responsibility}</p><br /><br />
                    <p className="text-lg text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Educational Requirements:</span> {educational_requirements}</p><br /><br />
                    <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Experience:</span>  {experiences}</p>
                </div>
                <div className="lg:w-[30%] w-full">
                    <div className="border-2 border-purple-400 mt-7 lg:mt-0 p-4 bg-base-300">
                        <p className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Job Details</p><br />
                        <hr className="border-1 border-purple-400" /><br />
                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/fSMRp4d/Frame.png" />
                            <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Salary:</span> {salary}</p>
                        </div> <br />
                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/7nDfKdB/Frame-1.png" />
                            <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Job Title:</span> {job_title}</p>
                        </div> <br /><br />
                        <div>
                            <p className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Contact Information</p> <br />
                        </div>
                        <hr className="border-1 border-purple-400" /><br />

                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/FkrZSSQ/Frame-2.png"/>
                            <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Phone:</span> {phone}</p>
                        </div> <br />
                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/tYnJppY/Frame-3.png" />
                            <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Email:</span> {email}</p>
                        </div> <br />
                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/3SKm3gn/Frame-4.png" />
                            <p className="text-xl text-slate-500"><span className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Address:</span> {location}</p>
                        </div>
                    </div><br />
                    <div>
                        <button
                            className="p-5 rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white text-center w-full"
                            onClick={() => handleAppNow(id)}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default JobDetails;