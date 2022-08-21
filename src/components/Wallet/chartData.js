export const chartData ={
    series: [{
      name: 'series1',
      data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55]
    }, {
      name: 'series2',
      data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45]
    }],
    options: {
      chart: {
        height: 240,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'category',
        low: 0,
        offsetX: 0,
        offsetY: 0,
        show: true,
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          low: 0,
          offsetX: 0,
          show: true,
        },
        axisBorder: {
          low: 0,
          offsetX: 0,
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      markers: {
        //strokeWidth: 3,
        colors: "#ffffff",
        strokeColors: ['#6F74F1', '#A00303'],
        hover: {
          size: 6,
        }
      },
      yaxis: {
        low: 0,
        offsetX: 0,
        offsetY: 0,
        show: true,
        labels: {
          low: 0,
          offsetX: 0,
          show: false,
        },
        axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 10,
          bottom: 5,
          top: -40
        }
      },
      colors: ['#6F74F1', '#A00303'],
      fill: {
        type: 'gradient',
       
      },
      legend: {
        show: false,
      },
      tooltip: {
        x: {
          format: 'MM'
        },
      },
    }
  
  }
  