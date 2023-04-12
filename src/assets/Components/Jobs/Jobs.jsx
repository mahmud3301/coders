// import React, { useState,useEffect } from 'react';

// const Jobs = () => {
//     const [allData, setAllData] = useState([]);
//     const [jobs, setJobs] = useState([]);
//     useEffect(() => {
//         fetch(`Job.json`)
//             .then(res => res.json())
//             .then(data => setAllData(data))
//     }), [];
//     useEffect(() => {
//         const items = JSON.parse(localStorage.getItem('data'));
//         let savedData = [];
//         if (items){
//             for (const id of items){
//                 const finddata = allData.find(data => data.id === id);
//                 if (finddata){
//                     savedData.push(finddata);
//                 }
//             }
//             setJobs(savedData);
//         }
//     }), [allData];

//     return (
//         <div>
//             <div className="flex md:justify-between bg-">
//                 <div>
//                     <img src="https://i.ibb.co/c3vc2cp/Vector-1.png" alt="" />
//                 </div>
//                 <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 lg:mr-14">
//                     Applied Jobs
//                 </h2>
//                 <div>
//                     <img src="https://i.ibb.co/99J32ys/Vector.png" alt="" />
//                 </div>
//             </div><br /><br />
//             <div>
//                 <p className='text-xl font-bold text-center'>length: {jobs.length}</p>
//                 <p className='text-xl font-bold text-center'>length: {jobs.location}</p>
//                 <p className='text-xl font-bold text-center'>length: {jobs.length}</p>
//             </div>
//         </div>
//     );
// };

// export default Jobs;
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
            <div className="flex md:justify-between bg-">
                <div>
                    <img src="https://i.ibb.co/c3vc2cp/Vector-1.png" alt="" />
                </div>
                <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 lg:mr-14">
                    Applied Jobs
                </h2>
                <div>
                    <img src="https://i.ibb.co/99J32ys/Vector.png" alt="" />
                </div>
            </div><br /><br />
            <div>
                <p className='text-xl font-bold text-center'>length: {jobs.length}</p>
                {jobs.map(job => (
                    <div key={job.id}>
                        <p className='text-xl font-bold text-center'>{job.title}</p>
                        <p className='text-xl font-bold text-center'>{job.location}</p>
                        <p className='text-xl font-bold text-center'>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
