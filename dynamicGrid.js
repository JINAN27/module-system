
 export class DynamicGrid {
    generateGrid(containerId, data, columns) {

      const container = document.getElementById(containerId);

      const table = document.createElement('table');
      table.classList.add('table');
      table.classList.add('table-striped');

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);


      const tbody = document.createElement('tbody');
      data.forEach(rowData => {
        const row = document.createElement('tr');
        columns.forEach(column => {
          const cell = document.createElement('td');
          cell.textContent = rowData[column] || '';
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);


      container.innerHTML = '';
      container.appendChild(table);
    }
  }

  const gridContainerId = 'gridContainer';
  const data = [
    { id: 1, name: 'Jinan', age: 22 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 }
  ];
  const columns = ['id', 'name', 'age'];


  const grid = new DynamicGrid();


  grid.generateGrid(gridContainerId, data, columns);

