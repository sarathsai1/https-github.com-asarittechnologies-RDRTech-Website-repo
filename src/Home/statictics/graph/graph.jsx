import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ['project', 'clients', 'Active Projects', 'Aproved Projects',];
const labels1 = ['project', 'clients',];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: ["#55c083", 'yellow', '#f7511c', 'green'],

            data: [15, 5, 5, 6],


        },

    ],
};
const data1 = {
    labels: labels1,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: ["#55c083", 'yellow',],

            data: [20, 10],


        },

    ],
};
const PieChart = () => {
    return (
        <div className="container  ">
            <div className=" progress-staticstic text-center ">
                
                <div className="data-graph" >
                    <div className="dat-1"  >
                        <Pie data={data} className="pie-graph" />
                    </div>
                    <div className="dat-2 ">
                      <h1>Welcome to our RDRTech overview page!</h1>
                      <p className="fs-5"> Below, you'll find a visual representation of our current project status, including active projects, active plans, and a breakdown of projects and clients.</p>
                </div>
                </div>
            </div>
            
        </div>
    );
};
export default PieChart;