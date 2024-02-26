import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [
    {name: 'Assignment-1', uv: 40, pv: 2400, amt: 2400},
    {name: 'Assignment-2', uv: 50, pv: 2400, amt: 2400},
    {name: 'Assignment-3', uv: 30, pv: 2400, amt: 2400},
    {name: 'Assignment-4', uv: 15, pv: 2400, amt: 2400},
    {name: 'Assignment-5', uv: 20, pv: 2400, amt: 2400},
    {name: 'Assignment-6', uv: 30, pv: 2400, amt: 2400},
    {name: 'Assignment-7', uv: 25, pv: 2400, amt: 2400},
    {name: 'Assignment-8', uv: 30, pv: 2400, amt: 2400},
];
const Statices = () => {

    return (
        <div>
            <h2>This is my Optaing  Assignment Mark!</h2>
            <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
        </div>
    );
};

export default Statices;