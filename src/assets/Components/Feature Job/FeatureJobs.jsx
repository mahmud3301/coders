import React from 'react';

const FeatureJobs = ({ FeatureJob }) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <p className='text-9xl'>{FeatureJob.job_title}</p>
                <p>{FeatureJob.educational_requirements}</p>
            </div>
        </>
    );
};

export default FeatureJobs;