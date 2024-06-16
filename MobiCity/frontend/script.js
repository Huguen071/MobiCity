document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const reportsList = document.getElementById('reports-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const location = document.getElementById('location').value;

        const report = {
            title,
            description,
            location,
            date: new Date().toLocaleString()
        };

        addReportToList(report);
        form.reset();
    });

    function addReportToList(report) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${report.title}</h3>
            <p><strong>Descrição:</strong> ${report.description}</p>
            <p><strong>Localização:</strong> ${report.location}</p>
            <p><small>${report.date}</small></p>
        `;
        reportsList.appendChild(li);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const reportsList = document.getElementById('reports-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const location = document.getElementById('location').value;

        const token = localStorage.getItem('token');

        const response = await fetch('/api/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({ title, description, location })
        });

        const report = await response.json();
        addReportToList(report);
        form.reset();
    });

    async function loadReports() {
        const response = await fetch('/api/reports');
        const reports = await response.json();
        reports.forEach(addReportToList);
    }

    function addReportToList(report) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${report.title}</h3>
            <p><strong>Descrição:</strong> ${report.description}</p>
            <p><strong>Localização:</strong> ${report.location}</p>
            <p><small>${report.date}</small></p>
        `;
        reportsList.appendChild(li);
    }

    loadReports();
});
