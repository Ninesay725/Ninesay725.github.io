document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.post-content');
    if (!content) return;

    fetch('/data/bangumis.json')
        .then(response => response.json())
        .then(data => {
            let html = '<div class="bangumi-list">';
            data.forEach(item => {
                html += `
                    <div class="bangumi-item">
                        <img class="bangumi-picture" src="${item.cover}" alt="${item.title}">
                        <div class="bangumi-info">
                            <div class="bangumi-title">${item.title}</div>
                            <div class="bangumi-status">${item.status}</div>
                            <div class="bangumi-progress">${item.progress}</div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            content.innerHTML += html;
        })
        .catch(error => console.error('Error:', error));
});