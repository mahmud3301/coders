import React, { useState, useEffect } from 'react';

const Jobs = () => {
    const [allData, setAllData] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`Job.json`)
            .then(res => res.json())
            .then(data => setAllData(data));
    }, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        let savedData = [];
        if (items) {
            for (const id of items) {
                const finddata = allData.find(data => data.id === id);
                if (finddata) {
                    savedData.push(finddata);
                }
            }
            setJobs(savedData);
        }
    }, [allData]);

    return (
        <div>
            <div className="flex justify-between ">
                <div>
                    <img src="https://i.ibb.co/c3vc2cp/Vector-1.png" alt="" />
                </div>
                <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 lg:mr-14">
                    Applied Jobs
                </h2>
                <div>
                    <img src="https://i.ibb.co/99J32ys/Vector.png" />
                </div>
            </div><br /><br />
            <div className='p-14'>
            <div>
                <div className="flex justify-end mr-20">
                    <div className="dropdown">
                            <label tabIndex={0} className="btn p-3 rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white lg:float-right mt-3 lg:mt-0">Filter By <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
</label>
                            <ul className="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-52">
                                <li><span><a>Remote Job</a></span></li>
                                <li><span><a>Onsite</a></span></li>
                            </ul>
                    </div>
                </div>
            </div>
                {
                    jobs.map(job => <div className='mt-5'>
                        <div
                            key={job.id}
                            className='card w-full border-2 shadow-md hover:shadow-lg bg-base-300 border-indigo-500 pr-5 lg:pr-72'
                        >
                            <div className='p-4 lg:p-12 flex flex-col lg:flex-row items-center'>
                                <div>
                                    <img className='mt-16 lg:mt-0 mr-5' src={job.company_logo} />
                                </div>
                                <div className='ml-0 lg:ml-5 flex-grow mt-5 lg:mt-0'>
                                    <h2 className='text-2xl card-title'>{job.job_title}</h2>
                                    <p className='text-xl text-slate-500'>{job.company_name}</p>
                                    <div className='lg:flex mt-2'>
                                        <h1 className='text-xl font-bold p-3 bg-slate-400 rounded-md mr-5 bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 border-purple-400 border-2'>
                                            {job.remote_or_onsite}
                                        </h1>
                                        <h1 className='text-xl font-bold p-3 bg-slate-400 rounded-md bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 border-purple-400 border-2 mt-3 lg:mt-0'>
                                            {job.fulltime_or_parttime}
                                        </h1>
                                    </div>
                                    <div className='lg:flex mt-5'>
                                        <div className='flex items-center mr-3 mb-2 lg:mb-0'>
                                            <img className='mr-2' src="https://i.ibb.co/3SKm3gn/Frame-4.png" />
                                            <p className='text-slate-500'>{job.location}</p>
                                        </div>
                                        <div className='flex items-center ml-3'>
                                            <img className='mr-3' src="https://i.ibb.co/fSMRp4d/Frame.png" />
                                            <p className='text-slate-500'>Salary : {job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 lg:mt-0 lg:text-center'>
                                    <button className='p-3 rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white lg:float-right mt-3 lg:mt-0'>
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Jobs;
