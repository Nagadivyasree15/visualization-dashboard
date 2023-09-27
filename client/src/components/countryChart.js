import React from 'react';
import { Chart } from 'react-google-charts';


function CountryChart({data}) {
    const chartData = [['Country', 'Intensity', 'Likelihood', 'Relevance']];
    const filteredData = data.filter((ele) => ele.country.length > 0);
  
    filteredData.slice(11,21).forEach(item => {
      const {
        intensity,
        likelihood,
        relevance,
        country,
      } = item;
  
      chartData.push([country, intensity, likelihood, relevance]);
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
            title: 'Country Data',
            hAxis: { title: 'Country',},
            vAxis: {title: 'Value'},
            seriesType :"bars",
            }}
          /> :<></>}
        </div>
    )

}

export default CountryChart;