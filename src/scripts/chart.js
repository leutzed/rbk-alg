import Chart from 'chart.js/auto';


(async function() {
  const labels = ['atumalaca', 'jose', 'luis', 'jose', 'luis', 'jose', 'luis'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5, 6, 7],
        borderColor: '#fff',
      },
      {
        label: 'Dataset 2',
        data: [7, 6, 5, 4, 3, 2, 1],
        borderColor: '#333',
      }
    ]
  };

  new Chart(
    document.getElementById('chart'),
    {
      type: 'line',
      data: data,
    }
  );
})();