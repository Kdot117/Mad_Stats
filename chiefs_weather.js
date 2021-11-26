const CHARTS = document.getElementById('WeatherlineChart');

let lineChart = new Chart(CHARTS,{
    type: 'line',
    data: {
        labels: ['Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7',
        'Week 8','Week 9','Wk 10','Wk 11','Wk 12','Wk 13','Wk 14','Wk 15',
        'Wk 16','Wk 17'],
        datasets: [{
          label: 'Chiefs 2020 Season Temperature by Game',
          data: [58, 0, 72, 70, 77, 50, 14, 46, 68, 0, 0, 80, 38, 80, 0, 49, 36,66],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.0
        }]
    }
});