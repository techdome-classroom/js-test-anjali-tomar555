const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) {
    return 0;
}

const rows = grid.length;
const cols = grid[0].length;
let islands = 0;

const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 'L') {
        return;
    }

    grid[i][j] = '#'; // Mark as visited

    // Explore adjacent cells
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
};

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 'L') {
            dfs(i, j);
            islands++;
        }
    }
}

return islands;

};

module.exports = getTotalIsles;
