const inventory = [
    { id: '#VA-9021', title: 'Untitled 4 - Rothko', status: 'In Transit', value: 4500000 }
];

const addItemBtn = document.getElementById('add-item-btn');
const tableBody = document.querySelector('#inventory-table tbody');
const totalCountDisplay = document.getElementById('total-count');
const totalValueDisplay = document.getElementById('total-value');

function renderTable() {
    tableBody.innerHTML = '';
    inventory.forEach(item => {
        const row = `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td><span class="status-tag">${item.status}</span></td>
            <td>$${item.value.toLocaleString()}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
    
    // JUNIOR DEV BUG: The counter updates, but the total value stays at zero because the logic is missing.
    totalCountDisplay.innerText = inventory.length;
}

addItemBtn.addEventListener('click', () => {
    const newItem = {
        id: `#VA-${Math.floor(Math.random() * 9000) + 1000}`,
        title: 'New Acquisition - Unknown',
        status: 'Processing',
        value: 1250000
    };
    
    inventory.push(newItem);
    renderTable();
});

// TODO: Implement search filter logic
// TODO: Add a modal to allow custom name and value for new assets

renderTable();