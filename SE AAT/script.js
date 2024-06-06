document.addEventListener('DOMContentLoaded', function() {
    // Example data - replace with actual data fetching
    const totalWaste = 5000;
    const wasteSegregated = 75; // in percentage
    const sanitizationEvents = 20;

    document.getElementById('total-waste').innerText = totalWaste;
    document.getElementById('waste-segregated').innerText = `${wasteSegregated}%`;
    document.getElementById('sanitization-events').innerText = sanitizationEvents;

    // Chart.js for visualizing waste data
    const ctx = document.getElementById('wasteChart').getContext('2d');
    const wasteChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Segregated', 'Unsegregated'],
            datasets: [{
                label: 'Waste Segregation',
                data: [wasteSegregated, 100 - wasteSegregated],
                backgroundColor: ['#4CAF50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20
                }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom'
                }
            }
        }
    });

    // Initialize map (using Leaflet for simplicity)
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('Automated Public Toilet')
        .openPopup();
});
