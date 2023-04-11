import React from 'react';

const SingleCard = ({ Cards }) => {
    const { logo, name, jobs_available } = Cards;
    return (
        <> <br />
            <div className='p-9 bg-base-200 mr-5'>
                <div><img src={logo} /></div>
                <h3 className='text-xl font-bold mt-3'>{name}</h3>
                <p className='text-sm text-slate-500'>{jobs_available} Jobs Available</p>
            </div>
        </>
    );
};

export default SingleCard;