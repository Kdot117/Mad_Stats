const CHARTPIE = document.getElementById('multiPie');

let multiPie = new Chart(CHARTPIE,{
    type: 'line',
    data: {
        labels: ['Kansas City Chiefs','Tampa Bay Buccaneers','Buffalo Bills','Houstan Texans','Atlanta Falcons','Los Angeles Chargers','Los Angeles Chargers','Dallas Cowboys','Green Bay Packers','Green Bay Packers','Indianapolis Colts','San Francisco 49ers','Los Angeles Rams','Minnesota Vikings','Pittsburgh Steelers','Pittsburgh Steelers','	Arizona Cardinals','Carolina Panthers','New Orleans Saints','Miami Dolphins'],
        datasets: [{
          label: 'NFL 2020 Season Passing leaders ',
          data: [4854,4626, 4620, 4620,4538,4363, 4329,4217, 4161,4106,4104,4053,4053,4014,4009,4003,3941,3916,3888,3758,3736],
          backgroundColor: [
            'rgb(201, 226, 190)','rgb(159, 59, 33)', 'rgb(192, 42, 154)','rgb(15,177,121)','rgb(54,68,186)','rgb(232,48,179)', 'rgb(150, 147, 52)','rgb(48, 212, 48)','rgb(228, 184, 64)',
            'rgb(175, 167, 8)','rgb(74, 235, 124)','rgb(135, 211, 250)', 'rgb(158, 178, 44)',  'rgb(40, 8, 18)','rgb(34, 203, 199)','rgb(18, 104, 138)', 'rgb(241, 78, 175)','rgb(197, 204, 38)',
            'rgb(6, 66, 176)','rgb(32, 188, 204)'],
          hoverOffset: 4
        }]
    }
});

