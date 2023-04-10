import React from 'react';
import SingleCard from '../SingleCard/SingleCard';

const HomePage = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='items-center justify-center mt-14 p-16'>
                    <h1 className='text-9xl font-bold '> One Step <br /> Closer To Your <br /> Dream Job</h1><br />
                    <p className='text-slate-400 font-medium mb-5 '>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p><br />
                    <button className="btn btn-accent">Get Stared</button>
                </div>
                <div>
                    <img src="https://www.rktt.pl/wp-content/uploads/2019/02/businessman.png" alt="" />
                </div>
            </div><br /><br /><br />
            <div>
                <h1 className='text-5xl text-center font-bold hover:text-purple-500 duration-200'>Job Category List</h1>
                <p className='text-slate-500 text-center mt-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <SingleCard/>
            </div>
        </>
    );
};

export default HomePage;