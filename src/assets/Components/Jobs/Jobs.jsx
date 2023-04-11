import React from 'react';
import vector from "../../All Images/Vector-1.png"
import vector2 from "../../All Images/Vector.png"

const Jobs = () => {
    return (
        <div>
            <div className="flex md:justify-between bg-">
                <div>
                    <img src={vector2} alt="" />
                </div>
                <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600 text-3xl font-bold	lg:mt-20 lg:mr-14">
                    Applied Jobs
                </h2>
                <div>
                    <img src={vector} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Jobs;