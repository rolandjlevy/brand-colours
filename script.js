const brandColours = {
  orange: '#ff5100',
  blue: '#1c355e',
  darkGrey: '#758592',
  grey: '#d8dfe1',
  lightGrey: '#f2f2f2',
  white: '#ffffff'
};

const defaultColours = {
  black: '#1e1e1e',
  deepGrey: '#4a4a4a',
  midDarkGrey: '#7e7e7e',
  midGrey: '#aaaaaa',
  borderGrey: '#c4c4c4',
  green: '#345920',
  midGreen: '#4caf50',
  lightBlue: '#1976d2',
  red: '#d32f2f'
};

const createColourCell = (colourName, colourValue) => {
  const cell = document.createElement('div');
  cell.className = 'colour-cell';
  cell.style.backgroundColor = colourValue;
  const nameSpan = document.createElement('span');
  nameSpan.className = 'colour-name';
  nameSpan.textContent = `${colourName}: ${colourValue}`;
  cell.appendChild(nameSpan);
  return cell;
};

const renderColourGrid = (id, colours) => {
  const grid = document.getElementById(id);
  Object.entries(colours).forEach(([name, colour]) => {
    const colourCell = createColourCell(name, colour);
    grid.appendChild(colourCell);
  });
};

renderColourGrid('brandColourGrid', brandColours);

renderColourGrid('defaultColourGrid', defaultColours);
