const CHART = document.getElementById('lineChart');

let lineChart = new Chart(CHART,{
    type: 'line',
    data: {
        labels: ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7',
        'Week 8','Week 9','Wk 10','Wk 11','Wk 12','Wk 13','Wk 14','Wk 15',
        'Wk 16','Wk 17','Wk 18'],
        datasets: [{
          label: 'Chiefs 2020 Season Final Score Line Chart',
          data: [34, 23, 34, 26, 32, 26, 43,35,33,0,35,27,22,33,32,38,31],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.0
        }]
    }
});

