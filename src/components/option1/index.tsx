import "../../App.scss"
// import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { useState } from "react";
import { useSelector } from "react-redux";
import PieChart from "../charts/PieChart";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, registerables } from 'chart.js'
import BarChart from "../charts/BarChart";
// import { Chart } from "chart.js/auto"
Chart.register(ArcElement, CategoryScale, LinearScale, ...registerables);





export default function Option1() {


    const { stats } = useSelector((state: any) => state.data)

    const [chartData, setChartData] = useState({
        labels: stats.map((stat: any) => stat.id),
        datasets: [
            {
                label: "Users Gained ",
                data: stats.map((stat: any) => stat.id),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    return (

        <div className="option1">
            <p>Option1</p>
            {/* <PieChart chartData={chartData} /> */}
            <BarChart chartData={chartData} />
        </div>

    )


}