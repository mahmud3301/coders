import React from 'react';
import Account from '../../Icons/accounts 1.png'

const SingleCard = () => {
    return (
        <>
            <div className='flex justify justify-center mx-auto mt-9'>
                <div className='p-9 bg-base-200 mr-5'>
                    <div><img src={Account} /></div>
                    <h3 className='text-xl font-bold mt-3'>Account & Finance</h3>
                    <p className='text-sm text-slate-500'>300 Jobs Available</p>
                </div>
                <div className='p-9 bg-base-200 mr-5'>
                    <div><img src={Account} /></div>
                    <h3 className='text-xl font-bold mt-3'>Account & Finance</h3>
                    <p className='text-sm text-slate-500'>300 Jobs Available</p>
                </div>
                <div className='p-9 bg-base-200 mr-5'>
                    <div><img src={Account} /></div>
                    <h3 className='text-xl font-bold mt-3'>Account & Finance</h3>
                    <p className='text-sm text-slate-500'>300 Jobs Available</p>
                </div>
                <div className='p-9 bg-base-200 mr-5'>
                    <div><img src={Account} /></div>
                    <h3 className='text-xl font-bold mt-3'>Account & Finance</h3>
                    <p className='text-sm text-slate-500'>300 Jobs Available</p>
                </div>
            </div>
        </>
    );
};

export default SingleCard;