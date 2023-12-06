import React from 'react'
import { Line } from 'react-chartjs-2'
export default function LineChart({ chartData,lineColor }) {
    return (
        <Line
            data={chartData}
            options={{
                // color: "white",
                borderColor: lineColor,
                scales: {
                    maintainAspectRatio: false,
                    x: {
                        grid: {
                            color: "#000000"
                        },
                        ticks: {
                            // beginAtZero: true,
                            color: '#000',
                            fontSize: 12,
                        }
                    },
                    y:{
                        grid: {
                            color: "#000000"
                        },
                        ticks: {
                            color: '#000',
                            fontSize: 12,
                            stepSize:25
                        }
                    },

                },
            }}
        ></Line>
    )
}
