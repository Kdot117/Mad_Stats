const CHARTS = document.getElementById('receivingChart');

let receivingChart = new Chart(CHARTS,{
type: 'bar',
 data: {
  labels: ['Travis Kelce','Tyreek Hill','Demarcus Robinson','Mecole Hardman','Sammy Watkins','Clyde Edwards-Helaire','Darrel Williams','LeVeon Bell','Byron Pringle','Deon Yelder','Darwin Thompson','Nick Keizer','Gehrig Dieter','DeAndre Washington','Anthony Sherman','Marcus Kemp','Eric Fisher','Ricky-Seals-Jones','Patrick Mahomes'],
  datasets: [{
    indexAxis: 'y',
    label: 'Chiefs 2020 Season Receiving Yards Bar Graph',
    data: [1416,1276,560,466,421,297,160,116,99,65,63,36,11,10,5,2,2,0,0],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  
}]
}
});