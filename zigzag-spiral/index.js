function zigzag(root) {
  let result = [];

  const lot = (root, level) => {
    if (!root) return;

    // Main logic
    if (result[level]) result[level].push(root.val);
    else result[level] = [root.val];

    lot(root.left, level + 1);
    lot(root.right, level + 1);
  };
  lot(root, 0);
  return result.map((b, index) => (index % 2 ? b.reverse() : b));
}

const result = zigzag([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
