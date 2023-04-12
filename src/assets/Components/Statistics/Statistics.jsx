import React from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Line } from 'recharts';

const Statistics = () => {
    const data = [
        { name: 'Assignment 01', marks: '59' },
        { name: 'Assignment 02', marks: '58' },
        { name: 'Assignment 03', marks: '60' },
        { name: 'Assignment 04', marks: '60' },
        { name: 'Assignment 05', marks: '59' },
        { name: 'Assignment 06', marks: '60' },
        { name: 'Assignment 07', marks: '60' },
    ];

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <ComposedChart width={1200} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;