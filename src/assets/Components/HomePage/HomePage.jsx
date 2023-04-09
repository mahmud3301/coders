import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='items-center justify-center mt-14 p-16'>
                    <h1 className='text-5xl font-bold '> One Step <br /> Closer To Your <br /> Dream Job</h1><br />
                    <p className='text-slate-400 font-medium mb-5 '>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p><br />
                    <button className="btn btn-accent">Get Stared</button>
                </div>
                <div>
                    <img src="https://www.rktt.pl/wp-content/uploads/2019/02/businessman.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;