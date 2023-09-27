import React from 'react';
import { Chart } from 'react-google-charts';


function TopicChart({data}) {
    const chartData = [['Topic', 'Intensity', 'Likelihood', 'Relevance']];
    const filteredData = data.filter((ele) => ele.topic.length > 0);
  
    filteredData.slice(501,511).forEach(item => {
      const {
        intensity,
        likelihood,
        relevance,
        topic,
      } = item;
  
      chartData.push([topic, intensity, likelihood, relevance]);
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
            title: 'Topic Data',
            hAxis: { title: 'Topic',},
            vAxis: {title: 'Value'},
            seriesType :"bars",
            }}
          /> :<></>}
        </div>
    )

}

export default TopicChart;