import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Statistic.css'



const Statistic = () => {
   const statistic = useLoaderData().data
  //  const [name, total] = statistic

  // console.log(name.name)
  // console.log(total.total)
    console.log(statistic)

   

  return (
  
   <div className="container my-5">
    <h1>Statistic </h1>
    <ResponsiveContainer width="95%" height={400}>
  
        <LineChart
          width={1000}
          height={500}
          data={statistic}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='name' stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />

      
        </LineChart>


        </ResponsiveContainer>
 
  
        </div>
  )
};

export default Statistic;
