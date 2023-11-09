import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


function PieChartComponent() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10},
            { id: 1, value: 15},
            { id: 2, value: 20},
            { id: 3, value: 20},
          ],
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },    
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      width={300}
      height={300}
    />
  )
}

export default PieChartComponent