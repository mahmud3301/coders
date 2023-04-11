import React from 'react';
import location from '../../Icons/Frame-4.png'
import frame from '../../Icons/Frame.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureJobs = ({ featureJobs }) => {
    const [showAll, setShowAll] = useState(false);
    const hnadleShowAll = () => {
        setShowAll(true);
    };
    // console.log(featureJobs);
    return (
        <>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        featureJobs.slice(0, showAll ? 6 : 4).map(featureJob => <div key={featureJob.id} className="card w-full border-2 shadow-md hover:shadow-lg border-indigo-500 pr-72">
                            <div className="card-body">
                                <img className='lg:w-[116.69px] lg:h-[39.98px]' src={featureJob.company_logo} alt="" /><br />
                                <h2 className="card-title">{featureJob.job_title}</h2>
                                <p>{featureJob.company_name}</p>
                                <div className='lg:flex mt-2'>
                                    <h1 className='text-xl font-bold p-3 bg-slate-400 rounded-md mr-5 bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 border-purple-400 border-2'>{featureJob.remote_or_onsite}</h1>
                                    <h1 className='text-xl font-bold p-3 bg-slate-400 rounded-md bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 border-purple-400 border-2'>{featureJob.fulltime_or_parttime}</h1>
                                </div>
                                <div className='flex justify-between mt-3'>
                                    <div className='flex mr-3'>
                                        <img className='mr-2' src={location} />
                                        <p>{featureJob.location}</p>
                                    </div>
                                    <div className='flex mr-3 ml-9'>
                                        <img className='mr-3' src={frame} />
                                        <p>Salary : {featureJob.salary}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-start mt-4">
                                    <Link to={`/featureJobs/${featureJobs.id}`}><button className="p-5 rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white" >View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                {!showAll && (
                    <span onClick={hnadleShowAll}>
                        <div className='text-center mt-7'>
                            <button className="p-5 rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white">See All Jobs</button>
                        </div>
                    </span>
                )}
            </div>
        </>
    );
};

export default FeatureJobs;