const CHART = document.getElementById('rushChart');

let pieChart = new Chart(CHART,{
    type: 'pie',
    data: {
        labels: ['Clyde Edwards-Helaire', "Le'Veon Bell", 'Patrick Mahomes', 'Darrel Williams', 'Tyreek Hill','Darwin Thompson','Mecole Hardman','Anthony Sherman','DeAndre Washington','Sammy Watkins','Chad Henne'],
        datasets: [{
           label: 'Chiefs 2020 Rushing Yard Leaders',
            data: [803, 254, 308, 169, 123,97,31,8,5,3,-2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

