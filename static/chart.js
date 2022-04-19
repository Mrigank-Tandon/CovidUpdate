function show() {
            var conf_case = document.getElementById('conf').getContext('2d');
            var active_case = document.getElementById('active').getContext('2d');
            var recovered = document.getElementById('recovered').getContext('2d');
            var death = document.getElementById('death').getContext('2d');
            //Confirm cases chart
            var chart = new Chart(conf_case, {
                      type: 'line',
                      data: {
                             labels: date,
                             datasets: [{
                                label: 'Confirmed Cases',
                                backgroundColor: '',
                                borderColor: 'orange',
                                data: conf,
                                }]
                             },
                      options: {}
                                         });
            //active cases chart
            var chart = new Chart(active_case, {
                      type: 'line',
                      data: {
                             labels: date,
                             datasets: [{
                                label: 'Active Cases',
                                backgroundColor: '',
                                borderColor: 'blue',
                                data: act,
                                }]
                             },
                      options: {}
                                         });
            //recovered cases chart
            var chart = new Chart(recovered, {
                      type: 'line',
                      data: {
                             labels:date,
                             datasets: [{
                                label: 'Recovered Cases',
                                backgroundColor: '',
                                borderColor: 'green',
                                data:rec,
                                }]
                             },
                      options: {}
                                         });
            //death chart
            var chart = new Chart(death, {
                      type: 'bar',
                      data: {
                             labels:date,
                             datasets: [{
                                label: 'Death Cases',
                                backgroundColor: '',
                                borderColor: 'red',
                                data:dth,
                                }]
                             },
                      options: {}
                                         });
}