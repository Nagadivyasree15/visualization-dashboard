import React from 'react';
import { Chart } from 'react-google-charts';


function RegionChart({data}) {
    const chartData = [['Topic', 'Intensity', 'Likelihood', 'Relevance']];
    const filteredData = data.filter((ele) => ele.region.length > 0);
  
    filteredData.slice(100,110).forEach(item => {
      const {
        intensity,
        likelihood,
        relevance,
        region,
      } = item;
  
      chartData.push([region, intensity, likelihood, relevance]);
    });

    return(
      <div>
        {chartData.length > 1 ? <Chart
        width={'100%'}
        height={'400px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
            title: 'Region Data',
            hAxis: { title: 'Region',},
            vAxis: {title: 'Value'},
            seriesType :"bars",
            }}
          /> :<></>}
        </div>
    )

}

export default RegionChart;