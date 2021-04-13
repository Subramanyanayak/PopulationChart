import React, { useState } from 'react'
import '../../src/summary.css';
import { Bar } from 'react-chartjs-2';
import posts from '../../src/db.json'

function Summmary() {
  const [data,setData] = useState({labels: posts.countries[0].title,
  datasets: [
    {
      label: 'population',
      data: posts.population,
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }
  ]
})
  return (
    <div className="summary">
      <div className="summaryconatiner">
      <Bar
        data={data}
        options={{ 
          title: {
            display:true,
            text: 'Population Chart',
            fontSize:25
          },
          legend: {
            display:true,
            position:'bottom'
          }
         }}
      />
      </div>
    </div>
  );
}

export default Summmary;
