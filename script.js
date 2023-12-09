document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('btn');
    let tbody = document.getElementById('tbody');

    addButton.addEventListener('click', function() {
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let color = document.getElementById('color').value;
        let type = document.querySelector('input[name="radio3"]:checked');

        if (title && author && color && type) {
            let newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${type.value}</td>
            `;
            tbody.appendChild(newRow);
        }
    });
});
