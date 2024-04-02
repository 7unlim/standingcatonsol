import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);

const CustomPieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 60, // Increased tilt angle for a more dramatic 3D effect
        beta: 0,
        depth: 150, // Increased depth for thicker slices, enhancing the 3D look
      },
      backgroundColor: 'transparent',
      height: 500,
      style: {
        fontFamily: "'Chewy', sans-serif", // Set the font family to 'Chewy'
      }
    },
    title: {
      text: '',
      style: {
        color: '#333333',
        fontWeight: 'bold',

      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 45, // Additional depth for each slice
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: '#333333', // Dark text for readability
            fontSize: '18px' // Increase the font size
          }
        },
        borderWidth: 2, // Thicker borders for definition
        borderColor: 'black',
        shadow: true, // Simple shadow for depth
        states: {
          hover: {
            halo: {
              size: 10 // Halo effect size on hover to make slices pop
            }
          }
        }
      },
    },
    series: [{
      name: 'Distribution',
      data: [
        { name: 'For the People!', y: 75, color: '#5DA9E9' },
        { name: 'Team', y: 14, color: '#E5AA70' },
        { name: 'Marketing', y: 3, color: '#F7CAC9' },
        { name: 'Airdrop to Coin Owners', y: 8, color: '#9E7BFF' },
      ],
    }],
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemStyle: {
        fontWeight: 'bold',
        color: '#333333'
      }
    },
    tooltip: {
        enabled: false // Disables the tooltip
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="highcharts-custom" style={{ width: '900px', height: '700px' }}>
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
        />
    </div>
  );
};

export default CustomPieChart;
