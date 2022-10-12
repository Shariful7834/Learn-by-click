import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Statistic.css";

const Statistic = () => {
  const statistic = useLoaderData().data;
  const [name, total] = statistic;

  // console.log(name.name)
  // console.log(total.total)
  console.log(statistic);

  return (
<<<<<<< HEAD
  
   
      <div className="container w-100 h-100  mt-5 ">
  
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


=======
    <div className="container  mt-5 ">
      <LineChart width={800} height={330} data={statistic}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="name"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
>>>>>>> 27218b38ebaf59c3105c467c79f2c419c4937585
    </div>
  );
};

export default Statistic;
