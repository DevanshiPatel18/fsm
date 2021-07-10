import { blue, green, orange } from '@material-ui/core/colors';
import {Doughnut, Chart} from 'react-chartjs-2';
import useWorsktationTimeAnalytics from './workstationTimeAnalysis';

export default function DonutGraph(){

 const {workstation1Time, workstation2Time, workstation3Time} = useWorsktationTimeAnalytics();

const data = {
    height: 40+'vh',
    labels: [
      'Workstation 1',
      'Workstation 2',
      'Workstation 3'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [workstation1Time.time, workstation2Time.time, workstation3Time.time],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 2,
      
    }]
  };  
  const config = {
     
    reponsive: true,
    maintainAspectRatio: false,
    elements: {
        arc: {
            radius: 2
        }
    },
      scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
      },
      interaction: {
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontSize: 0.1+'vw',
            color: 'hsl(238, 61%, 19%)',
            font: '"Baloo Da 2", cursive'
          }
        }
      },tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            //get the concerned dataset
            var dataset = data.datasets[tooltipItem.datasetIndex];
            //calculate the total of this data set
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            //get the current items value
            var currentValue = dataset.data[tooltipItem.index];
            //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
      
            return percentage + "%";
          }
        }
      } 
  };

  


      return(
          <div style={{}}>
          <Doughnut data={data} options = {config}/>
          </div>
      )
  }