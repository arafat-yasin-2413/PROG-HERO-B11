import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data
    // console.log(marksData);


    // data processing for the charts
    const marksChartData = marksData.map(studentData => {
        const student = {
            id : studentData.student_id,
            name : studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const avg = ( student.physics + student.chemistry + student.math ) / 3;
        student.avg = avg;
        return student;
    } )

    console.log(marksChartData);
    
    return (
        <div>

            <BarChart width={500} height={300} data={marksChartData}>

                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

                <Tooltip></Tooltip>
                <Legend></Legend>

                <Bar dataKey={"avg"} fill='red'></Bar>
                <Bar dataKey={"chemistry"} fill='green'></Bar>

            </BarChart>
            
        </div>
    );
};

export default MarksChart;