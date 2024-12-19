let cellSize = 20;

let cols;
let rows;

let grid = [];
let newGen = [];

function setup() {
	createCanvas(500, 500);

	cols = width / cellSize;
	rows = height / cellSize;

	for (let i = 0; i < cols; i++)
	{
		newGen[i] = [];
		for (let j = 0; j < rows; j++)
		{
			newGen[i][j] = random(0, 1) < 0.5 ? false : true;
		}
	}

	grid = newGen;
}

function draw() {
	background(255);

	// Draw
	for (let i = 0; i < cols; i++)
	{
		for (let j = 0; j < rows; j++)
		{		
			if (grid[i][j])
				fill(0);
			else
				fill(255);

			rect(i*cellSize, j*cellSize, i*cellSize + cellSize, j*cellSize + cellSize);
		}
	}
	
	// Update
	newGen = [];
	for (let i = 0; i < cols; i++)
	{
		newGen[i] = []
		for (let j = 0; j < rows; j++)
		{
			let neighbors = 0;

			for (let x = -1; x <= 1; x++)
			{
				for (let y = -1; y <= 1; y++)
				{
					if (x == 0 && y == 0)
						continue;

					let dx = (i + x + cols) % cols;
					let dy = (j + y + rows) % rows;

					neighbors += grid[dx][dy] ? 1 : 0;
				}
			}

			if (grid[i][j])
				newGen[i][j] = (neighbors == 2 || neighbors == 3);
			else
				newGen[i][j] = (neighbors == 3);
		}
	}

	grid = newGen;
}



















