const CHARTS = document.getElementById('rushingAttempChart');

let rushingAttempChart = new Chart(CHARTS,{
    type: 'line',
    data: {
        labels: ['Clyde Edwards-Helaire','LeVeon Bell','Patrick Mahomes','Darrel Williams','Darrel Williams','Tyreek Hill','Chad Henne',
        'Chad Henne','Anthony Sherman','DeAndre Washington','Sammy Watkins'],
        datasets: [{
          label: 'Chiefs 2020 Season Rushing Attempt Leaders',
          data: [181, 63, 62, 39, 27, 13, 7, 4,3,3,1],
          fill: false,
          borderColor: 'red',
          tension: 0.1
        }]
    }
});

