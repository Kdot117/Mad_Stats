const CHART = document.getElementById('lineChart');

let lineChart = new Chart(CHART,{
    type: 'line',
    data: {
        labels: ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7',
        'Week 8','Week 9','Wk 10','Wk 11','Wk 12','Wk 13','Wk 14','Wk 15',
        'Wk 16','Wk 17'],
        datasets: [{
          label: 'Giants 2020 Season Final Score Line Chart',
          data: [16, 13, 9, 9, 34, 20, 21, 23, 23, 27, 0, 19, 17, 7, 6, 13, 23],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.0
        }]
    }
});

