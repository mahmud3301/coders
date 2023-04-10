import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Hardy from '../../All Images/Hardy.png'
import { useLoaderData } from 'react-router-dom';
import FeatureJobs from '../Feature Job/FeatureJobs';

const HomePage = () => {
    const Cards = useLoaderData();
    const [FeatureJobs,setFeatureJobs] = useState([]);
    useEffect(() => {
        fetch('FeatureJob.json')
        .then(res => res.json())
        .then(data => setFeatureJobs(data))
    })
    return (
        <>
            <div className='lg:flex justify-between bg-slate-200 w-full'>
                <div className='items-center justify-center mt-14 p-9'>
                    <h1 className='text-6xl lg:text-9xl font-bold '> One Step <br />Closer To Your <br /><span className='bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600'>Dream Job</span></h1><br />
                    <p className='text-slate-400 font-medium mb-5 '>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p><br />
                    <button className="btn btn-ghost bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white"><a href="/Jobs">Get Stared</a></button>
                </div>
                <div>
                    <img src={Hardy} />
                </div>
            </div><br /><br /><br />
            <div>
                <h1 className='text-5xl text-center font-bold hover:text-purple-500 duration-200'>Job Category List</h1>
                <p className='text-slate-500 text-center mt-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:flex grid justify-center mx-auto mt-9'>
                {
                    Cards.map(card => <SingleCard key={card.id} Cards={card} className="flex" ></SingleCard>)
                }
            </div><br /><br /><br />
            <div>
                <h1 className='text-5xl text-center font-bold hover:text-purple-500 duration-200'>Featured Jobs</h1>
                <p className='text-slate-500 text-center mt-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:flex grid justify-center mx-auto mt-9'>
                {
                    FeatureJobs.map(FeatureJob => <FeatureJobs key={FeatureJob.id} FeatureJob={FeatureJob}></FeatureJobs>)
                }
            </div>
        </>
    );
};

export default HomePage;